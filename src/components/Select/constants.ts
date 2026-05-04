import type { TypographyBodySize, TypographyColor, TypographyLabelSize } from '@/components/Typography';

export const KEYBOARD = {
  ENTER: 'Enter',
  SPACE: ' ',
  ARROW_DOWN: 'ArrowDown',
  ARROW_UP: 'ArrowUp',
  ESCAPE: 'Escape',
} as const;

interface SelectTypographyConfig {
  label: {
    size: TypographyLabelSize;
    color: {
      default: TypographyColor;
      disabled: TypographyColor;
    };
  };
  description: {
    size: TypographyBodySize;
    color: {
      default: TypographyColor;
      disabled: TypographyColor;
    };
  };
  feedback: {
    size: TypographyBodySize;
  };
  option: {
    label: { size: TypographyBodySize };
    description: {
      size: TypographyBodySize;
      color: TypographyColor;
    };
  };
  groupLabel: {
    size: TypographyLabelSize;
  };
  empty: {
    size: TypographyBodySize;
    color: TypographyColor;
  };
}

export const SELECT_TYPOGRAPHY: SelectTypographyConfig = {
  label: {
    size: 'lg',
    color: { default: 'default', disabled: 'disabled' },
  },
  description: {
    size: 'md',
    color: { default: 'default-tertiary', disabled: 'disabled' },
  },
  feedback: { size: 'sm' },
  option: {
    label: { size: 'md' },
    description: { size: 'sm', color: 'default-tertiary' },
  },
  groupLabel: { size: 'lg' },
  empty: { size: 'md', color: 'default-tertiary' },
};
