import type {
  AnchorHTMLAttributes,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from 'react';
import type { TooltipProps } from '@/components/Tooltip';

export const TYPOGRAPHY_DISPLAY_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'] as const;
export const TYPOGRAPHY_HEADLINE_SIZES = ['lg', 'md', 'sm', 'xs'] as const;
export const TYPOGRAPHY_TITLE_SIZES = ['lg', 'md', 'sm'] as const;
export const TYPOGRAPHY_BODY_SIZES = ['lg', 'md', 'sm'] as const;
export const TYPOGRAPHY_LABEL_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'] as const;
export const TYPOGRAPHY_LINK_SIZES = ['md', 'sm'] as const;

export type TypographyDisplaySize = (typeof TYPOGRAPHY_DISPLAY_SIZES)[number];
export type TypographyHeadlineSize = (typeof TYPOGRAPHY_HEADLINE_SIZES)[number];
export type TypographyTitleSize = (typeof TYPOGRAPHY_TITLE_SIZES)[number];
export type TypographyBodySize = (typeof TYPOGRAPHY_BODY_SIZES)[number];
export type TypographyLabelSize = (typeof TYPOGRAPHY_LABEL_SIZES)[number];
export type TypographyLinkSize = (typeof TYPOGRAPHY_LINK_SIZES)[number];

export type TypographyCategory = 'display' | 'headline' | 'title' | 'body' | 'label' | 'link';

export const TYPOGRAPHY_COLORS = [
  // Base
  'default',
  'default-secondary',
  'default-tertiary',
  // Disabled
  'disabled',
  // Brand
  'brand',
  'brand-secondary',
  'brand-tertiary',
  'on-brand',
  'on-brand-secondary',
  'on-brand-tertiary',
  // Neutral
  'neutral',
  'neutral-secondary',
  'neutral-tertiary',
  'on-neutral',
  'on-neutral-secondary',
  'on-neutral-tertiary',
  // Positive
  'positive',
  'positive-secondary',
  'positive-tertiary',
  'on-positive',
  'on-positive-secondary',
  'on-positive-tertiary',
  // Warning
  'warning',
  'warning-secondary',
  'warning-tertiary',
  'on-warning',
  'on-warning-secondary',
  'on-warning-tertiary',
  // Danger
  'danger',
  'danger-secondary',
  'danger-tertiary',
  'on-danger',
  'on-danger-secondary',
  'on-danger-tertiary',
] as const;

export type TypographyColor = (typeof TYPOGRAPHY_COLORS)[number];

type BaseHTMLProps = Omit<HTMLAttributes<HTMLElement>, 'children' | 'color'>;

export interface TypographyEllipsisConfig {
  rows?: number;
  tooltip?: boolean | TooltipProps;
}

export interface TypographyCopyableConfig {
  text?: string;
  icon?: ReactNode | [ReactNode, ReactNode];
  tooltips?: boolean | [ReactNode, ReactNode];
  duration?: number;
  onCopy?: (success: boolean, text: string) => void;
}

export interface TypographyCommonProps {
  children?: ReactNode;
  className?: string;
  prefixCls?: string;
  as?: ElementType;
  color?: TypographyColor;
  italic?: boolean;
  underline?: boolean;
  delete?: boolean;
  disabled?: boolean;
  ellipsis?: boolean | TypographyEllipsisConfig;
  copyable?: boolean | TypographyCopyableConfig;
}

export interface TypographyStrongProps extends TypographyCommonProps {
  strong?: boolean;
}

export interface TypographyDisplayProps extends BaseHTMLProps, TypographyCommonProps {
  size: TypographyDisplaySize;
}

export interface TypographyHeadlineProps extends BaseHTMLProps, TypographyCommonProps {
  size: TypographyHeadlineSize;
}

export interface TypographyTitleProps extends BaseHTMLProps, TypographyStrongProps {
  size: TypographyTitleSize;
}

export interface TypographyBodyProps extends BaseHTMLProps, TypographyStrongProps {
  size: TypographyBodySize;
}

export interface TypographyLabelProps extends BaseHTMLProps, TypographyStrongProps {
  size: TypographyLabelSize;
}

export interface TypographyLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'color'>,
    TypographyCommonProps {
  size: TypographyLinkSize;
}
