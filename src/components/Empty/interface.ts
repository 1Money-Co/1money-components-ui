import type { HTMLAttributes, ReactNode, RefObject } from 'react';
import type { IconName } from '@/components/Icons';

export interface EmptyProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  ref?: RefObject<HTMLDivElement | null>;
  prefixCls?: string;
  variant?: 'stroke' | 'fill';
  icon?: IconName | ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
}
