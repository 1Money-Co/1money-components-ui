import { forwardRef, memo } from 'react';
import classnames, { joinCls } from '@/utils/classnames';
import type { ElementType, MouseEvent, Ref } from 'react';
import type {
  TypographyBodyProps,
  TypographyCategory,
  TypographyCommonProps,
  TypographyDisplayProps,
  TypographyHeadlineProps,
  TypographyLabelProps,
  TypographyLinkProps,
  TypographyStrongProps,
  TypographyTitleProps,
} from './interface';

const TYPOGRAPHY_PREFIX = 'typography';

interface TypographyClassNameOptions {
  prefixCls: string;
  className?: string;
  category: TypographyCategory;
  size: string;
  color?: string;
  strong?: boolean;
  italic?: boolean;
  underline?: boolean;
  isDeleted?: boolean;
  disabled?: boolean;
}

const getTypographyClassName = (options: TypographyClassNameOptions) => {
  const {
    prefixCls,
    className,
    category,
    size,
    color,
    strong = false,
    italic = false,
    underline = false,
    isDeleted = false,
    disabled = false,
  } = options;
  const classes = classnames(prefixCls);

  return classes(
    undefined,
    joinCls(
      classes(category),
      classes(`${category}-${size}`),
      color && classes(`color-${color}`),
      strong && classes('strong'),
      italic && classes('italic'),
      underline && classes('underline'),
      isDeleted && classes('delete'),
      underline && isDeleted && classes('underline-delete'),
      disabled && classes('disabled'),
      className,
    ),
  );
};

// ---------------------------------------------------------------------------
// Factory for text-only variants (Display, Headline, Title, Body, Label)
// ---------------------------------------------------------------------------

interface VariantConfig<P> {
  category: TypographyCategory;
  defaultTag: ElementType;
  displayName: string;
  supportsStrong?: boolean;
}

function createTypographyVariant<P extends TypographyCommonProps & { size: string }>(
  config: VariantConfig<P>,
) {
  const { category, defaultTag, displayName, supportsStrong = false } = config;

  const Base = forwardRef<HTMLElement, P>((props, ref) => {
    const {
      children,
      className = '',
      prefixCls = TYPOGRAPHY_PREFIX,
      as,
      size,
      color,
      italic = false,
      underline = false,
      delete: isDeleted = false,
      disabled = false,
      ...rest
    } = props;

    // Extract `strong` only when supported, otherwise pass through via rest
    const strong = supportsStrong ? (rest as TypographyStrongProps).strong ?? false : false;
    if (supportsStrong) {
      delete (rest as Partial<TypographyStrongProps>).strong;
    }

    const Component = (as ?? defaultTag) as ElementType;

    return (
      <Component
        {...rest}
        ref={ref as Ref<never>}
        className={getTypographyClassName({
          prefixCls,
          className,
          category,
          size,
          color,
          strong,
          italic,
          underline,
          isDeleted,
          disabled,
        })}
      >
        {children}
      </Component>
    );
  });

  Base.displayName = displayName;
  const Memoized = memo(Base);
  Memoized.displayName = displayName;
  return Memoized;
}

// ---------------------------------------------------------------------------
// Text variants
// ---------------------------------------------------------------------------

export const TypographyDisplay = createTypographyVariant<TypographyDisplayProps>({
  category: 'display',
  defaultTag: 'div',
  displayName: 'Typography.Display',
});

export const TypographyHeadline = createTypographyVariant<TypographyHeadlineProps>({
  category: 'headline',
  defaultTag: 'div',
  displayName: 'Typography.Headline',
});

export const TypographyTitle = createTypographyVariant<TypographyTitleProps>({
  category: 'title',
  defaultTag: 'div',
  displayName: 'Typography.Title',
  supportsStrong: true,
});

export const TypographyBody = createTypographyVariant<TypographyBodyProps>({
  category: 'body',
  defaultTag: 'span',
  displayName: 'Typography.Body',
  supportsStrong: true,
});

export const TypographyLabel = createTypographyVariant<TypographyLabelProps>({
  category: 'label',
  defaultTag: 'label',
  displayName: 'Typography.Label',
  supportsStrong: true,
});

// ---------------------------------------------------------------------------
// Link variant (separate due to anchor-specific logic)
// ---------------------------------------------------------------------------

const TypographyLinkBase = forwardRef<HTMLAnchorElement, TypographyLinkProps>((props, ref) => {
  const {
    children,
    className = '',
    prefixCls = TYPOGRAPHY_PREFIX,
    as,
    size,
    color,
    italic = false,
    underline = false,
    delete: isDeleted = false,
    disabled = false,
    href,
    onClick,
    rel,
    tabIndex,
    target,
    ...rest
  } = props;
  const Component = (as ?? 'a') as ElementType;
  const resolvedRel = target === '_blank' && rel === undefined ? 'noreferrer' : rel;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    onClick?.(event);
  };

  return (
    <Component
      {...rest}
      ref={ref}
      href={disabled ? undefined : href}
      target={target}
      rel={resolvedRel}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : tabIndex}
      onClick={handleClick}
      className={getTypographyClassName({
        prefixCls,
        className,
        category: 'link',
        size,
        color,
        italic,
        underline,
        isDeleted,
        disabled,
      })}
    >
      {children}
    </Component>
  );
});

TypographyLinkBase.displayName = 'Typography.Link';

export const TypographyLink = memo(TypographyLinkBase);

TypographyLink.displayName = 'Typography.Link';

// ---------------------------------------------------------------------------
// Compound export
// ---------------------------------------------------------------------------

export const Typography = {
  Display: TypographyDisplay,
  Headline: TypographyHeadline,
  Title: TypographyTitle,
  Body: TypographyBody,
  Label: TypographyLabel,
  Link: TypographyLink,
};

export default Typography;
