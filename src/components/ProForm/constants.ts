import type { TypographyColor, TypographyLabelSize } from '@/components/Typography';

export const CSS_PREFIX = 'proform';

export const WIDTH_SIZE_MAP: Record<string, number> = {
  sm: 160,
  md: 240,
  lg: 320,
  xl: 420,
};

export const DEFAULT_COL_SPAN = 24;

export const PROFORM_MODES = ['edit', 'read', 'update'] as const;
export type ProFormMode = (typeof PROFORM_MODES)[number];

// ── Typography ──
export const PROFORM_LIST_LABEL_SIZE: TypographyLabelSize = 'md';
export const PROFORM_LIST_LABEL_COLOR: TypographyColor = 'default';

export const DEFAULT_TEXT = {
  submit: 'Submit',
  reset: 'Reset',
  search: 'Search',
  add: 'Add',
  delete: 'Delete',
  copy: 'Copy',
  collapse: 'Collapse',
  expand: 'Expand',
} as const;
