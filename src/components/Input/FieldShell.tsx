import { memo } from 'react';
import { TypographyBody, TypographyLabel } from '@/components/Typography';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { FC, ReactNode } from 'react';
import type { InputSize, InputStatus } from './interface';
import {
  INPUT_DESCRIPTION_COLOR,
  INPUT_DESCRIPTION_SIZE,
  INPUT_FEEDBACK_SIZE,
  INPUT_INFO_COLOR,
  INPUT_INFO_SIZE,
  INPUT_LABEL_COLOR,
  INPUT_LABEL_SIZE,
} from './constants';

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
  label,
  info,
  description,
  feedback,
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
          className,
        ),
      )}
    >
      {(label || info) && (
        <div className={classes('label-row')}>
          {label && (
            <label htmlFor={inputId} className={classes('label')}>
              <TypographyLabel as="span" size={INPUT_LABEL_SIZE} color={INPUT_LABEL_COLOR}>
                {label}
              </TypographyLabel>
              {required && <span className={classes('required')}>*</span>}
            </label>
          )}
          {info && <TypographyBody className={classes('info')} size={INPUT_INFO_SIZE} color={INPUT_INFO_COLOR}>{info}</TypographyBody>}
        </div>
      )}
      {description && <TypographyBody as="div" className={classes('description')} size={INPUT_DESCRIPTION_SIZE} color={INPUT_DESCRIPTION_COLOR}>{description}</TypographyBody>}
      <div className={classes('control-wrapper')}>{children}</div>
      {feedback && (
        <TypographyBody
          as="div"
          className={classes('feedback')}
          size={INPUT_FEEDBACK_SIZE}
          role={status === 'error' || status === 'warning' ? 'alert' : 'status'}
        >
          {feedback}
        </TypographyBody>
      )}
    </div>
  );
};

export const FieldShell = memo(FieldShellBase);

export default FieldShell;
