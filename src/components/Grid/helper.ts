import type { GridColSize, GridColSizeConfig, GridGutter, GridGutterResponsive, GridGutterValue } from './interface';
import { GRID_FLEX_AUTO, GRID_GUTTER_FALLBACK } from './constants';

const normalizeGutterAxis = (value?: GridGutterValue | GridGutterResponsive): GridGutterResponsive => {
  if (value === undefined || value === null) return {};
  return typeof value === 'object' ? value : {};
};

const resolveBaseGutter = (value?: GridGutterValue | GridGutterResponsive) => {
  if (value === undefined || value === null) return GRID_GUTTER_FALLBACK;
  return typeof value === 'number' || typeof value === 'string' ? value : GRID_GUTTER_FALLBACK;
};

export const normalizeGutter = (gutter?: GridGutter) => {
  if (Array.isArray(gutter)) {
    return {
      baseX: resolveBaseGutter(gutter[0]),
      baseY: resolveBaseGutter(gutter[1]),
      x: normalizeGutterAxis(gutter[0]),
      y: normalizeGutterAxis(gutter[1])
    };
  }

  const normalized = normalizeGutterAxis(gutter);
  return {
    baseX: resolveBaseGutter(gutter),
    baseY: GRID_GUTTER_FALLBACK,
    x: normalized,
    y: {}
  };
};

export const toCssLength = (value?: GridGutterValue) => {
  if (value === undefined || value === null) return undefined;
  if (typeof value === 'number') return `${value}px`;
  return value;
};

export const normalizeColSize = (size?: GridColSize): GridColSizeConfig => {
  if (size === undefined || size === null) return {};
  return typeof size === 'number' ? { span: size } : size;
};

export const normalizeFlex = (flex?: number | string): string | undefined => {
  if (flex === undefined || flex === null) return undefined;
  if (typeof flex === 'number') return `${flex} ${flex} ${GRID_FLEX_AUTO}`;
  return flex;
};
