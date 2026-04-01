import { memo, useEffect, useRef } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { ChangeEvent, FC } from 'react';
import type { CheckboxChangeEvent, CheckboxProps } from './interface';

type BaseCheckboxProps = Omit<
  CheckboxProps,
  | 'className'
  | 'description'
  | 'label'
  | 'labelPlacement'
  | 'ref'
  | 'style'
>;

const createCheckboxChangeEvent = (
  event: ChangeEvent<HTMLInputElement>,
  nextChecked: boolean,
  props: BaseCheckboxProps,
): CheckboxChangeEvent => ({
  nativeEvent: event.nativeEvent,
  preventDefault: () => {
    event.preventDefault();
  },
  stopPropagation: () => {
    event.stopPropagation();
  },
  target: {
    checked: nextChecked,
    disabled: !!props.disabled,
    id: props.id,
    indeterminate: !!props.indeterminate,
    name: props.name,
    type: 'checkbox',
    value: props.value,
  },
});

export const BaseCheckbox: FC<BaseCheckboxProps> = (props) => {
  const {
    prefixCls = 'checkbox',
    checked,
    defaultChecked = false,
    disabled = false,
    indeterminate = false,
    onChange,
    value,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const isControlled = checked !== undefined;
  const [innerChecked, setInnerChecked] = useControlledState(
    defaultChecked,
    checked,
  );
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleChange = useEventCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    const nextChecked = event.target.checked;

    if (!isControlled) {
      setInnerChecked(nextChecked);
    }

    onChange?.(createCheckboxChangeEvent(event, nextChecked, props));
  });

  return (
    <span
      className={joinCls(
        classes('box-wrapper'),
        indeterminate && classes('box-wrapper-indeterminate'),
      )}
    >
      <input
        {...rest}
        ref={inputRef}
        checked={!!innerChecked}
        className={classes('input')}
        disabled={disabled}
        onChange={handleChange}
        type="checkbox"
        value={value}
      />
      <span
        aria-hidden="true"
        className={classes('box')}
      />
    </span>
  );
};

export default memo(BaseCheckbox);
