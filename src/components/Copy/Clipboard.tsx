import { memo } from 'react';
import { TypographyBody, TypographyLabel } from '@/components/Typography';
import { default as classnames, joinCls } from '@/utils/classnames';
import Copy from './Copy';
import type { FC } from 'react';
import type { ClipboardProps } from './interface';
import './style';

const COPY_ICON_SIZE = 16;

export const Clipboard: FC<ClipboardProps> = props => {
  const {
    content,
    className,
    label,
    labelCls,
    prefixCls = 'clipboard',
    onSuccess,
    onError,
  } = props;

  const classes = classnames(prefixCls);

  return (
    <div className={classes(undefined, className)}>
      {label && (
        <TypographyLabel
          strong
          size="lg"
          className={joinCls(classes('label'), labelCls)}
        >
          {label}
        </TypographyLabel>
      )}
      <div className={classes('content')}>
        <TypographyBody size="lg" className={classes('content-text')}>
          {content}
        </TypographyBody>
        <Copy
          value={content}
          contained={false}
          iconSize={COPY_ICON_SIZE}
          onSuccess={onSuccess}
          onError={onError}
          className={classes('content-icon')}
        />
      </div>
    </div>
  );
};

export default memo(Clipboard);
