import { useMemo } from 'react';
import { useControlledState } from '@1money/hooks';
import type { Key } from 'react';
import type { TableColumn, TablePaginationConfig, TableSortOrder } from '../interface';

export interface TablePipelineState {
  filters: Record<string, Array<Key | boolean>>;
  sorter: { columnKey?: Key; order?: TableSortOrder };
  pagination: false | Required<Pick<TablePaginationConfig, 'current' | 'pageSize'>>;
}

export interface ApplyTablePipelineInput<T> extends TablePipelineState {
  columns: TableColumn<T>[];
  dataSource: T[];
}

export interface UseTableDataPipelineInput<T> {
  columns: TableColumn<T>[];
  dataSource: T[];
  pagination?: false | TablePaginationConfig;
}

export interface UseTableDataPipelineResult<T> {
  currentDataSource: T[];
  total: number;
  filters: Record<string, Array<Key | boolean>>;
  sorter: TableSorterState;
  pagination: false | { current: number; pageSize: number };
  setFilters: (
    updater: Record<string, Array<Key | boolean>>
    | ((current: Record<string, Array<Key | boolean>>) => Record<string, Array<Key | boolean>>)
  ) => void;
  setSorter: (
    updater: { columnKey?: Key; order?: TableSortOrder }
    | ((current: { columnKey?: Key; order?: TableSortOrder }) => { columnKey?: Key; order?: TableSortOrder })
  ) => void;
  setPagination: (
    updater: { current: number; pageSize: number }
    | ((current: { current: number; pageSize: number }) => { current: number; pageSize: number })
  ) => void;
}

export interface TableSorterState {
  columnKey?: Key;
  order?: TableSortOrder;
}

export const applyTablePipeline = <T,>({
  columns,
  dataSource,
  filters,
  sorter,
  pagination,
}: ApplyTablePipelineInput<T>) => {
  const filtered = dataSource.filter(record => columns.every(column => {
    if (!column.key || !column.onFilter) return true;

    const selected = filters[String(column.key)];

    if (!selected?.length) return true;

    return selected.some(value => column.onFilter?.(value, record));
  }));

  const sorted = [...filtered];
  const sortColumn = columns.find(column => column.key === sorter.columnKey);

  if (sortColumn?.sorter && typeof sortColumn.sorter === 'function' && sorter.order) {
    sorted.sort(sortColumn.sorter);

    if (sorter.order === 'descend') {
      sorted.reverse();
    }
  }

  if (!pagination) {
    return { currentDataSource: sorted, total: sorted.length };
  }

  const start = (pagination.current - 1) * pagination.pageSize;
  const end = start + pagination.pageSize;

  return {
    currentDataSource: sorted.slice(start, end),
    total: sorted.length,
  };
};

const getInitialSorter = <T,>(columns: TableColumn<T>[]): TableSorterState => {
  const activeColumn = columns.find(column => column.sortOrder !== undefined)
    ?? columns.find(column => column.defaultSortOrder !== undefined);

  return {
    columnKey: activeColumn?.key,
    order: activeColumn?.sortOrder ?? activeColumn?.defaultSortOrder ?? null,
  };
};

const getControlledSorter = <T,>(columns: TableColumn<T>[]): TableSorterState | undefined => {
  const controlledColumn = columns.find(column => column.sortOrder !== undefined);

  if (!controlledColumn) {
    return undefined;
  }

  return {
    columnKey: controlledColumn.key,
    order: controlledColumn.sortOrder ?? null,
  };
};

export const useTableDataPipeline = <T,>({
  columns,
  dataSource,
  pagination,
}: UseTableDataPipelineInput<T>): UseTableDataPipelineResult<T> => {
  const [filters, setFilters] = useControlledState<Record<string, Array<Key | boolean>>>({}, undefined);
  const [sorter, setSorter] = useControlledState<TableSorterState>(
    getInitialSorter(columns),
    getControlledSorter(columns),
  );
  const [current, setCurrent] = useControlledState(
    pagination === false ? 1 : (pagination?.defaultCurrent ?? pagination?.current ?? 1),
    pagination === false ? undefined : pagination?.current,
  );
  const [pageSize, setPageSize] = useControlledState(
    pagination === false ? 10 : (pagination?.defaultPageSize ?? pagination?.pageSize ?? 10),
    pagination === false ? undefined : pagination?.pageSize,
  );

  const mergedPagination = pagination === false
    ? false
    : { current, pageSize };

  const result = useMemo(
    () => applyTablePipeline({
      columns,
      dataSource,
      filters,
      sorter,
      pagination: mergedPagination,
    }),
    [columns, dataSource, filters, sorter, mergedPagination],
  );

  const setPagination = (
    updater: { current: number; pageSize: number }
    | ((currentValue: { current: number; pageSize: number }) => { current: number; pageSize: number })
  ) => {
    if (pagination === false) {
      return;
    }

    const currentValue = { current, pageSize };
    const nextValue = typeof updater === 'function' ? updater(currentValue) : updater;

    setCurrent(nextValue.current);
    setPageSize(nextValue.pageSize);
  };

  return {
    ...result,
    filters,
    sorter,
    pagination: mergedPagination,
    setFilters,
    setSorter,
    setPagination,
  };
};
