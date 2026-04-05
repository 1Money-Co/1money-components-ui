import { memo, Fragment, Children, isValidElement } from 'react';
import classnames, { joinCls } from '@/utils/classnames';
import './style';
import {
  SPACE_CLASS,
  SPACE_CSS_VARS,
  SPACE_DIRECTION,
  SPACE_PREFIX,
  SPACE_SIZE_DEFAULT,
  SPACE_SIZE_MAP
} from './constants';
import type { CSSProperties, PropsWithChildren } from 'react';
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

export const Space = memo<PropsWithChildren<SpaceProps>>(props => {
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
  const hasSplit = split !== undefined && split !== null;
  const [columnGap, rowGap] = normalizeSize(size);
  const appliedColumnGap = hasSplit ? columnGap / 2 : columnGap;
  const appliedRowGap = hasSplit ? rowGap / 2 : rowGap;
  const shouldWrap = wrap && !isVertical;

  const classNameValue = joinCls(
    classes(),
    isVertical && classes(SPACE_CLASS.vertical),
    align && classes(`${SPACE_CLASS.align}-${align}`),
    shouldWrap && classes(SPACE_CLASS.wrap),
    className
  );

  const needsGapStyle = size !== undefined || hasSplit;
  const mergedStyle: CSSProperties = {
    ...style,
    ...(needsGapStyle && {
      [SPACE_CSS_VARS.columnGap]: `${appliedColumnGap}px`,
      [SPACE_CSS_VARS.rowGap]: `${appliedRowGap}px`
    })
  };

  const childrenArray = Children.toArray(children);

  const content = childrenArray.map((child, index) => {
    const isLast = index === childrenArray.length - 1;
    const key = isValidElement(child) ? child.key : index;

    return (
      <Fragment key={key}>
        <div className={classes(SPACE_CLASS.item)}>{child}</div>
        {!isLast && hasSplit ? (
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
});

Space.displayName = 'Space';

export default Space;
