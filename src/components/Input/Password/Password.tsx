import { memo, useId, useState } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { Icons } from '@/components/Icons';
import { default as classnames, joinCls } from '@/utils/classnames';
import { FieldShell } from '../FieldShell';
import { useSyncRef } from '../useSyncRef';
import type { FC, ChangeEvent } from 'react';
import type { InputPasswordProps } from '../interface';

export const InputPassword: FC<InputPasswordProps> = (props) => {
  const {
    className = '',
    prefixCls = 'input',
    size = 'large',
    status = 'default',
    disabled = false,
    visibilityToggle = true,
    showIcon = <Icons name="hideBalance" size={16} />,
    hideIcon = <Icons name="viewBalance" size={16} />,
    label,
    info,
    feedback,
    feedbackIcon,
    required,
    prefix,
    suffix,
    value,
    defaultValue = '',
    onChange,
    ref,
    id: externalId,
    ...rest
  } = props;

  const [visible, setVisible] = useState(false);
  const autoId = useId();
  const inputId = externalId ?? autoId;
  const classes = classnames(prefixCls);
  const [, syncRef] = useSyncRef<HTMLInputElement>(ref);
  const [innerValue, setInnerValue] = useControlledState(defaultValue, value);
  const ariaRequired = required ? 'true' : 'false';
  const ariaInvalid = status === 'error' ? 'true' : 'false';

  const handleChange = useEventCallback((event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;
    setInnerValue(nextValue);
    onChange?.(nextValue, event);
  });

  const handleToggle = useEventCallback(() => {
    if (disabled) return;
    setVisible(current => !current);
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
      feedback={feedback}
      feedbackIcon={feedbackIcon}
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
          type={visible ? 'text' : 'password'}
          value={innerValue}
          onChange={handleChange}
          aria-required={ariaRequired}
          aria-invalid={ariaInvalid}
        />
        {visibilityToggle && (
          <button
            type="button"
            className={classes('action')}
            disabled={disabled}
            aria-label="toggle password visibility"
            onClick={handleToggle}
          >
            {visible ? showIcon : hideIcon}
          </button>
        )}
        {suffix && <span className={classes('suffix')}>{suffix}</span>}
      </div>
    </FieldShell>
  );
};

export default memo(InputPassword);
