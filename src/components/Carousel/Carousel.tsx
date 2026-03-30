import { memo, useEffect, useRef, Children } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { FC } from 'react';
import type { CarouselProps } from './interface';

const DEFAULT_INTERVAL = 3000;

export const Carousel: FC<CarouselProps> = props => {
  const {
    className = '',
    prefixCls = 'carousel',
    children,
    activeIndex,
    defaultActiveIndex = 0,
    autoPlay = false,
    autoPlayInterval = DEFAULT_INTERVAL,
    loop = false,
    showIndicators = true,
    onChange,
    ref,
  } = props;

  const [currentIndex, setCurrentIndex] = useControlledState(
    defaultActiveIndex,
    activeIndex,
  );

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const slideCount = Children.count(children);
  const classes = classnames(prefixCls);

  const goTo = useEventCallback((index: number) => {
    let nextIndex = index;
    if (loop) {
      nextIndex = ((index % slideCount) + slideCount) % slideCount;
    } else {
      nextIndex = Math.max(0, Math.min(index, slideCount - 1));
    }
    setCurrentIndex(nextIndex);
    onChange?.(nextIndex);
  });

  const goNext = useEventCallback(() => {
    if (!loop && currentIndex >= slideCount - 1) return;
    goTo(currentIndex + 1);
  });

  // Auto-play
  useEffect(() => {
    if (!autoPlay || slideCount <= 1) return;

    timerRef.current = setInterval(goNext, autoPlayInterval);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, slideCount, goNext]);

  return (
    <div
      ref={ref}
      className={classes(undefined, className)}
    >
      <div
        className={classes('slides')}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Children.map(children, (child, index) => (
          <div key={index} className={classes('slide')}>
            {child}
          </div>
        ))}
      </div>

      {showIndicators && slideCount > 1 && (
        <div className={classes('indicators')}>
          {Array.from({ length: slideCount }, (_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              className={joinCls(
                classes('dot'),
                index === currentIndex && classes('dot-active'),
              )}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(Carousel);
