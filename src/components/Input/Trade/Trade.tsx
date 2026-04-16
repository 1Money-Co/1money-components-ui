import { memo, useId } from 'react';
import { useEventCallback } from '@1money/hooks';
import { Icons } from '@/components/Icons';
import { default as classnames, joinCls } from '@/utils/classnames';
import { useAmountInput } from '../useAmountInput';
import type { FC } from 'react';
import type { InputTradeProps } from '../interface';

const TRADE_PREFIX = 'input';

export const InputTrade: FC<InputTradeProps> = (props) => {
  const {
    className = '',
    prefixCls = TRADE_PREFIX,
    status = 'default',
    disabled = false,
    readOnly = false,
    currencySymbol = '$',
    currencyUnit = 'USD',
    exchangeText,
    feedback,
    showMax = false,
    onMax,
    onSwap,
    value,
    defaultValue,
    onChange,
    placeholder = '0',
    min,
    max,
    maxFractionDigits,
    negative,
    ref,
  } = props;

  const autoId = useId();
  const classes = classnames(prefixCls);

  const {
    syncRef,
    formattedValue,
    hasValue,
    handleChange,
    handleSelect,
  } = useAmountInput({
    value,
    defaultValue,
    onChange,
    min,
    max,
    maxFractionDigits,
    negative,
    disabled,
    readOnly,
    ref,
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
              ref={syncRef}
              id={autoId}
              className={classes('trade-field')}
              disabled={disabled}
              readOnly={readOnly}
              value={formattedValue}
              onChange={handleChange}
              onSelect={handleSelect}
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

      {feedback && (
        <div className={classes('trade-error-msg')}>
          {isError && <Icons name="error" size={16} />}
          <span>{feedback}</span>
        </div>
      )}
    </div>
  );
};

export default memo(InputTrade);
