# Table

## What it is

- `Table` is the standard table component.
- `VirtualTable` is the virtualized variant with numeric `scroll.x` and `scroll.y`.

## Basic Usage

```tsx
<Table rowKey="id" columns={columns} dataSource={rows} />
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
