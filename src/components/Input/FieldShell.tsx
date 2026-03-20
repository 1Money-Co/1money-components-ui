import { default as classnames, joinCls } from '@/utils/classnames';
import type { FC, ReactNode } from 'react';
import type { InputSize, InputStatus } from './interface';

export interface FieldShellProps {
  className?: string;
  prefixCls: string;
  size: InputSize;
  status: InputStatus;
  disabled: boolean;
  label?: ReactNode;
  info?: ReactNode;
  description?: ReactNode;
  feedback?: ReactNode;
  required?: boolean;
  children: ReactNode;
}

export const FieldShell: FC<FieldShellProps> = ({
  children,
  className = '',
  prefixCls,
  size,
  status,
  disabled,
  label,
  info,
  description,
  feedback,
  required = false,
}) => {
  const classes = classnames(prefixCls);

  return (
    <div
      className={classes(
        undefined,
        joinCls(
          classes(size),
          classes(status),
          disabled && classes('disabled'),
          className,
        ),
      )}
    >
      {(label || info) && (
        <div className={classes('label-row')}>
          {label && (
            <span className={classes('label')}>
              {label}
              {required && <span className={classes('required')}>*</span>}
            </span>
          )}
          {info && <span className={classes('info')}>{info}</span>}
        </div>
      )}
      {description && <div className={classes('description')}>{description}</div>}
      <div className={classes('control-wrapper')}>{children}</div>
      {feedback && <div className={classes('feedback')}>{feedback}</div>}
    </div>
  );
};

export default FieldShell;
