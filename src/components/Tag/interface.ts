import type { HTMLAttributes, MouseEvent, RefObject } from 'react';
import type { IconName } from '@/components/Icons';
import type { TAG_COLORS, TAG_SIZES } from './constants';

export type TagColor = (typeof TAG_COLORS)[number];
export type TagSize = (typeof TAG_SIZES)[number];

export interface TagProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  ref?: RefObject<HTMLSpanElement | null>;
  prefixCls?: string;
  color?: TagColor;
  size?: TagSize;
  label?: string;
  icon?: IconName;
  removable?: boolean;
  onRemove?: (e: MouseEvent<HTMLSpanElement>) => void;
}
