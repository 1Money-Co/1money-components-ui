import type { HTMLAttributes } from 'react';

export type FlexAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
export type FlexJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type FlexGap = 'small' | 'middle' | 'large' | number;

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  vertical?: boolean;
  wrap?: boolean | FlexWrap;
  align?: FlexAlign;
  justify?: FlexJustify;
  gap?: FlexGap;
  prefixCls?: string;
}
