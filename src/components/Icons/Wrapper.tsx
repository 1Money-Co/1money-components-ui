import { memo, useMemo } from 'react';
import { default as classnames, joinCls } from '@/utils/classnames';
/* import types */
import type { CSSProperties, FC, PropsWithChildren } from 'react';
import type { IconWrapperProps, IconHoverProps } from './interface';

export const IconWrapper: FC<PropsWithChildren<IconWrapperProps>> = (props) => {
  const {
    children,
    size = 24,
    width,
    height,
    color = '#131313',
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
  const mergedStyle = useMemo(() => ({
    '--icon-color': color,
    '--icon-width': `${width ?? size}px`,
    '--icon-height': `${height ?? size}px`,
    ...style,
  } as CSSProperties), [color, width, height, size, style]);

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
      className={classes(undefined, className)}
      fill={fill ? 'currentColor' : 'none'}
      stroke={stroke ? 'currentColor' : 'none'}
    >
      { children }
    </svg>
  </i>;
};


const IconHoverInner: FC<PropsWithChildren<IconHoverProps>> = (props) => {
  const { children, prefixCls = 'icons-hover', className, disabled, ...rest } = props;
  const classes = classnames(prefixCls);

  return <div
    className={joinCls(
      classes('wrapper'),
      disabled && classes('wrapper-disabled'),
      classes(undefined, className)
    )}
    {...rest}
  >
    { children }
  </div>;
};

export const IconHover = memo(IconHoverInner);

export default memo(IconWrapper);
