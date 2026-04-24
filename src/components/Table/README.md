# Table

## What it is

- `Table` is the standard table component.
- `VirtualTable` is the virtualized variant with numeric `scroll.x` and `scroll.y`.

## Import

```tsx
import { Table, VirtualTable } from '@1money/components-ui';
// or
import { Table, VirtualTable } from '@1money/components-ui/Table';
```

## Basic Usage

```tsx
<Table rowKey="id" columns={columns} dataSource={rows} />
```

## Figma-aligned Expandable Example

Use `expandable.showExpandColumn={false}` when the expand trigger should live inside your own business cell, instead of the default leading expand column.

```tsx
function WalletRegistryTable() {
  const [expandedRowKeys, setExpandedRowKeys] = useState<React.Key[]>(['wallet-ops']);

  return (
    <Table
      rowKey="id"
      size="small"
      variant="stroke"
      pagination={false}
      columns={[
        {
          key: 'walletName',
          title: 'Wallet name',
          render: (_value, record) => (
            <button
              type="button"
              onClick={() => {
                setExpandedRowKeys((current) => (
                  current.includes(record.id)
                    ? current.filter((key) => key !== record.id)
                    : [...current, record.id]
                ));
              }}
            >
              {record.walletName}
            </button>
          ),
        },
        {
          key: 'walletSummary',
          dataIndex: 'walletSummary',
          title: 'Wallet address',
        },
        {
          key: 'actions',
          title: 'Actions',
          align: 'right',
          render: () => '...',
        },
      ]}
      dataSource={rows}
      expandable={{
        showExpandColumn: false,
        expandedRowKeys,
        expandedRowRender: (record) => <WalletDetails record={record} />,
      }}
    />
  );
}
```

## Virtual Usage

```tsx
<VirtualTable
  rowKey="id"
  columns={columns}
  dataSource={rows}
  scroll={{ x: 1200, y: 360 }}
/>
```

## Migration Notes

- This component does not accept the old PrimeReact `value` prop.
- Use `dataSource` instead.
- `VirtualTable` is a separate export, not `virtual={true}` on `Table`.
- `expandable.showExpandColumn={false}` hides the built-in expand column so you can render a custom trigger in your own cell.

---

## Props

### `TableProps<T>`

Extends `HTMLAttributes<HTMLDivElement>` (excluding `onChange`). `T` is the row data type.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `TableColumnType<T>[]` | **required** | Column definitions. Each entry is a `TableColumn<T>` or a `TableColumnGroup<T>` (column groups have a `children` array). |
| `dataSource` | `T[]` | **required** | Array of row data objects. |
| `rowKey` | `keyof T \| ((record: T) => Key)` | **required** | Unique key for each row. Can be a field name or a function returning the key. |
| `size` | `'large' \| 'small'` | `'large'` | Row density / visual size variant. |
| `variant` | `'fill' \| 'stroke'` | `'fill'` | Table surface style. `'fill'` uses a filled background; `'stroke'` uses bordered rows. |
| `bordered` | `boolean` | — | Reserved for future use. Currently has no visual effect. |
| `scroll` | `{ x?: number \| true \| string; y?: number \| string }` | — | Enables horizontal (`x`) or vertical (`y`) scrolling. Set `x` to `true` to enable horizontal scroll without a fixed width. |
| `sticky` | `boolean \| { offsetHeader?: number; offsetScroll?: number }` | — | Makes the header sticky. Pass an object to offset the sticky position (useful when a fixed page header exists). |
| `pagination` | `false \| TablePaginationConfig` | — | Built-in pagination. Pass `false` to disable. Omitting the prop shows a default paginator. |
| `rowSelection` | `TableRowSelection<T>` | — | Enables row selection with checkboxes or radio buttons. See `TableRowSelection` below. |
| `expandable` | `TableExpandableConfig<T>` | — | Enables row expansion. See `TableExpandableConfig` below. |
| `childrenColumnName` | `string` | `'children'` | Field name used to detect nested / tree data. |
| `indentSize` | `number` | — | Width in pixels of each tree-data indent level. |
| `loading` | `boolean` | `false` | Overlays a spinner on the table. When `true` and `dataSource` is empty, the empty state is hidden. |
| `empty` | `EmptyProps \| ReactNode` | — | Custom empty state. Accepts `EmptyProps` or any React node. |
| `showHeader` | `boolean` | `true` | Shows or hides the table header row. |
| `tableLayout` | `'auto' \| 'fixed'` | — | CSS `table-layout` value. `'fixed'` enables precise column widths and ellipsis truncation. |
| `components` | `TableComponents<T>` | — | Overrides internal table sub-elements (table, header row/cell, body row/cell). See `TableComponents` below. |
| `direction` | `'ltr' \| 'rtl'` | `'ltr'` | Text and layout direction. |
| `rowHoverable` | `boolean` | `true` | Enables the row hover highlight. Set `false` to disable. |
| `onRow` | `(record: T, index?: number) => HTMLAttributes<HTMLElement>` | — | Returns props to apply to each `<tr>` element. Use to attach row-level event handlers. |
| `rowClassName` | `string \| ((record: T, index: number, indent: number) => string)` | — | Additional CSS class(es) applied to each row. |
| `summary` | `(data: readonly T[]) => ReactNode` | — | Renders a summary row at the bottom of the table body. Receives the full current data slice. |
| `onChange` | `(meta: TableChangeMeta<T>) => void` | — | Called after a pagination or sort change. `meta.action` is `'paginate'` or `'sort'`; `meta.currentDataSource` is the current visible slice. |
| `prefixCls` | `string` | `'om-component-ui-table'` | CSS class prefix for all internal elements. Override only if you need full style isolation. |
| `className` | `string` | `''` | Additional CSS class(es) on the root wrapper element. |

