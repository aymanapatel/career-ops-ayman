import { useState } from 'react';
import { useXlsxDb } from './hooks';
import { useDb } from './DbProvider';
import { Edit3, Trash2, Type, CaseSensitive, Scissors, RefreshCw } from 'lucide-react';
import type { ColumnDef } from './types';

interface Props {
  columns: ColumnDef[];
  onUpdate: () => void;
}

export function ColumnEditor({ columns, onUpdate }: Props) {
  const { db } = useDb();
  const { updateColumn, clearColumn } = useXlsxDb();
  const [selectedCol, setSelectedCol] = useState<number | null>(null);
  const [fillValue, setFillValue] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  const handleFill = async () => {
    if (selectedCol === null || !db) return;
    setIsUpdating(true);
    await updateColumn(selectedCol, fillValue);
    setIsUpdating(false);
    setFillValue('');
    onUpdate();
  };

  const handleClear = async () => {
    if (selectedCol === null || !db) return;
    if (!confirm(`Clear all values in "${columns[selectedCol]?.header}"?`)) return;
    setIsUpdating(true);
    await clearColumn(selectedCol);
    setIsUpdating(false);
    onUpdate();
  };

  const handleTransform = async (transform: 'upper' | 'lower' | 'trim') => {
    if (selectedCol === null || !db) return;
    setIsUpdating(true);
    await updateColumn(selectedCol, null, transform);
    setIsUpdating(false);
    onUpdate();
  };

  if (columns.length === 0) {
    return (
      <div className="text-sm text-slate-400 p-4">
        Import a file to edit columns
      </div>
    );
  }

  return (
    <div className="space-y-4 p-4 bg-white border border-slate-200 rounded-lg">
      <h3 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
        <Edit3 size={16} />
        Column Operations
      </h3>

      {/* Column selector */}
      <div>
        <label className="text-xs text-slate-500 block mb-1">Select Column</label>
        <select
          value={selectedCol ?? ''}
          onChange={(e) => setSelectedCol(Number(e.target.value))}
          className="w-full px-2 py-1.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Choose a column...</option>
          {columns.map((col) => (
            <option key={col.colIdx} value={col.colIdx}>
              {col.header}
            </option>
          ))}
        </select>
      </div>

      {selectedCol !== null && (
        <div className="space-y-3">
          {/* Fill value */}
          <div>
            <label className="text-xs text-slate-500 block mb-1">Fill with value</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={fillValue}
                onChange={(e) => setFillValue(e.target.value)}
                placeholder="Enter value..."
                className="flex-1 px-2 py-1.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                onKeyDown={(e) => e.key === 'Enter' && handleFill()}
              />
              <button
                onClick={handleFill}
                disabled={isUpdating}
                className="flex items-center gap-1 px-3 py-1.5 text-xs bg-primary text-white rounded-md hover:bg-primary-dark disabled:opacity-50 transition-colors"
              >
                <Type size={12} />
                Fill
              </button>
            </div>
          </div>

          {/* Transform operations */}
          <div>
            <label className="text-xs text-slate-500 block mb-1">Transform</label>
            <div className="flex gap-2">
              <button
                onClick={() => handleTransform('upper')}
                disabled={isUpdating}
                className="flex items-center gap-1 px-2 py-1.5 text-xs bg-slate-100 text-slate-700 rounded-md hover:bg-slate-200 disabled:opacity-50 transition-colors"
              >
                <CaseSensitive size={12} />
                UPPERCASE
              </button>
              <button
                onClick={() => handleTransform('lower')}
                disabled={isUpdating}
                className="flex items-center gap-1 px-2 py-1.5 text-xs bg-slate-100 text-slate-700 rounded-md hover:bg-slate-200 disabled:opacity-50 transition-colors"
              >
                <CaseSensitive size={12} />
                lowercase
              </button>
              <button
                onClick={() => handleTransform('trim')}
                disabled={isUpdating}
                className="flex items-center gap-1 px-2 py-1.5 text-xs bg-slate-100 text-slate-700 rounded-md hover:bg-slate-200 disabled:opacity-50 transition-colors"
              >
                <Scissors size={12} />
                Trim
              </button>
            </div>
          </div>

          {/* Clear */}
          <div className="pt-2 border-t border-slate-200">
            <button
              onClick={handleClear}
              disabled={isUpdating}
              className="flex items-center gap-1 px-3 py-1.5 text-xs bg-red-50 text-red-600 rounded-md hover:bg-red-100 disabled:opacity-50 transition-colors"
            >
              <Trash2 size={12} />
              Clear Column
            </button>
          </div>
        </div>
      )}

      {isUpdating && (
        <div className="flex items-center gap-2 text-xs text-blue-600">
          <RefreshCw size={12} className="animate-spin" />
          Updating...
        </div>
      )}
    </div>
  );
}
