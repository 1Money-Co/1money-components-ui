import '@testing-library/jest-dom';
import fs from 'fs';
import path from 'path';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Table from '../Table';
import { InternalRcTable } from '../internal';

const readTableStylesSource = () =>
  fs.readFileSync(path.resolve(__dirname, '../style/Table.scss'), 'utf8');
const readTableStoriesSource = () =>
  fs.readFileSync(path.resolve(__dirname, '../Table.stories.tsx'), 'utf8');

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

    await user.click(screen.getByRole('checkbox', { name: 'Select row' }));

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

  it('supports hiding the default expand column for inline custom triggers', () => {
    render(
      <Table
        rowKey="id"
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name' }]}
        dataSource={[{ id: '1', name: 'Alice' }]}
        expandable={{
          showExpandColumn: false,
          expandedRowKeys: ['1'],
          expandedRowRender: (record: { id: string; name: string }) => <div>Extra {record.name}</div>,
        }}
      />,
    );

    expect(screen.queryByRole('button', { name: /expand row/i })).not.toBeInTheDocument();
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

  it('maps row hover backgrounds to the default secondary token', () => {
    const stylesSource = readTableStylesSource();

    expect(stylesSource).toContain(
      "&:hover > td {\n      background: theme.palette(bg, 'default-secondary');",
    );
    expect(stylesSource).toContain(
      "&-tbody > tr:hover &-cell-fix-start,\n  &-tbody > tr:hover &-cell-fix-end {\n    background: theme.palette(bg, 'default-secondary');",
    );
    expect(stylesSource).toContain(
      "&:hover .#{$component}-cell {\n        background: theme.palette(bg, 'default-secondary');",
    );
  });

  it('uses absolute row-edge masks to inset separators without affecting table layout', () => {
    const stylesSource = readTableStylesSource();

    expect(stylesSource).toContain("&-tbody > tr {\n    position: relative;");
    expect(stylesSource).toContain("&::before,\n    &::after {");
    expect(stylesSource).toContain('position: absolute;');
    expect(stylesSource).toContain('bottom: 0;');
    expect(stylesSource).toContain('width: theme.spacing(component-padding, 400);');
    expect(stylesSource).toContain('height: 1px;');
    expect(stylesSource).toContain('pointer-events: none;');
    expect(stylesSource).not.toContain('display: table-cell;');
    expect(stylesSource).toContain(
      "&-small {\n    --table-row-height: 56px;\n    --table-header-height: 40px;\n\n    .#{$component}-thead > tr > th,\n    .#{$component}-thead > tr > td {\n      padding: theme.spacing(component-padding, 200) theme.spacing(component-padding, 300);",
    );
  });

  it('adds hover treatment to expandable-list detail rows', () => {
    const stylesSource = readTableStylesSource();
    const storiesSource = readTableStoriesSource();

    expect(storiesSource).toContain('className="om-react-ui-table-expandable-account-card"');
    expect(stylesSource).toContain('.#{$component}-expandable-account-card {');
    expect(stylesSource).toContain("&:hover {\n      background: theme.palette(bg, 'default-hover');");
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

  // ========================= Loading =========================

  it('renders spinner overlay when loading is true', () => {
    const { container } = render(
      <Table
        rowKey="id"
        loading
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name' }]}
        dataSource={[{ id: '1', name: 'Alice' }]}
      />,
    );

    expect(container.querySelector('.om-react-ui-table-wrapper--loading')).toBeTruthy();
    expect(container.querySelector('.om-react-ui-table-loading-overlay')).toBeTruthy();
  });

  it('hides empty state when loading with empty data', () => {
    render(
      <Table
        rowKey="id"
        loading
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name' }]}
        dataSource={[]}
      />,
    );

    expect(screen.queryByText('No data')).not.toBeInTheDocument();
  });

  it('does not show spinner when loading is false', () => {
    const { container } = render(
      <Table
        rowKey="id"
        loading={false}
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name' }]}
        dataSource={[]}
      />,
    );

    expect(container.querySelector('.om-react-ui-table-loading-overlay')).toBeFalsy();
  });

  // ========================= Pagination =========================

  it('shows only pageSize rows when pagination is configured', () => {
    render(
      <Table
        rowKey="id"
        pagination={{ pageSize: 1 }}
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name' }]}
        dataSource={[
          { id: '1', name: 'Alice' },
          { id: '2', name: 'Bob' },
        ]}
      />,
    );

    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.queryByText('Bob')).not.toBeInTheDocument();
  });

  it('shows all rows when pagination is false', () => {
    render(
      <Table
        rowKey="id"
        pagination={false}
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name' }]}
        dataSource={[
          { id: '1', name: 'Alice' },
          { id: '2', name: 'Bob' },
        ]}
      />,
    );

    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });

  // ========================= Selection Enhancements =========================

  it('renders header checkbox for select-all when type is checkbox', () => {
    render(
      <Table
        rowKey="id"
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name' }]}
        dataSource={[{ id: '1', name: 'Alice' }]}
        rowSelection={{ type: 'checkbox' }}
      />,
    );

    expect(screen.getByRole('checkbox', { name: 'Select all rows' })).toBeInTheDocument();
  });

  it('does not render header checkbox for radio selection', () => {
    render(
      <Table
        rowKey="id"
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name' }]}
        dataSource={[{ id: '1', name: 'Alice' }]}
        rowSelection={{ type: 'radio' }}
      />,
    );

    expect(screen.queryByRole('checkbox', { name: 'Select all rows' })).not.toBeInTheDocument();
  });

  it('select-all checkbox selects all non-disabled rows', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(
      <Table
        rowKey="id"
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name' }]}
        dataSource={[
          { id: '1', name: 'Alice' },
          { id: '2', name: 'Bob' },
          { id: '3', name: 'Carol' },
        ]}
        rowSelection={{
          type: 'checkbox',
          onChange,
          getCheckboxProps: (record: { id: string }) =>
            record.id === '2' ? { disabled: true } : {},
        }}
      />,
    );

    await user.click(screen.getByRole('checkbox', { name: 'Select all rows' }));

    // Bob (id: 2) is disabled, so only Alice and Carol should be selected
    expect(onChange).toHaveBeenCalledWith(
      ['1', '3'],
      expect.arrayContaining([
        expect.objectContaining({ id: '1' }),
        expect.objectContaining({ id: '3' }),
      ]),
    );
  });

  it('getCheckboxProps disables individual checkboxes', () => {
    render(
      <Table
        rowKey="id"
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name' }]}
        dataSource={[
          { id: '1', name: 'Alice' },
          { id: '2', name: 'Bob' },
        ]}
        rowSelection={{
          type: 'checkbox',
          getCheckboxProps: (record: { id: string }) =>
            record.id === '2' ? { disabled: true } : {},
        }}
      />,
    );

    const rowCheckboxes = screen.getAllByRole('checkbox', { name: 'Select row' });
    expect(rowCheckboxes[0]).not.toBeDisabled();
    expect(rowCheckboxes[1]).toBeDisabled();
  });

  // ========================= Multi-Column Sort =========================

  it('supports multi-column sort with { compare, multiple } format', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(
      <Table
        rowKey="id"
        onChange={onChange}
        pagination={false}
        columns={[
          {
            key: 'status',
            dataIndex: 'status',
            title: 'Status',
            sorter: {
              compare: (a: { status: string }, b: { status: string }) =>
                a.status.localeCompare(b.status),
              multiple: 2,
            },
          },
          {
            key: 'amount',
            dataIndex: 'amount',
            title: 'Amount',
            sorter: {
              compare: (a: { amount: number }, b: { amount: number }) =>
                a.amount - b.amount,
              multiple: 1,
            },
          },
        ]}
        dataSource={[
          { id: '1', status: 'active', amount: 30 },
          { id: '2', status: 'active', amount: 10 },
          { id: '3', status: 'pending', amount: 20 },
        ]}
      />,
    );

    // Sort by status (ascending)
    await user.click(screen.getByRole('button', { name: /sort status/i }));

    expect(onChange).toHaveBeenCalled();
    const lastCall = onChange.mock.calls.at(-1)?.[0].currentDataSource;
    // active rows should come before pending
    expect(lastCall[0].status).toBe('active');
    expect(lastCall[lastCall.length - 1].status).toBe('pending');
  });

  // ========================= onChange Regression =========================

  it('does NOT fire onChange on initial mount', () => {
    const onChange = jest.fn();

    render(
      <Table
        rowKey="id"
        onChange={onChange}
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name' }]}
        dataSource={[{ id: '1', name: 'Alice' }]}
      />,
    );

    expect(onChange).not.toHaveBeenCalled();
  });

  // ========================= Select-all Toggle Cycle =========================

  it('select-all then deselect-all preserves disabled row state', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(
      <Table
        rowKey="id"
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name' }]}
        dataSource={[
          { id: '1', name: 'Alice' },
          { id: '2', name: 'Bob' },
          { id: '3', name: 'Carol' },
        ]}
        rowSelection={{
          type: 'checkbox',
          onChange,
          selectedRowKeys: [],
          getCheckboxProps: (record: { id: string }) =>
            record.id === '2' ? { disabled: true } : {},
        }}
      />,
    );

    const selectAll = screen.getByRole('checkbox', { name: 'Select all rows' });

    // Select all
    await user.click(selectAll);
    expect(onChange).toHaveBeenLastCalledWith(
      ['1', '3'],
      expect.anything(),
    );
  });

  // ========================= Indeterminate State =========================

  it('shows indeterminate header checkbox when some rows are selected', () => {
    render(
      <Table
        rowKey="id"
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name' }]}
        dataSource={[
          { id: '1', name: 'Alice' },
          { id: '2', name: 'Bob' },
        ]}
        rowSelection={{
          type: 'checkbox',
          selectedRowKeys: ['1'],
        }}
      />,
    );

    const selectAll = screen.getByRole('checkbox', { name: 'Select all rows' });
    // When indeterminate, the checkbox input should not be fully checked
    expect(selectAll).not.toBeChecked();
  });

  // ========================= Empty DataSource =========================

  it('shows empty state when dataSource is empty and not loading', () => {
    render(
      <Table
        rowKey="id"
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name' }]}
        dataSource={[]}
      />,
    );

    expect(screen.getByText('No data')).toBeInTheDocument();
  });

  // ========================= Radio Selection =========================

  it('radio selection replaces previous selection on click', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(
      <Table
        rowKey="id"
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name' }]}
        dataSource={[
          { id: '1', name: 'Alice' },
          { id: '2', name: 'Bob' },
        ]}
        rowSelection={{ type: 'radio', onChange }}
      />,
    );

    const radios = screen.getAllByRole('radio');
    await user.click(radios[0]);
    expect(onChange).toHaveBeenLastCalledWith(['1'], expect.anything());

    await user.click(radios[1]);
    expect(onChange).toHaveBeenLastCalledWith(['2'], expect.anything());
  });
});
