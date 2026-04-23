import { memo } from 'react';
import { joinCls, default as classnames } from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { IconHoverProps } from './interface';

const IconHoverInner: FC<PropsWithChildren<IconHoverProps>> = (props) => {
  const { children, prefixCls = 'icons-hover', className, disabled, ...rest } = props;
  const classes = classnames(prefixCls);

  return <div
    className={joinCls(
      classes('wrapper'),
      disabled && classes('wrapper-disabled'),
      classes(undefined, className)
    )}
    {...rest}
  >
    { children }
  </div>;
};

export const IconHover = memo(IconHoverInner);

export default IconHover;
