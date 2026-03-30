import type { ButtonHTMLAttributes } from 'react';

export const BUTTON_COMPONENT_NAME = 'Button';
export const BUTTON_DEFAULT_PREFIX = 'button';

export const BUTTON_VARIANT = {
  contained: 'contained',
  text: 'text',
} as const;

export const BUTTON_VARIANTS = [
  BUTTON_VARIANT.contained,
  BUTTON_VARIANT.text,
] as const;

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

export const BUTTON_MODIFIER = {
  text: 'text',
  rounded: 'rounded',
  disabled: 'disabled',
  loading: 'loading',
} as const;

export const BUTTON_SLOT = {
  iconStart: 'icon-start',
  iconEnd: 'icon-end',
  loadingIcon: 'loading-icon',
} as const;

export const BUTTON_DEFAULT_VARIANT = BUTTON_VARIANT.contained;
export const BUTTON_DEFAULT_COLOR = BUTTON_COLOR.primary;
export const BUTTON_DEFAULT_SIZE = BUTTON_SIZE.medium;
export const BUTTON_DEFAULT_HTML_TYPE:
  NonNullable<ButtonHTMLAttributes<HTMLButtonElement>['type']> = 'button';

export const BUTTON_SPINNER_STROKE_WIDTH = '5';
export const BUTTON_ICON_INHERIT_COLOR = 'currentColor';
export const BUTTON_ICON_SIZE_BY_SIZE: Record<ButtonSize, number> = {
  [BUTTON_SIZE.large]: 20,
  [BUTTON_SIZE.medium]: 20,
  [BUTTON_SIZE.small]: 16,
};

export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];
export type ButtonColor = (typeof BUTTON_COLORS)[number];
export type ButtonSize = (typeof BUTTON_SIZES)[number];
