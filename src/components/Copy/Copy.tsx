import { memo, useEffect, useRef } from 'react';
import { useSafeState } from '@1money/hooks';
import { Icons } from '@/components/Icons';
import { clipboard } from '@/utils/clipboard';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { FC, MouseEvent } from 'react';
import type { CopyProps } from './interface';
import './style';

const DEFAULT_ICON_SIZE = 20;
const COPIED_DURATION = 1500;

const CopyInner: FC<CopyProps> = props => {
  const {
    value,
    iconSize = DEFAULT_ICON_SIZE,
    color,
    successColor = '#1F5800',
    contained = true,
    'aria-label': ariaLabel = 'Copy',
    className,
    prefixCls = 'copy',
    onSuccess,
    onError,
  } = props;

  const classes = classnames(prefixCls);
  const [copied, setCopied] = useSafeState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    e.preventDefault();
    if (!value || copied) return;
    clipboard(value, (succeeded: boolean) => {
      if (succeeded) {
        setCopied(true);
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => setCopied(false), COPIED_DURATION);
        onSuccess?.(value);
      } else {
        onError?.(value);
      }
    });
  };

  const icon = (
    <Icons
      name={copied ? 'check' : 'copy'}
      size={iconSize}
      color={copied ? (successColor ?? color) : color}
    />
  );

  if (!contained) {
    return (
      <span
        className={classes(
          void 0,
          joinCls(copied && classes('copied'), className),
        )}
        onClick={handleClick}
        role="button"
        aria-label={ariaLabel}
        tabIndex={0}
      >
        {icon}
      </span>
    );
  }

  return (
    <div
      className={classes(
        'inner',
        joinCls(copied && classes('inner-copied'), className),
      )}
      onClick={handleClick}
      role="button"
      aria-label={ariaLabel}
      tabIndex={0}
    >
      {icon}
    </div>
  );
};

export const Copy = memo(CopyInner);

export default Copy;
