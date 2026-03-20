import { memo } from 'react';
import { Button as PrimeButton } from 'primereact/button';
import Spinner from '@/components/Spinner';
import { default as classnames, joinCls } from '@/utils/classnames';
/* import types */
import type { FC, PropsWithChildren } from 'react';
import type { ButtonProps } from './interface';

const SPINNER_STROKE_WIDTH = '5';

export const Button: FC<PropsWithChildren<ButtonProps>> = props => {
  const {
    children,
    className = '',
    prefixCls = 'button',
    color = 'primary',
    size = 'medium',
    iconStart,
    iconEnd,
    ref: _ref,
    ...rest
  } = props;
  const classes = classnames(prefixCls);

  return (
    <PrimeButton
      {...rest}
      loadingIcon={
        <Spinner
          strokeWidth={SPINNER_STROKE_WIDTH}
          className={joinCls(classes('loading-icon'), classes(`loading-icon-${size}`))}
        />
      }
      className={classes(
        undefined,
        joinCls(classes(color), classes(size), className),
      )}
    >
      {iconStart && <span className={classes('icon-start')}>{iconStart}</span>}
      {children}
      {iconEnd && <span className={classes('icon-end')}>{iconEnd}</span>}
    </PrimeButton>
  );
};

export default memo(Button);
