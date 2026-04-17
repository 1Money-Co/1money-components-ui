import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { ButtonColor, ButtonSize, ButtonVariant } from './constants';

export type { ButtonColor, ButtonSize, ButtonVariant } from './constants';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'size'> {
  /** Button label content. */
  children?: ReactNode;
  /** BEM class prefix, defaults to `"button"`. */
  prefixCls?: string;
  /** Visual style variant — `"contained"` (filled) or `"text"` (text-only). */
  variant?: ButtonVariant;
  /** Color tone applied to background (contained) or text (text variant). */
  color?: ButtonColor;
  /** Button size controlling height, padding, icon size, and typography. */
  size?: ButtonSize;
  /** Show a spinner in place of `iconStart` and disable the button. */
  loading?: boolean;
  /** Render with fully rounded (pill-shaped) corners. */
  rounded?: boolean;
  /** Icon or element rendered before the label. Replaced by a spinner when `loading`. */
  iconStart?: ReactNode;
  /** Icon or element rendered after the label. */
  iconEnd?: ReactNode;
}
