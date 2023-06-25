import { ColumnsType } from 'antd/es/table';

export const centeredColumnsTable = <T>({
  centeredColumns,
  columns,
}: {
  centeredColumns: (string | number)[] | 'all';
  columns: ColumnsType<T>;
}) => {
  const formattedColumns = columns.map((column) => {
    if (!column.key) {
      throw Error('Please implementation key!');
    }

    if ('children' in column) {
      return centeredColumnsTable<T>({
        centeredColumns,
        columns: column.children,
      });
    }

    if (
      (Array.isArray(centeredColumns) &&
        centeredColumns.includes(column.key)) ||
      centeredColumns === 'all'
    ) {
      column.align = 'center';
    }

    return column;
  }) as ColumnsType<T>;

  if (formattedColumns.length === 0) return [];

  return formattedColumns;
};
