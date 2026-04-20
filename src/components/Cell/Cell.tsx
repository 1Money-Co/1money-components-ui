import { memo } from 'react';
import { Icons } from '@/components/Icons';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { FC, PropsWithChildren } from 'react';
import type { CellProps } from './interface';
import './style';

const CELL_ICON_SIZE = 20;
const CELL_PREFIX_CLS = 'cell';

const CellComponent: FC<PropsWithChildren<CellProps>> = (props) => {
  const {
    children,
    className = '',
    prefixCls = CELL_PREFIX_CLS,
    iconStart,
    iconEnd,
    active = false,
    disabled = false,
    type = 'button',
    ref,
    ...rest
  } = props;

  const classes = classnames(prefixCls);

  return (
    <button
      {...rest}
      ref={ref}
      type={type}
      disabled={disabled}
      className={classes(
        undefined,
        joinCls(
          active && classes('active'),
          disabled && classes('disabled'),
          className,
        ),
      )}
    >
      <span className={classes('content')}>
        {iconStart ? (
          <Icons
            name={iconStart}
            size={CELL_ICON_SIZE}
            className={classes('icon-start')}
          />
        ) : null}
        <span className={classes('label')}>{children}</span>
      </span>
      {iconEnd ? (
        <Icons
          name={iconEnd}
          size={CELL_ICON_SIZE}
          className={classes('icon-end')}
        />
      ) : null}
    </button>
  );
};

export const Cell = memo(CellComponent);

export default Cell;
