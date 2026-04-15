'use client';
import { memo } from 'react';
import { Logo, LogoBg } from '@/components/Icons/logos';
import { Typography } from '@/components/Typography';
import classnames, { joinCls } from '@/utils/classnames';
/* import types */
import type { FC } from 'react';
import type { SpinnerProps } from './interface';
import './style';

const DEFAULT_SIZE = 32;

export const Spinner: FC<SpinnerProps> = props => {
  const {
    className,
    style,
    prefixCls = 'spinner',
    type = 'default',
    size = DEFAULT_SIZE,
    title,
    body,
    ...rest
  } = props;
  const classes = classnames(prefixCls);

  if (type === 'brand' || type === 'brand-bg') {
    const hasBg = type === 'brand-bg';

    return (
      <div {...rest} className={classes(void 0, joinCls(classes('brand'), hasBg && classes('brand-bg'), className))}>
        {hasBg
          ? <LogoBg size={size} className={joinCls(classes('logo-bg'), classes('spin'))} />
          : <Logo size={size} className={joinCls(classes('logo'), classes('spin'))} />
        }
        {(title || body) && (
          <div className={classes('content')}>
            {title && (
              hasBg
                ? <Typography.Headline size="sm" className={classes('title')}>{title}</Typography.Headline>
                : <Typography.Body size="md" color="default-tertiary" className={classes('title')}>{title}</Typography.Body>
            )}
            {body && (
              <Typography.Body size="md" color="default-tertiary" className={classes('body')}>
                {body}
              </Typography.Body>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      {...rest}
      role="progressbar"
      className={classes(void 0, className)}
      style={{ width: size, height: size, ...style }}
    >
      <svg className={classes('circle')} viewBox="0 0 50 50">
        <circle
          className={classes('path')}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
};

export default memo(Spinner);
