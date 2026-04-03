import { useEventCallback, useSafeState } from '@1money/hooks';
import { useEffect, useMemo, useRef } from 'react';
import { useResizeObserver } from '@/components/ResizeObserver';
import type { CSSProperties, ReactNode } from 'react';
import type { TooltipProps } from '@/components/Tooltip';
import type { TypographyEllipsisConfig, TypographyCopyableConfig } from './interface';
import type { TypographyLayoutMode, TypographyTextTag } from './constants';
import { DEFAULT_TYPOGRAPHY_TOOLTIP_MIDDLEWARES, DEFAULT_TYPOGRAPHY_TOOLTIP_PLACEMENT } from './constants';
import type { ResolvedTypographyEllipsisConfig } from './utils';
import {
  extractTextContent,
  getEnhancementWrapperTag,
  getStableId,
  isInlineTypographyTag,
  normalizeEllipsis,
  truncateMiddle,
} from './utils';

export interface TypographyEnhancementOptions {
  componentTag: TypographyTextTag;
  defaultLayoutMode: TypographyLayoutMode;
  prefixCls: string;
  id?: string;
  children?: ReactNode;
  ellipsis?: boolean | TypographyEllipsisConfig;
  copyable?: boolean | TypographyCopyableConfig;
}

export interface TypographyEnhancementResult {
  ellipsis: ResolvedTypographyEllipsisConfig | null;
  fullText: string;
  displayText: string | null;
  copyText: string | null;
  onCopy?: (value: string) => void;
  textId?: string;
  ellipsisTooltipProps: TooltipProps | null;
  isInlineComponent: boolean;
  wrapperTag?: 'span' | 'div';
  setTextNode: (node: HTMLElement | null) => void;
  setMeasureNode: (node: HTMLElement | null) => void;
}

export interface TypographyTextPresentationOptions {
  prefixCls: string;
  className?: string;
  category: string;
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

interface ResolvedCopyable {
  text: string;
  onCopy?: (value: string) => void;
}

function resolveCopyable(
  copyable: boolean | TypographyCopyableConfig | undefined,
  fullText: string,
): ResolvedCopyable | null {
  if (!copyable) return null;

  if (copyable === true) {
    return { text: fullText };
  }

  return {
    text: copyable.text ?? fullText,
    onCopy: copyable.onCopy,
  };
}

export function useTypographyEnhancements(
  options: TypographyEnhancementOptions,
): TypographyEnhancementResult {
  const { componentTag, defaultLayoutMode, prefixCls, id, children, ellipsis, copyable } = options;
  const textNodeRef = useRef<HTMLElement | null>(null);
  const measureNodeRef = useRef<HTMLElement | null>(null);
  const generatedTextIdRef = useRef<string | undefined>(undefined);
  // Default to true so truncated text is shown immediately (no flash)
  const [isOverflowed, setIsOverflowed] = useSafeState(true);

  const resolvedEllipsis = normalizeEllipsis(ellipsis);
  const ellipsisEnabled = resolvedEllipsis !== null;
  const ellipsisHasTooltip = !!resolvedEllipsis?.tooltip;
  const isInlineComponent = isInlineTypographyTag(componentTag, defaultLayoutMode);
  const textId = id ?? (ellipsisHasTooltip
    ? getStableId(generatedTextIdRef, prefixCls, 'ellipsis')
    : undefined);

  const fullText = useMemo(() => extractTextContent(children), [children]);
  const truncatedText = useMemo(() => {
    if (!resolvedEllipsis) return null;
    return truncateMiddle(fullText, resolvedEllipsis.start, resolvedEllipsis.end);
  }, [fullText, resolvedEllipsis?.start, resolvedEllipsis?.end]);

  const displayText = ellipsisEnabled && isOverflowed ? truncatedText : null;
  const isTruncated = displayText !== null && displayText !== fullText;

  const resolvedCopyable = useMemo(
    () => resolveCopyable(copyable, fullText),
    [copyable, fullText],
  );

  const setTextNode = useEventCallback((node: HTMLElement | null) => {
    textNodeRef.current = node;
  });

  const setMeasureNode = useEventCallback((node: HTMLElement | null) => {
    measureNodeRef.current = node;
  });

  // Measure overflow on the hidden span (always contains full text)
  const measureOverflow = useEventCallback(() => {
    const node = measureNodeRef.current;
    if (!node) return;
    setIsOverflowed(node.scrollWidth > node.clientWidth);
  });

  const getMeasureNode = useEventCallback(() => measureNodeRef.current!);

  useResizeObserver(ellipsisEnabled && !!measureNodeRef.current, getMeasureNode, measureOverflow);

  useEffect(() => {
    if (ellipsisEnabled) {
      measureOverflow();
    } else {
      setIsOverflowed(true);
    }
  }, [ellipsisEnabled, children, measureOverflow, setIsOverflowed]);

  const ellipsisTooltipProps = useMemo(() => {
    if (!ellipsisHasTooltip || !isTruncated || !textId) {
      return null;
    }

    const tooltipConfig = resolvedEllipsis!.tooltip;
    if (tooltipConfig === true) {
      return {
        body: fullText,
        placement: DEFAULT_TYPOGRAPHY_TOOLTIP_PLACEMENT,
        middlewares: DEFAULT_TYPOGRAPHY_TOOLTIP_MIDDLEWARES,
      };
    }

    return {
      ...tooltipConfig,
      body: (tooltipConfig as TooltipProps).body ?? fullText,
      placement:
        (tooltipConfig as TooltipProps).placement ?? DEFAULT_TYPOGRAPHY_TOOLTIP_PLACEMENT,
      middlewares:
        (tooltipConfig as TooltipProps).middlewares ?? DEFAULT_TYPOGRAPHY_TOOLTIP_MIDDLEWARES,
    };
  }, [fullText, isTruncated, ellipsisHasTooltip, resolvedEllipsis?.tooltip, textId]);

  return {
    ellipsis: resolvedEllipsis,
    fullText,
    displayText,
    copyText: resolvedCopyable?.text ?? null,
    onCopy: resolvedCopyable?.onCopy,
    textId,
    ellipsisTooltipProps,
    isInlineComponent,
    wrapperTag: resolvedCopyable ? getEnhancementWrapperTag(isInlineComponent) : undefined,
    setTextNode,
    setMeasureNode,
  };
}
