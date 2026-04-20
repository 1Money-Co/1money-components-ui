import React, { memo, useRef } from 'react';
import { useEventCallback } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import { Button } from '@/components/Button';
import { ErrorIcon, UploadIcon } from '@/components/Icons';
import { Typography } from '@/components/Typography';
import type { FC, PropsWithChildren } from 'react';
import type { UploadProps } from './interface';
import './style';

const BUTTON_LABEL_DEFAULT = 'Upload file';

export const Upload: FC<PropsWithChildren<UploadProps>> = props => {
  const {
    prefixCls = 'upload',
    className,
    label,
    description,
    feedback,
    disabled = false,
    accept,
    multiple = false,
    buttonLabel = BUTTON_LABEL_DEFAULT,
    onSelect,
    children,
    ref,
  } = props;
  const classes = classnames(prefixCls);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = useEventCallback(() => {
    if (!disabled) {
      inputRef.current?.click();
    }
  });

  const handleChange = useEventCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onSelect?.(e.target.files);
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    },
  );

  return (
    <div
      ref={ref}
      className={classes(
        void 0,
        joinCls(disabled && classes('disabled'), className),
      )}
    >
      {label && (
        <Typography.Label size="lg" className={classes('label')}>
          {label}
        </Typography.Label>
      )}
      {description && (
        <Typography.Body size="md" className={classes('description')}>
          {description}
        </Typography.Body>
      )}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={handleChange}
        className={classes('input')}
      />
      <Button
        size="small"
        color="primary"
        disabled={disabled}
        iconStart={<UploadIcon size={16} />}
        onClick={handleClick}
      >
        {buttonLabel}
      </Button>
      {children && <div className={classes('slot')}>{children}</div>}
      {feedback && (
        <div className={classes('error-msg')}>
          <ErrorIcon size={16} color="currentColor" />
          <Typography.Body size="sm" className={classes('error-msg-text')}>
            {feedback}
          </Typography.Body>
        </div>
      )}
    </div>
  );
};

export default memo(Upload);
