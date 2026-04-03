import { memo, useMemo } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import { CellSelectorGroupProvider } from './CellSelectorGroupContext';
import type { FC, PropsWithChildren } from 'react';
import type { CellSelectorGroupProps } from './interface';

const GROUP_PREFIX = 'cell-selector-group';

export const CellSelectorGroup: FC<PropsWithChildren<CellSelectorGroupProps>> = (props) => {
  const {
    className = '',
    prefixCls = GROUP_PREFIX,
    value,
    defaultValue,
    layout = 'vertical',
    disabled = false,
    children,
    onChange,
    ref,
    ...rest
  } = props;

  const [innerValue, setInnerValue] = useControlledState<
    string | number | undefined
  >(defaultValue, value);

  const classes = classnames(prefixCls);

  const handleChange = useEventCallback((val: string | number) => {
    setInnerValue(val);
    onChange?.(val);
  });

  const contextValue = useMemo(
    () => ({
      value: innerValue,
      onChange: handleChange,
      disabled,
    }),
    [innerValue, handleChange, disabled],
  );

  return (
    <CellSelectorGroupProvider value={contextValue}>
      <div
        {...rest}
        ref={ref}
        className={classes(
          void 0,
          joinCls(classes(layout), className),
        )}
        role="radiogroup"
      >
        {children}
      </div>
    </CellSelectorGroupProvider>
  );
};

export default memo(CellSelectorGroup);
