import '@testing-library/jest-dom';
import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import VirtualTable from '../VirtualTable';

describe('VirtualTable', () => {
  it('renders rows from dataSource through VirtualTable', () => {
    render(
      <VirtualTable
        rowKey="id"
        scroll={{ x: 800, y: 240 }}
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name', width: 200 }]}
        dataSource={[{ id: '1', name: 'Virtual Alice' }]}
      />,
    );

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Virtual Alice')).toBeInTheDocument();
  });

  it('warns when VirtualTable receives a non-numeric scroll axis', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <VirtualTable
        rowKey="id"
        scroll={{ x: 800, y: '240px' as unknown as number }}
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name', width: 200 }]}
        dataSource={[{ id: '1', name: 'Alice' }]}
      />,
    );

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('exposes scrollTo through the forwarded ref', () => {
    const ref = createRef<{ scrollTo?: (config: unknown) => void }>();

    render(
      <VirtualTable
        ref={ref}
        rowKey="id"
        scroll={{ x: 800, y: 240 }}
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name', width: 200 }]}
        dataSource={Array.from({ length: 20 }, (_, index) => ({ id: String(index), name: `Row ${index}` }))}
      />,
    );

    expect(typeof ref.current?.scrollTo).toBe('function');
  });

  it('renders spinner overlay when loading is true', () => {
    const { container } = render(
      <VirtualTable
        rowKey="id"
        loading
        scroll={{ x: 800, y: 240 }}
        columns={[{ key: 'name', dataIndex: 'name', title: 'Name', width: 200 }]}
        dataSource={[{ id: '1', name: 'Alice' }]}
      />,
    );

    expect(container.querySelector('.om-react-ui-table-loading-overlay')).toBeTruthy();
  });
});
