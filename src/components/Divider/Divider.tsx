import { memo } from 'react';
import classnames, { joinCls } from '@/utils/classnames';
import './style';
import {
  DIVIDER_COMPONENT_NAME,
  DIVIDER_DEFAULT_PREFIX,
  DIVIDER_DEFAULTS,
  DIVIDER_MODIFIER,
  DIVIDER_ORIENTATION_MARGIN_PROPERTY,
  DIVIDER_SLOT,
  DIVIDER_TYPE,
  DIVIDER_VARIANT,
} from './constants';
import type { DividerProps } from './interface';

export const Divider = memo<DividerProps>(props => {
  const {
    type = DIVIDER_DEFAULTS.type,
    orientation = DIVIDER_DEFAULTS.orientation,
    orientationMargin,
    plain = false,
    variant = DIVIDER_DEFAULTS.variant,
    prefixCls = DIVIDER_DEFAULT_PREFIX,
    className,
    children,
    style,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const showInlineText = type === DIVIDER_TYPE.horizontal && !!children;
  const hasCustomMargin = orientationMargin != null && orientationMargin !== '';

  const classNameValue = joinCls(
    classes(),
    classes(type),
    showInlineText && classes(DIVIDER_MODIFIER.withText),
    showInlineText && classes(`${DIVIDER_MODIFIER.withText}-${orientation}`),
    plain && classes(DIVIDER_MODIFIER.plain),
    variant !== DIVIDER_VARIANT.solid && classes(variant),
    hasCustomMargin && classes(DIVIDER_MODIFIER.noDefaultMargin),
    className,
  );

  const marginProperty = DIVIDER_ORIENTATION_MARGIN_PROPERTY[orientation];
  const innerStyle =
    showInlineText && hasCustomMargin && marginProperty
      ? { [marginProperty]: orientationMargin }
      : undefined;

  return (
    <div
      {...rest}
      className={classNameValue}
      style={style}
      role="separator"
    >
      {showInlineText && (
        <span className={classes(DIVIDER_SLOT.innerText)} style={innerStyle}>
          {children}
        </span>
      )}
    </div>
  );
});

Divider.displayName = DIVIDER_COMPONENT_NAME;

export default Divider;
