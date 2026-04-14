import type { CSSProperties, HTMLAttributes, KeyboardEvent, MouseEvent } from 'react';

export interface IconWrapperProps {
  id?: string;
  style?: CSSProperties;
  className?: string;
  wrapperCls?: string;
  prefixCls?: string;
  size?: number | `${number}`;
  width?: number | `${number}`;
  height?: number | `${number}`;
  color?: string;
  viewBox?: string;
  fill?: boolean;
  stroke?: boolean;
  ariaLabel?: string;
  tabIndex?: number;
  onClick?: (e: MouseEvent<HTMLElement>) => unknown;
  onKeyDown?: (e: KeyboardEvent<HTMLElement>) => unknown;
}

export interface IconHoverProps extends Omit<HTMLAttributes<HTMLDivElement>, 'prefix'> {
  className?: string;
  prefixCls?: string;
  disabled?: boolean;
}
