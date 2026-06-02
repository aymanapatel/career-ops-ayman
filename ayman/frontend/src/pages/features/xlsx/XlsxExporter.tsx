import { useState, useCallback } from 'react';
import { write, utils } from 'xlsx';
import { useDb } from './DbProvider';
import { Download, Loader2 } from 'lucide-react';

export function XlsxExporter() {
  const { db } = useDb();
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = useCallback(async () => {
    if (!db) return;
    setIsExporting(true);

    try {
      // Get workbook metadata
      const wbResult = db.exec('SELECT name FROM workbook LIMIT 1');
      const fileName = (wbResult[0]?.values[0]?.[0] as string) || 'export.xlsx';

      // Get sheet name
      const sheetResult = db.exec('SELECT name FROM sheet LIMIT 1');
      const sheetName = (sheetResult[0]?.values[0]?.[0] as string) || 'Sheet1';

      // Get columns
      const colResult = db.exec('SELECT header FROM columns ORDER BY col_idx');
      const headers = colResult[0]?.values.map((v) => v[0] as string) || [];

      // Get all cell data
      const cellResult = db.exec(
        'SELECT row_idx, col_idx, value FROM cell_data ORDER BY row_idx, col_idx'
      );

      // Build row-major data array
      const rows = new Map<number, (string | null)[]>();
      if (cellResult.length) {
        for (const row of cellResult[0].values) {
          const rowIdx = row[0] as number;
          const colIdx = row[1] as number;
          const value = row[2] as string | null;
          if (!rows.has(rowIdx)) {
            rows.set(rowIdx, new Array(headers.length).fill(null));
          }
          rows.get(rowIdx)![colIdx] = value;
        }
      }

      // Build worksheet data
      const wsData: (string | null)[][] = [headers];
      const sortedRowIndices = Array.from(rows.keys()).sort((a, b) => a - b);
      for (const rowIdx of sortedRowIndices) {
        wsData.push(rows.get(rowIdx)!);
      }

      // Create workbook and worksheet
      const wb = utils.book_new();
      const ws = utils.aoa_to_sheet(wsData);
      utils.book_append_sheet(wb, ws, sheetName);

      // Generate file
      const wbout = write(wb, { bookType: 'xlsx', type: 'array' });
      const blob = new Blob([wbout], { type: 'application/octet-stream' });

      // Download
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName.replace(/\.xlsx?$/i, '') + '_exported.xlsx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      // Mark as synced
      db.run('UPDATE workbook SET dirty = 0, last_synced_at = ?', [Date.now()]);
    } catch (err) {
      alert(`Export failed: ${(err as Error).message}`);
    } finally {
      setIsExporting(false);
    }
  }, [db]);

  return (
    <button
      onClick={handleExport}
      disabled={isExporting || !db}
      className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-emerald-600 text-white rounded-md hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      {isExporting ? (
        <>
          <Loader2 size={14} className="animate-spin" />
          Exporting...
        </>
      ) : (
        <>
          <Download size={14} />
          Export XLSX
        </>
      )}
    </button>
  );
}
