import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Table from '../Table';
import { InternalRcTable } from '../internal';

describe('Table', () => {
  it('renders the vendored kernel through the local internal barrel', () => {
    render(
      <InternalRcTable
        prefixCls="table-kernel"
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name' }]}
        data={[{ key: '1', name: 'Kernel Row' }]}
        rowKey="key"
      />,
    );

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Kernel Row')).toBeInTheDocument();
  });

  it('renders rows from dataSource with a columns + dataSource API', () => {
    render(
      <Table
        rowKey="id"
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name' }]}
        dataSource={[{ id: '1', name: 'Alice' }]}
      />,
    );

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
  });

  it('toggles row selection through the public rowSelection API', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(
      <Table
        rowKey="id"
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name' }]}
        dataSource={[{ id: '1', name: 'Alice' }]}
        rowSelection={{ type: 'checkbox', onChange }}
      />,
    );

    await user.click(screen.getByRole('checkbox'));

    expect(onChange).toHaveBeenCalledWith(['1'], [{ id: '1', name: 'Alice' }]);
  });

  it('renders expanded content through expandable.expandedRowRender', async () => {
    const user = userEvent.setup();

    render(
      <Table
        rowKey="id"
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name' }]}
        dataSource={[{ id: '1', name: 'Alice' }]}
        expandable={{ expandedRowRender: record => <div>Extra {record.name}</div> }}
      />,
    );

    await user.click(screen.getByRole('button', { name: /expand row/i }));

    expect(screen.getByText('Extra Alice')).toBeInTheDocument();
  });

  it('renders a sortable header trigger when column.sorter is enabled', () => {
    render(
      <Table
        rowKey="id"
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name', sorter: true }]}
        dataSource={[{ id: '1', name: 'Alice' }]}
      />,
    );

    expect(screen.getByRole('button', { name: /sort name/i })).toBeInTheDocument();
  });

  it('uses the small header sort treatment for small tables', () => {
    render(
      <Table
        rowKey="id"
        size="small"
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name', sorter: true }]}
        dataSource={[{ id: '1', name: 'Alice' }]}
      />,
    );

    const title = screen.getByText('Name');
    const headerCell = title.closest('.om-react-ui-table-header-cell');
    const sortButton = screen.getByRole('button', { name: /sort name/i });
    const sortIcon = sortButton.querySelector('svg');

    expect(headerCell).toHaveClass('om-react-ui-table-header-cell--small');
    expect(sortButton).toHaveClass('om-react-ui-table-sort-trigger--small');
    expect(sortIcon).toHaveAttribute('width', '12');
    expect(sortIcon).toHaveAttribute('height', '12');
  });

  it('updates sort trigger icon state across sorting cycles', async () => {
    const user = userEvent.setup();

    render(
      <Table
        rowKey="id"
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name', sorter: true }]}
        dataSource={[{ id: '1', name: 'Alice' }]}
      />,
    );

    const sortButton = screen.getByRole('button', { name: /sort name/i });
    const getPathFills = () => Array.from(sortButton.querySelectorAll('path')).map(path => path.getAttribute('fill'));

    expect(getPathFills()).toEqual(['#9FA3A3']);

    await user.click(sortButton);
    expect(getPathFills()).toEqual(['#131313', '#9FA3A3']);

    await user.click(sortButton);
    expect(getPathFills()).toEqual(['#9FA3A3', '#131313']);

    await user.click(sortButton);
    expect(getPathFills()).toEqual(['#9FA3A3']);
  });

  it('includes the base wrapper class so shared table styles can apply', () => {
    const { container } = render(
      <Table
        rowKey="id"
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name' }]}
        dataSource={[{ id: '1', name: 'Alice' }]}
      />,
    );

    expect(container.querySelector('.om-react-ui-table')).toBeTruthy();
  });

  it('renders the expand affordance as a plain icon trigger', async () => {
    const user = userEvent.setup();

    render(
      <Table
        rowKey="id"
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name' }]}
        dataSource={[{ id: '1', name: 'Alice' }]}
        expandable={{ expandedRowRender: record => <div>Extra {record.name}</div> }}
      />,
    );

    const expandButton = screen.getByRole('button', { name: /expand row/i });
    const expandIcon = expandButton.querySelector('i');

    expect(expandButton).toHaveClass('om-react-ui-table-expand-trigger');
    expect(expandButton).toHaveAttribute('aria-expanded', 'false');
    expect(expandButton).not.toHaveAttribute('class', expect.stringContaining('--'));
    expect(expandIcon).not.toHaveStyle('transform: rotate(180deg)');

    await user.click(expandButton);

    expect(expandButton).toHaveAttribute('aria-expanded', 'true');
    expect(expandIcon).toHaveStyle('transform: rotate(180deg)');
  });

  it('renders primary and secondary cell content in the default cell renderer', () => {
    render(
      <Table
        rowKey="id"
        columns={[
          {
            key: 'wallet',
            title: 'Wallet',
            render: (_: unknown, record: { id: string; name: string; network: string }) => ({
              primary: record.name,
              secondary: record.network,
            }),
          },
        ]}
        dataSource={[{ id: '1', name: 'Main Wallet', network: 'Ethereum' }]}
      />,
    );

    expect(screen.getByText('Main Wallet')).toBeInTheDocument();
    expect(screen.getByText('Ethereum')).toBeInTheDocument();
  });

  it('emits onChange with the current client-side sorted page', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(
      <Table
        rowKey="id"
        onChange={onChange}
        pagination={{ current: 1, pageSize: 1 }}
        columns={[
          {
            key: 'amount',
            dataIndex: 'amount',
            title: 'Amount',
            sorter: (
              a: { amount: number },
              b: { amount: number },
            ) => a.amount - b.amount,
          },
        ]}
        dataSource={[
          { id: '1', amount: 30 },
          { id: '2', amount: 10 },
        ]}
      />,
    );

    await user.click(screen.getByRole('button', { name: /sort amount/i }));

    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls.at(-1)?.[0].currentDataSource).toEqual([{ id: '2', amount: 10 }]);
  });

  it('applies size and variant root classes', () => {
    const { container } = render(
      <Table
        rowKey="id"
        size="small"
        variant="stroke"
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name' }]}
        dataSource={[{ id: '1', name: 'Alice' }]}
      />,
    );

    expect(container.querySelector('.om-react-ui-table-small')).toBeTruthy();
    expect(container.querySelector('.om-react-ui-table-stroke')).toBeTruthy();
  });
});
