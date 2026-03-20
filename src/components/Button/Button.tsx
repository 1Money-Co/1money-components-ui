import { forwardRef, memo } from 'react';
import Spinner from '@/components/Spinner';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { ButtonProps } from './interface';

const SPINNER_STROKE_WIDTH = '5';

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
  const startAdornment = loading ? (
    <Spinner
      strokeWidth={SPINNER_STROKE_WIDTH}
      className={joinCls(classes('loading-icon'), classes(`loading-icon-${size}`))}
    />
  ) : iconStart;

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
      {iconEnd && <span className={classes('icon-end')}>{iconEnd}</span>}
    </button>
  );
});

ButtonBase.displayName = 'Button';

export const Button = memo(ButtonBase);

Button.displayName = 'Button';

export default Button;
