import { memo } from 'react';
import { Icons } from '@/components/Icons';
import { TypographyBody, TypographyDisplay } from '@/components/Typography';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { FC, ReactNode } from 'react';
import type { ProgressProps } from './interface';
import {
  PROGRESS_DEFAULT_COLOR,
  PROGRESS_DEFAULT_PLACEMENT,
  PROGRESS_DEFAULT_PREFIX,
  PROGRESS_DEFAULT_SHOW_INFO,
  PROGRESS_FEEDBACK_ICON,
  PROGRESS_FEEDBACK_TEXT_SIZE,
  PROGRESS_INFO_SIZE,
  clampPercent,
  resolveProgressState,
} from './constants';

const getAriaValueText = (value: ReactNode): string | undefined => {
  if (typeof value === 'string' || typeof value === 'number') {
    return String(value);
  }

  return undefined;
};

export const Progress: FC<ProgressProps> = props => {
  const {
    className = '',
    prefixCls = PROGRESS_DEFAULT_PREFIX,
    percent,
    state,
    color = PROGRESS_DEFAULT_COLOR,
    placement = PROGRESS_DEFAULT_PLACEMENT,
    showInfo = PROGRESS_DEFAULT_SHOW_INFO,
    format,
    feedback,
    ref: _ref,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const normalizedPercent = clampPercent(percent);
  const resolvedState = resolveProgressState(normalizedPercent, state);
  const resolvedInfo = format
    ? format(normalizedPercent, { percent: normalizedPercent, state: resolvedState })
    : `${normalizedPercent}%`;
  const ariaValueText = getAriaValueText(resolvedInfo);
  const hasFeedback = resolvedState === 'error' && feedback != null;

  return (
    <div
      {...rest}
      ref={_ref}
      data-testid="progress-root"
      className={classes(
        void 0,
        joinCls(
          classes(`state-${resolvedState}`),
          classes(`color-${color}`),
          classes(`placement-${placement}`),
          className,
        ),
      )}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={normalizedPercent}
      aria-valuetext={ariaValueText}
    >
      {showInfo && (
        <TypographyDisplay className={classes('info')} as="div" size={PROGRESS_INFO_SIZE} data-testid="progress-info">
          {resolvedInfo}
        </TypographyDisplay>
      )}

      <div className={classes('bar')}>
        <div className={classes('rail')}>
          <div
            className={classes('track')}
            data-testid="progress-track"
            style={{ width: `${normalizedPercent}%` }}
          />
        </div>
      </div>

      {hasFeedback && (
        <div className={classes('feedback')} data-testid="progress-feedback">
          <span className={classes('feedback-icon')} aria-hidden="true">
            <Icons name={PROGRESS_FEEDBACK_ICON} size={16} />
          </span>
          {typeof feedback === 'string' || typeof feedback === 'number'
            ? <TypographyBody className={classes('feedback-text')} size={PROGRESS_FEEDBACK_TEXT_SIZE}>{feedback}</TypographyBody>
            : feedback}
        </div>
      )}
    </div>
  );
};

export default memo(Progress);
