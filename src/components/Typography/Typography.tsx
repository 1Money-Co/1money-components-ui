import { useEventCallback } from '@1money/hooks';
import { forwardRef, memo } from 'react';
import type {
  AnchorHTMLAttributes,
  CSSProperties,
  HTMLAttributes,
  MouseEvent,
  Ref,
} from 'react';
import type {
  TypographyBodyProps,
  TypographyCommonProps,
  TypographyDisplayProps,
  TypographyHeadlineProps,
  TypographyLabelProps,
  TypographyLinkProps,
  TypographyTitleProps,
} from './interface';
import type { TypographyTextTag, VariantConfig } from './constants';
import { BLOCK_LAYOUT, INLINE_LAYOUT, TYPOGRAPHY_PREFIX } from './constants';
import { assignRef } from './utils';
import { useTypographyEnhancements } from './useTypographyEnhancements';
import {
  buildTypographyTextNodeProps,
  renderTypographyAnchorTag,
  renderTypographyTextTag,
  renderWithEnhancements,
} from './render';
import './style';

function createTypographyVariant<
  P extends TypographyCommonProps & { size: string; id?: string; style?: CSSProperties; as?: TypographyTextTag },
>(
  config: VariantConfig,
) {
  const { category, defaultTag, defaultLayoutMode, displayName, supportsStrong = false } = config;

  const Base = forwardRef<HTMLElement, P>((props, ref) => {
    const {
      children,
      className = '',
      prefixCls = TYPOGRAPHY_PREFIX,
      as,
      id,
      size,
      color,
      style,
      italic = false,
      underline = false,
      delete: isDeleted = false,
      disabled = false,
      ellipsis,
      copyable,
      ...rest
    } = props;

    const { strong: strongProp, ...htmlProps } = rest as Record<string, unknown> & { strong?: boolean };
    const strong = supportsStrong ? (strongProp ?? false) : false;

    const Component = (as ?? defaultTag) as TypographyTextTag;
    const enhancement = useTypographyEnhancements({
      componentTag: Component,
      defaultLayoutMode,
      prefixCls,
      id,
      children,
      ellipsis,
      copyable,
    });

    const handleTextRef = useEventCallback((node: HTMLElement | null) => {
      enhancement.setTextNode(node);
      assignRef(ref, node);
    });

    const textElement = renderTypographyTextTag(
      Component,
      htmlProps as HTMLAttributes<HTMLElement>,
      buildTypographyTextNodeProps({
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
        style,
        children,
        enhancement,
      }),
      handleTextRef as Ref<HTMLElement>,
    );

    return renderWithEnhancements(textElement, enhancement, prefixCls);
  });

  Base.displayName = displayName;
  const Memoized = memo(Base);
  Memoized.displayName = displayName;
  return Memoized;
}

export const TypographyDisplay = createTypographyVariant<TypographyDisplayProps>({
  category: 'display',
  defaultTag: 'div',
  defaultLayoutMode: BLOCK_LAYOUT,
  displayName: 'Typography.Display',
});

export const TypographyHeadline = createTypographyVariant<TypographyHeadlineProps>({
  category: 'headline',
  defaultTag: 'div',
  defaultLayoutMode: BLOCK_LAYOUT,
  displayName: 'Typography.Headline',
});

export const TypographyTitle = createTypographyVariant<TypographyTitleProps>({
  category: 'title',
  defaultTag: 'div',
  defaultLayoutMode: BLOCK_LAYOUT,
  displayName: 'Typography.Title',
  supportsStrong: true,
});

export const TypographyBody = createTypographyVariant<TypographyBodyProps>({
  category: 'body',
  defaultTag: 'span',
  defaultLayoutMode: INLINE_LAYOUT,
  displayName: 'Typography.Body',
  supportsStrong: true,
});

export const TypographyLabel = createTypographyVariant<TypographyLabelProps>({
  category: 'label',
  defaultTag: 'label',
  defaultLayoutMode: INLINE_LAYOUT,
  displayName: 'Typography.Label',
  supportsStrong: true,
});

const TypographyLinkBase = forwardRef<HTMLAnchorElement, TypographyLinkProps>((props, ref) => {
  const {
    children,
    className = '',
    prefixCls = TYPOGRAPHY_PREFIX,
    id,
    size,
    color,
    style,
    italic = false,
    underline = false,
    delete: isDeleted = false,
    disabled = false,
    ellipsis,
    copyable,
    href,
    onClick,
    rel,
    tabIndex,
    target,
    ...rest
  } = props;
  const resolvedRel = target === '_blank' && rel === undefined ? 'noreferrer' : rel;
  const enhancement = useTypographyEnhancements({
    componentTag: 'a',
    defaultLayoutMode: INLINE_LAYOUT,
    prefixCls,
    id,
    children,
    ellipsis,
    copyable,
  });

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    onClick?.(event);
  };

  const handleTextRef = useEventCallback((node: HTMLAnchorElement | null) => {
    enhancement.setTextNode(node);
    assignRef(ref, node);
  });

  const textElement = renderTypographyAnchorTag(
    {
      ...(rest as AnchorHTMLAttributes<HTMLAnchorElement>),
      href: disabled ? undefined : href,
      target,
      rel: resolvedRel,
      'aria-disabled': disabled || undefined,
      tabIndex: disabled ? -1 : tabIndex,
      onClick: handleClick,
    },
    buildTypographyTextNodeProps({
      prefixCls,
      className,
      category: 'link',
      size,
      color,
      italic,
      underline,
      isDeleted,
      disabled,
      style,
      children,
      enhancement,
    }),
    handleTextRef,
  );

  return renderWithEnhancements(textElement, enhancement, prefixCls);
});

TypographyLinkBase.displayName = 'Typography.Link';

export const TypographyLink = memo(TypographyLinkBase);

TypographyLink.displayName = 'Typography.Link';

export const Typography = {
  Display: TypographyDisplay,
  Headline: TypographyHeadline,
  Title: TypographyTitle,
  Body: TypographyBody,
  Label: TypographyLabel,
  Link: TypographyLink,
};

export default Typography;
