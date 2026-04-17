import type { ButtonHTMLAttributes } from 'react';
import type { TypographyBodySize, TypographyHeadlineSize } from '@/components/Typography';

// ── Naming ──────────────────────────────────────────────────────────────────
export const BUTTON_COMPONENT_NAME = 'Button';
/** BEM-style prefix used by the `classnames` utility (e.g. `.button--primary`). */
export const BUTTON_DEFAULT_PREFIX = 'button';

// ── Variant ─────────────────────────────────────────────────────────────────
/** Visual style variants: `contained` (filled) or `text` (text-only). */
export const BUTTON_VARIANT = {
  contained: 'contained',
  text: 'text',
} as const;

export const BUTTON_VARIANTS = [
  BUTTON_VARIANT.contained,
  BUTTON_VARIANT.text,
] as const;

// ── Color ───────────────────────────────────────────────────────────────────
/** Available color tones applied to background (contained) or text (text variant). */
export const BUTTON_COLOR = {
  primary: 'primary',
  secondary: 'secondary',
  grey: 'grey',
  black: 'black',
  white: 'white',
  danger: 'danger',
  warning: 'warning',
} as const;

export const BUTTON_COLORS = [
  BUTTON_COLOR.primary,
  BUTTON_COLOR.secondary,
  BUTTON_COLOR.grey,
  BUTTON_COLOR.black,
  BUTTON_COLOR.white,
  BUTTON_COLOR.danger,
  BUTTON_COLOR.warning,
] as const;

// ── Size ────────────────────────────────────────────────────────────────────
/** Button size presets controlling height, padding, and typography scale. */
export const BUTTON_SIZE = {
  large: 'large',
  medium: 'medium',
  small: 'small',
} as const;

export const BUTTON_SIZES = [
  BUTTON_SIZE.large,
  BUTTON_SIZE.medium,
  BUTTON_SIZE.small,
] as const;

// ── BEM Modifiers & Slots ───────────────────────────────────────────────────
/** State modifiers appended as BEM modifier classes. */
export const BUTTON_MODIFIER = {
  text: 'text',
  rounded: 'rounded',
  disabled: 'disabled',
  loading: 'loading',
} as const;

/** Named slots for internal child elements (icons, spinner). */
export const BUTTON_SLOT = {
  iconStart: 'icon-start',
  iconEnd: 'icon-end',
  loadingIcon: 'loading-icon',
} as const;

// ── Defaults ────────────────────────────────────────────────────────────────
export const BUTTON_DEFAULT_VARIANT = BUTTON_VARIANT.contained;
export const BUTTON_DEFAULT_COLOR = BUTTON_COLOR.primary;
export const BUTTON_DEFAULT_SIZE = BUTTON_SIZE.large;
export const BUTTON_DEFAULT_HTML_TYPE:
  NonNullable<ButtonHTMLAttributes<HTMLButtonElement>['type']> = 'button';

// ── Icon & Spinner sizing ───────────────────────────────────────────────────
export const BUTTON_SPINNER_STROKE_WIDTH = '5';
/** Icons inherit the button's text color via CSS `currentColor`. */
export const BUTTON_ICON_INHERIT_COLOR = 'currentColor';

/** Default icon dimensions (px) per button size. */
export const BUTTON_ICON_SIZE_BY_SIZE: Record<ButtonSize, number> = {
  [BUTTON_SIZE.large]: 20,
  [BUTTON_SIZE.medium]: 20,
  [BUTTON_SIZE.small]: 16,
};

/** Spinner dimensions (px) per button size — slightly smaller than icons. */
export const BUTTON_LOADING_ICON_SIZE_BY_SIZE: Record<ButtonSize, number> = {
  [BUTTON_SIZE.large]: 20,
  [BUTTON_SIZE.medium]: 16,
  [BUTTON_SIZE.small]: 14,
};

// ── Derived types ───────────────────────────────────────────────────────────
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];
export type ButtonColor = (typeof BUTTON_COLORS)[number];
export type ButtonSize = (typeof BUTTON_SIZES)[number];

// ── Typography mapping ──────────────────────────────────────────────────────
/**
 * Maps each (variant, size) pair to the corresponding Typography component
 * and its props. This controls the text style rendered inside the button.
 */
export const BUTTON_TYPOGRAPHY_MAP: Record<
  ButtonVariant,
  Record<ButtonSize, { variant: 'body'; size: TypographyBodySize; strong: true } | { variant: 'headline'; size: TypographyHeadlineSize; strong?: never }>
> = {
  [BUTTON_VARIANT.contained]: {
    [BUTTON_SIZE.large]: { variant: 'body', size: 'lg', strong: true },
    [BUTTON_SIZE.medium]: { variant: 'body', size: 'md', strong: true },
    [BUTTON_SIZE.small]: { variant: 'body', size: 'sm', strong: true },
  },
  [BUTTON_VARIANT.text]: {
    [BUTTON_SIZE.large]: { variant: 'headline', size: 'xs' },
    [BUTTON_SIZE.medium]: { variant: 'body', size: 'lg', strong: true },
    [BUTTON_SIZE.small]: { variant: 'body', size: 'md', strong: true },
  },
};