### `TableColumn<T>`

Defines a single data column. Grouped columns use `TableColumnGroup<T>` (see below).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `key` | `Key` | — | Unique key for this column. Required when `dataIndex` is absent. |
| `dataIndex` | `keyof T \| string \| string[]` | — | Field name(s) to read from the row record. Dot-path arrays are supported for nested fields. |
| `title` | `ReactNode` | — | Column header content. |
| `width` | `number \| string` | — | Column width (pixels or CSS string). Requires `tableLayout="fixed"` for exact widths. |
| `minWidth` | `number` | — | Minimum column width in pixels. |
| `fixed` | `'left' \| 'right'` | — | Pins the column to the left or right edge when horizontal scrolling is active. |
| `align` | `'left' \| 'center' \| 'right'` | `'left'` | Horizontal alignment of the cell content. |
| `ellipsis` | `boolean \| { tooltip?: boolean }` | `false` | Truncates overflowing text. Pass `{ tooltip: true }` to show a tooltip with the full content. |
| `hidden` | `boolean` | `false` | Hides the column without removing it from the column definition. |
| `colSpan` | `number` | — | Header cell column span. |
| `rowSpan` | `number` | — | Header cell row span. |
| `render` | `(value, record: T, index: number, meta: TableCellRenderMeta<T>) => ReactNode \| TableCellContentValue \| TableRenderedCell<T>` | — | Custom cell renderer. Return a `ReactNode` for simple content, a `TableCellContentValue` for structured primary/secondary/leading/trailing layout, or a `TableRenderedCell<T>` to control `colSpan`/`rowSpan` at the cell level. |
| `renderHeader` | `(meta: TableHeaderRenderMeta<T>) => ReactNode` | — | Custom header cell renderer. |
| `sorter` | `boolean \| ((a: T, b: T) => number) \| TableColumnSorterConfig<T>` | — | Enables column sorting. Pass `true` for server-side sort (no client comparator), a compare function, or a `TableColumnSorterConfig` for multi-column sort with priority. |
| `sortOrder` | `'ascend' \| 'descend' \| null` | — | Controlled sort order for this column. |
| `defaultSortOrder` | `'ascend' \| 'descend'` | — | Initial sort order (uncontrolled). |
| `onCell` | `(record: T, index?: number) => HTMLAttributes<HTMLElement> & TdHTMLAttributes<HTMLElement>` | — | Returns props to merge onto each data `<td>` element. |
| `onHeaderCell` | `(column: TableColumn<T>, index?: number) => HTMLAttributes<HTMLElement>` | — | Returns props to merge onto the header `<th>` element. |
| `shouldCellUpdate` | `(record: T, prevRecord: T) => boolean` | — | Optimization callback. Return `false` to skip re-rendering a cell when the row record changes. |
| `className` | `string` | — | CSS class applied to both header and data cells in this column. |
| `headerClassName` | `string` | — | CSS class applied only to the header cell. |
| `cellClassName` | `string \| ((value, record: T, index: number) => string)` | — | CSS class applied only to data cells, optionally computed per-row. |

### `TableColumnGroup<T>`

Used to create grouped (multi-level) headers. Contains a set of child columns rendered under a shared header.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `key` | `Key` | — | Unique key for the group. |
| `title` | `ReactNode` | — | Group header label. |
| `children` | `TableColumnType<T>[]` | **required** | Columns rendered under this group. |
| `align` | `'left' \| 'center' \| 'right'` | — | Header cell alignment. |
| `fixed` | `'left' \| 'right'` | — | Pins the entire group. |
| `className` | `string` | — | CSS class on the group header cell. |
| `headerClassName` | `string` | — | Additional CSS class on the group header cell. |

### `TablePaginationConfig`

