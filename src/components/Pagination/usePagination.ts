import { useControlledState, useEventCallback } from '@1money/hooks';
import type {
  PaginationControlItem,
  PaginationEllipsisItem,
  PaginationItem,
  PaginationPageItem,
  UsePaginationOptions,
  UsePaginationResult,
} from './interface';

const DEFAULT_CURRENT = 1;
const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_TOTAL = 0;
const FIXED_EDGE_PAGE_COUNT = 2;
const EDGE_CLUSTER_PAGE_COUNT = 3;

const toInteger = (value: number | undefined, fallback: number) => {
  const parsed = Number(value);

  if (!Number.isFinite(parsed)) {
    return fallback;
  }

  return Math.trunc(parsed);
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const normalizeTotal = (total: number) => Math.max(DEFAULT_TOTAL, toInteger(total, DEFAULT_TOTAL));

const normalizePageSize = (pageSize?: number) => Math.max(DEFAULT_CURRENT, toInteger(pageSize, DEFAULT_PAGE_SIZE));

const getTotalPages = (total: number, pageSize: number) => Math.max(DEFAULT_CURRENT, Math.ceil(total / pageSize));

const getVisiblePages = (current: number, totalPages: number) => {
  const pages = new Set<number>();

  for (let page = DEFAULT_CURRENT; page <= Math.min(FIXED_EDGE_PAGE_COUNT, totalPages); page += 1) {
    pages.add(page);
  }

  for (
    let page = Math.max(totalPages - FIXED_EDGE_PAGE_COUNT + DEFAULT_CURRENT, DEFAULT_CURRENT);
    page <= totalPages;
    page += 1
  ) {
    pages.add(page);
  }

  for (let page = current - 1; page <= current + 1; page += 1) {
    pages.add(page);
  }

  if (current <= EDGE_CLUSTER_PAGE_COUNT) {
    for (let page = DEFAULT_CURRENT; page <= Math.min(EDGE_CLUSTER_PAGE_COUNT, totalPages); page += 1) {
      pages.add(page);
    }
  }

  if (current >= totalPages - EDGE_CLUSTER_PAGE_COUNT + DEFAULT_CURRENT) {
    for (let page = Math.max(totalPages - EDGE_CLUSTER_PAGE_COUNT + DEFAULT_CURRENT, DEFAULT_CURRENT); page <= totalPages; page += 1) {
      pages.add(page);
    }
  }

  return [...pages].filter(page => page >= DEFAULT_CURRENT && page <= totalPages).sort((left, right) => left - right);
};

const createPageItem = (
  page: number,
  current: number,
  disabled: boolean,
): PaginationPageItem => ({
  key: `page-${page}`,
  type: 'page',
  page,
  current: page === current,
  disabled,
});

const createControlItem = (
  type: 'previous' | 'next',
  page: number,
  disabled: boolean,
): PaginationControlItem => ({
  key: type,
  type,
  page,
  disabled,
});

const createEllipsisItem = (
  position: 'start' | 'end',
): PaginationEllipsisItem => ({
  key: `ellipsis-${position}`,
  type: 'ellipsis',
  position,
  disabled: true,
});

const buildPageItems = (current: number, totalPages: number, disabled: boolean): PaginationItem[] => {
  const visiblePages = getVisiblePages(current, totalPages);
  const items: PaginationItem[] = [];
  let previousPage = 0;
  let ellipsisCount = 0;

  visiblePages.forEach(page => {
    if (previousPage > 0) {
      const gap = page - previousPage;

      if (gap === 2) {
        items.push(createPageItem(previousPage + 1, current, disabled));
      } else if (gap > 2) {
        ellipsisCount += 1;
        items.push(createEllipsisItem(ellipsisCount === 1 ? 'start' : 'end'));
      }
    }

    items.push(createPageItem(page, current, disabled));
    previousPage = page;
  });

  return items;
};

const buildPaginationItems = (current: number, totalPages: number, disabled: boolean) => {
  const canPrevious = current > DEFAULT_CURRENT;
  const canNext = current < totalPages;

  return [
    createControlItem('previous', clamp(current - 1, DEFAULT_CURRENT, totalPages), disabled || !canPrevious),
    ...buildPageItems(current, totalPages, disabled),
    createControlItem('next', clamp(current + 1, DEFAULT_CURRENT, totalPages), disabled || !canNext),
  ];
};

export const usePagination = (options: UsePaginationOptions): UsePaginationResult => {
  const {
    total,
    pageSize,
    current,
    defaultCurrent = DEFAULT_CURRENT,
    disabled = false,
    onChange,
  } = options;

  const resolvedTotal = normalizeTotal(total);
  const resolvedPageSize = normalizePageSize(pageSize);
  const totalPages = getTotalPages(resolvedTotal, resolvedPageSize);
  const controlledCurrent = current === undefined
    ? undefined
    : clamp(toInteger(current, DEFAULT_CURRENT), DEFAULT_CURRENT, totalPages);
  const [innerCurrent, setInnerCurrent] = useControlledState(
    clamp(toInteger(defaultCurrent, DEFAULT_CURRENT), DEFAULT_CURRENT, totalPages),
    controlledCurrent,
  );
  const resolvedCurrent = clamp(toInteger(innerCurrent, DEFAULT_CURRENT), DEFAULT_CURRENT, totalPages);

  const goTo = useEventCallback((page: number) => {
    if (disabled) {
      return;
    }

    const nextPage = clamp(toInteger(page, resolvedCurrent), DEFAULT_CURRENT, totalPages);

    if (nextPage === resolvedCurrent) {
      return;
    }

    setInnerCurrent(nextPage);
    onChange?.(nextPage, resolvedPageSize);
  });

  const previous = useEventCallback(() => {
    goTo(resolvedCurrent - 1);
  });

  const next = useEventCallback(() => {
    goTo(resolvedCurrent + 1);
  });

  return {
    current: resolvedCurrent,
    pageSize: resolvedPageSize,
    total: resolvedTotal,
    totalPages,
    canPrevious: resolvedCurrent > DEFAULT_CURRENT,
    canNext: resolvedCurrent < totalPages,
    items: buildPaginationItems(resolvedCurrent, totalPages, disabled),
    goTo,
    previous,
    next,
  };
};

export default usePagination;
