# Local-First XLSX PWA Architecture

**Scope:** 100K-row XLSX, column updates only, single user, local-always-wins conflict resolution.

## Principle

```
XLSX file ≠ source of truth
SQLite WASM on OPFS = source of truth
XLSX = import/export artifact
S3/R2 = backup (optional sync)
```

---

## Architecture Overview

```
┌────────────────────────────────────────────┐
│                 PWA (Browser)              │
│                                            │
│  ┌──────────┐    ┌──────────────────────┐  │
│  │ Virtual  │    │   Web Worker (DB)    │  │
│  │  Grid    │◄──►│                      │  │
│  │  (UI)    │    │  SQLite WASM on OPFS │  │
│  └──────────┘    │  (working store)     │  │
│                  └──────────┬───────────┘  │
│                             │              │
│                  ┌──────────▼───────────┐  │
│                  │   Import Worker      │  │
│                  │   XLSX → SQLite      │  │
│                  └──────────────────────┘  │
│                  ┌──────────────────────┐  │
│                  │   Export Worker      │  │
│                  │   SQLite → XLSX      │  │
│                  └──────────────────────┘  │
└────────────────────────────────────────────┘
                         │
                    (optional, when online)
                         ▼
              ┌──────────────────┐
              │  S3 / Cloudflare │
              │  R2 / GCS        │
              │  (backup XLSX)   │
              └──────────────────┘
```

---

## 1. Data Model (SQLite on OPFS)

```sql
CREATE TABLE workbook (
  id INTEGER PRIMARY KEY DEFAULT 1,
  name TEXT,
  row_count INTEGER,
  col_count INTEGER,
  last_synced_at INTEGER,
  dirty INTEGER DEFAULT 0  -- 1 = has unsynced local changes
);

CREATE TABLE sheet (
  id INTEGER PRIMARY KEY DEFAULT 1,
  workbook_id INTEGER,
  name TEXT
);

CREATE TABLE cell_data (
  sheet_id INTEGER NOT NULL,
  row_idx INTEGER NOT NULL,
  col_idx INTEGER NOT NULL,
  value TEXT,
  style TEXT,             -- preserve formatting from original XLSX
  PRIMARY KEY (sheet_id, row_idx, col_idx)
);

CREATE INDEX idx_cell_viewport ON cell_data(sheet_id, row_idx, col_idx);

CREATE TABLE columns (
  sheet_id INTEGER NOT NULL,
  col_idx INTEGER NOT NULL,
  header TEXT,
  width REAL,
  PRIMARY KEY (sheet_id, col_idx)
);
```

`dirty` flag tracks whether local changes exist: 0 = nothing to sync, 1 = push needed.

---

## 2. XLSX Import (Web Worker)

Parse once, never parse again. Use SAX XML parsing — never load full XML into memory.

### Libraries

| Purpose | Library |
|---------|---------|
| ZIP decompression | `@zip.js/zip.js` |
| XML SAX parse | `saxes` |
| SQLite in browser | `sqlite-wasm` (official) |
| Worker communication | `comlink` |

### Flow

```
User selects XLSX
  ↓
Import Worker receives file
  ↓
Unzip → parse sharedStrings.xml (shared string table)
  ↓
Parse styles.xml (preserve for export fidelity)
  ↓
Parse workbook.xml (sheet names, metadata)
  ↓
For each sheet: SAX parse sheet XML row-by-row
  ↓
Batch INSERT into SQLite every 5,000 rows
  ↓
Post progress events to UI
```

### Pseudocode

```ts
async function importXlsx(file: File, db: SQLite) {
  const reader = new ZipReader(new BlobReader(file));
  const entries = await reader.getEntries();

  // 1. Parse shared strings first
  const sharedStrings = await parseSharedStrings(entries);

  // 2. Parse styles
  const styles = await parseStyles(entries);

  // 3. Parse workbook metadata
  const sheets = await parseWorkbookXml(entries);

  // 4. Parse each sheet — stream row by row
  for (const sheet of sheets) {
    const sheetEntry = entries.find(e =>
      e.filename === `xl/worksheets/${sheet.name}.xml`
    );
    const parser = new sax.SAXParser({ xmlns: true });
    let currentRow = 0;
    let batch: any[] = [];
    const BATCH_SIZE = 5000;

    parser.on('opentag', (node) => {
      if (node.name === 'row') currentRow = parseInt(node.attributes.r);
      // collect cell ref + value
    });

    parser.on('text', (text) => {
      // map through sharedStrings if type='s'
    });

    parser.on('closetag', (name) => {
      if (name === 'row') {
        batch.push(...rowBuffer);
        if (batch.length >= BATCH_SIZE) {
          db.exec('BEGIN');
          insertBatch(db, batch);
          db.exec('COMMIT');
          postMessage({ progress: currentRow });
          batch = [];
        }
      }
    });

    const stream = sheetEntry.getData(new TextWriter());
    parser.write(await stream);
    parser.close();
  }
}
```

