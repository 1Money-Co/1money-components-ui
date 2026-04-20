import { memo, useId } from 'react';
import { Icons } from '@/components/Icons';
import { Skeleton } from '@/components/Skeleton';
import { Tooltip } from '@/components/Tooltip';
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
  tip?: ReactNode;
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
  tip,
  feedback,
  feedbackIcon,
  required = true,
  inputId,
  onControlWrapperClick,
}) => {
  const classes = classnames(prefixCls);
  const tipId = useId();

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
      {(label || info || tip) && (
        <div className={classes('label-row')}>
          {label && (
            loading
              ? <Skeleton width="72px" height="18px" className={classes('label-loading')} />
              : (
                <label htmlFor={inputId} className={classes('label')}>
                  <TypographyLabel as="span" size={INPUT_LABEL_SIZE[size]} color={INPUT_LABEL_COLOR} strong>
                    {label}
                  </TypographyLabel>
                  {!required && <>{' '}<TypographyLabel as="span" className={classes('optional')} size={INPUT_LABEL_SIZE[size]} color="default-tertiary" strong>(Optional)</TypographyLabel></>}
                </label>
              )
          )}
          {info && <TypographyBody className={classes('info')} size={INPUT_INFO_SIZE} color={INPUT_INFO_COLOR}>{info}</TypographyBody>}
          {tip && (
            <>
              <span data-tooltip-id={tipId} className={classes('tip-trigger')}>
                <Icons name="info" size={16} />
              </span>
              <Tooltip id={tipId} placement="top" body={tip} />
            </>
          )}
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
