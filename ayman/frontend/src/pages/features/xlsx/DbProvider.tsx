import { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import initSqlJs from 'sql.js';
import type { Database } from 'sql.js';
import type { Workbook, Sheet, ColumnDef, CellData } from './types';

interface DbContextValue {
  db: Database | null;
  isReady: boolean;
  initDb: () => Promise<void>;
  saveToOpfs: () => Promise<void>;
  loadFromOpfs: () => Promise<void>;
}

const DbContext = createContext<DbContextValue>({
  db: null,
  isReady: false,
  initDb: async () => {},
  saveToOpfs: async () => {},
  loadFromOpfs: async () => {},
});

export function useDb() {
  return useContext(DbContext);
}

interface Props {
  children: React.ReactNode;
}

const DB_FILE_NAME = 'xlsx-workbook.db';

export function DbProvider({ children }: Props) {
  const [db, setDb] = useState<Database | null>(null);
  const [isReady, setIsReady] = useState(false);
  const SQLRef = useRef<initSqlJs.SqlJsStatic | null>(null);

  const initDb = useCallback(async () => {
    if (!SQLRef.current) {
      const SQL = await initSqlJs({
        locateFile: (file) => `/${file}`,
      });
      SQLRef.current = SQL;
    }

    const SQL = SQLRef.current;

    // Try loading existing DB from OPFS
    try {
      const opfsRoot = await navigator.storage.getDirectory();
      const fileHandle = await opfsRoot.getFileHandle(DB_FILE_NAME);
      const file = await fileHandle.getFile();
      const arrayBuffer = await file.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      const existingDb = new SQL.Database(uint8Array);
      setDb(existingDb);
      setIsReady(true);
      console.log('[DbProvider] Loaded existing DB from OPFS');
      return;
    } catch {
      // No existing DB, create fresh
    }

    // Create new database with schema
    const newDb = new SQL.Database();
    newDb.run(`
      CREATE TABLE IF NOT EXISTS workbook (
        id INTEGER PRIMARY KEY DEFAULT 1,
        name TEXT,
        row_count INTEGER,
        col_count INTEGER,
        last_synced_at INTEGER,
        dirty INTEGER DEFAULT 0
      );

      CREATE TABLE IF NOT EXISTS sheet (
        id INTEGER PRIMARY KEY DEFAULT 1,
        workbook_id INTEGER,
        name TEXT
      );

      CREATE TABLE IF NOT EXISTS cell_data (
        sheet_id INTEGER NOT NULL,
        row_idx INTEGER NOT NULL,
        col_idx INTEGER NOT NULL,
        value TEXT,
        PRIMARY KEY (sheet_id, row_idx, col_idx)
      );

      CREATE INDEX IF NOT EXISTS idx_cell_viewport ON cell_data(sheet_id, row_idx, col_idx);

      CREATE TABLE IF NOT EXISTS columns (
        sheet_id INTEGER NOT NULL,
        col_idx INTEGER NOT NULL,
        header TEXT,
        width REAL,
        PRIMARY KEY (sheet_id, col_idx)
      );
    `);

    setDb(newDb);
    setIsReady(true);
    console.log('[DbProvider] Created new DB');
  }, []);

  const saveToOpfs = useCallback(async () => {
    if (!db) return;
    try {
      const data = db.export();
      const opfsRoot = await navigator.storage.getDirectory();
      const fileHandle = await opfsRoot.getFileHandle(DB_FILE_NAME, { create: true });
      const writable = await fileHandle.createWritable();
      await writable.write(data);
      await writable.close();
      console.log('[DbProvider] Saved DB to OPFS');
    } catch (err) {
      console.error('[DbProvider] Failed to save to OPFS:', err);
    }
  }, [db]);

  const loadFromOpfs = useCallback(async () => {
    if (!SQLRef.current) return;
    try {
      const opfsRoot = await navigator.storage.getDirectory();
      const fileHandle = await opfsRoot.getFileHandle(DB_FILE_NAME);
      const file = await fileHandle.getFile();
      const arrayBuffer = await file.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      const loadedDb = new SQLRef.current.Database(uint8Array);
      setDb(loadedDb);
      console.log('[DbProvider] Loaded DB from OPFS');
    } catch (err) {
      console.error('[DbProvider] Failed to load from OPFS:', err);
    }
  }, []);

  useEffect(() => {
    initDb();
  }, [initDb]);

  // Auto-save on unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (db) {
        const data = db.export();
        // Synchronous save attempt
        try {
          navigator.storage.getDirectory().then((root) => {
            root.getFileHandle(DB_FILE_NAME, { create: true }).then((fh) => {
              fh.createWritable().then((w) => {
                w.write(data).then(() => w.close());
              });
            });
          });
        } catch {
          // Best effort
        }
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [db]);

  return (
    <DbContext.Provider value={{ db, isReady, initDb, saveToOpfs, loadFromOpfs }}>
      {children}
    </DbContext.Provider>
  );
}