Passed to `Table`'s `pagination` prop.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `current` | `number` | — | Controlled current page (1-based). |
| `defaultCurrent` | `number` | `1` | Initial page (uncontrolled). |
| `pageSize` | `number` | — | Controlled number of rows per page. |
| `defaultPageSize` | `number` | `10` | Initial page size (uncontrolled). |

### `TableRowSelection<T>`

Passed to `Table`'s `rowSelection` prop. Adds a selection column.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'checkbox' \| 'radio'` | `'checkbox'` | Selection mode. `'radio'` allows only one row at a time. |
| `selectedRowKeys` | `Key[]` | — | Controlled array of selected row keys. |
| `defaultSelectedRowKeys` | `Key[]` | `[]` | Initial selected keys (uncontrolled). |
| `onChange` | `(selectedRowKeys: Key[], selectedRows: T[], info: { type: TableRowSelectMethod }) => void` | — | Called when selection changes. `info.type` is `'all'`, `'none'`, or `'single'`. |
| `getCheckboxProps` | `(record: T) => Partial<{ disabled: boolean }>` | — | Returns per-row checkbox props. Use to disable selection for specific rows. |
| `preserveSelectedRowKeys` | `boolean` | `false` | Keeps selected keys in the selection state even after the corresponding rows are removed from `dataSource`. |
| `fixed` | `boolean` | `false` | Pins the selection column to the left. |
| `columnWidth` | `number \| string` | — | Width of the selection column. |

### `TableExpandableConfig<T>`

Passed to `Table`'s `expandable` prop.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `expandedRowKeys` | `Key[]` | — | Controlled array of expanded row keys. |
| `defaultExpandedRowKeys` | `Key[]` | `[]` | Initial expanded keys (uncontrolled). |
| `defaultExpandAllRows` | `boolean` | `false` | Expands all rows on initial render (uncontrolled). |
| `expandedRowRender` | `(record: T, index: number, indent: number, expanded: boolean) => ReactNode` | — | Renders the expanded panel beneath a row. Required for expansion to be available. |
| `expandedRowClassName` | `string \| ((record: T, index: number, indent: number) => string)` | — | CSS class applied to each expanded panel row. |
| `rowExpandable` | `(record: T) => boolean` | — | Controls whether a given row can be expanded. Return `false` to hide the expand trigger for that row. |
| `expandRowByClick` | `boolean` | `false` | Expands/collapses the row when the row itself is clicked, not just the expand icon. |
| `showExpandColumn` | `boolean` | `true` | Shows or hides the leading expand icon column. Set `false` when the expand trigger is embedded in a custom cell. |
| `expandIcon` | `(props: TableExpandIconProps<T>) => ReactNode` | — | Custom expand/collapse icon renderer. |
| `columnWidth` | `number \| string` | — | Width of the expand icon column. |
| `fixed` | `'left' \| 'right' \| boolean` | — | Pins the expand column. `true` pins to the left. |
| `onExpand` | `(expanded: boolean, record: T) => void` | — | Called when a row is expanded or collapsed. |
| `onExpandedRowsChange` | `(expandedKeys: Key[]) => void` | — | Called when the set of expanded rows changes. |

### `TableComponents<T>`

Passed to `Table`'s `components` prop to replace internal rendering elements.

| Prop | Type | Description |
|------|------|-------------|
| `table` | `ComponentType` | Replaces the outer `<table>` element. |
| `header.table` | `ComponentType` | Replaces the `<table>` inside `<thead>`. |
| `header.wrapper` | `ComponentType` | Replaces the `<thead>` wrapper. |
| `header.row` | `ComponentType` | Replaces header `<tr>`. |
| `header.cell` | `ComponentType` | Replaces header `<th>`. |
| `body.wrapper` | `ComponentType` | Replaces the `<tbody>` wrapper. |
| `body.row` | `ComponentType` | Replaces body `<tr>`. |
| `body.cell` | `ComponentType` | Replaces body `<td>`. |

### `TableRef`

Ref object returned when a `ref` is attached to `Table` or `VirtualTable`.

| Property | Type | Description |
|----------|------|-------------|
| `nativeElement?` | `HTMLDivElement \| null` | The root wrapper DOM element. |
| `scrollTo?` | `(config: { index?: number; key?: Key; top?: number; offset?: number }) => void` | Programmatically scrolls to a row by index, key, or pixel offset. |

---

## `VirtualTableProps<T>`

`VirtualTable` accepts all `TableProps<T>` props except `scroll`, which is replaced with a required numeric form.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `scroll` | `{ x: number; y: number }` | **required** | Both dimensions must be numeric pixel values. The table renders only the visible rows for performance. |
| `listItemHeight` | `number` | — | Estimated row height in pixels used by the virtual list for scroll calculations. Provide for more accurate scroll behaviour when rows have non-uniform heights. |

> All other props are inherited from `TableProps<T>`. See the `TableProps` table above.
