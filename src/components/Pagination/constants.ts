import type { TypographyBodySize, TypographyColor } from '@/components/Typography';
import type { PaginationItemType } from './interface';

export const PAGINATION_COMPONENT_NAME = 'Pagination';
export const PAGINATION_DEFAULT_PREFIX = 'pagination';

// --- Item types ---
export const PAGINATION_ITEM_TYPE = {
  previous: 'previous',
  page: 'page',
  ellipsis: 'ellipsis',
  next: 'next',
} as const satisfies Record<string, PaginationItemType>;

// --- Ellipsis position ---
export const PAGINATION_ELLIPSIS_POSITION = {
  start: 'start',
  end: 'end',
} as const;

// --- Defaults ---
export const PAGINATION_DEFAULT_CURRENT = 1;
export const PAGINATION_DEFAULT_PAGE_SIZE = 10;
export const PAGINATION_DEFAULT_TOTAL = 0;
export const PAGINATION_DEFAULT_BOUNDARY_COUNT = 1;
export const PAGINATION_DEFAULT_MIDDLE_PAGE_COUNT = 3;

// --- UI ---
export const PAGINATION_CONTROL_ICON_SIZE = 16;
export const PAGINATION_CONTROL_ICON_COLOR = 'currentColor';
export const PAGINATION_ELLIPSIS_TEXT = '...';

export const PAGINATION_CONTROL_TEXT = {
  [PAGINATION_ITEM_TYPE.previous]: 'Previous',
  [PAGINATION_ITEM_TYPE.next]: 'Next',
} as const;

export const PAGINATION_CONTROL_ICON = {
  [PAGINATION_ITEM_TYPE.previous]: 'chevronLeft',
  [PAGINATION_ITEM_TYPE.next]: 'chevronRight',
} as const;

export const PAGINATION_TEXT_COLOR = {
  default: 'default',
  current: 'on-neutral',
  disabled: 'disabled',
} as const satisfies Record<'current' | 'default' | 'disabled', TypographyColor>;

// --- BEM modifiers ---
export const PAGINATION_SLOT = {
  list: 'list',
  item: 'item',
  itemEllipsis: 'item-ellipsis',
  button: 'button',
  buttonPage: 'button-page',
  buttonControl: 'button-control',
  buttonCurrent: 'button-current',
  buttonDisabled: 'button-disabled',
  ellipsis: 'ellipsis',
  icon: 'icon',
  disabled: 'disabled',
} as const;

// --- Typography ---
export const PAGINATION_TEXT_SIZE: TypographyBodySize = 'lg';

// --- Gap thresholds used when inserting ellipsis ---
export const PAGINATION_GAP_FILL_THRESHOLD = 2;

// --- Key prefixes ---
export const PAGINATION_KEY_PREFIX = {
  page: 'page',
  ellipsis: 'ellipsis',
} as const;
