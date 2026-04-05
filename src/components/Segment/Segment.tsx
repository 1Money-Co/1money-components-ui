import { memo, useCallback, useRef, useState } from 'react';
import { useControlledState, useEventCallback, useLayoutEffect } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { CSSProperties, FC } from 'react';
import type { SegmentItem, SegmentProps } from './interface';
import './style';

interface IndicatorStyle {
  width: number;
  transform: string;
}

export const Segment: FC<SegmentProps> = props => {
  const {
    className = '',
    prefixCls = 'segment',
    value,
    defaultValue,
    items,
    animated = true,
    onChange,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle | null>(null);

  const [currentValue, setCurrentValue] = useControlledState(
    defaultValue ?? items[0]?.value ?? '',
    value,
  );

  const updateIndicator = useCallback(() => {
    const container = containerRef.current;
    const activeItem = itemRefs.current.get(currentValue);
    if (!container || !activeItem) return;

    const containerRect = container.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();

    setIndicatorStyle({
      width: itemRect.width,
      transform: `translateX(${itemRect.left - containerRect.left + container.scrollLeft}px)`,
    });
  }, [currentValue]);

  useLayoutEffect(() => {
    updateIndicator();
  }, [currentValue, items, updateIndicator]);

  const handleItemClick = useEventCallback((item: SegmentItem) => {
    if (item.disabled) return;
    setCurrentValue(item.value);
    onChange?.(item.value);
  });

  const setItemRef = useCallback((val: string, el: HTMLButtonElement | null) => {
    if (el) {
      itemRefs.current.set(val, el);
    } else {
      itemRefs.current.delete(val);
    }
  }, []);

  return (
    <div {...rest} className={classes(undefined, className)}>
      <div className={classes('track')} ref={containerRef} role="radiogroup">
        {indicatorStyle && (
          <span
            className={classes('indicator')}
            style={{
              ...indicatorStyle,
              ...(!animated && { transition: 'none' }),
            } as CSSProperties}
          />
        )}
        {items.map(item => (
          <button
            key={item.value}
            ref={el => setItemRef(item.value, el)}
            role="radio"
            type="button"
            aria-checked={item.value === currentValue}
            aria-disabled={item.disabled}
            tabIndex={item.value === currentValue ? 0 : -1}
            className={classes(
              'item',
              joinCls(
                item.value === currentValue && classes('item-active'),
                item.disabled && classes('item-disabled'),
              ),
            )}
            onClick={() => handleItemClick(item)}
          >
            <span className={classes('item-label')}>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default memo(Segment);
