import { useMemo } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import {
  PAGINATION_DEFAULT_BOUNDARY_COUNT,
  PAGINATION_DEFAULT_CURRENT,
  PAGINATION_DEFAULT_MIDDLE_PAGE_COUNT,
  PAGINATION_DEFAULT_PAGE_SIZE,
  PAGINATION_DEFAULT_TOTAL,
  PAGINATION_ELLIPSIS_POSITION,
  PAGINATION_GAP_FILL_THRESHOLD,
  PAGINATION_ITEM_TYPE,
  PAGINATION_KEY_PREFIX,
} from './constants';
import type {
  PaginationControlItem,
  PaginationEllipsisItem,
  PaginationItem,
  PaginationPageItem,
  UsePaginationOptions,
  UsePaginationResult,
} from './interface';

const toInteger = (value: number | undefined, fallback: number) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.trunc(parsed) : fallback;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const normalizeTotal = (total: number) =>
  Math.max(PAGINATION_DEFAULT_TOTAL, toInteger(total, PAGINATION_DEFAULT_TOTAL));

const normalizePageSize = (pageSize?: number) =>
  Math.max(PAGINATION_DEFAULT_CURRENT, toInteger(pageSize, PAGINATION_DEFAULT_PAGE_SIZE));

const normalizeBoundaryCount = (boundaryCount?: number) =>
  Math.max(PAGINATION_DEFAULT_TOTAL, toInteger(boundaryCount, PAGINATION_DEFAULT_BOUNDARY_COUNT));

const normalizeMiddlePageCount = (middlePageCount?: number) =>
  Math.max(PAGINATION_DEFAULT_CURRENT, toInteger(middlePageCount, PAGINATION_DEFAULT_MIDDLE_PAGE_COUNT));

const getTotalPages = (total: number, pageSize: number) =>
  Math.max(PAGINATION_DEFAULT_CURRENT, Math.ceil(total / pageSize));

const getVisiblePages = (
  current: number,
  totalPages: number,
  boundaryCount: number,
  middlePageCount: number,
) => {
  const pages = new Set<number>();
  const maxWindowStart = Math.max(
    PAGINATION_DEFAULT_CURRENT,
    totalPages - middlePageCount + PAGINATION_DEFAULT_CURRENT,
  );
  const windowStart = clamp(
    current - Math.floor((middlePageCount - PAGINATION_DEFAULT_CURRENT) / 2),
    PAGINATION_DEFAULT_CURRENT,
    maxWindowStart,
  );
  const windowEnd = Math.min(
    windowStart + middlePageCount - PAGINATION_DEFAULT_CURRENT,
    totalPages,
  );

  for (let page = PAGINATION_DEFAULT_CURRENT; page <= Math.min(boundaryCount, totalPages); page += 1) {
    pages.add(page);
  }

  for (
    let page = Math.max(totalPages - boundaryCount + PAGINATION_DEFAULT_CURRENT, PAGINATION_DEFAULT_CURRENT);
    page <= totalPages;
    page += 1
  ) {
    pages.add(page);
  }

  for (let page = windowStart; page <= windowEnd; page += 1) {
    pages.add(page);
  }

  return [...pages]
    .filter(page => page >= PAGINATION_DEFAULT_CURRENT && page <= totalPages)
    .sort((left, right) => left - right);
};

const createPageItem = (
  page: number,
  current: number,
  disabled: boolean,
): PaginationPageItem => ({
  key: `${PAGINATION_KEY_PREFIX.page}-${page}`,
  type: PAGINATION_ITEM_TYPE.page,
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
  key: `${PAGINATION_KEY_PREFIX.ellipsis}-${position}`,
  type: PAGINATION_ITEM_TYPE.ellipsis,
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

      if (gap === PAGINATION_GAP_FILL_THRESHOLD) {
        items.push(createPageItem(previousPage + 1, current, disabled));
      } else if (gap > PAGINATION_GAP_FILL_THRESHOLD) {
        ellipsisCount += 1;
        items.push(createEllipsisItem(
          ellipsisCount === 1
            ? PAGINATION_ELLIPSIS_POSITION.start
            : PAGINATION_ELLIPSIS_POSITION.end,
        ));
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
  const canPrevious = current > PAGINATION_DEFAULT_CURRENT;
  const canNext = current < totalPages;

  return [
    createControlItem(
      PAGINATION_ITEM_TYPE.previous,
      clamp(current - 1, PAGINATION_DEFAULT_CURRENT, totalPages),
      disabled || !canPrevious,
    ),
    ...buildPageItems(current, totalPages, disabled, boundaryCount, middlePageCount),
    createControlItem(
      PAGINATION_ITEM_TYPE.next,
      clamp(current + 1, PAGINATION_DEFAULT_CURRENT, totalPages),
      disabled || !canNext,
    ),
  ];
};

export const usePagination = (options: UsePaginationOptions): UsePaginationResult => {
  const {
    total,
    pageSize,
    current,
    defaultCurrent = PAGINATION_DEFAULT_CURRENT,
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
    : clamp(toInteger(current, PAGINATION_DEFAULT_CURRENT), PAGINATION_DEFAULT_CURRENT, totalPages);
  const [innerCurrent, setInnerCurrent] = useControlledState(
    clamp(toInteger(defaultCurrent, PAGINATION_DEFAULT_CURRENT), PAGINATION_DEFAULT_CURRENT, totalPages),
    controlledCurrent,
  );
  const resolvedCurrent = clamp(
    toInteger(innerCurrent, PAGINATION_DEFAULT_CURRENT),
    PAGINATION_DEFAULT_CURRENT,
    totalPages,
  );

  const goTo = useEventCallback((page: number) => {
    if (disabled) {
      return;
    }

    const nextPage = clamp(toInteger(page, resolvedCurrent), PAGINATION_DEFAULT_CURRENT, totalPages);

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
    canPrevious: resolvedCurrent > PAGINATION_DEFAULT_CURRENT,
    canNext: resolvedCurrent < totalPages,
    items,
    goTo,
    previous,
    next,
  };
};

export default usePagination;
