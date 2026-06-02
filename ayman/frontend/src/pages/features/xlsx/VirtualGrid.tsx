import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { List } from 'react-window';
import { useXlsxDb } from './hooks';
import { Loader2 } from 'lucide-react';
import type { ColumnDef } from './types';

interface Props {
  rowHeight?: number;
  headerHeight?: number;
}

interface CellData {
  [colIdx: number]: string | null;
}

export function VirtualGrid({ rowHeight = 32, headerHeight = 40 }: Props) {
  const { getViewport, getColumns } = useXlsxDb();
  const [columns, setColumns] = useState<ColumnDef[]>([]);
  const [totalRows, setTotalRows] = useState(0);
  const [viewportData, setViewportData] = useState<Map<number, CellData>>(new Map());
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(600);

  // Load initial columns
  useEffect(() => {
    const cols = getColumns();
    setColumns(cols);
  }, [getColumns]);

  // Load viewport data
  const loadViewport = useCallback(
    (startRow: number, endRow: number) => {
      if (columns.length === 0) return;
      setIsLoading(true);
      const result = getViewport(startRow, endRow, 0, columns.length - 1);
      setTotalRows(result.totalRows);
      setViewportData(result.rows);
      setIsLoading(false);
    },
    [columns.length, getViewport]
  );

  // Initial load
  useEffect(() => {
    loadViewport(0, 50);
  }, [loadViewport]);

  // Update container height
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.clientHeight - headerHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [headerHeight]);

  const RowRenderer = useMemo(() => {
    return ({ index, style }: { index: number; style: React.CSSProperties }) => {
      const rowData = viewportData.get(index) || {};
      return (
        <div
          style={{
            ...style,
            display: 'flex',
            borderBottom: '1px solid #e2e8f0',
          }}
          className="hover:bg-slate-50"
        >
          {/* Row number */}
          <div
            className="flex items-center justify-center bg-slate-50 text-slate-400 text-xs border-r border-slate-200 shrink-0"
            style={{ width: 60, minWidth: 60 }}
          >
            {index + 1}
          </div>

          {/* Cells */}
          {columns.map((col) => {
            const value = rowData[col.colIdx];
            return (
              <div
                key={col.colIdx}
                className="flex items-center px-2 text-sm text-slate-700 border-r border-slate-200 overflow-hidden whitespace-nowrap text-ellipsis"
                style={{ width: col.width, minWidth: col.width }}
                title={value || ''}
              >
                {value || ''}
              </div>
            );
          })}
        </div>
      );
    };
  }, [viewportData, columns]);

  const onItemsRendered = useCallback(
    ({ visibleStartIndex, visibleStopIndex }: { visibleStartIndex: number; visibleStopIndex: number }) => {
      // Load more data if needed (with buffer)
      const buffer = 20;
      const start = Math.max(0, visibleStartIndex - buffer);
      const end = visibleStopIndex + buffer;
      loadViewport(start, end);
    },
    [loadViewport]
  );

  if (columns.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-slate-400">
        Import an XLSX file to view data
      </div>
    );
  }

  return (
    <div ref={containerRef} className="flex flex-col h-full bg-white border border-slate-200 rounded-lg overflow-hidden">
      {/* Header */}
      <div
        className="flex shrink-0 bg-slate-100 border-b border-slate-200 font-medium text-sm text-slate-700"
        style={{ height: headerHeight }}
      >
        <div
          className="flex items-center justify-center border-r border-slate-200 text-xs text-slate-500 shrink-0"
          style={{ width: 60, minWidth: 60 }}
        >
          #
        </div>
        {columns.map((col) => (
          <div
            key={col.colIdx}
            className="flex items-center px-2 border-r border-slate-200 overflow-hidden whitespace-nowrap"
            style={{ width: col.width, minWidth: col.width }}
            title={col.header}
          >
            {col.header}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-auto relative">
        {isLoading && viewportData.size === 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
            <Loader2 size={24} className="animate-spin text-primary" />
          </div>
        )}

        <List
          height={containerHeight}
          itemCount={totalRows}
          itemSize={rowHeight}
          onItemsRendered={onItemsRendered}
          overscanCount={10}
        >
          {RowRenderer}
        </List>
      </div>

      {/* Footer info */}
      <div className="shrink-0 px-3 py-1.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-500">
        {totalRows.toLocaleString()} rows × {columns.length} columns
      </div>
    </div>
  );
}
