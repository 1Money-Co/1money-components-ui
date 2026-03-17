import type { HTMLAttributes, MouseEvent, RefObject } from 'react';
import type { IconName } from '@/components/Icons';

export interface TagProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  ref?: RefObject<HTMLSpanElement | null>;
  prefixCls?: string;
  color?: 'neutral' | 'warning' | 'negative' | 'success' | 'recommended' | 'black';
  size?: 'large' | 'medium' | 'small';
  label?: string;
  icon?: IconName;
  removable?: boolean;
  onRemove?: (e: MouseEvent<HTMLSpanElement>) => void;
}
