import { applyTablePipeline } from '../core/useTableDataPipeline';

type Row = { id: string; status: string; amount: number };

const rows: Row[] = [
  { id: '1', status: 'ok', amount: 30 },
  { id: '2', status: 'hold', amount: 10 },
  { id: '3', status: 'ok', amount: 20 },
  { id: '4', status: 'ok', amount: 40 },
];

it('applies filters before sorting before pagination', () => {
  const result = applyTablePipeline({
    columns: [
      {
        key: 'status',
        dataIndex: 'status',
        filters: [{ text: 'ok', value: 'ok' }],
        onFilter: (value, record) => record.status === value,
      },
      {
        key: 'amount',
        dataIndex: 'amount',
        sorter: (a, b) => a.amount - b.amount,
      },
    ],
    dataSource: rows,
    filters: { status: ['ok'] },
    sorter: { columnKey: 'amount', order: 'descend' },
    pagination: { current: 1, pageSize: 2 },
  });

  expect(result.currentDataSource.map(row => row.id)).toEqual(['4', '1']);
});
