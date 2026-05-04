import { cloneElement, forwardRef, isValidElement, memo } from 'react';
import Spinner from '@/components/Spinner';
import { TypographyBody, TypographyHeadline } from '@/components/Typography';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { ReactElement, ReactNode } from 'react';
import './style';
import {
  BUTTON_COMPONENT_NAME,
  BUTTON_DEFAULT_COLOR,
  BUTTON_DEFAULT_HTML_TYPE,
  BUTTON_DEFAULT_PREFIX,
  BUTTON_DEFAULT_SIZE,
  BUTTON_DEFAULT_VARIANT,
  BUTTON_ICON_INHERIT_COLOR,
  BUTTON_ICON_SIZE_BY_SIZE,
  BUTTON_LOADING_ICON_SIZE_BY_SIZE,
  BUTTON_MODIFIER,
  BUTTON_SLOT,
  BUTTON_TYPOGRAPHY_MAP,
  BUTTON_VARIANT,
} from './constants';
import type { ButtonSize, ButtonVariant } from './constants';
import type { ButtonProps } from './interface';

/** Subset of icon element props used when auto-filling defaults on adornment icons. */
type ButtonIconElementProps = {
  color?: string;
  size?: number | `${number}`;
  width?: number | `${number}`;
  height?: number | `${number}`;
};

/**
 * Resolve the color/tone class name based on variant.
 * - Contained buttons: apply the color class directly (e.g. `--primary`).
 * - Text buttons: always apply the `--text` modifier, and append a
 *   color-specific modifier only when the color differs from the default.
 */
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

/** Build class names for the loading spinner, combining base + size-specific classes. */
const getLoadingIconClassName = (
  classes: ReturnType<typeof classnames>,
  size: ButtonSize,
) => joinCls(
  classes(BUTTON_SLOT.loadingIcon),
  classes(`${BUTTON_SLOT.loadingIcon}-${size}`),
);

/** Compose the full button class name from variant, color, size, and state modifiers. */
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

/**
 * Auto-fill default `color` and `size` on icon adornments (iconStart / iconEnd).
 *
 * - If the icon has no `color`, inherit from the button via `currentColor`.
 * - If the icon has no explicit dimensions (`size` / `width` / `height`),
 *   apply the size that corresponds to the current button size.
 * - Non-element nodes (strings, numbers, null) are returned as-is.
 */
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

/**
 * Core button component.
 *
 * Supports two variants (`contained` | `text`), eight color tones, three sizes,
 * optional start/end icon adornments, a loading state (replaces start icon with
 * a spinner), and rounded mode.
 *
 * Typography is automatically selected per variant + size via `BUTTON_TYPOGRAPHY_MAP`.
 */
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

  // Loading implicitly disables the button to prevent duplicate submissions
  const isDisabled = disabled || loading;

  // Auto-fill color & size on icon adornments so consumers don't have to
  const normalizedIconStart = normalizeAdornment(iconStart, size);
  const normalizedIconEnd = normalizeAdornment(iconEnd, size);

  // When loading, replace the start icon with a spinner
  const startAdornment = loading ? (
    <Spinner
      className={getLoadingIconClassName(classes, size)}
      size={BUTTON_LOADING_ICON_SIZE_BY_SIZE[size]}
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

      {/* Render children with the Typography component mapped to variant + size */}
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
