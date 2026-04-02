import type { HTMLAttributes, Key, ReactNode } from 'react';

export type TableSize = 'large' | 'small';
export type TableVariant = 'fill' | 'stroke';
export type TableAlign = 'left' | 'center' | 'right';
export type TableSortOrder = 'ascend' | 'descend' | null;

export interface TablePaginationConfig {
  current?: number;
  defaultCurrent?: number;
  pageSize?: number;
  defaultPageSize?: number;
}

export interface TableCellRenderMeta<T> {
  column: TableColumn<T>;
}

export interface TableHeaderRenderMeta<T> {
  column: TableColumn<T>;
}

export interface TableCellContentValue {
  primary: ReactNode;
  secondary?: ReactNode;
  leading?: ReactNode;
  trailing?: ReactNode;
}

export interface TableColumnSorterConfig<T> {
  compare: (a: T, b: T) => number;
  /** Priority number for multi-column sort. Columns with higher values are compared first. */
  multiple: number;
}

export interface TableColumn<T> {
  key?: Key;
  dataIndex?: keyof T | string | string[];
  title?: ReactNode;
  width?: number | string;
  minWidth?: number;
  fixed?: 'left' | 'right';
  align?: TableAlign;
  ellipsis?: boolean | { tooltip?: boolean };
  render?: (
    value: unknown,
    record: T,
    index: number,
    meta: TableCellRenderMeta<T>
  ) => ReactNode | TableCellContentValue;
  renderHeader?: (meta: TableHeaderRenderMeta<T>) => ReactNode;
  sorter?: boolean | ((a: T, b: T) => number) | TableColumnSorterConfig<T>;
  sortOrder?: TableSortOrder;
  defaultSortOrder?: Exclude<TableSortOrder, null>;
  className?: string;
  headerClassName?: string;
  cellClassName?: string | ((value: unknown, record: T, index: number) => string);
}

export interface TableChangeMeta<T> {
  currentDataSource: T[];
}

export interface TableRowSelection<T> {
  type?: 'checkbox' | 'radio';
  selectedRowKeys?: Key[];
  defaultSelectedRowKeys?: Key[];
  onChange?: (selectedRowKeys: Key[], selectedRows: T[]) => void;
  getCheckboxProps?: (record: T) => Partial<{ disabled: boolean }>;
  fixed?: boolean;
  columnWidth?: number | string;
}

export interface TableExpandableConfig<T> {
  expandedRowKeys?: Key[];
  defaultExpandedRowKeys?: Key[];
  expandedRowRender?: (record: T, index: number, indent: number, expanded: boolean) => ReactNode;
  rowExpandable?: (record: T) => boolean;
  expandRowByClick?: boolean;
  showExpandColumn?: boolean;
  onExpand?: (expanded: boolean, record: T) => void;
  onExpandedRowsChange?: (expandedKeys: Key[]) => void;
}

export interface TableRef {
  nativeElement?: HTMLDivElement | null;
  scrollTo?: (config: { index?: number; key?: Key; top?: number; offset?: number }) => void;
}

export interface TableProps<T> extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  prefixCls?: string;
  columns: TableColumn<T>[];
  dataSource: T[];
  rowKey: keyof T | ((record: T) => Key);
  size?: TableSize;
  variant?: TableVariant;
  bordered?: boolean;
  scroll?: { x?: number | true | string; y?: number | string };
  sticky?: boolean | { offsetHeader?: number; offsetScroll?: number };
  pagination?: false | TablePaginationConfig;
  rowSelection?: TableRowSelection<T>;
  expandable?: TableExpandableConfig<T>;
  childrenColumnName?: string;
  indentSize?: number;
  loading?: boolean;
  empty?: ReactNode;
  onChange?: (meta: TableChangeMeta<T>) => void;
}

export interface VirtualTableProps<T> extends Omit<TableProps<T>, 'scroll'> {
  scroll: { x: number; y: number };
  listItemHeight?: number;
}
