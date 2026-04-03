import { cloneElement, forwardRef, isValidElement, memo } from 'react';
import Spinner from '@/components/Spinner';
import { TypographyBody, TypographyHeadline } from '@/components/Typography';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { ReactElement, ReactNode } from 'react';
import {
  BUTTON_COMPONENT_NAME,
  BUTTON_DEFAULT_COLOR,
  BUTTON_DEFAULT_HTML_TYPE,
  BUTTON_DEFAULT_PREFIX,
  BUTTON_DEFAULT_SIZE,
  BUTTON_DEFAULT_VARIANT,
  BUTTON_ICON_INHERIT_COLOR,
  BUTTON_ICON_SIZE_BY_SIZE,
  BUTTON_MODIFIER,
  BUTTON_SLOT,
  BUTTON_TYPOGRAPHY_MAP,
  BUTTON_VARIANT,
} from './constants';
import type { ButtonSize, ButtonVariant } from './constants';
import type { ButtonProps } from './interface';

type ButtonIconElementProps = {
  color?: string;
  size?: number | `${number}`;
  width?: number | `${number}`;
  height?: number | `${number}`;
};

const getToneClassName = (
  classes: ReturnType<typeof classnames>,
  variant: ButtonVariant,
  color: NonNullable<ButtonProps['color']>,
) => {
  if (variant !== BUTTON_VARIANT.text) {
    return classes(color);
  }

  return joinCls(
    classes(BUTTON_MODIFIER.text),
    color !== BUTTON_DEFAULT_COLOR && classes(`${BUTTON_MODIFIER.text}-${color}`),
  );
};

const getLoadingIconClassName = (
  classes: ReturnType<typeof classnames>,
  size: ButtonSize,
) => joinCls(
  classes(BUTTON_SLOT.loadingIcon),
  classes(`${BUTTON_SLOT.loadingIcon}-${size}`),
);

const getButtonClassName = ({
  classes,
  variant,
  color,
  size,
  rounded,
  disabled,
  loading,
  className,
}: {
  classes: ReturnType<typeof classnames>;
  variant: ButtonVariant;
  color: NonNullable<ButtonProps['color']>;
  size: ButtonSize;
  rounded: boolean;
  disabled: boolean;
  loading: boolean;
  className?: string;
}) => classes(
  undefined,
  joinCls(
    getToneClassName(classes, variant, color),
    classes(size),
    rounded && classes(BUTTON_MODIFIER.rounded),
    disabled && classes(BUTTON_MODIFIER.disabled),
    loading && classes(BUTTON_MODIFIER.loading),
    className,
  ),
);

const normalizeAdornment = (adornment: ReactNode, size: ButtonSize) => {
  if (!isValidElement(adornment)) {
    return adornment;
  }

  const adornmentProps = adornment.props as ButtonIconElementProps;
  const nextProps: ButtonIconElementProps = {};

  if (adornmentProps.color == null) {
    nextProps.color = BUTTON_ICON_INHERIT_COLOR;
  }

  if (
    adornmentProps.size == null &&
    adornmentProps.width == null &&
    adornmentProps.height == null
  ) {
    nextProps.size = BUTTON_ICON_SIZE_BY_SIZE[size];
  }

  return Object.keys(nextProps).length > 0
    ? cloneElement(adornment as ReactElement<ButtonIconElementProps>, nextProps)
    : adornment;
};

const ButtonBase = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    className = '',
    prefixCls = BUTTON_DEFAULT_PREFIX,
    variant = BUTTON_DEFAULT_VARIANT,
    color = BUTTON_DEFAULT_COLOR,
    size = BUTTON_DEFAULT_SIZE,
    loading = false,
    rounded = false,
    iconStart,
    iconEnd,
    disabled = false,
    type = BUTTON_DEFAULT_HTML_TYPE,
    ...rest
  } = props;
  const classes = classnames(prefixCls);
  const isDisabled = disabled || loading;
  const normalizedIconStart = normalizeAdornment(iconStart, size);
  const normalizedIconEnd = normalizeAdornment(iconEnd, size);
  const startAdornment = loading ? (
    <Spinner
      className={getLoadingIconClassName(classes, size)}
    />
  ) : normalizedIconStart;

  return (
    <button
      {...rest}
      ref={ref}
      type={type}
      disabled={isDisabled}
      className={getButtonClassName({
        classes,
        variant,
        color,
        size,
        rounded,
        disabled: isDisabled,
        loading,
        className,
      })}
    >
      {startAdornment && <span className={classes(BUTTON_SLOT.iconStart)}>{startAdornment}</span>}
      {children != null && (() => {
        const typo = BUTTON_TYPOGRAPHY_MAP[variant][size];
        if (typo.variant === 'headline') {
          return <TypographyHeadline size={typo.size}>{children}</TypographyHeadline>;
        }
        return <TypographyBody size={typo.size} strong={typo.strong}>{children}</TypographyBody>;
      })()}
      {normalizedIconEnd && <span className={classes(BUTTON_SLOT.iconEnd)}>{normalizedIconEnd}</span>}
    </button>
  );
});

ButtonBase.displayName = BUTTON_COMPONENT_NAME;

export const Button = memo(ButtonBase);

Button.displayName = BUTTON_COMPONENT_NAME;

export default Button;
