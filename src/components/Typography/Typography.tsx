import { useEventCallback, useSafeState } from '@1money/hooks';
import { createElement, forwardRef, isValidElement, memo, useEffect, useMemo, useRef } from 'react';
import { Icons } from '@/components/Icons';
import { Tooltip } from '@/components/Tooltip';
import { clipboard } from '@/utils/clipboard';
import classnames, { joinCls } from '@/utils/classnames';
import { uuid } from '@/utils/uuid';
import type {
  AnchorHTMLAttributes,
  CSSProperties,
  HTMLAttributes,
  MouseEvent,
  ReactNode,
  Ref,
  RefObject,
} from 'react';
import type { TooltipProps } from '@/components/Tooltip';
import type {
  TypographyBodyProps,
  TypographyBodyTag,
  TypographyCategory,
  TypographyCommonProps,
  TypographyCopyableConfig,
  TypographyDisplayTag,
  TypographyDisplayProps,
  TypographyEllipsisConfig,
  TypographyHeadlineTag,
  TypographyHeadlineProps,
  TypographyLabelTag,
  TypographyLabelProps,
  TypographyLinkProps,
  TypographyStrongProps,
  TypographyTitleTag,
  TypographyTitleProps,
} from './interface';

const TYPOGRAPHY_PREFIX = 'typography';
const DEFAULT_COPY_ACTION_LABEL = 'Copy text';
const DEFAULT_COPIED_LABEL = 'Copied';
const DEFAULT_COPY_FAILED_LABEL = 'Copy failed';
const DEFAULT_COPY_DURATION = 2000;
const DEFAULT_TYPOGRAPHY_TOOLTIP_PLACEMENT: TooltipProps['placement'] = 'top';
const DEFAULT_TYPOGRAPHY_TOOLTIP_MIDDLEWARES: TooltipProps['middlewares'] = [];
const BLOCK_WRAPPER_TAGS = new Set(['article', 'aside', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'section']);
const BLOCK_LAYOUT = 'block';
const INLINE_LAYOUT = 'inline';

type TypographyCopyState = 'idle' | 'success' | 'error';
type TypographyLayoutMode = typeof BLOCK_LAYOUT | typeof INLINE_LAYOUT;
type TypographyTextTag =
  | TypographyBodyTag
  | TypographyDisplayTag
  | TypographyHeadlineTag
  | TypographyLabelTag
  | TypographyTitleTag
  | 'a';

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
  ellipsis?: boolean;
  ellipsisInline?: boolean;
  multiline?: boolean;
  copyable?: boolean;
}

interface ResolvedTypographyEllipsisConfig {
  rows: number;
  tooltip: boolean | TooltipProps;
}


interface ResolvedTypographyCopyableConfig {
  text?: string;
  icon?: TypographyCopyableConfig['icon'];
  tooltips: false | [ReactNode, ReactNode];
  duration: number;
  onCopy?: (success: boolean, text: string) => void;
}

interface TypographyEnhancementOptions {
  componentTag: TypographyTextTag;
  defaultLayoutMode: TypographyLayoutMode;
  prefixCls: string;
  id?: string;
  children?: ReactNode;
  ellipsis?: boolean | TypographyEllipsisConfig;
  copyable?: boolean | TypographyCopyableConfig;
}

interface TypographyEnhancementResult {
  ellipsis: ResolvedTypographyEllipsisConfig | null;
  copyable: ResolvedTypographyCopyableConfig | null;
  textId?: string;
  copyButtonId?: string;
  copyButtonLabel: string;
  copyButtonIcon: ReactNode;
  copyTooltipBody?: ReactNode;
  ellipsisTooltipProps: TooltipProps | null;
  copyState: TypographyCopyState;
  isInlineComponent: boolean;
  wrapperTag?: 'span' | 'div';
  setTextNode: (node: HTMLElement | null) => void;
  handleCopy: (event: MouseEvent<HTMLButtonElement>) => void;
}

interface TypographyTextNodeProps {
  id?: string;
  className: string;
  style?: CSSProperties;
  children?: ReactNode;
}

interface TypographyTextPresentationOptions {
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
  style?: CSSProperties;
  children?: ReactNode;
  enhancement: TypographyEnhancementResult;
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
    ellipsis = false,
    ellipsisInline = false,
    multiline = false,
    copyable = false,
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
      ellipsis && classes('ellipsis'),
      ellipsis && ellipsisInline && classes('ellipsis-inline'),
      ellipsis && !ellipsisInline && classes('ellipsis-block'),
      multiline && classes('ellipsis-multiline'),
      copyable && classes('copyable-content'),
      className,
    ),
  );
};

