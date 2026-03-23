import type { HTMLAttributes } from 'react';

export const PAGINATION_ITEM_TYPES = ['previous', 'page', 'ellipsis', 'next'] as const;
export const PAGINATION_ELLIPSIS_POSITIONS = ['start', 'end'] as const;

export type PaginationItemType = (typeof PAGINATION_ITEM_TYPES)[number];
export type PaginationEllipsisPosition = (typeof PAGINATION_ELLIPSIS_POSITIONS)[number];

export interface UsePaginationOptions {
  total: number;
  pageSize?: number;
  current?: number;
  defaultCurrent?: number;
  disabled?: boolean;
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
  disabled?: boolean;
}

export interface PaginationPageItem extends PaginationItemBase {
  type: 'page';
  page: number;
  current: boolean;
}

export interface PaginationControlItem extends PaginationItemBase {
  type: 'previous' | 'next';
  page: number;
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
