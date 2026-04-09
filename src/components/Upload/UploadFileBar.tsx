import React, { memo } from 'react';
import { useEventCallback } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import { Button } from '@/components/Button';
import { Icons } from '@/components/Icons';
import { Typography } from '@/components/Typography';
import type { FC } from 'react';
import type { UploadFileBarProps } from './interface';

const FILE_STATUS_SUCCESS = 0;
const FILE_STATUS_ERROR = 1;

const STATUS_ICON_COLOR_SUCCESS = '#1F580033';
const STATUS_ICON_COLOR_ERROR = '#AE00001A';

export const UploadFileBar: FC<UploadFileBarProps> = props => {
  const {
    className,
    prefixCls = 'upload-file-bar',
    fileName,
    status = FILE_STATUS_SUCCESS,
    message,
    onRemove,
    ref,
  } = props;
  const classes = classnames(prefixCls);

  const handleRemove = useEventCallback(() => {
    onRemove?.();
  });

  return (
    <div
      ref={ref}
      className={classes(
        void 0,
        joinCls(
          classes(status === FILE_STATUS_SUCCESS ? 'success' : 'failure'),
          className,
        ),
      )}
    >
      <div className={classes('inner')}>
        <Icons
          wrapperCls={classes('icon-file')}
          name="document"
          size={20}
        />
        <Typography.Body size="md" strong className={classes('name')}>{fileName}</Typography.Body>
        <Icons
          wrapperCls={classes('icon-status')}
          name={status === FILE_STATUS_SUCCESS ? 'statusSuccess' : 'statusFail'}
          size={20}
          color={status === FILE_STATUS_SUCCESS ? STATUS_ICON_COLOR_SUCCESS : STATUS_ICON_COLOR_ERROR}
        />
        {message && (
          <div className={classes('message')}>
            {status === FILE_STATUS_ERROR && (
              <Icons name="error" size={16} />
            )}
            <Typography.Body size="sm">{message}</Typography.Body>
          </div>
        )}
      </div>
      <Button
        className={classes('icon-remove')}
        color="white"
        size="medium"
        aria-label="Remove file"
        iconStart={<Icons name="remove" size={20} />}
        onClick={handleRemove}
      />
    </div>
  );
};

export default memo(UploadFileBar);
