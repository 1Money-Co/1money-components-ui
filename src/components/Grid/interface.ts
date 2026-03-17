import type { HTMLAttributes } from 'react';

export type GridAlign = 'top' | 'middle' | 'bottom' | 'stretch';
export type GridJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
export type GridJustifyBreakpoint = GridBreakpoint;
export type GridJustifyResponsive = Partial<Record<GridJustifyBreakpoint, GridJustify>>;
export type GridBreakpoint = 'sm' | 'md' | 'lg';
export type GridGutterBreakpoint = GridBreakpoint;
export type GridGutterValue = number | string;
export type GridGutterResponsive = Partial<Record<GridGutterBreakpoint, GridGutterValue>>;
export type GridGutter = GridGutterValue | [GridGutterValue, GridGutterValue] | GridGutterResponsive | [GridGutterResponsive, GridGutterResponsive];

export type GridColSizeConfig = {
  span?: number;
  offset?: number;
  order?: number;
  pull?: number;
  push?: number;
  flex?: number | string;
};

export type GridColSize = number | GridColSizeConfig;

export interface GridRowProps extends HTMLAttributes<HTMLDivElement> {
  gutter?: GridGutter;
  align?: GridAlign;
  justify?: GridJustify | GridJustifyResponsive;
  wrap?: boolean;
  prefixCls?: string;
}

export interface GridColProps extends HTMLAttributes<HTMLDivElement> {
  span?: number;
  offset?: number;
  order?: number;
  pull?: number;
  push?: number;
  flex?: number | string;
  sm?: GridColSize;
  md?: GridColSize;
  lg?: GridColSize;
  prefixCls?: string;
}