function normalizeEllipsis(
  ellipsis?: boolean | TypographyEllipsisConfig,
): ResolvedTypographyEllipsisConfig | null {
  if (!ellipsis) return null;

  if (ellipsis === true) {
    return {
      rows: 1,
      tooltip: false,
    };
  }

  return {
    rows: Math.max(1, Math.trunc(ellipsis.rows ?? 1)),
    tooltip: ellipsis.tooltip ?? false,
  };
}

function normalizeCopyable(
  copyable?: boolean | TypographyCopyableConfig,
): ResolvedTypographyCopyableConfig | null {
  if (!copyable) return null;

  if (copyable === true) {
    return {
      tooltips: [DEFAULT_COPY_ACTION_LABEL, DEFAULT_COPIED_LABEL],
      duration: DEFAULT_COPY_DURATION,
    };
  }

  return {
    text: copyable.text,
    icon: copyable.icon,
    tooltips:
      copyable.tooltips === false
        ? false
        : Array.isArray(copyable.tooltips)
          ? copyable.tooltips
          : [DEFAULT_COPY_ACTION_LABEL, DEFAULT_COPIED_LABEL],
    duration: Math.max(0, copyable.duration ?? DEFAULT_COPY_DURATION),
    onCopy: copyable.onCopy,
  };
}

function extractTextContent(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === 'boolean') {
    return '';
  }

  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(extractTextContent).join('');
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return extractTextContent(node.props.children);
  }

  return '';
}

const DEFAULT_COPY_ICONS: [ReactNode, ReactNode] = [
  <Icons key="copy" name="copy" size={16} />,
  <Icons key="check" name="check" size={16} />,
];

function resolveCopyableIcons(icon?: ReactNode | [ReactNode, ReactNode]): [ReactNode, ReactNode] {
  if (!icon) {
    return DEFAULT_COPY_ICONS;
  }

  if (Array.isArray(icon)) {
    return [icon[0] ?? DEFAULT_COPY_ICONS[0], icon[1] ?? DEFAULT_COPY_ICONS[1]];
  }

  return [icon, icon];
}

function getStableId(ref: RefObject<string | undefined>, prefixCls: string, suffix: string) {
  if (!ref.current) {
    ref.current = `${prefixCls}-${suffix}-${uuid()}`;
  }

  return ref.current;
}

function assignRef<T>(ref: Ref<T> | undefined, value: T | null) {
  if (typeof ref === 'function') {
    ref(value);
    return;
  }

  if (ref && typeof ref === 'object') {
    (ref as RefObject<T | null>).current = value;
  }
}

function getCopyButtonLabel(
  state: TypographyCopyState,
  tooltips: false | [ReactNode, ReactNode],
) {
  if (state === 'success') {
    return tooltips === false ? DEFAULT_COPIED_LABEL : extractTextContent(tooltips[1]) || DEFAULT_COPIED_LABEL;
  }

  if (state === 'error') {
    return DEFAULT_COPY_FAILED_LABEL;
  }

  return tooltips === false
    ? DEFAULT_COPY_ACTION_LABEL
    : extractTextContent(tooltips[0]) || DEFAULT_COPY_ACTION_LABEL;
}

function getCopyTooltipBody(
  state: TypographyCopyState,
  tooltips: false | [ReactNode, ReactNode],
) {
  if (tooltips === false) {
    return undefined;
  }

  if (state === 'success') {
    return tooltips[1];
  }

  if (state === 'error') {
    return DEFAULT_COPY_FAILED_LABEL;
  }

  return tooltips[0];
}

function isInlineTypographyTag(componentTag: TypographyTextTag, defaultLayoutMode: TypographyLayoutMode) {
  if (BLOCK_WRAPPER_TAGS.has(componentTag)) {
    return false;
  }

  return defaultLayoutMode === INLINE_LAYOUT;
}

function getEnhancementWrapperTag(isInlineComponent: boolean): 'span' | 'div' {
  return isInlineComponent ? 'span' : 'div';
}

