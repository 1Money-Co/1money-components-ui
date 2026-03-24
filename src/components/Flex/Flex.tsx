import { memo } from 'react';
import classnames, { joinCls } from '@/utils/classnames';
import { FLEX_CLASS, FLEX_CSS_VARS, FLEX_GAP_DEFAULT, FLEX_GAP_MAP, FLEX_PREFIX, FLEX_WRAP } from './constants';
import type { CSSProperties, PropsWithChildren } from 'react';
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

export const Flex = memo<PropsWithChildren<FlexProps>>(props => {
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
  const wrapValue = normalizeWrap(wrap);

  const mergedStyle: CSSProperties = {
    ...style,
    ...(gap !== undefined && { [FLEX_CSS_VARS.gap]: `${normalizeGap(gap)}px` })
  };

  const classNameValue = joinCls(
    classes(),
    vertical && classes(FLEX_CLASS.vertical),
    wrapValue && classes(`${FLEX_CLASS.wrap}-${wrapValue}`),
    align && classes(`${FLEX_CLASS.align}-${align}`),
    justify && classes(`${FLEX_CLASS.justify}-${justify}`),
    className
  );

  return (
    <div
      {...rest}
      style={mergedStyle}
      className={classNameValue}
    >
      {children}
    </div>
  );
});

Flex.displayName = 'Flex';

export default Flex;
