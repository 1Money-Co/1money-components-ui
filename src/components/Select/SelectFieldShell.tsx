import { memo } from 'react';
import { ErrorIcon } from '@/components/Icons';
import { TypographyBody, TypographyLabel } from '@/components/Typography';
import { joinCls } from '@/utils/classnames';
import type { ClassNamesFn } from '@/utils/classnames';
import type { FC, ReactNode } from 'react';
import type { SelectSize, SelectStatus, SelectVariant } from './interface';
import {
  SELECT_LABEL_SIZE,
  SELECT_LABEL_COLOR_DEFAULT,
  SELECT_LABEL_COLOR_DISABLED,
  SELECT_DESCRIPTION_SIZE,
  SELECT_DESCRIPTION_COLOR_DEFAULT,
  SELECT_DESCRIPTION_COLOR_DISABLED,
  SELECT_FEEDBACK_SIZE,
} from './constants';

interface SelectFieldShellProps {
  children: ReactNode;
  classes: ClassNamesFn;
  className?: string;
  size: SelectSize;
  variant: SelectVariant;
  status: SelectStatus;
  disabled: boolean;
  label?: ReactNode;
  info?: ReactNode;
  description?: ReactNode;
  feedback?: ReactNode;
  required?: boolean;
  labelId: string;
  descriptionId: string;
  feedbackId: string;
}

const SelectFieldShellBase: FC<SelectFieldShellProps> = ({
  children,
  classes,
  className = '',
  size,
  variant,
  status,
  disabled,
  label,
  info,
  description,
  feedback,
  required = false,
  labelId,
  descriptionId,
  feedbackId,
}) => {
  const labelColor = disabled ? SELECT_LABEL_COLOR_DISABLED : SELECT_LABEL_COLOR_DEFAULT;
  const descriptionColor = disabled ? SELECT_DESCRIPTION_COLOR_DISABLED : SELECT_DESCRIPTION_COLOR_DEFAULT;
  const feedbackClass = classes(
    'feedback',
    joinCls(
      status !== 'default' && classes(`feedback-${status}`),
      disabled && classes('feedback-disabled'),
    ),
  );

  return (
    <div
      className={classes(
        undefined,
        joinCls(
          classes(size),
          classes(variant),
          status !== 'default' && classes(status),
          disabled && classes('disabled'),
          className,
        ),
      )}
    >
      {(label || info) && (
        <div className={classes('label-row')}>
          {label && (
            <TypographyLabel id={labelId} className={classes('label-text')} size={SELECT_LABEL_SIZE} strong color={labelColor}>
              {label}
              {required && <span className={classes('required')}>*</span>}
            </TypographyLabel>
          )}
          {info && <span className={classes('info')}>{info}</span>}
        </div>
      )}

      {description && (
        <TypographyBody id={descriptionId} className={classes('description-text')} as="div" size={SELECT_DESCRIPTION_SIZE} color={descriptionColor}>
          {description}
        </TypographyBody>
      )}

      {children}

      {feedback && (
        <div
          id={feedbackId}
          className={feedbackClass}
          role={status === 'error' || status === 'warning' ? 'alert' : 'status'}
        >
          {status === 'error' && (
            <span className={classes('feedback-icon')}>
              <ErrorIcon size={16} color="currentColor" />
            </span>
          )}
          <TypographyBody size={SELECT_FEEDBACK_SIZE}>{feedback}</TypographyBody>
        </div>
      )}
    </div>
  );
};

export const SelectFieldShell = memo(SelectFieldShellBase);

export default SelectFieldShell;
