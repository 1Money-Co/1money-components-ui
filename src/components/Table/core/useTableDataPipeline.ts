import { useMemo } from 'react';
import { useControlledState, useMemoizedFn } from '@1money/hooks';
import type { Key } from 'react';
import type { TableColumn, TableColumnSorterConfig, TablePaginationConfig, TableSortOrder } from '../interface';

export interface TableSorterFieldState {
  columnKey: Key;
  order: Exclude<TableSortOrder, null>;
}

export interface TableSorterState {
  columnKey?: Key;
  order?: TableSortOrder;
}

export interface TablePipelineState {
  sorter: TableSorterState;
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
  onChange?: (meta: { currentDataSource: T[] }) => void;
}

export interface UseTableDataPipelineResult<T> {
  currentDataSource: T[];
  total: number;
  sorter: TableSorterState;
  sorterStates: TableSorterFieldState[];
  pagination: false | { current: number; pageSize: number };
  setSorter: (
    updater: TableSorterState
    | ((current: TableSorterState) => TableSorterState),
  ) => void;
  setPagination: (
    updater: { current: number; pageSize: number }
    | ((current: { current: number; pageSize: number }) => { current: number; pageSize: number }),
  ) => void;
}

function getSortFunction<T>(
  sorter: TableColumn<T>['sorter'],
): ((a: T, b: T) => number) | false {
  if (typeof sorter === 'function') return sorter;
  if (sorter && typeof sorter === 'object' && 'compare' in sorter) return sorter.compare;
  return false;
}

function getMultiplePriority<T>(column: TableColumn<T>): number | false {
  if (column.sorter && typeof column.sorter === 'object' && 'multiple' in column.sorter) {
    return (column.sorter as TableColumnSorterConfig<T>).multiple;
  }
  return false;
}

function applySortToData<T>(
  data: T[],
  columns: TableColumn<T>[],
  sorterStates: TableSorterFieldState[],
): T[] {
  if (sorterStates.length === 0) return data;

  const sorted = [...data];

  const runningSorters = sorterStates
    .map((state) => {
      const column = columns.find((col) => col.key === state.columnKey);
      if (!column) return null;
      const compareFn = getSortFunction(column.sorter);
      if (!compareFn) return null;
      const priority = getMultiplePriority(column);
      return { compareFn, order: state.order, priority };
    })
    .filter(Boolean) as { compareFn: (a: T, b: T) => number; order: 'ascend' | 'descend'; priority: number | false }[];

  if (runningSorters.length === 0) return data;

  // Higher priority number = compared first
  runningSorters.sort((a, b) => {
    const ap = typeof a.priority === 'number' ? a.priority : 0;
    const bp = typeof b.priority === 'number' ? b.priority : 0;
    return bp - ap;
  });

  sorted.sort((record1, record2) => {
    for (const { compareFn, order } of runningSorters) {
      const result = compareFn(record1, record2);
      if (result !== 0) {
        return order === 'ascend' ? result : -result;
      }
    }
    return 0;
  });

  return sorted;
}

export const applyTablePipeline = <T,>({
  columns,
  dataSource,
  sorter,
  pagination,
}: ApplyTablePipelineInput<T>) => {
  const sorterStates: TableSorterFieldState[] =
    sorter.columnKey != null && sorter.order
      ? [{ columnKey: sorter.columnKey, order: sorter.order }]
      : [];

  const sorted = applySortToData(dataSource, columns, sorterStates);

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
  const activeColumn = columns.find((column) => column.sortOrder !== undefined)
    ?? columns.find((column) => column.defaultSortOrder !== undefined);

  return {
    columnKey: activeColumn?.key,
    order: activeColumn?.sortOrder ?? activeColumn?.defaultSortOrder ?? null,
  };
};

const getControlledSorter = <T,>(columns: TableColumn<T>[]): TableSorterState | undefined => {
  const controlledColumn = columns.find((column) => column.sortOrder !== undefined);

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
  onChange,
}: UseTableDataPipelineInput<T>): UseTableDataPipelineResult<T> => {
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

  const sorterStates: TableSorterFieldState[] = useMemo(
    () =>
      sorter.columnKey != null && sorter.order
        ? [{ columnKey: sorter.columnKey, order: sorter.order }]
        : [],
    [sorter],
  );

  const result = useMemo(
    () => applyTablePipeline({
      columns,
      dataSource,
      sorter,
      pagination: mergedPagination,
    }),
    [columns, dataSource, sorter, mergedPagination],
  );

  // useMemoizedFn: stable ref, always calls latest closure — no stale deps risk
  const wrappedSetSorter = useMemoizedFn(
    (updater: TableSorterState | ((current: TableSorterState) => TableSorterState)) => {
      const nextSorter = typeof updater === 'function' ? updater(sorter) : updater;
      setSorter(nextSorter);

      if (onChange) {
        const nextResult = applyTablePipeline({
          columns,
          dataSource,
          sorter: nextSorter,
          pagination: mergedPagination,
        });
        onChange({ currentDataSource: nextResult.currentDataSource });
      }
    },
  );

  const wrappedSetPagination = useMemoizedFn(
    (
      updater: { current: number; pageSize: number }
      | ((currentValue: { current: number; pageSize: number }) => { current: number; pageSize: number }),
    ) => {
      if (pagination === false) return;

      const currentValue = { current, pageSize };
      const nextValue = typeof updater === 'function' ? updater(currentValue) : updater;

      setCurrent(nextValue.current);
      setPageSize(nextValue.pageSize);

      if (onChange) {
        const nextResult = applyTablePipeline({
          columns,
          dataSource,
          sorter,
          pagination: nextValue,
        });
        onChange({ currentDataSource: nextResult.currentDataSource });
      }
    },
  );

  return {
    ...result,
    sorter,
    sorterStates,
    pagination: mergedPagination,
    setSorter: wrappedSetSorter,
    setPagination: wrappedSetPagination,
  };
};
