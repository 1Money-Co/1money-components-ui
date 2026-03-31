import { memo } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import { Icons } from '@/components/Icons';
import { Typography } from '@/components/Typography';
import { Carousel } from '@/components/Carousel';
import type { FC } from 'react';
import type { CoachMarkProps } from './interface';

const DEFAULT_BACK_LABEL = 'Back';
const DEFAULT_NEXT_LABEL = 'Next';
const DEFAULT_FINISH_LABEL = 'Finish';

export const CoachMark: FC<CoachMarkProps> = props => {
  const {
    className = '',
    prefixCls = 'coach-mark',
    icon,
    heading,
    body,
    steps,
    activeStep,
    defaultActiveStep = 0,
    onChange,
    onFinish,
    onDismiss,
    dismissible = true,
    placement = 'top',
    backLabel = DEFAULT_BACK_LABEL,
    nextLabel = DEFAULT_NEXT_LABEL,
    finishLabel = DEFAULT_FINISH_LABEL,
    ref,
  } = props;

  const [currentStep, setCurrentStep] = useControlledState(
    defaultActiveStep,
    activeStep,
  );

  const classes = classnames(prefixCls);
  const isFirst = currentStep === 0;
  const isLast = currentStep === steps - 1;

  const handleBack = useEventCallback(() => {
    if (isFirst) return;
    const next = currentStep - 1;
    setCurrentStep(next);
    onChange?.(next);
  });

  const handleNext = useEventCallback(() => {
    if (isLast) {
      onFinish?.();
      return;
    }
    const next = currentStep + 1;
    setCurrentStep(next);
    onChange?.(next);
  });

  const handleDotChange = useEventCallback((index: number) => {
    setCurrentStep(index);
    onChange?.(index);
  });

  return (
    <div
      ref={ref}
      className={joinCls(classes(undefined, className), classes(placement))}
    >
      <svg
        className={classes('arrow')}
        viewBox="0 0 36 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.3146 1.64505L10.3664 8.1846C9.80987 8.70836 9.07447 9 8.31027 9H27.6897C26.9255 9 26.1901 8.70836 25.6336 8.1846L18.6854 1.64505C18.3003 1.28265 17.6997 1.28265 17.3146 1.64505Z"
          className={classes('arrow-fill')}
        />
        <path
          d="M8 8.5H8.34315C9.40401 8.5 10.4214 8.07857 11.1716 7.32843L17.2929 1.20711C17.6834 0.816582 18.3166 0.816583 18.7071 1.20711L24.8284 7.32843C25.5786 8.07857 26.596 8.5 27.6569 8.5H28"
          className={classes('arrow-stroke')}
        />
      </svg>
      <div className={classes('content')}>
        {icon && <div className={classes('icon')}>{icon}</div>}

        {(heading || body) && (
          <div className={classes('text')}>
            {heading && (
              <Typography.Headline size="lg" color="default">
                {heading}
              </Typography.Headline>
            )}
            {body && (
              <Typography.Body size="lg" color="default-secondary">
                {body}
              </Typography.Body>
            )}
          </div>
        )}
      </div>

      <div className={classes('footer')}>
        <button
          type="button"
          className={joinCls(
            classes('btn'),
            classes('btn-back'),
            isFirst && classes('btn-disabled'),
          )}
          disabled={isFirst}
          onClick={handleBack}
        >
          {backLabel}
        </button>

        {steps > 1 && (
          <Carousel
            count={steps}
            activeIndex={currentStep}
            onChange={handleDotChange}
          />
        )}

        <button
          type="button"
          className={joinCls(classes('btn'), classes('btn-next'))}
          onClick={handleNext}
        >
          {isLast ? finishLabel : nextLabel}
        </button>
      </div>

      {dismissible && (
        <button
          type="button"
          className={classes('dismiss')}
          aria-label="Dismiss"
          onClick={onDismiss}
        >
          <Icons name="cross" size={14} />
        </button>
      )}
    </div>
  );
};

export default memo(CoachMark);
