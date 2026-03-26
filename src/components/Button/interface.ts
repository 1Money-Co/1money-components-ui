import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'size'> {
  children?: ReactNode;
  prefixCls?: string;
  variant?: 'contained' | 'text';
  color?: 'primary' | 'secondary' | 'grey' | 'black' | 'white' | 'danger' | 'warning';
  size?: 'large' | 'medium' | 'small';
  loading?: boolean;
  rounded?: boolean;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
}
