import type { IconName } from '@/components/Icons';
import type { TypographyBodySize, TypographyLabelSize } from '@/components/Typography';

export const TAG_PREFIX_CLS = 'tag';

export const TAG_COLORS = ['neutral', 'warning', 'negative', 'success', 'recommended', 'black'] as const;
export const TAG_SIZES = ['large', 'medium', 'small'] as const;

export const TAG_DEFAULT_COLOR: (typeof TAG_COLORS)[number] = 'neutral';
export const TAG_DEFAULT_SIZE: (typeof TAG_SIZES)[number] = 'large';
export const TAG_REMOVE_ICON: IconName = 'cross';

export const TAG_ICON_SIZE_MAP: Record<(typeof TAG_SIZES)[number], number> = {
  large: 12,
  medium: 12,
  small: 10,
};

export const TAG_LABEL_TYPOGRAPHY_MAP: Record<
  (typeof TAG_SIZES)[number],
  | { variant: 'body'; size: TypographyBodySize; strong: true }
  | { variant: 'label'; size: TypographyLabelSize; strong?: never }
> = {
  large: { variant: 'body', size: 'sm', strong: true },
  medium: { variant: 'body', size: 'sm', strong: true },
  small: { variant: 'label', size: 'xs' },
};
