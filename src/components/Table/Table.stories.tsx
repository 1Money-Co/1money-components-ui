import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table, VirtualTable } from './index';
import type { TableColumn } from './interface';
import './style';

// ========================= Mock Data =========================
interface Row {
  id: string;
  wallet: string;
  network: string;
  status: string;
  amount: number;
  children?: Row[];
}

const rows: Row[] = [
  { id: '1', wallet: 'Primary Treasury', network: 'Ethereum', status: 'ok', amount: 1240 },
  { id: '2', wallet: 'Operations Wallet', network: 'Solana', status: 'hold', amount: 320 },
  {
    id: '3',
    wallet: 'Customer Funds',
    network: 'Polygon',
    status: 'ok',
    amount: 845,
    children: [
      { id: '3-1', wallet: 'Customer Funds / Sub', network: 'Polygon', status: 'ok', amount: 200 },
    ],
  },
  { id: '4', wallet: 'Payroll', network: 'Ethereum', status: 'ok', amount: 560 },
  { id: '5', wallet: 'Marketing Fund', network: 'Arbitrum', status: 'hold', amount: 190 },
  { id: '6', wallet: 'Reserve', network: 'Solana', status: 'ok', amount: 2100 },
  { id: '7', wallet: 'Grants Program', network: 'Polygon', status: 'ok', amount: 475 },
  { id: '8', wallet: 'Dev Fund', network: 'Ethereum', status: 'hold', amount: 730 },
];

const columns: TableColumn<Row>[] = [
  { key: 'wallet', dataIndex: 'wallet', title: 'Wallet', sorter: true, width: 200 },
  { key: 'network', dataIndex: 'network', title: 'Network', width: 120 },
  {
    key: 'status',
    dataIndex: 'status',
    title: 'Status',
    width: 100,
    filters: [
      { text: 'ok', value: 'ok' },
      { text: 'hold', value: 'hold' },
    ],
    onFilter: (value, record) => record.status === value,
    render: (value) => (
      <span style={{ color: value === 'ok' ? '#52c41a' : '#faad14' }}>
        {value === 'ok' ? 'OK' : 'Hold'}
      </span>
    ),
  },
  {
    key: 'amount',
    dataIndex: 'amount',
    title: 'Amount',
    width: 120,
    align: 'right',
    sorter: (a, b) => a.amount - b.amount,
    render: (value) => `$${(value as number).toLocaleString()}`,
  },
];

// ========================= Meta =========================
const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  args: {
    rowKey: 'id',
    columns,
    dataSource: rows,
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// ========================= Stories =========================

export const Basic: Story = {
  args: {
    pagination: false,
  },
};

export const WithPagination: Story = {
  args: {
    pagination: { pageSize: 3 },
  },
};

export const Sortable: Story = {
  args: {
    pagination: false,
  },
};

export const Filterable: Story = {
  args: {
    pagination: false,
  },
};

export const CheckboxSelection: Story = {
  render: (args) => {
    const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);

    return (
      <div>
        <div style={{ marginBottom: 12, color: '#666', fontSize: 13 }}>
          Selected: {selectedKeys.length} row(s)
          {selectedKeys.length > 0 && ` — ${selectedKeys.join(', ')}`}
        </div>
        <Table
          {...args}
          pagination={false}
          rowSelection={{
            type: 'checkbox',
            selectedRowKeys: selectedKeys,
            onChange: (keys) => setSelectedKeys(keys),
          }}
        />
      </div>
    );
  },
};

export const RadioSelection: Story = {
  render: (args) => {
    const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);

    return (
      <div>
        <div style={{ marginBottom: 12, color: '#666', fontSize: 13 }}>
          Selected: {selectedKeys[0] ?? 'none'}
        </div>
        <Table
          {...args}
          dataSource={rows.slice(0, 5)}
          pagination={false}
          rowSelection={{
            type: 'radio',
            selectedRowKeys: selectedKeys,
            onChange: (keys) => setSelectedKeys(keys),
          }}
        />
      </div>
    );
  },
};

export const ExpandableRows: Story = {
  args: {
    pagination: false,
    expandable: {
      expandedRowRender: (record: Row) => (
        <div style={{ padding: '8px 0' }}>
          <strong>{record.wallet}</strong> on {record.network} — ${record.amount.toLocaleString()}
          <br />
          <span style={{ color: '#999' }}>Status: {record.status}</span>
        </div>
      ),
    },
  },
};

