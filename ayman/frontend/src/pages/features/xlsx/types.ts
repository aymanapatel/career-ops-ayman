export interface Workbook {
  id: number;
  name: string;
  rowCount: number;
  colCount: number;
  lastSyncedAt: number | null;
  dirty: number;
}

export interface Sheet {
  id: number;
  workbookId: number;
  name: string;
}

export interface CellData {
  sheetId: number;
  rowIdx: number;
  colIdx: number;
  value: string | null;
}

export interface ColumnDef {
  sheetId: number;
  colIdx: number;
  header: string;
  width: number;
}

export interface ViewportResponse {
  rows: Map<number, Record<number, string | null>>;
  totalRows: number;
  columns: ColumnDef[];
}

export interface ImportProgress {
  phase: 'parsing' | 'inserting' | 'complete' | 'error';
  currentRow: number;
  totalRows: number;
  message: string;
}
