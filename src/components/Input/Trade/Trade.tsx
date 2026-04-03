import { memo, useId } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { Icons } from '@/components/Icons';
import { default as classnames, joinCls } from '@/utils/classnames';
import { useSyncRef } from '../useSyncRef';
import type { FC, ChangeEvent } from 'react';
import type { InputTradeProps } from '../interface';

const TRADE_PREFIX = 'input';

export const InputTrade: FC<InputTradeProps> = (props) => {
  const {
    className = '',
    prefixCls = TRADE_PREFIX,
    status = 'default',
    disabled = false,
    currencySymbol = '$',
    currencyUnit = 'USD',
    exchangeText,
    errorMsg,
    showMax = false,
    onMax,
    onSwap,
    value,
    defaultValue = '',
    onChange,
    placeholder = '0',
    ref,
    ...rest
  } = props;

  const autoId = useId();
  const classes = classnames(prefixCls);
  const [inputRef, syncRef] = useSyncRef<HTMLInputElement>(ref);
  const [innerValue, setInnerValue] = useControlledState(defaultValue, value);

  const handleChange = useEventCallback((event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;
    setInnerValue(nextValue);
    onChange?.(nextValue, event);
  });

  const handleMax = useEventCallback(() => {
    if (disabled) return;
    onMax?.();
  });

  const handleSwap = useEventCallback(() => {
    if (disabled) return;
    onSwap?.();
  });

  const isError = status === 'error';
  const hasValue = innerValue.length > 0;

  return (
    <div
      className={classes(
        'trade',
        joinCls(
          isError && classes('trade-error'),
          disabled && classes('trade-disabled'),
          className,
        ),
      )}
    >
      <div className={classes('trade-main')}>
        <div className={classes('trade-value-line')}>
          <span className={classes('trade-symbol')}>{currencySymbol}</span>
          <div className={classes('trade-input-wrapper')}>
            <input
              {...rest}
              ref={syncRef}
              id={autoId}
              className={classes('trade-field')}
              disabled={disabled}
              value={innerValue}
              onChange={handleChange}
              placeholder={placeholder}
              inputMode="decimal"
              aria-invalid={isError ? 'true' : 'false'}
            />
          </div>
          <span className={classes('trade-unit', joinCls(!hasValue && classes('trade-unit-placeholder')))}>
            {currencyUnit}
          </span>
          {showMax && (
            <button
              type="button"
              className={classes('trade-max')}
              disabled={disabled}
              onClick={handleMax}
            >
              Max
            </button>
          )}
        </div>
      </div>

      {(exchangeText || onSwap) && (
        <div className={classes('trade-subline')}>
          {onSwap && (
            <button
              type="button"
              className={classes('trade-swap')}
              disabled={disabled}
              onClick={handleSwap}
              aria-label="swap currency"
            >
              <Icons name="swap" size={24} />
            </button>
          )}
          {exchangeText && (
            <span className={classes('trade-exchange')}>{exchangeText}</span>
          )}
        </div>
      )}

      {errorMsg && (
        <div className={classes('trade-error-msg')}>
          {isError && <Icons name="error" size={16} />}
          <span>{errorMsg}</span>
        </div>
      )}
    </div>
  );
};

export default memo(InputTrade);
