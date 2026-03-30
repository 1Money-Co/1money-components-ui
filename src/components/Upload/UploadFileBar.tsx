import React, { memo } from 'react';
import { useEventCallback } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import { Icons } from '@/components/Icons';
import type { FC } from 'react';
import type { UploadFileBarProps } from './interface';

const FILE_STATUS_SUCCESS = 0;
const FILE_STATUS_ERROR = 1;

export const UploadFileBar: FC<UploadFileBarProps> = props => {
  const {
    className,
    prefixCls = 'upload-file-bar',
    fileName,
    status = FILE_STATUS_SUCCESS,
    message,
    onClickRemove,
    ref,
  } = props;
  const classes = classnames(prefixCls);

  const handleRemove = useEventCallback(() => {
    onClickRemove?.();
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
        <span className={classes('name')}>{fileName}</span>
        <Icons
          wrapperCls={classes('icon-status')}
          name={status === FILE_STATUS_SUCCESS ? 'statusSuccess' : 'statusFail'}
          size={20}
        />
        {message && (
          <span className={classes('message')}>
            {status === FILE_STATUS_ERROR && (
              <Icons name="error" size={16} />
            )}
            {message}
          </span>
        )}
      </div>
      <Icons
        wrapperCls={classes('icon-remove')}
        name="remove"
        size={20}
        onClick={handleRemove}
      />
    </div>
  );
};

export default memo(UploadFileBar);
