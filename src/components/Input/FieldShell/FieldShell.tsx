import { memo } from 'react';
import { Icons } from '@/components/Icons';
import { Skeleton } from '@/components/Skeleton';
import { TypographyBody, TypographyLabel } from '@/components/Typography';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { IconName } from '@/components/Icons';
import type { FC, MouseEvent, ReactNode } from 'react';
import type { InputSize, InputStatus } from '../constants';
import {
  INPUT_FEEDBACK_SIZE,
  INPUT_INFO_COLOR,
  INPUT_INFO_SIZE,
  INPUT_LABEL_COLOR,
  INPUT_LABEL_SIZE,
} from '../constants';

export interface FieldShellProps {
  className?: string;
  prefixCls: string;
  size: InputSize;
  status: InputStatus;
  disabled: boolean;
  loading?: boolean;
  readOnly?: boolean;
  label?: ReactNode;
  info?: ReactNode;
  feedback?: ReactNode;
  feedbackIcon?: IconName | ReactNode;
  required?: boolean;
  inputId?: string;
  onControlWrapperClick?: (e: MouseEvent<HTMLDivElement>) => void;
  children: ReactNode;
}

const FieldShellBase: FC<FieldShellProps> = ({
  children,
  className = '',
  prefixCls,
  size,
  status,
  disabled,
  loading = false,
  readOnly = false,
  label,
  info,
  feedback,
  feedbackIcon,
  required = false,
  inputId,
  onControlWrapperClick,
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
          readOnly && classes('readonly'),
          className,
        ),
      )}
    >
      {(label || info) && (
        <div className={classes('label-row')}>
          {label && (
            loading
              ? <Skeleton width="72px" height="18px" className={classes('label-loading')} />
              : (
                <label htmlFor={inputId} className={classes('label')}>
                  <TypographyLabel as="span" size={INPUT_LABEL_SIZE[size]} color={INPUT_LABEL_COLOR} strong>
                    {label}
                  </TypographyLabel>
                  {required && <span className={classes('required')}>*</span>}
                </label>
              )
          )}
          {info && <TypographyBody className={classes('info')} size={INPUT_INFO_SIZE} color={INPUT_INFO_COLOR}>{info}</TypographyBody>}
        </div>
      )}
      <div className={classes('control-wrapper')} onClick={onControlWrapperClick}>{children}</div>
      {feedback && (
        <div className={classes('error-msg')} role={status === 'error' || status === 'warning' ? 'alert' : 'status'}>
          {feedbackIcon && (typeof feedbackIcon === 'string'
            ? <Icons className={classes('error-msg-icon')} name={feedbackIcon as IconName} size={16} color={status === 'error' ? 'danger' : undefined} />
            : feedbackIcon)}
          <TypographyBody as="span" size={INPUT_FEEDBACK_SIZE} color={status === 'error' ? 'danger' : undefined}>
            {feedback}
          </TypographyBody>
        </div>
      )}
    </div>
  );
};

export const FieldShell = memo(FieldShellBase);

export default FieldShell;
