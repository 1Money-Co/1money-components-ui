import 'jsdom-global/register';
import * as React from 'react';
import { act, render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Pagination, usePagination } from '../index';

const originalConsoleError = console.error;
const PAGINATION_CHEVRON_LEFT_PATH = 'M6.94922 11.9155L13.5884 4.83128L15.0506 6.20165L9.69584 11.9154L15.052 17.6295L13.5899 19L6.94922 11.9155Z';
const PAGINATION_CHEVRON_RIGHT_PATH = 'M9.4621 19L8 17.6295L13.3561 11.9154L8.00133 6.20165L9.46356 4.83128L16.1028 11.9155L9.4621 19Z';

beforeAll(() => {
  console.error = (message, ...optionalParams) => {
    const errorMessage = typeof message === 'string' ? message : String(message);
    if (
      errorMessage.includes('Could not parse CSS stylesheet') ||
      errorMessage.includes('findDOMNode is deprecated and will be removed')
    ) {
      return;
    }
    originalConsoleError(message, ...optionalParams);
  };
});

afterAll(() => {
  console.error = originalConsoleError;
});

const getLabels = (items: ReturnType<typeof usePagination>['items']) => items.map(item => {
  if (item.type === 'page') {
    return item.page;
  }

  return item.type;
});

describe('usePagination', () => {
  it('builds the expected range near the first page', () => {
    const { result } = renderHook(() => usePagination({
      total: 680,
      pageSize: 10,
      current: 1,
    }));

    expect(getLabels(result.current.items)).toEqual([
      'previous',
      1,
      2,
      3,
      'ellipsis',
      68,
      'next',
    ]);
    expect(result.current.canPrevious).toBe(false);
    expect(result.current.canNext).toBe(true);
  });

  it('creates two ellipsis gaps around a middle page', () => {
    const { result } = renderHook(() => usePagination({
      total: 680,
      pageSize: 10,
      current: 32,
    }));

    expect(getLabels(result.current.items)).toEqual([
      'previous',
      1,
      'ellipsis',
      31,
      32,
      33,
      'ellipsis',
      68,
      'next',
    ]);
  });

  it('supports configurable boundary sizes while keeping the default middle window', () => {
    const { result } = renderHook(() => usePagination({
      total: 680,
      pageSize: 10,
      current: 32,
      boundaryCount: 2,
    }));

    expect(getLabels(result.current.items)).toEqual([
      'previous',
      1,
      2,
      'ellipsis',
      31,
      32,
      33,
      'ellipsis',
      67,
      68,
      'next',
    ]);
  });

  it('clamps invalid current values to the available range', () => {
    const { result } = renderHook(() => usePagination({
      total: 30,
      pageSize: 10,
      defaultCurrent: 99,
    }));

    expect(result.current.current).toBe(3);
    expect(result.current.totalPages).toBe(3);
  });

  it('updates page state and emits onChange in uncontrolled mode', () => {
    const onChange = jest.fn();
    const { result } = renderHook(() => usePagination({
      total: 680,
      pageSize: 10,
      defaultCurrent: 1,
      onChange,
    }));

    act(() => {
      result.current.next();
    });

    expect(result.current.current).toBe(2);
    expect(onChange).toHaveBeenCalledWith(2, 10);
  });
});

describe('Pagination', () => {
  it('renders the default structure and matches the snapshot', () => {
    const { container } = render(
      <Pagination
        total={680}
        pageSize={10}
        defaultCurrent={1}
      />,
    );

    expect(screen.getByRole('navigation', { name: 'Pagination' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Page 1, current page' })).toHaveAttribute('aria-current', 'page');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('calls onChange when clicking a different page', async () => {
    const onChange = jest.fn();
    const user = userEvent.setup();

    render(
      <Pagination
        total={680}
        pageSize={10}
        defaultCurrent={1}
        onChange={onChange}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Go to page 2' }));

    expect(onChange).toHaveBeenCalledWith(2, 10);
    expect(screen.getByRole('button', { name: 'Page 2, current page' })).toHaveAttribute('aria-current', 'page');
  });

  it('renders nothing when total is zero', () => {
    const { container } = render(
      <Pagination
        total={0}
        pageSize={10}
      />,
    );

    expect(container.firstChild).toBeNull();
  });

  it('renders ellipsis as non-interactive content', () => {
    render(
      <Pagination
        total={680}
        pageSize={10}
        defaultCurrent={32}
      />,
    );

    expect(screen.getAllByText('...')).toHaveLength(2);
    expect(screen.queryByRole('button', { name: '...' })).not.toBeInTheDocument();
  });

  it('uses chevron icons for pagination controls', () => {
    render(
      <Pagination
        total={680}
        pageSize={10}
        defaultCurrent={1}
      />,
    );

    expect(
      screen.getByRole('button', { name: 'Previous page' }).querySelector('path')?.getAttribute('d'),
    ).toBe(PAGINATION_CHEVRON_LEFT_PATH);
    expect(
      screen.getByRole('button', { name: 'Next page' }).querySelector('path')?.getAttribute('d'),
    ).toBe(PAGINATION_CHEVRON_RIGHT_PATH);
  });

  it('applies explicit typography color for the current page', () => {
    render(
      <Pagination
        total={680}
        pageSize={10}
        defaultCurrent={1}
      />,
    );

    expect(
      screen.getByRole('button', { name: 'Page 1, current page' }).querySelector('.om-react-ui-typography'),
    ).toHaveClass('om-react-ui-typography-color-on-neutral');
  });
});
