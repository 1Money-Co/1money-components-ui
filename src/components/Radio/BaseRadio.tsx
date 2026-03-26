import { memo } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { default as classnames } from '@/utils/classnames';
import type { ChangeEvent, FC } from 'react';
import type { RadioChangeEvent, RadioProps } from './interface';

type BaseRadioProps = Omit<
  RadioProps,
  'className' | 'description' | 'direction' | 'label' | 'ref' | 'style'
>;

const createRadioChangeEvent = (
  event: ChangeEvent<HTMLInputElement>,
  nextChecked: boolean,
  props: BaseRadioProps,
): RadioChangeEvent => ({
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
    name: props.name,
    type: 'radio',
    value: props.value,
  },
});

export const BaseRadio: FC<BaseRadioProps> = (props) => {
  const {
    prefixCls = 'radio',
    checked,
    defaultChecked = false,
    disabled = false,
    onChange,
    value,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const isControlled = checked !== undefined;
  const [innerChecked, setInnerChecked] = useControlledState(
    defaultChecked,
    checked,
  );

  const handleChange = useEventCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    const nextChecked = event.target.checked;

    if (!isControlled) {
      setInnerChecked(nextChecked);
    }

    onChange?.(createRadioChangeEvent(event, nextChecked, props));
  });

  return (
    <span className={classes('box-wrapper')}>
      <input
        {...rest}
        checked={!!innerChecked}
        className={classes('input')}
        disabled={disabled}
        onChange={handleChange}
        type="radio"
        value={value}
      />
      <span
        aria-hidden="true"
        className={classes('box')}
      />
    </span>
  );
};

export default memo(BaseRadio);
