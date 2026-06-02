import { useState, useCallback } from 'react';
import { useDb } from './DbProvider';
import { useXlsxDb } from './hooks';
import { XlsxImporter } from './XlsxImporter';
import { VirtualGrid } from './VirtualGrid';
import { ColumnEditor } from './ColumnEditor';
import { XlsxExporter } from './XlsxExporter';
import { Database, FileSpreadsheet, AlertTriangle } from 'lucide-react';

export function XlsxPage() {
  const { isReady, saveToOpfs } = useDb();
  const { getWorkbook, getColumns, getDirty } = useXlsxDb();
  const [refreshKey, setRefreshKey] = useState(0);
  const [hasData, setHasData] = useState(false);

  const workbook = getWorkbook();
  const columns = getColumns();
  const isDirty = getDirty();

  const handleImportComplete = useCallback(() => {
    setHasData(true);
    setRefreshKey((k) => k + 1);
  }, []);

  const handleUpdate = useCallback(() => {
    setRefreshKey((k) => k + 1);
  }, []);

  if (!isReady) {
    return (
      <div className="flex items-center justify-center h-full text-slate-400">
        <Database size={24} className="mr-2 animate-pulse" />
        Initializing SQLite...
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col p-4 gap-4">
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <FileSpreadsheet size={24} className="text-emerald-600" />
          <div>
            <h1 className="text-lg font-bold text-slate-800">
              Local-First XLSX Editor
            </h1>
            <p className="text-xs text-slate-500">
              SQLite WASM on OPFS = source of truth
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {workbook && (
            <div className="text-xs text-slate-500">
              {workbook.name}
              {isDirty && (
                <span className="ml-2 text-amber-600 font-medium flex items-center gap-1 inline-flex">
                  <AlertTriangle size={12} />
                  Unsaved changes
                </span>
              )}
            </div>
          )}
          <XlsxExporter />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex gap-4 min-h-0">
        {/* Left sidebar */}
        <div className="w-80 shrink-0 flex flex-col gap-4 overflow-auto">
          <XlsxImporter onImportComplete={handleImportComplete} />
          {hasData && <ColumnEditor columns={columns} onUpdate={handleUpdate} />}
        </div>

        {/* Grid */}
        <div className="flex-1 min-w-0">
          <VirtualGrid key={refreshKey} />
        </div>
      </div>
    </div>
  );
}
