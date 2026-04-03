import { isValidElement } from 'react';
import classnames, { joinCls } from '@/utils/classnames';
import { uuid } from '@/utils/uuid';
import type { ReactNode, Ref, RefObject } from 'react';
import type { TooltipProps } from '@/components/Tooltip';
import type { TypographyEllipsisConfig } from './interface';
import type { TypographyClassNameOptions, TypographyLayoutMode, TypographyTextTag } from './constants';
import { BLOCK_WRAPPER_TAGS, DEFAULT_ELLIPSIS_END, DEFAULT_ELLIPSIS_START, INLINE_LAYOUT } from './constants';

export interface ResolvedTypographyEllipsisConfig {
  start: number;
  end: number;
  tooltip: boolean | TooltipProps;
}

export const getTypographyClassName = (options: TypographyClassNameOptions) => {
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
      copyable && classes('copyable-content'),
      className,
    ),
  );
};

export function normalizeEllipsis(
  ellipsis?: boolean | TypographyEllipsisConfig,
): ResolvedTypographyEllipsisConfig | null {
  if (!ellipsis) return null;

  if (ellipsis === true) {
    return { start: DEFAULT_ELLIPSIS_START, end: DEFAULT_ELLIPSIS_END, tooltip: false };
  }

  return {
    start: Math.max(1, Math.trunc(ellipsis.start ?? DEFAULT_ELLIPSIS_START)),
    end: Math.max(1, Math.trunc(ellipsis.end ?? DEFAULT_ELLIPSIS_END)),
    tooltip: ellipsis.tooltip ?? false,
  };
}

export function truncateMiddle(text: string, start: number, end: number): string {
  if (text.length <= start + end + 3) return text;
  return text.slice(0, start) + '...' + text.slice(-end);
}

export function extractTextContent(node: ReactNode): string {
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

export function getStableId(ref: RefObject<string | undefined>, prefixCls: string, suffix: string) {
  if (!ref.current) {
    ref.current = `${prefixCls}-${suffix}-${uuid()}`;
  }

  return ref.current;
}

export function assignRef<T>(ref: Ref<T> | undefined, value: T | null) {
  if (typeof ref === 'function') {
    ref(value);
    return;
  }

  if (ref && typeof ref === 'object') {
    (ref as RefObject<T | null>).current = value;
  }
}

export function isInlineTypographyTag(componentTag: TypographyTextTag, defaultLayoutMode: TypographyLayoutMode) {
  if (BLOCK_WRAPPER_TAGS.has(componentTag)) {
    return false;
  }

  return defaultLayoutMode === INLINE_LAYOUT;
}

export function getEnhancementWrapperTag(isInlineComponent: boolean): 'span' | 'div' {
  return isInlineComponent ? 'span' : 'div';
}