export const TreeData: Story = {
  args: {
    dataSource: rows,
    childrenColumnName: 'children',
    pagination: false,
    expandable: {
      expandedRowRender: (record: Row) => `Details for ${record.wallet}`,
    },
  },
};

export const FixedColumns: Story = {
  args: {
    pagination: false,
    scroll: { x: 800 },
    columns: [
      { key: 'wallet', dataIndex: 'wallet', title: 'Wallet', fixed: 'left' as const, width: 200 },
      { key: 'network', dataIndex: 'network', title: 'Network', width: 150 },
      { key: 'status', dataIndex: 'status', title: 'Status', width: 150 },
      {
        key: 'amount',
        dataIndex: 'amount',
        title: 'Amount',
        width: 150,
        align: 'right' as const,
        fixed: 'right' as const,
        render: (value: unknown) => `$${(value as number).toLocaleString()}`,
      },
    ],
  },
};

export const StickyHeader: Story = {
  args: {
    sticky: true,
    scroll: { x: 960 },
    columns: [
      { key: 'wallet', dataIndex: 'wallet', title: 'Wallet', fixed: 'left' as const, width: 220 },
      ...columns.slice(1),
    ],
  },
};

export const CustomCellRender: Story = {
  args: {
    pagination: false,
    columns: [
      {
        key: 'wallet',
        dataIndex: 'wallet',
        title: 'Wallet',
        width: 220,
        render: (value: unknown, record: Row) => ({
          primary: value as string,
          secondary: record.network,
        }),
      },
      {
        key: 'status',
        dataIndex: 'status',
        title: 'Status',
        width: 100,
        render: (value: unknown) => (
          <span
            style={{
              padding: '2px 8px',
              borderRadius: 4,
              fontSize: 12,
              background: value === 'ok' ? '#f6ffed' : '#fff7e6',
              color: value === 'ok' ? '#52c41a' : '#fa8c16',
            }}
          >
            {(value as string).toUpperCase()}
          </span>
        ),
      },
      {
        key: 'amount',
        dataIndex: 'amount',
        title: 'Amount',
        width: 120,
        align: 'right' as const,
        render: (value: unknown) => (
          <strong>${(value as number).toLocaleString()}</strong>
        ),
      },
      {
        key: 'action',
        title: 'Action',
        width: 100,
        render: (_: unknown, record: Row) => (
          <button
            style={{ cursor: 'pointer', padding: '2px 8px' }}
            onClick={() => alert(`Edit ${record.wallet}`)}
          >
            Edit
          </button>
        ),
      },
    ],
  },
};

export const EmptyState: Story = {
  args: {
    dataSource: [],
    pagination: false,
  },
};

export const CustomEmptyState: Story = {
  args: {
    dataSource: [],
    pagination: false,
    empty: (
      <div style={{ padding: 40, textAlign: 'center', color: '#999' }}>
        <div style={{ fontSize: 32, marginBottom: 8 }}>:/</div>
        <div>No wallets found. Try adjusting your filters.</div>
      </div>
    ),
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <h3 style={{ marginBottom: 8 }}>Large (default)</h3>
        <Table {...args} dataSource={rows.slice(0, 3)} pagination={false} size="large" />
      </div>
      <div>
        <h3 style={{ marginBottom: 8 }}>Small</h3>
        <Table {...args} dataSource={rows.slice(0, 3)} pagination={false} size="small" />
      </div>
    </div>
  ),
};

export const VirtualScrolling: Story = {
  render: () => {
    const largeData: Row[] = Array.from({ length: 10000 }, (_, i) => ({
      id: String(i),
      wallet: `Wallet ${i + 1}`,
      network: ['Ethereum', 'Solana', 'Polygon', 'Arbitrum'][i % 4],
      status: i % 5 === 0 ? 'hold' : 'ok',
      amount: Math.floor(Math.random() * 5000) + 100,
    }));

    return (
      <div>
        <div style={{ marginBottom: 12, color: '#666', fontSize: 13 }}>
          10,000 rows with virtual scrolling
        </div>
        <VirtualTable
          columns={columns}
          dataSource={largeData}
          rowKey="id"
          scroll={{ x: 800, y: 400 }}
          pagination={false}
        />
      </div>
    );
  },
};
