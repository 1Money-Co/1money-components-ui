import { memo, Fragment, Children } from 'react';
import classnames, { joinCls } from '@/utils/classnames';
import {
  SPACE_CLASS,
  SPACE_CSS_VARS,
  SPACE_DIRECTION,
  SPACE_PREFIX,
  SPACE_SIZE_DEFAULT,
  SPACE_SIZE_MAP
} from './constants';
import type { FC, PropsWithChildren, CSSProperties } from 'react';
import type { SpaceProps, SpaceSize } from './interface';

const resolveSize = (value?: SpaceSize) => {
  if (value === undefined || value === null) return SPACE_SIZE_DEFAULT;
  if (typeof value === 'number') return value;
  return SPACE_SIZE_MAP[value] ?? SPACE_SIZE_DEFAULT;
};

const normalizeSize = (size?: SpaceSize | [SpaceSize, SpaceSize]): [number, number] => {
  if (Array.isArray(size)) {
    return [resolveSize(size[0]), resolveSize(size[1])];
  }
  const resolved = resolveSize(size);
  return [resolved, resolved];
};

export const Space: FC<PropsWithChildren<SpaceProps>> = props => {
  const {
    children,
    align,
    direction = SPACE_DIRECTION.horizontal,
    size,
    split,
    wrap = false,
    className,
    style,
    prefixCls = SPACE_PREFIX,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const isVertical = direction === SPACE_DIRECTION.vertical;
  const [gapX, gapY] = normalizeSize(size);
  const shouldWrap = wrap && !isVertical;
  const classNameValue = classes(void 0, joinCls(
    isVertical && classes(SPACE_CLASS.vertical),
    align && classes(`${SPACE_CLASS.align}-${align}`),
    shouldWrap && classes(SPACE_CLASS.wrap),
    className
  ));

  const mergedStyle = {
    ...style,
    [SPACE_CSS_VARS.gapX]: `${gapX}px`,
    [SPACE_CSS_VARS.gapY]: `${gapY}px`
  } as CSSProperties;

  const childrenArray = Children.toArray(children);

  const content = childrenArray.map((child, index) => {
    const isLast = index === childrenArray.length - 1;

    return (
      <Fragment key={`space-item-${index}`}>
        <div className={classes(SPACE_CLASS.item)}>{child}</div>
        {!isLast && split ? (
          <span className={classes(SPACE_CLASS.split)}>{split}</span>
        ) : null}
      </Fragment>
    );
  });

  return (
    <div
      {...rest}
      style={mergedStyle}
      className={classNameValue}
    >
      {content}
    </div>
  );
};

export default memo(Space);
