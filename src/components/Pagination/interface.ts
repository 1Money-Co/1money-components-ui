import type { HTMLAttributes } from 'react';

export type PaginationItemType = 'previous' | 'page' | 'ellipsis' | 'next';
export type PaginationEllipsisPosition = 'start' | 'end';

export interface UsePaginationOptions {
  total: number;
  pageSize?: number;
  current?: number;
  defaultCurrent?: number;
  /**
   * Number of pages always displayed at both the start and end of the pagination.
   */
  boundaryCount?: number;
  /**
   * Maximum number of pages displayed in the current-page window.
   */
  middlePageCount?: number;
  onChange?: (page: number, pageSize: number) => void;
}

export interface PaginationProps
  extends Omit<HTMLAttributes<HTMLElement>, 'onChange'>,
    UsePaginationOptions {
  prefixCls?: string;
  'aria-label'?: string;
}

export interface PaginationItemBase {
  key: string;
  type: PaginationItemType;
}

export interface PaginationPageItem extends PaginationItemBase {
  type: 'page';
  page: number;
  current: boolean;
}

export interface PaginationControlItem extends PaginationItemBase {
  type: 'previous' | 'next';
  page: number;
  disabled: boolean;
}

export interface PaginationEllipsisItem extends PaginationItemBase {
  type: 'ellipsis';
  position: PaginationEllipsisPosition;
}

export type PaginationItem =
  | PaginationPageItem
  | PaginationControlItem
  | PaginationEllipsisItem;

export interface UsePaginationResult {
  current: number;
  pageSize: number;
  total: number;
  totalPages: number;
  canPrevious: boolean;
  canNext: boolean;
  items: PaginationItem[];
  goTo: (page: number) => void;
  previous: () => void;
  next: () => void;
}
