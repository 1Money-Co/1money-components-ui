import { memo } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { FC } from 'react';
import type { CarouselProps } from './interface';
import './style';

export const Carousel: FC<CarouselProps> = props => {
  const {
    className = '',
    prefixCls = 'carousel',
    count,
    activeIndex,
    defaultActiveIndex = 0,
    onChange,
    ref,
  } = props;

  const [currentIndex, setCurrentIndex] = useControlledState(
    defaultActiveIndex,
    activeIndex,
  );

  const classes = classnames(prefixCls);

  const handleDotClick = useEventCallback((index: number) => {
    setCurrentIndex(index);
    onChange?.(index);
  });

  if (count <= 0) return null;

  return (
    <div
      ref={ref}
      className={joinCls(classes(), className)}
    >
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Go to step ${index + 1}`}
          className={joinCls(
            classes('dot'),
            index === currentIndex && classes('dot-active'),
          )}
          onClick={() => handleDotClick(index)}
        />
      ))}
    </div>
  );
};

export default memo(Carousel);
