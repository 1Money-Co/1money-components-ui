import { memo, useMemo } from 'react';
import classnames, { joinCls } from '@/utils/classnames';
import { GRID_BREAKPOINTS, GRID_CLASS, GRID_COL_PREFIX, GRID_CSS_VARS } from './constants';
import { normalizeColSize, normalizeFlex } from './helper';
import type { FC, PropsWithChildren, CSSProperties } from 'react';
import type { GridBreakpoint, GridColProps, GridColSize } from './interface';

export const Col: FC<PropsWithChildren<GridColProps>> = props => {
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
    const responsive = { sm, md, lg } as Record<GridBreakpoint, GridColSize | undefined>;
    const classList: string[] = [];
    const nextFlexVars: Record<string, string> = {};

    const addClass = (value: number | undefined | null, build: (value: number) => string) => {
      if (value !== undefined && value !== null) {
        classList.push(classes(build(value)));
      }
    };

    const applyBreakpoint = (breakpoint: GridBreakpoint, size?: GridColSize) => {
      if (size === undefined || size === null) return;

      const normalized = normalizeColSize(size);
      const hasFlex = normalized.flex !== undefined && normalized.flex !== null;

      if (normalized.span !== undefined && normalized.span !== null && !hasFlex) {
        addClass(normalized.span, value => `${breakpoint}-${value}`);
      }
      addClass(normalized.offset, value => `${breakpoint}-${GRID_CLASS.offset}-${value}`);
      addClass(normalized.order, value => `${breakpoint}-${GRID_CLASS.order}-${value}`);
      addClass(normalized.pull, value => `${breakpoint}-${GRID_CLASS.pull}-${value}`);
      addClass(normalized.push, value => `${breakpoint}-${GRID_CLASS.push}-${value}`);
      if (normalized.flex !== undefined && normalized.flex !== null) {
        const responsiveFlexValue = normalizeFlex(normalized.flex);
        if (responsiveFlexValue !== undefined) {
          nextFlexVars[`${GRID_CSS_VARS.colFlexPrefix}${breakpoint}`] = responsiveFlexValue;
        }
      }
    };

    GRID_BREAKPOINTS.forEach((breakpoint) => {
      applyBreakpoint(breakpoint, responsive[breakpoint]);
    });

    const normalizedFlexValue = normalizeFlex(flex);
    const nextClassNameValue = classes(void 0, joinCls(
      span !== null && span !== undefined && !normalizedFlexValue && classes(`${span}`),
      offset !== null && offset !== undefined && classes(`${GRID_CLASS.offset}-${offset}`),
      order !== null && order !== undefined && classes(`${GRID_CLASS.order}-${order}`),
      push !== null && push !== undefined && classes(`${GRID_CLASS.push}-${push}`),
      pull !== null && pull !== undefined && classes(`${GRID_CLASS.pull}-${pull}`),
      ...classList,
      className
    ));

    return {
      classNameValue: nextClassNameValue,
      flexValue: normalizedFlexValue,
      flexVars: nextFlexVars
    };
  }, [className, flex, lg, md, offset, order, prefixCls, pull, push, sm, span]);

  const mergedStyle = useMemo(() => ({
    ...style,
    ...(flexValue ? { [GRID_CSS_VARS.colFlex]: flexValue } : {}),
    ...flexVars
  } as CSSProperties), [style, flexValue, flexVars]);

  return (
    <div
      {...rest}
      style={mergedStyle}
      className={classNameValue}
    >
      {children}
    </div>
  );
};

export default memo(Col);
