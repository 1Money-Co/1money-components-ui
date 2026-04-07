import { memo } from 'react';
import { Icons } from '@/components/Icons';
import { Skeleton } from '@/components/Skeleton';
import { TypographyBody, TypographyLabel } from '@/components/Typography';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { FC, ReactNode } from 'react';
import type { InputSize, InputStatus } from '../constants';
import {
  INPUT_ERROR_MSG_SIZE,
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
  errorMsg?: ReactNode;
  required?: boolean;
  inputId?: string;
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
  errorMsg,
  required = false,
  inputId,
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
      <div className={classes('control-wrapper')}>{children}</div>
      {errorMsg && (
        <div className={classes('error-msg')} role={status === 'error' || status === 'warning' ? 'alert' : 'status'}>
          {status === 'error' && <Icons className={classes('error-msg-icon')} name="error" size={16} color="danger" />}
          <TypographyBody as="span" size={INPUT_ERROR_MSG_SIZE} color={status === 'error' ? 'danger' : undefined}>
            {errorMsg}
          </TypographyBody>
        </div>
      )}
    </div>
  );
};

export const FieldShell = memo(FieldShellBase);

export default FieldShell;
