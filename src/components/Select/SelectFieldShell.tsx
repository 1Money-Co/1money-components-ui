import { memo } from 'react';
import { Icons } from '@/components/Icons';
import { joinCls } from '@/utils/classnames';
import type { ClassNamesFn } from '@/utils/classnames';
import type { FC, ReactNode } from 'react';
import type { SelectSize, SelectStatus, SelectVariant } from './interface';

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
  const labelTextClass = disabled ? classes('label-disabled') : classes('label-text');
  const descriptionTextClass = disabled ? classes('description-disabled') : classes('description-text');
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
            <span id={labelId} className={labelTextClass}>
              {label}
              {required && <span className={classes('required')}>*</span>}
            </span>
          )}
          {info && <span className={classes('info')}>{info}</span>}
        </div>
      )}

      {description && (
        <div id={descriptionId} className={descriptionTextClass}>
          {description}
        </div>
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
              <Icons name="error" size={16} color="currentColor" />
            </span>
          )}
          <span>{feedback}</span>
        </div>
      )}
    </div>
  );
};

export const SelectFieldShell = memo(SelectFieldShellBase);

export default SelectFieldShell;
