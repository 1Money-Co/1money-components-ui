import { memo } from 'react';
import classnames, { joinCls } from '@/utils/classnames';
import './style';
import type { DividerProps } from './interface';

const DIVIDER_PREFIX = 'divider';

export const Divider = memo<DividerProps>(props => {
  const {
    type = 'horizontal',
    orientation = 'center',
    orientationMargin,
    plain = false,
    variant = 'solid',
    prefixCls = DIVIDER_PREFIX,
    className,
    children,
    style,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const isHorizontal = type === 'horizontal';
  const hasChildren = children !== undefined && children !== null && children !== '';
  const hasCustomMargin = orientationMargin != null && orientationMargin !== '';

  const classNameValue = joinCls(
    classes(),
    classes(type),
    hasChildren && isHorizontal && classes('with-text'),
    hasChildren && isHorizontal && classes(`with-text-${orientation}`),
    plain && classes('plain'),
    variant !== 'solid' && classes(variant),
    hasCustomMargin && classes('no-default-margin'),
    className,
  );

  const innerStyle =
    hasChildren && isHorizontal && hasCustomMargin
      ? {
          ...(orientation === 'left' ? { marginInlineStart: orientationMargin } : {}),
          ...(orientation === 'right' ? { marginInlineEnd: orientationMargin } : {}),
        }
      : undefined;

  return (
    <div
      {...rest}
      className={classNameValue}
      style={style}
      role="separator"
    >
      {hasChildren && isHorizontal ? (
        <span className={classes('inner-text')} style={innerStyle}>
          {children}
        </span>
      ) : null}
    </div>
  );
});

Divider.displayName = 'Divider';

export default Divider;
