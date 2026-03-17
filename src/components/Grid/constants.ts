import type { GridBreakpoint, GridJustify } from './interface';

export const GRID_ALIGN = {
  top: 'top',
  middle: 'middle',
  bottom: 'bottom',
  stretch: 'stretch'
} as const;

export const GRID_JUSTIFY = {
  start: 'start',
  end: 'end',
  center: 'center',
  spaceAround: 'space-around',
  spaceBetween: 'space-between',
  spaceEvenly: 'space-evenly'
} as const;

export const GRID_COLUMNS = 12;
export const GRID_ROW_PREFIX = 'grid-row';
export const GRID_COL_PREFIX = 'grid-col';
export const GRID_DEFAULT_WRAP = true;
export const GRID_GUTTER_FALLBACK = 0;
export const GRID_DEFAULT_GUTTER: [number, number] = [0, 0];
export const GRID_FLEX_AUTO = 'auto';

export const GRID_BREAKPOINTS: GridBreakpoint[] = ['sm', 'md', 'lg'];
export const GRID_JUSTIFY_BREAKPOINT = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
} as const;
export const GRID_JUSTIFY_CSS: Record<GridJustify, string> = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  'space-around': 'space-around',
  'space-between': 'space-between',
  'space-evenly': 'space-evenly'
};
export const GRID_BREAKPOINT_MIN_WIDTH: Record<GridBreakpoint, number> = {
  sm: 768,
  md: 1024,
  lg: 1280
};

export const GRID_CSS_VARS = {
  gutterX: '--om-grid-gutter-x',
  gutterY: '--om-grid-gutter-y',
  gutterXSm: '--om-grid-gutter-x-sm',
  gutterYSm: '--om-grid-gutter-y-sm',
  gutterXMd: '--om-grid-gutter-x-md',
  gutterYMd: '--om-grid-gutter-y-md',
  gutterXLg: '--om-grid-gutter-x-lg',
  gutterYLg: '--om-grid-gutter-y-lg',
  justify: '--om-grid-justify',
  justifySm: '--om-grid-justify-sm',
  justifyMd: '--om-grid-justify-md',
  justifyLg: '--om-grid-justify-lg',
  colFlex: '--om-grid-col-flex',
  colFlexPrefix: '--om-grid-col-flex-'
} as const;

export const GRID_CLASS = {
  noWrap: 'no-wrap',
  align: 'align',
  justify: 'justify',
  offset: 'offset',
  order: 'order',
  push: 'push',
  pull: 'pull'
} as const;