---

## 3. Rendering 100K Rows

Virtual scroll with viewport queries into local SQLite. Never load the full dataset into JS memory.

### Viewport Query (DB Worker)

```ts
async function getViewport(
  db: SQLite,
  sheetId: number,
  rowStart: number,
  rowEnd: number,
  colStart: number,
  colEnd: number
): Promise<ViewportResponse> {
  const rows = db.exec(`
    SELECT row_idx, col_idx, value
    FROM cell_data
    WHERE sheet_id = ${sheetId}
      AND row_idx BETWEEN ${rowStart} AND ${rowEnd}
      AND col_idx BETWEEN ${colStart} AND ${colEnd}
    ORDER BY row_idx, col_idx
  `);

  // Pivot into row-major for grid
  const rowMap = new Map<number, Record<number, string>>();
  for (const r of rows) {
    if (!rowMap.has(r.row_idx)) rowMap.set(r.row_idx, {});
    rowMap.get(r.row_idx)![r.col_idx] = r.value;
  }

  const totalRows = db.exec(
    `SELECT COUNT(DISTINCT row_idx) FROM cell_data WHERE sheet_id = ${sheetId}`
  )[0][0];

  return { rows: rowMap, totalRows };
}
```

### Grid Library

| Library | Why |
|---------|-----|
| **Glide Data Grid** | Canvas-based, handles 100K+ rows easily, MIT license |
| **AG Grid** (community) | Infinite row model, more Excel-like features |
| **TanStack Virtual + custom** | Most control, but more work |

### Frontend Rules

- Row + column virtualization (only render viewport + buffer)
- All DB work stays inside a Web Worker
- Debounce scroll requests
- Cancel stale viewport requests on fast scroll
- Cache nearby viewport blocks for smooth scrolling

---

## 4. Column Updates

The primary use case. All updates run as SQL batch operations — sub-second on 100K rows.

### Operations

```sql
-- Fill entire column with a value
UPDATE cell_data
SET value = ?
WHERE sheet_id = ? AND col_idx = ?;

-- Clear a column
UPDATE cell_data
SET value = NULL
WHERE sheet_id = ? AND col_idx = ?;

-- Transform column (uppercase, trim, etc.)
UPDATE cell_data
SET value = UPPER(value)
WHERE sheet_id = ? AND col_idx = ?;

-- Update column based on another column
UPDATE cell_data
SET value = (SELECT value FROM cell_data c2
             WHERE c2.sheet_id = c.sheet_id
               AND c2.row_idx = c.row_idx
               AND c2.col_idx = ?)
WHERE sheet_id = ? AND col_idx = ?;
```

### Transaction Pattern

```sql
BEGIN;
-- column update SQL here
UPDATE workbook SET dirty = 1;
COMMIT;
```

After any column operation:
1. Set `dirty = 1` on workbook
2. Refresh viewport for visible area

---

## 5. Export to XLSX (Web Worker)

Regenerate XLSX from SQLite when needed (download or sync push).

### Flow

```
SQLite query rows in chunks of 10,000
  ↓
Build sheet XML incrementally (never full in memory)
  ↓
Rebuild sharedStrings.xml
  ↓
Write all parts into ZIP
  ↓
Return Blob for download/upload
```

### XLSX Structure

```
workbook.xlsx (ZIP)
├── [Content_Types].xml
├── _rels/.rels
├── xl/workbook.xml
├── xl/worksheets/sheet1.xml
├── xl/sharedStrings.xml
└── xl/styles.xml
```

---

## 6. Sync Model

Single user, local always wins. Simplest possible approach.

### State Tracking

- `dirty` flag: 1 = has unsynced local changes
- `last_synced_at`: timestamp of last successful push

### Push (local → cloud)

```
1. If dirty == 0, nothing to do
2. Export XLSX from SQLite
3. Upload to S3 presigned URL
4. Set dirty = 0, last_synced_at = now
```

### Pull (cloud → local, e.g., new device)

```
1. If dirty == 1 → discard cloud version, keep local
2. If dirty == 0 → download cloud XLSX, import into SQLite
3. Set dirty = 0
```

### Conflict Resolution

```
local dirty == 1  →  cloud is discarded, local is truth
local dirty == 0  →  import cloud version
```

No operation log. No CRDTs. No timestamps. Just a file.

### Code

