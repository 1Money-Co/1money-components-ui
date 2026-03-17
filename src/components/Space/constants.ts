import type { SpaceSize } from './interface';

export const SPACE_ALIGN = {
  start: 'start',
  end: 'end',
  center: 'center',
  baseline: 'baseline'
} as const;

export const SPACE_DIRECTION = {
  horizontal: 'horizontal',
  vertical: 'vertical'
} as const;

export const SPACE_SIZE = {
  small: 'small',
  middle: 'middle',
  large: 'large'
} as const;

export const SPACE_PREFIX = 'space';

export const SPACE_SIZE_SMALL = 8;
export const SPACE_SIZE_MIDDLE = 16;
export const SPACE_SIZE_LARGE = 24;
export const SPACE_SIZE_DEFAULT = SPACE_SIZE_SMALL;

export const SPACE_CSS_VARS = {
  gapX: '--om-space-gap-x',
  gapY: '--om-space-gap-y'
} as const;

export const SPACE_CLASS = {
  vertical: 'vertical',
  align: 'align',
  wrap: 'wrap',
  item: 'item',
  split: 'split'
} as const;

export const SPACE_SIZE_MAP: Record<Exclude<SpaceSize, number>, number> = {
  small: SPACE_SIZE_SMALL,
  middle: SPACE_SIZE_MIDDLE,
  large: SPACE_SIZE_LARGE
};
