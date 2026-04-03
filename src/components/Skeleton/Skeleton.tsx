import { memo } from 'react';
import { default as classnames, joinCls } from '@/utils/classnames';

import type { CSSProperties, FC } from 'react';
import type { SkeletonProps } from './interface';
import './style';

export const Skeleton: FC<SkeletonProps> = props => {
  const {
    className = '',
    prefixCls = 'skeleton',
    shape = 'rectangle',
    size,
    animation = 'wave',
    width = '100%',
    height = '1rem',
    borderRadius,
    style,
    ref: _ref,
    ...rest
  } = props;

  const classes = classnames(prefixCls);

  const inlineStyle: CSSProperties = size
    ? { width: size, height: size, borderRadius, ...style }
    : { width, height, borderRadius, ...style };

  return (
    <div
      {...rest}
      ref={_ref}
      aria-hidden="true"
      className={classes(
        void 0,
        joinCls(
          shape === 'circle' ? classes('circle') : '',
          animation === 'none' ? classes('none') : '',
          className,
        ),
      )}
      style={inlineStyle}
    />
  );
};

export default memo(Skeleton);
