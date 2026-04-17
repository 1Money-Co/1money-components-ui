import { memo } from 'react';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { FC, MouseEvent } from 'react';
import type { LinkProps } from './interface';
import './style';
import {
  LINK_DEFAULT_COLOR,
  LINK_DEFAULT_SIZE,
  LINK_PREFIX_CLS,
} from './constants';

export const Link: FC<LinkProps> = (props) => {
  const {
    children,
    className = '',
    prefixCls = LINK_PREFIX_CLS,
    color = LINK_DEFAULT_COLOR,
    size = LINK_DEFAULT_SIZE,
    disabled = false,
    href,
    target,
    rel,
    tabIndex,
    onClick,
    ref,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const resolvedRel = target === '_blank' && rel === undefined ? 'noreferrer' : rel;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    onClick?.(event);
  };

  return (
    <a
      {...rest}
      ref={ref}
      href={disabled ? undefined : href}
      target={target}
      rel={resolvedRel}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : tabIndex}
      onClick={handleClick}
      className={classes(
        undefined,
        joinCls(
          classes(color),
          classes(size),
          disabled && classes('disabled'),
          className,
        ),
      )}
    >
      {children}
    </a>
  );
};

export default memo(Link);
