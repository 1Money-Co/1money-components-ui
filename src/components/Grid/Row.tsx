import { memo } from 'react';
import classnames, { joinCls } from '@/utils/classnames';
import { GRID_CLASS, GRID_DEFAULT_WRAP, GRID_ROW_PREFIX } from './constants';
import { buildGutterVars, buildJustifyVars } from './helper';
import type { CSSProperties, PropsWithChildren } from 'react';
import type { GridRowProps } from './interface';

export const Row = memo<PropsWithChildren<GridRowProps>>(props => {
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
  const gutterVars = buildGutterVars(gutter);
  const { staticValue: justifyValue, cssVars: justifyVars } = buildJustifyVars(justify);

  const mergedStyle: CSSProperties = { ...style, ...gutterVars, ...justifyVars };

  const classNameValue = joinCls(
    classes(),
    align && classes(`${GRID_CLASS.align}-${align}`),
    justifyValue && classes(`${GRID_CLASS.justify}-${justifyValue}`),
    wrap === false && classes(GRID_CLASS.noWrap),
    className
  );

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

Row.displayName = 'Row';

export default Row;
