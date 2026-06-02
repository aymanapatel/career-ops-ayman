import { useCallback } from 'react';
import { useDb } from './DbProvider';
import type { ColumnDef, CellData, ViewportResponse } from './types';

export function useXlsxDb() {
  const { db, saveToOpfs } = useDb();

  const getWorkbook = useCallback(() => {
    if (!db) return null;
    const result = db.exec('SELECT * FROM workbook LIMIT 1');
    if (!result.length || !result[0].values.length) return null;
    const row = result[0].values[0];
    return {
      id: row[0] as number,
      name: row[1] as string,
      rowCount: row[2] as number,
      colCount: row[3] as number,
      lastSyncedAt: row[4] as number | null,
      dirty: row[5] as number,
    };
  }, [db]);

  const getSheet = useCallback(() => {
    if (!db) return null;
    const result = db.exec('SELECT * FROM sheet LIMIT 1');
    if (!result.length || !result[0].values.length) return null;
    const row = result[0].values[0];
    return {
      id: row[0] as number,
      workbookId: row[1] as number,
      name: row[2] as string,
    };
  }, [db]);

  const getColumns = useCallback((): ColumnDef[] => {
    if (!db) return [];
    const result = db.exec('SELECT sheet_id, col_idx, header, width FROM columns ORDER BY col_idx');
    if (!result.length) return [];
    return result[0].values.map((row) => ({
      sheetId: row[0] as number,
      colIdx: row[1] as number,
      header: (row[2] as string) || `Col ${(row[1] as number) + 1}`,
      width: (row[3] as number) || 100,
    }));
  }, [db]);

  const getViewport = useCallback(
    (rowStart: number, rowEnd: number, colStart: number, colEnd: number): ViewportResponse => {
      if (!db) return { rows: new Map(), totalRows: 0, columns: [] };

      const sheetResult = db.exec('SELECT id FROM sheet LIMIT 1');
      const sheetId = sheetResult[0]?.values[0]?.[0] as number || 1;

      const cellResult = db.exec(
        `SELECT row_idx, col_idx, value 
         FROM cell_data 
         WHERE sheet_id = ${sheetId}
           AND row_idx >= ${rowStart} 
           AND row_idx <= ${rowEnd}
           AND col_idx >= ${colStart} 
           AND col_idx <= ${colEnd}
         ORDER BY row_idx, col_idx`
      );

      const rows = new Map<number, Record<number, string | null>>();
      if (cellResult.length) {
        for (const row of cellResult[0].values) {
          const rowIdx = row[0] as number;
          const colIdx = row[1] as number;
          const value = row[2] as string | null;
          if (!rows.has(rowIdx)) rows.set(rowIdx, {});
          rows.get(rowIdx)![colIdx] = value;
        }
      }

      const countResult = db.exec(
        `SELECT COUNT(DISTINCT row_idx) FROM cell_data WHERE sheet_id = ${sheetId}`
      );
      const totalRows = (countResult[0]?.values[0]?.[0] as number) || 0;

      return { rows, totalRows, columns: getColumns() };
    },
    [db, getColumns]
  );

  const updateColumn = useCallback(
    async (colIdx: number, value: string | null, transform?: 'upper' | 'lower' | 'trim') => {
      if (!db) return;

      const sheetResult = db.exec('SELECT id FROM sheet LIMIT 1');
      const sheetId = sheetResult[0]?.values[0]?.[0] as number || 1;

      db.run('BEGIN');

      if (transform === 'upper') {
        db.run(
          `UPDATE cell_data SET value = UPPER(value) 
           WHERE sheet_id = ${sheetId} AND col_idx = ${colIdx}`
        );
      } else if (transform === 'lower') {
        db.run(
          `UPDATE cell_data SET value = LOWER(value) 
           WHERE sheet_id = ${sheetId} AND col_idx = ${colIdx}`
        );
      } else if (transform === 'trim') {
        db.run(
          `UPDATE cell_data SET value = TRIM(value) 
           WHERE sheet_id = ${sheetId} AND col_idx = ${colIdx}`
        );
      } else {
        db.run(
          `UPDATE cell_data SET value = ${value === null ? 'NULL' : `'${value.replace(/'/g, "''")}'`} 
           WHERE sheet_id = ${sheetId} AND col_idx = ${colIdx}`
        );
      }

      db.run('UPDATE workbook SET dirty = 1');
      db.run('COMMIT');

      await saveToOpfs();
    },
    [db, saveToOpfs]
  );

  const clearColumn = useCallback(
    async (colIdx: number) => {
      if (!db) return;
      const sheetResult = db.exec('SELECT id FROM sheet LIMIT 1');
      const sheetId = sheetResult[0]?.values[0]?.[0] as number || 1;

      db.run('BEGIN');
      db.run(`UPDATE cell_data SET value = NULL WHERE sheet_id = ${sheetId} AND col_idx = ${colIdx}`);
      db.run('UPDATE workbook SET dirty = 1');
      db.run('COMMIT');

      await saveToOpfs();
    },
    [db, saveToOpfs]
  );

  const getDirty = useCallback(() => {
    if (!db) return false;
    const result = db.exec('SELECT dirty FROM workbook LIMIT 1');
    if (!result.length || !result[0].values.length) return false;
    return (result[0].values[0][0] as number) === 1;
  }, [db]);

  return {
    getWorkbook,
    getSheet,
    getColumns,
    getViewport,
    updateColumn,
    clearColumn,
    getDirty,
  };
}
