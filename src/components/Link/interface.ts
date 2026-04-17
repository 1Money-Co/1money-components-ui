import type { AnchorHTMLAttributes, MouseEvent, ReactNode, RefObject } from 'react';
import type { LINK_COLORS, LINK_SIZES } from './constants';

export type LinkColor = (typeof LINK_COLORS)[number];
export type LinkSize = (typeof LINK_SIZES)[number];

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
  ref?: RefObject<HTMLAnchorElement | null>;
  prefixCls?: string;
  color?: LinkColor;
  size?: LinkSize;
  disabled?: boolean;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}
