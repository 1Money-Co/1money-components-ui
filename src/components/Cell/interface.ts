import type { ButtonHTMLAttributes, ReactNode, Ref } from 'react';
import type { IconName } from '@/components/Icons';

export interface CellProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  ref?: Ref<HTMLButtonElement>;
  prefixCls?: string;
  className?: string;
  iconStart?: IconName;
  iconEnd?: IconName;
  active?: boolean;
  disabled?: boolean;
  children?: ReactNode;
}
