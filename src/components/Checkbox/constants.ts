import type { TypographyBodySize, TypographyColor } from '@/components/Typography';

export const CHECKBOX = {
  label: {
    size: 'lg' as TypographyBodySize,
    color: {
      default: 'default' as TypographyColor,
      disabled: 'disabled' as TypographyColor,
    },
  },
  description: {
    size: 'md' as TypographyBodySize,
    color: {
      default: 'default-tertiary' as TypographyColor,
      disabled: 'disabled' as TypographyColor,
    },
  },
} as const;
