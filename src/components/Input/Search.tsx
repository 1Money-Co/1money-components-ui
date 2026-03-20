import { memo, useId } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { Icons } from '@/components/Icons';
import { Spinner } from '@/components/Spinner';
import { default as classnames, joinCls } from '@/utils/classnames';
import { FieldShell } from './FieldShell';
import { useSyncRef } from './useSyncRef';
import type { FC, ChangeEvent, KeyboardEvent, ReactNode } from 'react';
import type { InputSearchProps } from './interface';

const renderSearchIcon = (loading: boolean, searchButton: ReactNode | boolean): ReactNode => {
  if (loading) return <Spinner style={{ width: 16, height: 16 }} />;
  if (typeof searchButton === 'boolean') return <Icons name="search" size={16} />;
  return searchButton;
};

export const InputSearch: FC<InputSearchProps> = (props) => {
  const {
    className = '',
    prefixCls = 'input',
    size = 'large',
    status = 'default',
    disabled = false,
    loading = false,
    searchButton = true,
    searchTrigger = 'both',
    label,
    info,
    description,
    feedback,
    required,
    prefix,
    suffix,
    value,
    defaultValue = '',
    onChange,
    onSearch,
    onKeyDown,
    ref,
    id: externalId,
    ...rest
  } = props;

  const autoId = useId();
  const inputId = externalId ?? autoId;
  const classes = classnames(prefixCls);
  const [inputRef, syncRef] = useSyncRef<HTMLInputElement>(ref);
  const [innerValue, setInnerValue] = useControlledState(defaultValue, value);

  const handleChange = useEventCallback((event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;
    setInnerValue(nextValue);
    onChange?.(nextValue, event);
  });

  const handleSearch = useEventCallback((nextValue?: string) => {
    onSearch?.(nextValue ?? inputRef.current?.value ?? '');
  });

  const handleKeyDown = useEventCallback((event: KeyboardEvent<HTMLInputElement>) => {
    if (!disabled && (searchTrigger === 'enter' || searchTrigger === 'both') && event.key === 'Enter') {
      handleSearch(event.currentTarget.value);
    }
    onKeyDown?.(event);
  });

  return (
    <FieldShell
      className={className}
      prefixCls={prefixCls}
      size={size}
      status={status}
      disabled={disabled}
      label={label}
      info={info}
      description={description}
      feedback={feedback}
      required={required}
      inputId={inputId}
    >
      <div className={classes('control', joinCls(disabled && classes('control-disabled')))}>
        {prefix && <span className={classes('prefix')}>{prefix}</span>}
        <input
          {...rest}
          ref={syncRef}
          id={inputId}
          className={classes('field')}
          disabled={disabled}
          value={innerValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          aria-required={required || undefined}
          aria-invalid={status === 'error' || undefined}
        />
        {searchButton && (
          <button
            type="button"
            className={classes('action')}
            disabled={disabled || loading}
            aria-label="search input"
            onClick={() => handleSearch()}
          >
            {renderSearchIcon(loading, searchButton)}
          </button>
        )}
        {suffix && <span className={classes('suffix')}>{suffix}</span>}
      </div>
    </FieldShell>
  );
};

export default memo(InputSearch);
