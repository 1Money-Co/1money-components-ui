import { applyTablePipeline } from '../core/useTableDataPipeline';

type Row = { id: string; status: string; amount: number };

const rows: Row[] = [
  { id: '1', status: 'ok', amount: 30 },
  { id: '2', status: 'hold', amount: 10 },
  { id: '3', status: 'ok', amount: 20 },
  { id: '4', status: 'ok', amount: 40 },
];

it('applies sorting before pagination', () => {
  const result = applyTablePipeline({
    columns: [
      {
        key: 'amount',
        dataIndex: 'amount',
        sorter: (a, b) => a.amount - b.amount,
      },
    ],
    dataSource: rows,
    sorter: { columnKey: 'amount', order: 'descend' },
    pagination: { current: 1, pageSize: 2 },
  });

  expect(result.currentDataSource.map(row => row.id)).toEqual(['4', '1']);
});

it('supports multi-column sort with { compare, multiple } format', () => {
  const result = applyTablePipeline({
    columns: [
      {
        key: 'status',
        dataIndex: 'status',
        sorter: {
          compare: (a, b) => a.status.localeCompare(b.status),
          multiple: 2,
        },
      },
      {
        key: 'amount',
        dataIndex: 'amount',
        sorter: {
          compare: (a, b) => a.amount - b.amount,
          multiple: 1,
        },
      },
    ],
    dataSource: rows,
    sorter: { columnKey: 'status', order: 'ascend' },
    pagination: false,
  });

  // 'hold' < 'ok' alphabetically, so hold first
  expect(result.currentDataSource[0].status).toBe('hold');
});

it('returns unsorted data when no sorter is active', () => {
  const result = applyTablePipeline({
    columns: [
      {
        key: 'amount',
        dataIndex: 'amount',
        sorter: (a, b) => a.amount - b.amount,
      },
    ],
    dataSource: rows,
    sorter: {},
    pagination: false,
  });

  expect(result.currentDataSource.map(row => row.id)).toEqual(['1', '2', '3', '4']);
});

it('returns all rows when pagination is false', () => {
  const result = applyTablePipeline({
    columns: [],
    dataSource: rows,
    sorter: {},
    pagination: false,
  });

  expect(result.currentDataSource).toHaveLength(4);
  expect(result.total).toBe(4);
});
