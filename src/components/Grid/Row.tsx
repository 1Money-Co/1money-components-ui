import { memo } from 'react';
import classnames, { joinCls } from '@/utils/classnames';
import { GRID_CLASS, GRID_CSS_VARS, GRID_DEFAULT_WRAP, GRID_JUSTIFY_BREAKPOINT, GRID_JUSTIFY_CSS, GRID_ROW_PREFIX } from './constants';
import { normalizeGutter, toCssLength } from './helper';
import type { FC, PropsWithChildren, CSSProperties } from 'react';
import type { GridJustify, GridJustifyResponsive, GridRowProps } from './interface';

export const Row: FC<PropsWithChildren<GridRowProps>> = props => {
  const {
    children,
    gutter,
    align,
    justify,
    wrap = GRID_DEFAULT_WRAP,
    className,
    style,
    prefixCls = GRID_ROW_PREFIX,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const { x: gutterX, y: gutterY, baseX: baseGutterX, baseY: baseGutterY } = normalizeGutter(gutter);

  const isJustifyResponsive = typeof justify === 'object' && justify !== null;
  const justifyValue = !isJustifyResponsive ? (justify as GridJustify | undefined) : undefined;
  const justifyMap = (isJustifyResponsive ? justify : {}) as GridJustifyResponsive;
  const baseJustify = justifyValue ?? justifyMap[GRID_JUSTIFY_BREAKPOINT.lg];

  const justifyVars = {
    ...(baseJustify ? { [GRID_CSS_VARS.justify]: GRID_JUSTIFY_CSS[baseJustify] } : {}),
    ...(justifyMap[GRID_JUSTIFY_BREAKPOINT.sm] ? { [GRID_CSS_VARS.justifySm]: GRID_JUSTIFY_CSS[justifyMap[GRID_JUSTIFY_BREAKPOINT.sm] as GridJustify] } : {}),
    ...(justifyMap[GRID_JUSTIFY_BREAKPOINT.md] ? { [GRID_CSS_VARS.justifyMd]: GRID_JUSTIFY_CSS[justifyMap[GRID_JUSTIFY_BREAKPOINT.md] as GridJustify] } : {}),
    ...(justifyMap[GRID_JUSTIFY_BREAKPOINT.lg] ? { [GRID_CSS_VARS.justifyLg]: GRID_JUSTIFY_CSS[justifyMap[GRID_JUSTIFY_BREAKPOINT.lg] as GridJustify] } : {})
  };

  const mergedStyle = ({
    ...style,
    [GRID_CSS_VARS.gutterX]: toCssLength(baseGutterX),
    [GRID_CSS_VARS.gutterY]: toCssLength(baseGutterY),
    ...(gutterX.sm !== undefined ? { [GRID_CSS_VARS.gutterXSm]: toCssLength(gutterX.sm) } : {}),
    ...(gutterY.sm !== undefined ? { [GRID_CSS_VARS.gutterYSm]: toCssLength(gutterY.sm) } : {}),
    ...(gutterX.md !== undefined ? { [GRID_CSS_VARS.gutterXMd]: toCssLength(gutterX.md) } : {}),
    ...(gutterY.md !== undefined ? { [GRID_CSS_VARS.gutterYMd]: toCssLength(gutterY.md) } : {}),
    ...(gutterX.lg !== undefined ? { [GRID_CSS_VARS.gutterXLg]: toCssLength(gutterX.lg) } : {}),
    ...(gutterY.lg !== undefined ? { [GRID_CSS_VARS.gutterYLg]: toCssLength(gutterY.lg) } : {}),
    ...justifyVars
  } as unknown) as CSSProperties;

  const classNameValue = classes(void 0, joinCls(
    align && classes(`${GRID_CLASS.align}-${align}`),
    justifyValue && classes(`${GRID_CLASS.justify}-${justifyValue}`),
    wrap === false && classes(GRID_CLASS.noWrap),
    className
  ));

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

export default memo(Row);
