import { useMemo, type Key } from 'react';
import { SelectionControl, SelectionHeaderControl } from '../features/SelectionColumn';
import { ExpandTrigger } from '../features/ExpandTrigger';
import { HeaderCell } from '../renderers/HeaderCell';
import { BodyCell } from '../renderers/BodyCell';
import { TABLE_DEFAULT_PREFIX } from '../constants';
import type {
  TableColumn,
  TableColumnGroup,
  TableColumnType,
  TableExpandableConfig,
  TableRowSelection,
  TableSize,
  TableSortOrder,
  TableVariant,
} from '../interface';
import type { TableSorterState } from './useTableDataPipeline';

type ColumnTransform<T> = (columns: TableColumnType<T>[]) => TableColumnType<T>[];

function isColumnGroup<T>(col: TableColumnType<T>): col is TableColumnGroup<T> {
  return 'children' in col && Array.isArray((col as TableColumnGroup<T>).children);
}

interface UseTableColumnsConfig<T> {
  columns: TableColumnType<T>[];
  size: TableSize;
  variant: TableVariant;
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
  const { expandable, mergedExpandedRowKeys, triggerExpand, getRowKey } = config;
  const customExpandIcon = expandable?.expandIcon;

  return (columns) => [
    {
      key: '__expand__',
      width: 48,
      render: (_: unknown, record: T, index: number) => {
        const recordKey = getRowKey(record, index);
        const expanded = mergedExpandedRowKeys.includes(recordKey);

        if (customExpandIcon) {
          return customExpandIcon({
            prefixCls: TABLE_DEFAULT_PREFIX,
            expanded,
            record,
            expandable: true,
            onExpand: (rec, e) => {
              e.stopPropagation();
              triggerExpand(getRowKey(rec, index), rec);
            },
          });
        }

        return (
          <ExpandTrigger
            expanded={expanded}
            onToggle={() => triggerExpand(recordKey, record)}
          />
        );
      },
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
      fixed: rowSelection.fixed ? 'left' : undefined,
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
    columns.map((column) => {
      if (isColumnGroup(column)) return column;
      return {
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
      };
    });
}

const SPACER_COLUMN_CLS = 'om-component-ui-table-cell--spacer';

function makeSpacerTransform<T>(): ColumnTransform<T> {
  return (columns) => [
    { key: '__spacer_start__', width: 16, title: '', className: SPACER_COLUMN_CLS, render: () => null },
    ...columns,
    { key: '__spacer_end__', width: 16, title: '', className: SPACER_COLUMN_CLS, render: () => null },
  ];
}

function makeRenderTransform<T>(): ColumnTransform<T> {
  return (columns) =>
    columns.map((column) => {
      if (isColumnGroup(column)) return column;
      return {
        ...column,
        render: (value: unknown, record: T, index: number) =>
          BodyCell({
            column: column as TableColumn<Record<string, unknown>>,
            value,
            record: record as Record<string, unknown>,
            index,
          }),
      };
    });
}

export function useTableColumns<T>(config: UseTableColumnsConfig<T>) {
  const {
    columns,
    variant,
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
    if (variant === 'stroke') {
      transforms.push(makeSpacerTransform<T>());
    }

    return transforms.reduce((cols, fn) => fn(cols), columns);
  }, [
    columns,
    variant,
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
