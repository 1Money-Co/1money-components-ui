import { cloneElement, forwardRef, isValidElement, memo } from 'react';
import Spinner from '@/components/Spinner';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { ReactElement, ReactNode } from 'react';
import type { ButtonProps } from './interface';

const SPINNER_STROKE_WIDTH = '5';
const BUTTON_ICON_SIZES = {
  large: 20,
  medium: 20,
  small: 16,
} as const;
const ICON_INHERIT_COLOR = 'currentColor';

type ButtonSize = NonNullable<ButtonProps['size']>;
type ButtonIconElementProps = {
  color?: string;
  size?: number | `${number}`;
  width?: number | `${number}`;
  height?: number | `${number}`;
};

const normalizeAdornment = (adornment: ReactNode, size: ButtonSize) => {
  if (!isValidElement(adornment)) {
    return adornment;
  }

  const adornmentProps = adornment.props as ButtonIconElementProps;
  const nextProps: ButtonIconElementProps = {};

  if (adornmentProps.color == null) {
    nextProps.color = ICON_INHERIT_COLOR;
  }

  if (
    adornmentProps.size == null &&
    adornmentProps.width == null &&
    adornmentProps.height == null
  ) {
    nextProps.size = BUTTON_ICON_SIZES[size];
  }

  return Object.keys(nextProps).length > 0
    ? cloneElement(adornment as ReactElement<ButtonIconElementProps>, nextProps)
    : adornment;
};

const ButtonBase = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    className = '',
    prefixCls = 'button',
    color = 'primary',
    size = 'medium',
    loading = false,
    rounded = false,
    iconStart,
    iconEnd,
    disabled = false,
    type = 'button',
    ...rest
  } = props;
  const classes = classnames(prefixCls);
  const isDisabled = disabled || loading;
  const normalizedIconStart = normalizeAdornment(iconStart, size);
  const normalizedIconEnd = normalizeAdornment(iconEnd, size);
  const startAdornment = loading ? (
    <Spinner
      strokeWidth={SPINNER_STROKE_WIDTH}
      className={joinCls(classes('loading-icon'), classes(`loading-icon-${size}`))}
    />
  ) : normalizedIconStart;

  return (
    <button
      {...rest}
      ref={ref}
      type={type}
      disabled={isDisabled}
      className={classes(
        undefined,
        joinCls(
          classes(color),
          classes(size),
          rounded && classes('rounded'),
          isDisabled && classes('disabled'),
          loading && classes('loading'),
          className,
        ),
      )}
    >
      {startAdornment && <span className={classes('icon-start')}>{startAdornment}</span>}
      {children}
      {normalizedIconEnd && <span className={classes('icon-end')}>{normalizedIconEnd}</span>}
    </button>
  );
});

ButtonBase.displayName = 'Button';

export const Button = memo(ButtonBase);

Button.displayName = 'Button';

export default Button;
