import { useMemo } from 'react';
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
const DEFAULT_BOUNDARY_COUNT = 1;
const DEFAULT_MIDDLE_PAGE_COUNT = 3;

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

const normalizeBoundaryCount = (boundaryCount?: number) => Math.max(DEFAULT_TOTAL, toInteger(boundaryCount, DEFAULT_BOUNDARY_COUNT));

const normalizeMiddlePageCount = (middlePageCount?: number) => Math.max(DEFAULT_CURRENT, toInteger(middlePageCount, DEFAULT_MIDDLE_PAGE_COUNT));

const getTotalPages = (total: number, pageSize: number) => Math.max(DEFAULT_CURRENT, Math.ceil(total / pageSize));

const getVisiblePages = (
  current: number,
  totalPages: number,
  boundaryCount: number,
  middlePageCount: number,
) => {
  const pages = new Set<number>();
  const maxWindowStart = Math.max(DEFAULT_CURRENT, totalPages - middlePageCount + DEFAULT_CURRENT);
  const windowStart = clamp(
    current - Math.floor((middlePageCount - DEFAULT_CURRENT) / 2),
    DEFAULT_CURRENT,
    maxWindowStart,
  );
  const windowEnd = Math.min(windowStart + middlePageCount - DEFAULT_CURRENT, totalPages);

  for (let page = DEFAULT_CURRENT; page <= Math.min(boundaryCount, totalPages); page += 1) {
    pages.add(page);
  }

  for (
    let page = Math.max(totalPages - boundaryCount + DEFAULT_CURRENT, DEFAULT_CURRENT);
    page <= totalPages;
    page += 1
  ) {
    pages.add(page);
  }

  for (let page = windowStart; page <= windowEnd; page += 1) {
    pages.add(page);
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

const buildPageItems = (
  current: number,
  totalPages: number,
  disabled: boolean,
  boundaryCount: number,
  middlePageCount: number,
): PaginationItem[] => {
  const visiblePages = getVisiblePages(current, totalPages, boundaryCount, middlePageCount);
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

const buildPaginationItems = (
  current: number,
  totalPages: number,
  disabled: boolean,
  boundaryCount: number,
  middlePageCount: number,
) => {
  const canPrevious = current > DEFAULT_CURRENT;
  const canNext = current < totalPages;

  return [
    createControlItem('previous', clamp(current - 1, DEFAULT_CURRENT, totalPages), disabled || !canPrevious),
    ...buildPageItems(current, totalPages, disabled, boundaryCount, middlePageCount),
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
    boundaryCount,
    middlePageCount,
    onChange,
  } = options;

  const resolvedTotal = normalizeTotal(total);
  const resolvedPageSize = normalizePageSize(pageSize);
  const resolvedBoundaryCount = normalizeBoundaryCount(boundaryCount);
  const resolvedMiddlePageCount = normalizeMiddlePageCount(middlePageCount);
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

  const items = useMemo(
    () => buildPaginationItems(
      resolvedCurrent,
      totalPages,
      disabled,
      resolvedBoundaryCount,
      resolvedMiddlePageCount,
    ),
    [resolvedCurrent, totalPages, disabled, resolvedBoundaryCount, resolvedMiddlePageCount],
  );

  return {
    current: resolvedCurrent,
    pageSize: resolvedPageSize,
    total: resolvedTotal,
    totalPages,
    canPrevious: resolvedCurrent > DEFAULT_CURRENT,
    canNext: resolvedCurrent < totalPages,
    items,
    goTo,
    previous,
    next,
  };
};

export default usePagination;