function getEllipsisStyle(
  style: CSSProperties | undefined,
  ellipsis: ResolvedTypographyEllipsisConfig | null,
): CSSProperties | undefined {
  if (!ellipsis || ellipsis.rows <= 1) {
    return style;
  }

  return {
    ...style,
    ['--om-typography-ellipsis-rows' as '--om-typography-ellipsis-rows']: String(ellipsis.rows),
  } as CSSProperties;
}

function buildTypographyTextNodeProps(
  options: TypographyTextPresentationOptions,
): TypographyTextNodeProps {
  const {
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
  } = options;

  return {
    id: enhancement.textId,
    style: getEllipsisStyle(style, enhancement.ellipsis),
    className: getTypographyClassName({
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
      ellipsis: !!enhancement.ellipsis,
      ellipsisInline: enhancement.isInlineComponent,
      multiline: (enhancement.ellipsis?.rows ?? 1) > 1,
      copyable: !!enhancement.copyable,
    }),
    children,
  };
}

function renderTypographyTextTag(
  tag: TypographyTextTag,
  htmlProps: HTMLAttributes<HTMLElement>,
  nodeProps: TypographyTextNodeProps,
  ref: Ref<HTMLElement>,
) {
  return createElement(tag, { ...htmlProps, ...nodeProps, ref });
}

function renderTypographyAnchorTag(
  anchorProps: AnchorHTMLAttributes<HTMLAnchorElement>,
  nodeProps: TypographyTextNodeProps,
  ref: Ref<HTMLAnchorElement>,
) {
  const { children, ...restNodeProps } = nodeProps;

  return (
    <a {...anchorProps} {...restNodeProps} ref={ref}>
      {children}
    </a>
  );
}

function useTypographyEnhancements(
  options: TypographyEnhancementOptions,
): TypographyEnhancementResult {
  const { componentTag, defaultLayoutMode, prefixCls, id, children, ellipsis, copyable } = options;
  const textNodeRef = useRef<HTMLElement | null>(null);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const generatedTextIdRef = useRef<string | undefined>(undefined);
  const generatedCopyButtonIdRef = useRef<string | undefined>(undefined);
  const [isOverflowed, setIsOverflowed] = useSafeState(false);
  const [copyState, setCopyState] = useSafeState<TypographyCopyState>('idle');

  const resolvedEllipsis = normalizeEllipsis(ellipsis);
  const resolvedCopyable = normalizeCopyable(copyable);
  const ellipsisEnabled = resolvedEllipsis !== null;
  const ellipsisRows = resolvedEllipsis?.rows ?? 1;
  const ellipsisHasTooltip = !!resolvedEllipsis?.tooltip;
  const isInlineComponent = isInlineTypographyTag(componentTag, defaultLayoutMode);
  const textId = id ?? (ellipsisHasTooltip
    ? getStableId(generatedTextIdRef, prefixCls, 'ellipsis')
    : undefined);
  const copyButtonId =
    resolvedCopyable && resolvedCopyable.tooltips !== false
      ? getStableId(generatedCopyButtonIdRef, prefixCls, 'copy')
      : undefined;
  const copyText = useMemo(
    () => resolvedCopyable?.text ?? extractTextContent(children),
    [children, resolvedCopyable?.text],
  );
  const [defaultCopyIcon, copiedIcon] = useMemo(
    () => resolveCopyableIcons(resolvedCopyable?.icon),
    [resolvedCopyable?.icon],
  );

  const clearCopyTimer = useEventCallback(() => {
    if (copyTimerRef.current !== null) {
      clearTimeout(copyTimerRef.current);
      copyTimerRef.current = null;
    }
  });

  const setTextNode = useEventCallback((node: HTMLElement | null) => {
    textNodeRef.current = node;
  });

  const handleCopy = useEventCallback((event: MouseEvent<HTMLButtonElement>) => {
    if (!resolvedCopyable) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    clearCopyTimer();

    clipboard(copyText, succeeded => {
      setCopyState(succeeded ? 'success' : 'error');
      resolvedCopyable.onCopy?.(succeeded, copyText);

      copyTimerRef.current = setTimeout(() => {
        setCopyState('idle');
      }, resolvedCopyable.duration);
    });
  });

  useEffect(() => {
    if (!ellipsisEnabled) {
      setIsOverflowed(false);
      return undefined;
    }

    const node = textNodeRef.current;
    if (!node) return undefined;

    let rafId: number | null = null;

    const measure = () => {
      const hasOverflow = ellipsisRows > 1
        ? node.scrollHeight > node.clientHeight || node.scrollWidth > node.clientWidth
        : node.scrollWidth > node.clientWidth;
      setIsOverflowed(hasOverflow);
    };

    measure();

    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(() => {
        if (rafId !== null) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(measure);
      });
      observer.observe(node);

      return () => {
        observer.disconnect();
        if (rafId !== null) cancelAnimationFrame(rafId);
      };
    }

    const handleResize = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(measure);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [ellipsisEnabled, ellipsisRows, children, setIsOverflowed]);

  useEffect(() => () => {
    clearCopyTimer();
  }, [clearCopyTimer]);

  const ellipsisTooltipProps = useMemo(() => {
    if (!ellipsisHasTooltip || !isOverflowed || !textId) {
      return null;
    }

    const tooltipConfig = resolvedEllipsis!.tooltip;
    if (tooltipConfig === true) {
      return {
        body: extractTextContent(children),
        placement: DEFAULT_TYPOGRAPHY_TOOLTIP_PLACEMENT,
        middlewares: DEFAULT_TYPOGRAPHY_TOOLTIP_MIDDLEWARES,
      };
    }

    return {
      ...tooltipConfig,
      body: (tooltipConfig as TooltipProps).body ?? extractTextContent(children),
      placement:
        (tooltipConfig as TooltipProps).placement ?? DEFAULT_TYPOGRAPHY_TOOLTIP_PLACEMENT,
      middlewares:
        (tooltipConfig as TooltipProps).middlewares ?? DEFAULT_TYPOGRAPHY_TOOLTIP_MIDDLEWARES,
    };
  }, [children, isOverflowed, ellipsisHasTooltip, resolvedEllipsis?.tooltip, textId]);

  return {
    ellipsis: resolvedEllipsis,
    copyable: resolvedCopyable,
    textId,
    copyButtonId,
    copyButtonLabel: getCopyButtonLabel(copyState, resolvedCopyable?.tooltips ?? false),
    copyButtonIcon: copyState === 'success' ? copiedIcon : defaultCopyIcon,
    copyTooltipBody: getCopyTooltipBody(copyState, resolvedCopyable?.tooltips ?? false),
    ellipsisTooltipProps,
    copyState,
    isInlineComponent,
    wrapperTag: resolvedCopyable ? getEnhancementWrapperTag(isInlineComponent) : undefined,
    setTextNode,
    handleCopy,
  };
}

