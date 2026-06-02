import { useState, useCallback, useRef } from 'react';
import { read, utils } from 'xlsx';
import { useDb } from './DbProvider';
import { Upload, Loader2, FileSpreadsheet } from 'lucide-react';
import type { ImportProgress } from './types';

interface Props {
  onImportComplete: () => void;
}

export function XlsxImporter({ onImportComplete }: Props) {
  const { db, saveToOpfs } = useDb();
  const [progress, setProgress] = useState<ImportProgress | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = useCallback(
    async (file: File) => {
      if (!db) return;

      setProgress({
        phase: 'parsing',
        currentRow: 0,
        totalRows: 0,
        message: 'Reading file...',
      });

      try {
        const arrayBuffer = await file.arrayBuffer();
        const workbook = read(arrayBuffer, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        // Convert to JSON with headers
        const data = utils.sheet_to_json<unknown[]>(worksheet, { header: 1, defval: null });

        if (!data.length) {
          setProgress({
            phase: 'error',
            currentRow: 0,
            totalRows: 0,
            message: 'Empty file',
          });
          return;
        }

        const headers = data[0] as unknown[];
        const rows = data.slice(1);
        const totalRows = rows.length;
        const colCount = headers.length;

        setProgress({
          phase: 'inserting',
          currentRow: 0,
          totalRows,
          message: `Importing ${totalRows.toLocaleString()} rows...`,
        });

        // Clear existing data
        db.run('DELETE FROM workbook');
        db.run('DELETE FROM sheet');
        db.run('DELETE FROM cell_data');
        db.run('DELETE FROM columns');

        // Insert workbook metadata
        db.run(
          `INSERT INTO workbook (id, name, row_count, col_count, dirty) 
           VALUES (1, '${file.name.replace(/'/g, "''")}', ${totalRows}, ${colCount}, 1)`
        );

        // Insert sheet
        db.run(`INSERT INTO sheet (id, workbook_id, name) VALUES (1, 1, '${sheetName.replace(/'/g, "''")}')`);

        // Insert columns
        for (let colIdx = 0; colIdx < headers.length; colIdx++) {
          const header = String(headers[colIdx] || `Col ${colIdx + 1}`).replace(/'/g, "''");
          db.run(
            `INSERT INTO columns (sheet_id, col_idx, header, width) 
             VALUES (1, ${colIdx}, '${header}', 120)`
          );
        }

        // Batch insert cell_data
        const BATCH_SIZE = 5000;
        let batch: string[] = [];

        for (let rowIdx = 0; rowIdx < rows.length; rowIdx++) {
          const row = rows[rowIdx] as unknown[];
          for (let colIdx = 0; colIdx < row.length; colIdx++) {
            const value = row[colIdx];
            if (value !== null && value !== undefined && value !== '') {
              const valStr = String(value).replace(/'/g, "''");
              batch.push(`(1, ${rowIdx}, ${colIdx}, '${valStr}')`);
            }
          }

          if (batch.length >= BATCH_SIZE || rowIdx === rows.length - 1) {
            if (batch.length > 0) {
              db.run(
                `INSERT INTO cell_data (sheet_id, row_idx, col_idx, value) VALUES ${batch.join(',')}`
              );
              batch = [];
            }
            setProgress({
              phase: 'inserting',
              currentRow: rowIdx + 1,
              totalRows,
              message: `Imported ${(rowIdx + 1).toLocaleString()} of ${totalRows.toLocaleString()} rows...`,
            });
          }
        }

        await saveToOpfs();

        setProgress({
          phase: 'complete',
          currentRow: totalRows,
          totalRows,
          message: `Import complete! ${totalRows.toLocaleString()} rows imported.`,
        });

        setTimeout(() => {
          setProgress(null);
          onImportComplete();
        }, 1500);
      } catch (err) {
        setProgress({
          phase: 'error',
          currentRow: 0,
          totalRows: 0,
          message: `Error: ${(err as Error).message}`,
        });
      }
    },
    [db, saveToOpfs, onImportComplete]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file && file.name.endsWith('.xlsx')) {
        processFile(file);
      }
    },
    [processFile]
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) processFile(file);
    },
    [processFile]
  );

  return (
    <div className="space-y-4">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onClick={() => fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          dragOver
            ? 'border-primary bg-blue-50'
            : 'border-slate-300 hover:border-slate-400 bg-white'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".xlsx,.xls"
          onChange={handleFileSelect}
          className="hidden"
        />
        <FileSpreadsheet size={48} className="mx-auto mb-3 text-slate-400" />
        <p className="text-sm font-medium text-slate-700">
          Drop an XLSX file here, or click to select
        </p>
        <p className="text-xs text-slate-500 mt-1">
          Supports .xlsx files up to 100K rows
        </p>
      </div>

      {progress && (
        <div
          className={`p-4 rounded-lg ${
            progress.phase === 'error'
              ? 'bg-red-50 border border-red-200'
              : progress.phase === 'complete'
              ? 'bg-green-50 border border-green-200'
              : 'bg-blue-50 border border-blue-200'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            {progress.phase === 'inserting' && (
              <Loader2 size={16} className="animate-spin text-blue-600" />
            )}
            <span
              className={`text-sm font-medium ${
                progress.phase === 'error'
                  ? 'text-red-700'
                  : progress.phase === 'complete'
                  ? 'text-green-700'
                  : 'text-blue-700'
              }`}
            >
              {progress.message}
            </span>
          </div>

          {progress.phase === 'inserting' && (
            <div className="w-full bg-blue-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{
                  width: `${Math.round((progress.currentRow / Math.max(progress.totalRows, 1)) * 100)}%`,
                }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
