import { createElement } from 'react';
import { Copy } from '@/components/Copy';
import { notification } from '@/components/Notification';
import { Tooltip } from '@/components/Tooltip';
import classnames from '@/utils/classnames';
import type { AnchorHTMLAttributes, CSSProperties, HTMLAttributes, ReactNode, Ref } from 'react';
import type { TypographyTextTag } from './constants';
import type { TypographyEnhancementResult, TypographyTextPresentationOptions } from './useTypographyEnhancements';
import { getTypographyClassName } from './utils';

const COPY_ICON_SIZE = 16;
const DEFAULT_COPY_NOTIFICATION_TITLE = 'Success';
const DEFAULT_COPY_NOTIFICATION_BODY = 'Copied to clipboard';
const DEFAULT_COPY_NOTIFICATION_DURATION = 1.5;

const defaultOnCopy = () => {
  notification.success({
    title: DEFAULT_COPY_NOTIFICATION_TITLE,
    body: DEFAULT_COPY_NOTIFICATION_BODY,
    duration: DEFAULT_COPY_NOTIFICATION_DURATION,
  });
};

export interface TypographyTextNodeProps {
  id?: string;
  className: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export function buildTypographyTextNodeProps(
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
    style,
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
      copyable: enhancement.copyText !== null,
    }),
    children: enhancement.ellipsis ? (
      <>
        {enhancement.displayText ?? children}
        <span
          ref={enhancement.setMeasureNode}
          aria-hidden="true"
          className={classnames(prefixCls)('ellipsis-measure')}
        >
          {enhancement.fullText}
        </span>
      </>
    ) : children,
  };
}

export function renderTypographyTextTag(
  tag: TypographyTextTag,
  htmlProps: HTMLAttributes<HTMLElement>,
  nodeProps: TypographyTextNodeProps,
  ref: Ref<HTMLElement>,
) {
  return createElement(tag, { ...htmlProps, ...nodeProps, ref });
}

export function renderTypographyAnchorTag(
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

export function renderWithEnhancements(
  textElement: ReactNode,
  enhancement: TypographyEnhancementResult,
  prefixCls: string,
): ReactNode {
  const ellipsisTooltip = enhancement.ellipsisTooltipProps && enhancement.textId ? (
    <Tooltip
      {...enhancement.ellipsisTooltipProps}
      anchorSelect={`#${enhancement.textId}`}
    />
  ) : null;

  if (enhancement.copyText === null) {
    return (
      <>
        {textElement}
        {ellipsisTooltip}
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
        <Copy
          value={enhancement.copyText}
          iconSize={COPY_ICON_SIZE}
          contained={false}
          onSuccess={enhancement.onCopy ?? defaultOnCopy}
        />
      </Wrapper>
      {ellipsisTooltip}
    </>
  );
}
