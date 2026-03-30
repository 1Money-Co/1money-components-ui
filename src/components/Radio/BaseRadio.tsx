import { memo } from 'react';
import { default as classnames } from '@/utils/classnames';
import { RADIO_INPUT_TYPE, RADIO_PREFIX_CLS } from './constants';
import type { ChangeEvent, FC } from 'react';
import type {
  RadioChangeEvent,
  RadioProps,
  RadioValueType,
} from './interface';

type BaseRadioProps = Omit<
  RadioProps,
  | 'className'
  | 'description'
  | 'direction'
  | 'icon'
  | 'label'
  | 'onChange'
  | 'orientation'
  | 'ref'
  | 'size'
  | 'style'
  | 'tag'
  | 'variant'
> & {
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

interface RadioEventProps {
  disabled?: boolean;
  id?: string;
  name?: string;
  value?: RadioValueType;
}

export const createRadioChangeEvent = (
  event: ChangeEvent<HTMLInputElement>,
  nextChecked: boolean,
  props: RadioEventProps,
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
    type: RADIO_INPUT_TYPE,
    value: props.value,
  },
});

export const BaseRadio: FC<BaseRadioProps> = (props) => {
  const {
    prefixCls = RADIO_PREFIX_CLS,
    checked,
    disabled = false,
    onChange,
    value,
    ...rest
  } = props;

  const classes = classnames(prefixCls);

  return (
    <span className={classes('box-wrapper')}>
      <input
        {...rest}
        checked={!!checked}
        className={classes('input')}
        disabled={disabled}
        onChange={onChange as ((event: ChangeEvent<HTMLInputElement>) => void) | undefined}
        type={RADIO_INPUT_TYPE}
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
