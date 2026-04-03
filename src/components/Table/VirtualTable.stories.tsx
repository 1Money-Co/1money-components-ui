import type { Meta, StoryObj } from '@storybook/react';
import { VirtualTable } from './index';
import './style';

type Row = {
  id: string;
  wallet: string;
  network: string;
  amount: number;
  children?: Row[];
};

const rows: Row[] = Array.from({ length: 20 }, (_, index) => ({
  id: String(index + 1),
  wallet: `Wallet ${index + 1}`,
  network: index % 2 === 0 ? 'Ethereum' : 'Solana',
  amount: (index + 1) * 125,
  children: index === 0
    ? [{ id: '1-1', wallet: 'Wallet 1 / Child', network: 'Ethereum', amount: 50 }]
    : undefined,
}));

const columns = [
  { key: 'wallet', dataIndex: 'wallet', title: 'Wallet', width: 260 },
  { key: 'network', dataIndex: 'network', title: 'Network', width: 180 },
  { key: 'amount', dataIndex: 'amount', title: 'Amount', width: 180 },
] as const;

const meta: Meta<typeof VirtualTable> = {
  title: 'Components/VirtualTable',
  component: VirtualTable,
  args: {
    rowKey: 'id',
    scroll: { x: 960, y: 240 },
    columns,
    dataSource: rows,
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const VirtualTableBasic: Story = {};

export const VirtualTableExpandable: Story = {
  args: {
    expandable: {
      expandedRowRender: (record: Row) => `Expanded details for ${record.wallet}`,
    },
  },
};

export const VirtualTableTreeSelection: Story = {
  args: {
    rowSelection: { type: 'checkbox' },
    childrenColumnName: 'children',
    dataSource: rows,
  },
};
