import type { FlexGap } from './interface';

export const FLEX_ALIGN = {
  start: 'start',
  end: 'end',
  center: 'center',
  baseline: 'baseline',
  stretch: 'stretch'
} as const;

export const FLEX_JUSTIFY = {
  start: 'start',
  end: 'end',
  center: 'center',
  spaceAround: 'space-around',
  spaceBetween: 'space-between',
  spaceEvenly: 'space-evenly'
} as const;

export const FLEX_WRAP = {
  nowrap: 'nowrap',
  wrap: 'wrap',
  wrapReverse: 'wrap-reverse'
} as const;

export const FLEX_GAP = {
  small: 'small',
  middle: 'middle',
  large: 'large'
} as const;

export const FLEX_PREFIX = 'flex';
export const FLEX_GAP_DEFAULT = 0;
export const FLEX_GAP_SMALL = 8;
export const FLEX_GAP_MIDDLE = 16;
export const FLEX_GAP_LARGE = 24;

export const FLEX_CSS_VARS = {
  gap: '--om-flex-gap'
} as const;

export const FLEX_CLASS = {
  vertical: 'vertical',
  wrap: 'wrap',
  align: 'align',
  justify: 'justify'
} as const;

export const FLEX_GAP_MAP: Record<Exclude<FlexGap, number>, number> = {
  small: FLEX_GAP_SMALL,
  middle: FLEX_GAP_MIDDLE,
  large: FLEX_GAP_LARGE
};
