# Table

## What it is

- `Table` is the standard table component.
- `VirtualTable` is the virtualized variant with numeric `scroll.x` and `scroll.y`.

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
