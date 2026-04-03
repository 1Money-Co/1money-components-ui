import { useMemo, type Key } from 'react';
import { SelectionControl, SelectionHeaderControl } from '../features/SelectionColumn';
import { ExpandTrigger } from '../features/ExpandTrigger';
import { HeaderCell } from '../renderers/HeaderCell';
import { BodyCell } from '../renderers/BodyCell';
import type {
  TableColumn,
  TableExpandableConfig,
  TableRowSelection,
  TableSize,
  TableSortOrder,
} from '../interface';
import type { TableSorterState } from './useTableDataPipeline';

type ColumnTransform<T> = (columns: TableColumn<T>[]) => TableColumn<T>[];

interface UseTableColumnsConfig<T> {
  columns: TableColumn<T>[];
  size: TableSize;
  expandable?: TableExpandableConfig<T>;
  mergedExpandedRowKeys: Key[];
  triggerExpand: (key: Key, record: T) => void;
  rowSelection?: TableRowSelection<T>;
  mergedSelectedRowKeys: Key[];
  checkboxPropsMap: Map<Key, Partial<{ disabled: boolean }>>;
  isAllSelected: boolean;
  isIndeterminate: boolean;
  triggerSelection: (key: Key) => void;
  triggerSelectAll: () => void;
  sorter: TableSorterState;
  setSorter: (
    updater:
      | { columnKey?: Key; order?: TableSortOrder }
      | ((current: { columnKey?: Key; order?: TableSortOrder }) => { columnKey?: Key; order?: TableSortOrder }),
  ) => void;
  getRowKey: (record: T, index: number) => Key;
}

function makeExpandTransform<T>(config: UseTableColumnsConfig<T>): ColumnTransform<T> {
  const { mergedExpandedRowKeys, triggerExpand, getRowKey } = config;

  return (columns) => [
    {
      key: '__expand__',
      width: 48,
      render: (_: unknown, record: T, index: number) => (
        <ExpandTrigger
          expanded={mergedExpandedRowKeys.includes(getRowKey(record, index))}
          onToggle={() => triggerExpand(getRowKey(record, index), record)}
        />
      ),
    },
    ...columns,
  ];
}

function makeSelectionTransform<T>(config: UseTableColumnsConfig<T>): ColumnTransform<T> {
  const {
    rowSelection,
    mergedSelectedRowKeys,
    checkboxPropsMap,
    isAllSelected,
    isIndeterminate,
    triggerSelection,
    triggerSelectAll,
    getRowKey,
  } = config;

  if (!rowSelection) return null as never;

  const selectionType = rowSelection.type ?? 'checkbox';

  return (columns) => [
    {
      key: '__selection__',
      width: rowSelection.columnWidth ?? 48,
      ...(selectionType === 'checkbox'
        ? {
            renderHeader: () => (
              <SelectionHeaderControl
                checked={isAllSelected}
                indeterminate={isIndeterminate}
                onChange={triggerSelectAll}
              />
            ),
          }
        : {}),
      render: (_: unknown, record: T, index: number) => {
        const recordKey = getRowKey(record, index);
        const checkboxProps = checkboxPropsMap.get(recordKey);
        return (
          <SelectionControl
            type={selectionType}
            checked={mergedSelectedRowKeys.includes(recordKey)}
            disabled={checkboxProps?.disabled}
            onChange={() => triggerSelection(recordKey)}
          />
        );
      },
    },
    ...columns,
  ];
}

function makeSortTransform<T>(config: UseTableColumnsConfig<T>): ColumnTransform<T> {
  const { size, sorter, setSorter } = config;

  return (columns) =>
    columns.map((column) => ({
      ...column,
      title: column.renderHeader
        ? column.renderHeader({ column })
        : (
          <HeaderCell
            column={column as TableColumn<Record<string, unknown>>}
            size={size}
            sortOrder={sorter.columnKey === column.key ? sorter.order ?? null : null}
            onSortClick={() =>
              setSorter((currentSorter) => ({
                columnKey: column.key,
                order:
                  currentSorter.columnKey !== column.key || currentSorter.order === null
                    ? 'ascend'
                    : currentSorter.order === 'ascend'
                      ? 'descend'
                      : null,
              }))
            }
          />
        ),
    }));
}

function makeRenderTransform<T>(): ColumnTransform<T> {
  return (columns) =>
    columns.map((column) => ({
      ...column,
      render: (value: unknown, record: T, index: number) => (
        <BodyCell
          column={column as TableColumn<Record<string, unknown>>}
          value={value}
          record={record as Record<string, unknown>}
          index={index}
        />
      ),
    }));
}

export function useTableColumns<T>(config: UseTableColumnsConfig<T>) {
  const {
    columns,
    expandable,
    rowSelection,
    mergedExpandedRowKeys,
    mergedSelectedRowKeys,
    checkboxPropsMap,
    isAllSelected,
    isIndeterminate,
    triggerExpand,
    triggerSelection,
    triggerSelectAll,
    sorter,
    setSorter,
    size,
    getRowKey,
  } = config;

  return useMemo(() => {
    const transforms: ColumnTransform<T>[] = [];

    if (expandable && expandable.showExpandColumn !== false) {
      transforms.push(makeExpandTransform(config));
    }
    if (rowSelection) {
      transforms.push(makeSelectionTransform(config));
    }
    transforms.push(makeSortTransform(config));
    transforms.push(makeRenderTransform<T>());

    return transforms.reduce((cols, fn) => fn(cols), columns);
  }, [
    columns,
    expandable,
    rowSelection,
    mergedExpandedRowKeys,
    mergedSelectedRowKeys,
    checkboxPropsMap,
    isAllSelected,
    isIndeterminate,
    triggerExpand,
    triggerSelection,
    triggerSelectAll,
    sorter,
    setSorter,
    size,
    getRowKey,
  ]);
}
