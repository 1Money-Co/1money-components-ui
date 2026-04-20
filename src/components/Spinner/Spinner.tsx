'use client';
import { memo, useEffect, useId, useRef } from 'react';
import { Typography } from '@/components/Typography';
import classnames, { joinCls } from '@/utils/classnames';
import lottiePureJson from './lottie-pure.json';
/* import types */
import type { CSSProperties, FC } from 'react';
import type { AnimationItem } from 'lottie-web';
import type { SpinnerProps } from './interface';
import './style';

const DEFAULT_SIZE = 32;
const BG_LOGO_RATIO = 2 / 3;

interface BrandBgCircleProps {
  size: number;
  className?: string;
}

const BrandBgCircle: FC<BrandBgCircleProps> = ({ size, className }) => {
  const rawId = useId();
  const gradId = `spinner-bg-${rawId.replace(/[^a-zA-Z0-9]/g, '')}`;
  return (
    <svg width={size} height={size} viewBox="0 0 56 57" className={className} aria-hidden="true">
      <circle cx="28" cy="28.75" r="28" fill={`url(#${gradId})`} />
      <defs>
        <radialGradient
          id={gradId}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-34.9085 92.6678) rotate(-45.6594) scale(108.853 103.698)"
        >
          <stop stopColor="#073387" />
          <stop offset="0.216852" stopColor="#90A8CF" />
          <stop offset="0.567103" stopColor="#CBD6E8" />
          <stop offset="1" stopColor="#F9F9F9" />
        </radialGradient>
      </defs>
    </svg>
  );
};

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
  const lottieRef = useRef<HTMLDivElement>(null);
  const isBrand = type === 'brand' || type === 'brand-bg';

  useEffect(() => {
    if (!isBrand || !lottieRef.current) return;

    let instance: AnimationItem | null = null;
    let destroyed = false;
    (async () => {
      const lottie = (await import('lottie-web')).default;
      if (destroyed || !lottieRef.current) return;
      instance = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: lottiePureJson,
      });
    })();

    return () => {
      destroyed = true;
      if (instance) {
        instance.destroy();
        instance = null;
      }
    };
  }, [isBrand]);

  if (isBrand) {
    const hasBg = type === 'brand-bg';
    const lottieSize = hasBg ? size * BG_LOGO_RATIO : size;
    const lottieStyle: CSSProperties = { width: lottieSize, height: lottieSize };

    return (
      <div {...rest} className={classes(void 0, joinCls(classes('brand'), hasBg && classes('brand-bg'), className))}>
        {hasBg ? (
          <div className={classes('icon-wrap')} style={{ width: size, height: size }}>
            <BrandBgCircle size={size} className={classes('bg')} />
            <div ref={lottieRef} className={classes('lottie')} style={lottieStyle} />
          </div>
        ) : (
          <div ref={lottieRef} className={classes('lottie')} style={lottieStyle} />
        )}
        {(title || body) && (
          <div className={classes('content')}>
            {title && (
              hasBg
                ? <Typography.Headline size="sm" color="default" className={classes('title')}>{title}</Typography.Headline>
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
