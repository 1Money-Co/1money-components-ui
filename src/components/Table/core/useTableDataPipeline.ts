import { useMemo } from 'react';
import { useControlledState, useMemoizedFn } from '@1money/hooks';
import type { Key } from 'react';
import type { TableAction, TableChangeMeta, TableColumn, TableColumnGroup, TableColumnSorterConfig, TableColumnType, TablePaginationConfig, TableSortOrder } from '../interface';

function isColumnGroup<T>(col: TableColumnType<T>): col is TableColumnGroup<T> {
  return 'children' in col && Array.isArray((col as TableColumnGroup<T>).children);
}

function flattenColumns<T>(columns: TableColumnType<T>[]): TableColumn<T>[] {
  const result: TableColumn<T>[] = [];
  for (const col of columns) {
    if (isColumnGroup(col)) {
      result.push(...flattenColumns(col.children));
    } else {
      result.push(col);
    }
  }
  return result;
}

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
  columns: TableColumnType<T>[];
  dataSource: T[];
}

export interface UseTableDataPipelineInput<T> {
  columns: TableColumnType<T>[];
  dataSource: T[];
  pagination?: false | TablePaginationConfig;
  onChange?: (meta: TableChangeMeta<T>) => void;
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

  const leafColumns = flattenColumns(columns);
  const sorted = applySortToData(dataSource, leafColumns, sorterStates);

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

function collectSorterStates<T>(columns: TableColumnType<T>[]): TableSorterFieldState[] {
  const leaves = flattenColumns(columns);
  const states: TableSorterFieldState[] = [];
  for (const col of leaves) {
    const order = col.sortOrder ?? col.defaultSortOrder;
    if (col.key != null && order) {
      states.push({ columnKey: col.key, order });
    }
  }
  return states;
}

const getInitialSorter = <T,>(columns: TableColumnType<T>[]): TableSorterState => {
  const states = collectSorterStates(columns);
  if (states.length === 0) return {};
  return { columnKey: states[0].columnKey, order: states[0].order };
};

const getControlledSorter = <T,>(columns: TableColumnType<T>[]): TableSorterState | undefined => {
  const leaves = flattenColumns(columns);
  const controlledColumn = leaves.find((column) => column.sortOrder !== undefined);

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

  const sorterStates: TableSorterFieldState[] = useMemo(() => {
    // Start with the primary user-toggled sorter
    const primary: TableSorterFieldState[] =
      sorter.columnKey != null && sorter.order
        ? [{ columnKey: sorter.columnKey, order: sorter.order }]
        : [];

    // Collect any other columns that have a controlled sortOrder (for multi-sort)
    const leafColumns = flattenColumns(columns);
    const additional = leafColumns
      .filter((col) => col.key != null && col.sortOrder && col.key !== sorter.columnKey)
      .map((col) => ({ columnKey: col.key!, order: col.sortOrder! as Exclude<TableSortOrder, null> }));

    return [...primary, ...additional];
  }, [sorter, columns]);

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

      // Reset pagination to page 1 when sorting changes
      if (mergedPagination !== false) {
        setCurrent(1);
      }

      if (onChange) {
        const resetPagination = mergedPagination === false
          ? false
          : { current: 1, pageSize };
        const nextResult = applyTablePipeline({
          columns,
          dataSource,
          sorter: nextSorter,
          pagination: resetPagination,
        });
        onChange({ currentDataSource: nextResult.currentDataSource, action: 'sort' });
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
        onChange({ currentDataSource: nextResult.currentDataSource, action: 'paginate' });
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
