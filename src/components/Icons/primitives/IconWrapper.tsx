import { memo, useMemo } from 'react';
import { default as classnames } from '@/utils/classnames';
/* import types */
import type { CSSProperties, FC, PropsWithChildren } from 'react';
import type { IconWrapperProps } from './interface';

const SVG_COLOR_STYLE_ID = 'om-icons-svg-colors';

const ensureSvgColorRules = () => {
  if (typeof document === 'undefined' || document.getElementById(SVG_COLOR_STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = SVG_COLOR_STYLE_ID;
  style.textContent =
    '.om-component-ui-icons *:not(g):not(defs):not(clipPath):not(linearGradient):not([fill]):not([stroke]):not([stroke-width]){fill:currentcolor}' +
    '.om-component-ui-icons *:not(g):not(defs):not(clipPath):not(linearGradient)[stroke-width]:not([stroke]):not([fill]){stroke:currentcolor}';
  document.head.appendChild(style);
};

ensureSvgColorRules();

export const IconWrapper: FC<PropsWithChildren<IconWrapperProps>> = (props) => {
  const {
    children,
    size = 24,
    width,
    height,
    color = 'currentColor',
    fill,
    stroke,
    className = '',
    wrapperCls = '',
    prefixCls = 'icons',
    viewBox = '0 0 24 24',
    style,
    ariaLabel,
    tabIndex,
    onClick,
    onKeyDown,
  } = props;
  const classes = classnames(prefixCls);
  const isInteractive = !!(onClick || onKeyDown);
  const iconWidth = `${width ?? size}px`;
  const iconHeight = `${height ?? size}px`;
  const mergedStyle = useMemo(() => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: iconWidth,
    height: iconHeight,
    color,
    fontStyle: 'normal',
    '--icon-color': color,
    '--icon-width': iconWidth,
    '--icon-height': iconHeight,
    ...style,
  } as CSSProperties), [color, iconWidth, iconHeight, style]);

  return <i
    style={mergedStyle}
    className={classes('wrapper', wrapperCls)}
    role={isInteractive ? 'button' : undefined}
    tabIndex={tabIndex ?? (isInteractive ? 0 : undefined)}
    aria-label={ariaLabel}
    onClick={onClick}
    onKeyDown={onKeyDown}
  >
    <svg
      width={width ?? size}
      height={height ?? size}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      shapeRendering="geometricPrecision"
      className={classes(undefined, className)}
      fill={fill ? 'currentColor' : 'none'}
      stroke={stroke ? 'currentColor' : 'none'}
    >
      { children }
    </svg>
  </i>;
};

export default memo(IconWrapper);
