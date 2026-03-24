import { memo, useMemo } from 'react';
import classnames, { joinCls } from '@/utils/classnames';
import { GRID_BREAKPOINTS, GRID_CLASS, GRID_COL_PREFIX, GRID_CSS_VARS, GRID_RESPONSIVE_CSS_VARS } from './constants';
import { normalizeColSize, normalizeFlex } from './helper';
import type { CSSProperties, PropsWithChildren } from 'react';
import type { GridBreakpoint, GridColProps, GridColSize } from './interface';

type ClassBuilder = (modifier: string) => string;

const buildResponsiveConfig = (
  breakpoints: Record<GridBreakpoint, GridColSize | undefined>,
  classes: ClassBuilder
) => {
  const classList: string[] = [];
  const flexVars: Record<string, string> = {};

  GRID_BREAKPOINTS.forEach(bp => {
    const size = breakpoints[bp];
    if (size == null) return;

    const normalized = normalizeColSize(size);
    const flexValue = normalizeFlex(normalized.flex);

    if (normalized.span != null && !flexValue) classList.push(classes(`${bp}-${normalized.span}`));
    if (normalized.offset != null) classList.push(classes(`${bp}-${GRID_CLASS.offset}-${normalized.offset}`));
    if (normalized.order != null) classList.push(classes(`${bp}-${GRID_CLASS.order}-${normalized.order}`));
    if (normalized.pull != null) classList.push(classes(`${bp}-${GRID_CLASS.pull}-${normalized.pull}`));
    if (normalized.push != null) classList.push(classes(`${bp}-${GRID_CLASS.push}-${normalized.push}`));
    if (flexValue) flexVars[GRID_RESPONSIVE_CSS_VARS[bp].colFlex] = flexValue;
  });

  return { classList, flexVars };
};

export const Col = memo<PropsWithChildren<GridColProps>>(props => {
  const {
    children,
    span,
    offset,
    order,
    pull,
    push,
    flex,
    sm,
    md,
    lg,
    className,
    style,
    prefixCls = GRID_COL_PREFIX,
    ...rest
  } = props;

  const { classNameValue, flexValue, flexVars } = useMemo(() => {
    const classes = classnames(prefixCls);
    const { classList, flexVars } = buildResponsiveConfig({ sm, md, lg }, classes);
    const normalizedFlex = normalizeFlex(flex);

    const nextClassName = joinCls(
      classes(),
      span != null && !normalizedFlex && classes(`${span}`),
      offset != null && classes(`${GRID_CLASS.offset}-${offset}`),
      order != null && classes(`${GRID_CLASS.order}-${order}`),
      push != null && classes(`${GRID_CLASS.push}-${push}`),
      pull != null && classes(`${GRID_CLASS.pull}-${pull}`),
      ...classList,
      className
    );

    return { classNameValue: nextClassName, flexValue: normalizedFlex, flexVars };
  }, [className, flex, lg, md, offset, order, prefixCls, pull, push, sm, span]);

  const mergedStyle: CSSProperties = useMemo(() => ({
    ...style,
    ...(flexValue && { [GRID_CSS_VARS.colFlex]: flexValue }),
    ...flexVars
  }), [style, flexValue, flexVars]);

  return (
    <div
      {...rest}
      style={mergedStyle}
      className={classNameValue}
    >
      {children}
    </div>
  );
});

Col.displayName = 'Col';

export default Col;
