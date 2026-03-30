import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { ButtonColor, ButtonSize, ButtonVariant } from './constants';

export type { ButtonColor, ButtonSize, ButtonVariant } from './constants';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'size'> {
  children?: ReactNode;
  prefixCls?: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  loading?: boolean;
  rounded?: boolean;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
}
