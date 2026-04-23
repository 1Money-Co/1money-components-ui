import { memo } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import { CrossIcon } from '@/components/Icons';
import { Typography } from '@/components/Typography';
import { Carousel } from '@/components/Carousel';
import type { CSSProperties, FC } from 'react';
import type { CoachMarkProps } from './interface';
import './style';

const DEFAULT_LABELS = {
  back: 'Back',
  next: 'Next',
  finish: 'Finish',
  dismiss: 'Dismiss',
};

const CoachMarkInner: FC<CoachMarkProps> = props => {
  const {
    className = '',
    prefixCls = 'coach-mark',
    steps,
    activeStep,
    defaultActiveStep = 0,
    onChange,
    onFinish,
    onDismiss,
    dismissible = true,
    placement = 'top',
    arrowOffset,
    labels: labelsProp,
    ref,
  } = props;

  const labels = { ...DEFAULT_LABELS, ...labelsProp };

  const [currentStep, setCurrentStep] = useControlledState(
    defaultActiveStep,
    activeStep,
  );

  const classes = classnames(prefixCls);
  const totalSteps = steps.length;
  const isFirst = currentStep === 0;
  const isLast = currentStep === totalSteps - 1;
  const isSingleStep = totalSteps === 1;
  const { icon, heading, body } = steps[currentStep] ?? {};

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

  const arrowStyle: CSSProperties | undefined = arrowOffset
    ? { ['--coach-mark-arrow-offset' as string]: arrowOffset }
    : undefined;

  return (
    <div
      ref={ref}
      role="dialog"
      aria-label={typeof heading === 'string' ? heading : undefined}
      className={joinCls(classes(undefined, className), classes(placement))}
      style={arrowStyle}
    >
      <svg
        className={classes('arrow')}
        viewBox="0 0 36 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
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
        {!isSingleStep && (
          <button
            type="button"
            className={joinCls(classes('btn'), classes('btn-back'))}
            aria-label={labels.back}
            disabled={isFirst}
            onClick={handleBack}
          >
            {labels.back}
          </button>
        )}

        {totalSteps > 1 && (
          <Carousel
            count={totalSteps}
            activeIndex={currentStep}
            onChange={handleDotChange}
          />
        )}

        <button
          type="button"
          className={joinCls(classes('btn'), classes('btn-next'))}
          aria-label={isLast ? labels.finish : labels.next}
          onClick={handleNext}
        >
          {isLast ? labels.finish : labels.next}
        </button>
      </div>

      {dismissible && (
        <button
          type="button"
          className={classes('dismiss')}
          aria-label={labels.dismiss}
          onClick={onDismiss}
        >
          <CrossIcon size={24} color="currentColor" />
        </button>
      )}
    </div>
  );
};

export const CoachMark = memo(CoachMarkInner);
export default CoachMark;
