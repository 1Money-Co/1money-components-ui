import { memo } from 'react';
import classnames, { joinCls } from '@/utils/classnames';
import { FLEX_CLASS, FLEX_CSS_VARS, FLEX_GAP_DEFAULT, FLEX_GAP_MAP, FLEX_PREFIX, FLEX_WRAP } from './constants';
import type { FC, PropsWithChildren, CSSProperties } from 'react';
import type { FlexProps, FlexGap, FlexWrap } from './interface';

const normalizeGap = (gap?: FlexGap) => {
  if (gap === undefined || gap === null) return FLEX_GAP_DEFAULT;
  if (typeof gap === 'number') return gap;
  return FLEX_GAP_MAP[gap] ?? FLEX_GAP_DEFAULT;
};

const normalizeWrap = (wrap?: boolean | FlexWrap) => {
  if (wrap === true) return FLEX_WRAP.wrap;
  if (wrap === false) return FLEX_WRAP.nowrap;
  return wrap;
};

export const Flex: FC<PropsWithChildren<FlexProps>> = props => {
  const {
    children,
    vertical,
    wrap,
    align,
    justify,
    gap,
    className,
    style,
    prefixCls = FLEX_PREFIX,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const gapValue = normalizeGap(gap);
  const wrapValue = normalizeWrap(wrap);
  const wrapClass = wrapValue ? classes(`${FLEX_CLASS.wrap}-${wrapValue}`) : undefined;

  const mergedStyle = {
    ...style,
    [FLEX_CSS_VARS.gap]: `${gapValue}px`
  } as CSSProperties;

  const classNameValue = classes(void 0, joinCls(
    vertical && classes(FLEX_CLASS.vertical),
    wrapClass,
    align && classes(`${FLEX_CLASS.align}-${align}`),
    justify && classes(`${FLEX_CLASS.justify}-${justify}`),
    className
  ));

  return (
    <div
      {...rest}
      style={mergedStyle}
      className={classNameValue}
    >
      {children}
    </div>
  );
};

export default memo(Flex);
