import type { TooltipProps } from '@/components/Tooltip';
import type {
  TypographyBodyTag,
  TypographyCategory,
  TypographyDisplayTag,
  TypographyHeadlineTag,
  TypographyLabelTag,
  TypographyTitleTag,
} from './interface';

export const TYPOGRAPHY_PREFIX = 'typography';
export const DEFAULT_ELLIPSIS_START = 8;
export const DEFAULT_ELLIPSIS_END = 4;
export const DEFAULT_TYPOGRAPHY_TOOLTIP_PLACEMENT: TooltipProps['placement'] = 'top';
export const DEFAULT_TYPOGRAPHY_TOOLTIP_MIDDLEWARES: TooltipProps['middlewares'] = [];
export const BLOCK_WRAPPER_TAGS = new Set(['article', 'aside', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'section']);
export const BLOCK_LAYOUT = 'block';
export const INLINE_LAYOUT = 'inline';

export type TypographyLayoutMode = typeof BLOCK_LAYOUT | typeof INLINE_LAYOUT;
export type TypographyTextTag =
  | TypographyBodyTag
  | TypographyDisplayTag
  | TypographyHeadlineTag
  | TypographyLabelTag
  | TypographyTitleTag
  | 'a';

export interface TypographyClassNameOptions {
  prefixCls: string;
  className?: string;
  category: TypographyCategory;
  size: string;
  color?: string;
  strong?: boolean;
  italic?: boolean;
  underline?: boolean;
  isDeleted?: boolean;
  disabled?: boolean;
  ellipsis?: boolean;
  copyable?: boolean;
}

export interface VariantConfig {
  category: TypographyCategory;
  defaultTag: TypographyTextTag;
  defaultLayoutMode: TypographyLayoutMode;
  displayName: string;
  supportsStrong?: boolean;
}
