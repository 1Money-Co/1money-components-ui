import type React from 'react';
import type { CSSProperties, HTMLAttributes, Key, ReactNode } from 'react';

export type TableSize = 'large' | 'small';
export type TableVariant = 'fill' | 'stroke';
export type TableAlign = 'left' | 'center' | 'right';
export type TableSortOrder = 'ascend' | 'descend' | null;
export type TableAction = 'paginate' | 'sort';
export type TableLayout = 'auto' | 'fixed';
export type TableDirection = 'ltr' | 'rtl';

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

export interface TableRenderedCell<T> {
  children?: ReactNode;
  props?: {
    colSpan?: number;
    rowSpan?: number;
    className?: string;
    style?: CSSProperties;
  };
}

export interface TableColumnSorterConfig<T> {
  compare: (a: T, b: T) => number;
  /** Priority number for multi-column sort. Columns with higher values are compared first. */
  multiple: number;
}

export type TableGetComponentProps<T> = (
  data: T,
  index?: number,
) => HTMLAttributes<HTMLElement> & React.TdHTMLAttributes<HTMLElement>;

export type TableRowClassName<T> = string | ((record: T, index: number, indent: number) => string);

type TableCustomizeComponent =
  | React.ComponentType<any>
  | React.ForwardRefExoticComponent<any>
  | React.FC<any>
  | keyof React.JSX.IntrinsicElements;

export interface TableComponents<T> {
  table?: TableCustomizeComponent;
  header?: {
    table?: TableCustomizeComponent;
    wrapper?: TableCustomizeComponent;
    row?: TableCustomizeComponent;
    cell?: TableCustomizeComponent;
  };
  body?: {
    wrapper?: TableCustomizeComponent;
    row?: TableCustomizeComponent;
    cell?: TableCustomizeComponent;
  };
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
  hidden?: boolean;
  colSpan?: number;
  rowSpan?: number;
  render?: (
    value: unknown,
    record: T,
    index: number,
    meta: TableCellRenderMeta<T>
  ) => ReactNode | TableCellContentValue | TableRenderedCell<T>;
  renderHeader?: (meta: TableHeaderRenderMeta<T>) => ReactNode;
  sorter?: boolean | ((a: T, b: T) => number) | TableColumnSorterConfig<T>;
  sortOrder?: TableSortOrder;
  defaultSortOrder?: Exclude<TableSortOrder, null>;
  onCell?: TableGetComponentProps<T>;
  onHeaderCell?: TableGetComponentProps<TableColumn<T>>;
  shouldCellUpdate?: (record: T, prevRecord: T) => boolean;
  className?: string;
  headerClassName?: string;
  cellClassName?: string | ((value: unknown, record: T, index: number) => string);
}

export interface TableColumnGroup<T>
  extends Pick<TableColumn<T>, 'key' | 'title' | 'align' | 'className' | 'headerClassName' | 'fixed'> {
  children: TableColumnType<T>[];
}

export type TableColumnType<T> = TableColumn<T> | TableColumnGroup<T>;

export interface TableChangeMeta<T> {
  currentDataSource: T[];
  action: TableAction;
}

export type TableRowSelectMethod = 'all' | 'none' | 'single';

export interface TableRowSelection<T> {
  type?: 'checkbox' | 'radio';
  selectedRowKeys?: Key[];
  defaultSelectedRowKeys?: Key[];
  onChange?: (selectedRowKeys: Key[], selectedRows: T[], info: { type: TableRowSelectMethod }) => void;
  getCheckboxProps?: (record: T) => Partial<{ disabled: boolean }>;
  preserveSelectedRowKeys?: boolean;
  fixed?: boolean;
  columnWidth?: number | string;
}

export interface TableExpandIconProps<T> {
  prefixCls: string;
  expanded: boolean;
  record: T;
  expandable: boolean;
  onExpand: (record: T, e: React.MouseEvent<HTMLElement>) => void;
}

export interface TableExpandableConfig<T> {
  expandedRowKeys?: Key[];
  defaultExpandedRowKeys?: Key[];
  defaultExpandAllRows?: boolean;
  expandedRowRender?: (record: T, index: number, indent: number, expanded: boolean) => ReactNode;
  expandedRowClassName?: TableRowClassName<T>;
  rowExpandable?: (record: T) => boolean;
  expandRowByClick?: boolean;
  showExpandColumn?: boolean;
  expandIcon?: (props: TableExpandIconProps<T>) => ReactNode;
  columnWidth?: number | string;
  fixed?: 'left' | 'right' | boolean;
  onExpand?: (expanded: boolean, record: T) => void;
  onExpandedRowsChange?: (expandedKeys: Key[]) => void;
}

export interface TableRef {
  nativeElement?: HTMLDivElement | null;
  scrollTo?: (config: { index?: number; key?: Key; top?: number; offset?: number }) => void;
}

export interface TableProps<T> extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  prefixCls?: string;
  columns: TableColumnType<T>[];
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
  showHeader?: boolean;
  tableLayout?: TableLayout;
  components?: TableComponents<T>;
  direction?: TableDirection;
  rowHoverable?: boolean;
  onRow?: TableGetComponentProps<T>;
  rowClassName?: TableRowClassName<T>;
  summary?: (data: readonly T[]) => ReactNode;
  onChange?: (meta: TableChangeMeta<T>) => void;
}

export interface VirtualTableProps<T> extends Omit<TableProps<T>, 'scroll'> {
  scroll: { x: number; y: number };
  listItemHeight?: number;
}
