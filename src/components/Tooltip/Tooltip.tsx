'use client';
import { memo } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { default as classnames } from '@/utils/classnames';
import type { FC } from 'react';
import type { TooltipProps } from './interface';

export const Tooltip: FC<TooltipProps> = (props) => {
  const {
    className = '',
    prefixCls = 'tooltip',
    placement = 'top',
    title,
    body,
    arrow = true,
    open,
    defaultOpen,
    onOpenChange,
    ...rest
  } = props;

  const classes = classnames(prefixCls);

  const [innerOpen, setInnerOpen] = useControlledState(defaultOpen ?? false, open);

  const handleSetIsOpen = useEventCallback((value: boolean) => {
    setInnerOpen(value);
    onOpenChange?.(value);
  });

  return (
    <ReactTooltip
      {...rest}
      place={placement}
      noArrow={!arrow}
      isOpen={open !== undefined ? innerOpen : undefined}
      setIsOpen={handleSetIsOpen}
      role="tooltip"
      className={classes(undefined, className)}
      classNameArrow={classes('arrow')}
    >
      {title && <div className={classes('title')}>{title}</div>}
      {body && <div className={classes('body')}>{body}</div>}
    </ReactTooltip>
  );
};

export default memo(Tooltip);