function renderEnhancementTooltips(
  enhancement: TypographyEnhancementResult,
) {
  return (
    <>
      {enhancement.ellipsisTooltipProps && enhancement.textId && (
        <Tooltip
          {...enhancement.ellipsisTooltipProps}
          anchorSelect={`#${enhancement.textId}`}
        />
      )}
      {enhancement.copyTooltipBody && enhancement.copyButtonId && (
        <Tooltip anchorSelect={`#${enhancement.copyButtonId}`} body={enhancement.copyTooltipBody} />
      )}
    </>
  );
}

function renderWithEnhancements(
  textElement: ReactNode,
  enhancement: TypographyEnhancementResult,
  prefixCls: string,
): ReactNode {
  if (!enhancement.copyable) {
    return (
      <>
        {textElement}
        {renderEnhancementTooltips(enhancement)}
      </>
    );
  }

  const classes = classnames(prefixCls);
  const Wrapper = enhancement.wrapperTag ?? 'span';

  return (
    <>
      <Wrapper
        className={classes(
          'copyable-wrapper',
          enhancement.isInlineComponent
            ? classes('copyable-wrapper-inline')
            : classes('copyable-wrapper-block'),
        )}
      >
        {textElement}
        <button
          id={enhancement.copyButtonId}
          type="button"
          aria-label={enhancement.copyButtonLabel}
          className={classes(
            'copyable-action',
            enhancement.copyState !== 'idle' ? classes(`copyable-action-${enhancement.copyState}`) : undefined,
          )}
          onClick={enhancement.handleCopy}
        >
          {enhancement.copyButtonIcon}
        </button>
      </Wrapper>
      {renderEnhancementTooltips(enhancement)}
    </>
  );
}

interface VariantConfig {
  category: TypographyCategory;
  defaultTag: TypographyTextTag;
  defaultLayoutMode: TypographyLayoutMode;
  displayName: string;
  supportsStrong?: boolean;
}

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
      ...rest,
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