```ts
async function pushToCloud(db: SQLite, workbookId: number) {
  const state = db.exec(
    `SELECT dirty, last_synced_at FROM workbook WHERE id = ${workbookId}`
  )[0];
  if (!state.dirty) return { status: 'no-changes' };

  const blob = await exportToXlsx(db, workbookId);
  const { url } = await fetch('/api/presigned-upload').then(r => r.json());
  await fetch(url, { method: 'PUT', body: blob });

  db.exec(`UPDATE workbook SET dirty = 0, last_synced_at = ${Date.now()}`);
  return { status: 'synced' };
}

async function pullFromCloud(db: SQLite, workbookId: number) {
  const state = db.exec(`SELECT dirty FROM workbook WHERE id = ${workbookId}`)[0];
  if (state.dirty) return { status: 'local-dirty-skipped' };

  const { url } = await fetch(`/api/presigned-download?workbook=${workbookId}`).then(r => r.json());
  const response = await fetch(url);
  const blob = await response.blob();

  await importXlsx(new File([blob], 'workbook.xlsx'), db);
  db.exec(`UPDATE workbook SET dirty = 0, last_synced_at = ${Date.now()}`);
  return { status: 'pulled' };
}
```

### Server (minimal)

```ts
// Fastify or Express
server.post('/api/presigned-upload', async (req, reply) => {
  const key = `users/${req.user.id}/workbook.xlsx`;
  const url = await s3.getSignedUrl('putObject', {
    Bucket, Key: key, Expires: 300,
  });
  return { url, key };
});

server.get('/api/presigned-download', async (req, reply) => {
  const key = `users/${req.user.id}/workbook.xlsx`;
  const url = await s3.getSignedUrl('getObject', { Bucket, Key: key });
  return { url };
});
```

---

## 7. Browser Storage

### OPFS + SQLite

100K rows × 20 columns × ~50 bytes per cell ≈ 100MB. SQLite on OPFS handles this comfortably.

### Persistence

```ts
// On app init
if (!(await navigator.storage.persist())) {
  showWarning('Browser may evict your data. Please sync regularly.');
}

const { usage, quota } = await navigator.storage.estimate();
if (usage && quota && usage / quota > 0.8) {
  showWarning(`Storage nearly full: ${formatBytes(usage)} / ${formatBytes(quota)}`);
}
```

### Service Worker

Cache app shell only — never cache workbook data:

```ts
const CACHE = 'app-v1';
const ASSETS = ['/', '/index.html', '/assets/index.js', '/worker/import.js', '/worker/export.js'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

// Workbook data lives in OPFS, not SW cache
self.addEventListener('fetch', (e) => {
  if (e.request.url.includes('/api/')) return; // network only for sync
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
```

---

## 8. Production Concerns

### Browser Compatibility

| Browser | OPFS | SQLite WASM |
|---------|------|-------------|
| Chrome/Edge 86+ | Yes | Yes |
| Firefox 111+ | Yes | Yes |
| Safari 17+ | Yes | Yes |
| Mobile browsers | Limited | Avoid huge XLSX workflows |

### Key Risks

- **Storage eviction**: Always call `navigator.storage.persist()` and show sync status prominently
- **Import failures**: Corrupt XLSX, password-protected files, formulas referencing other sheets — catch and surface errors
- **Export fidelity**: Preserve styles, column widths, and number formats from original import if they matter

### What NOT to Do

- Don't implement CRDTs — single user, local wins
- Don't use IndexedDB for row data — SQLite is far faster for querying viewport ranges
- Don't load the full dataset into React state — always query viewport ranges from the DB Worker
- Don't use SheetJS default browser build — it loads full workbook into memory. Use streaming SAX parsing instead.
- Don't parse XLSX on the main thread — always in a Web Worker

---

## 9. Technology Stack

```
Frontend (PWA):
  React + Vite + vite-plugin-pwa
  Glide Data Grid (canvas-based, 100K+ rows)
  sqlite-wasm (official, on OPFS)
  Comlink (worker RPC)
  @zip.js/zip.js (ZIP read/write)
  saxes (SAX XML parser)

Workers:
  import.worker.ts  — XLSX → SQLite
  export.worker.ts  — SQLite → XLSX
  db.worker.ts      — viewport queries, column updates

Backend (minimal):
  Fastify (Node) or Go
  S3 / Cloudflare R2 (free 10GB)
  Presigned URL endpoints
  Optional: JWT auth
```

---

## 10. Performance Estimates (100K rows)

| Operation | Time | Notes |
|-----------|------|-------|
| Import XLSX → SQLite | 2–5s | SAX parse, batched inserts |
| Viewport query (100 rows) | <5ms | Indexed SQLite query |
| Fill column (100K rows) | 50–100ms | Single UPDATE SQL |
| Export SQLite → XLSX | 3–8s | Chunked generation |
| Initial app load | 1–2s | Read column metadata + first viewport |
