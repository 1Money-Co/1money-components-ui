import type { GridColSize, GridColSizeConfig, GridGutter, GridGutterResponsive, GridGutterValue, GridJustify, GridJustifyResponsive } from './interface';
import { GRID_BREAKPOINTS, GRID_CSS_VARS, GRID_FLEX_AUTO, GRID_GUTTER_FALLBACK, GRID_JUSTIFY_CSS, GRID_RESPONSIVE_CSS_VARS } from './constants';

const normalizeGutterAxis = (value?: GridGutterValue | GridGutterResponsive): GridGutterResponsive => {
  if (value == null) return {};
  return typeof value === 'object' ? value : {};
};

const resolveBaseGutter = (value?: GridGutterValue | GridGutterResponsive) => {
  if (value == null) return GRID_GUTTER_FALLBACK;
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
  if (value == null) return undefined;
  if (typeof value === 'number') return `${value}px`;
  return value;
};

export const normalizeColSize = (size?: GridColSize): GridColSizeConfig => {
  if (size == null) return {};
  return typeof size === 'number' ? { span: size } : size;
};

export const normalizeFlex = (flex?: number | string): string | undefined => {
  if (flex == null) return undefined;
  if (typeof flex === 'number') return `${flex} ${flex} ${GRID_FLEX_AUTO}`;
  return flex;
};

export const buildGutterVars = (gutter?: GridGutter): Record<string, string> => {
  if (gutter == null) return {};

  const { x, y, baseX, baseY } = normalizeGutter(gutter);
  const vars: Record<string, string> = {};

  const baseXCss = toCssLength(baseX);
  const baseYCss = toCssLength(baseY);
  if (baseXCss !== undefined) vars[GRID_CSS_VARS.gutterX] = baseXCss;
  if (baseYCss !== undefined) vars[GRID_CSS_VARS.gutterY] = baseYCss;

  GRID_BREAKPOINTS.forEach(bp => {
    const responsive = GRID_RESPONSIVE_CSS_VARS[bp];
    const xCss = toCssLength(x[bp]);
    const yCss = toCssLength(y[bp]);
    if (xCss !== undefined) vars[responsive.gutterX] = xCss;
    if (yCss !== undefined) vars[responsive.gutterY] = yCss;
  });

  return vars;
};

export const buildJustifyVars = (justify?: GridJustify | GridJustifyResponsive): {
  staticValue?: GridJustify;
  cssVars: Record<string, string>;
} => {
  if (!justify) return { cssVars: {} };

  if (typeof justify !== 'object') {
    return {
      staticValue: justify,
      cssVars: { [GRID_CSS_VARS.justify]: GRID_JUSTIFY_CSS[justify] }
    };
  }

  const cssVars: Record<string, string> = {};
  const base = justify.lg;
  if (base) cssVars[GRID_CSS_VARS.justify] = GRID_JUSTIFY_CSS[base];

  GRID_BREAKPOINTS.forEach(bp => {
    const value = justify[bp];
    if (value) cssVars[GRID_RESPONSIVE_CSS_VARS[bp].justify] = GRID_JUSTIFY_CSS[value];
  });

  return { cssVars };
};
