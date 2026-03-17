import type { HTMLAttributes, ReactNode } from 'react';

export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline';
export type SpaceDirection = 'horizontal' | 'vertical';
export type SpaceSize = 'small' | 'middle' | 'large' | number;

export interface SpaceProps extends HTMLAttributes<HTMLDivElement> {
  align?: SpaceAlign;
  direction?: SpaceDirection;
  size?: SpaceSize | [SpaceSize, SpaceSize];
  split?: ReactNode;
  wrap?: boolean;
  prefixCls?: string;
}
