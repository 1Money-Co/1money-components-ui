import { memo } from 'react';
import { Icons } from '@/components/Icons';
import type { ClassNamesFn } from '@/utils/classnames';
import type { FC, MouseEvent as ReactMouseEvent, ReactNode } from 'react';
import type {
  SelectOption,
  SelectOptionValue,
  SelectProps,
  SelectRenderValueMeta,
} from './interface';
import { getOptionTagLabel } from './utils';

interface SelectValueContentProps {
  classes: ClassNamesFn;
  hasSelection: boolean;
  multiple: boolean;
  placeholder: ReactNode;
  renderValue?: SelectProps['renderValue'];
  renderValueMeta: SelectRenderValueMeta;
  selectedOptions: SelectOption[];
  onRemove: (optionValue: SelectOptionValue) => void;
  onRemoveMouseDown: (event: ReactMouseEvent<HTMLSpanElement>) => void;
}

const DefaultMultipleValueContent: FC<
  Pick<SelectValueContentProps, 'classes' | 'selectedOptions' | 'onRemove' | 'onRemoveMouseDown'>
> = ({ classes, selectedOptions, onRemove, onRemoveMouseDown }) => (
  <>
    {selectedOptions.map((option) => (
      <span key={option.value} className={classes('tag')}>
        <span className={classes('tag-label')}>{getOptionTagLabel(option)}</span>
        <span
          className={classes('tag-remove')}
          aria-hidden="true"
          onMouseDown={onRemoveMouseDown}
          onClick={(event) => {
            onRemoveMouseDown(event);
            onRemove(option.value);
          }}
        >
          <Icons name="cross" size={12} color="currentColor" />
        </span>
      </span>
    ))}
  </>
);

const SelectValueContentBase: FC<SelectValueContentProps> = ({
  classes,
  hasSelection,
  multiple,
  placeholder,
  renderValue,
  renderValueMeta,
  selectedOptions,
  onRemove,
  onRemoveMouseDown,
}) => {
  if (renderValue) {
    return renderValue(
      hasSelection ? (multiple ? selectedOptions : selectedOptions[0]) : null,
      renderValueMeta,
    );
  }

  if (!hasSelection) {
    return placeholder;
  }

  if (!multiple) {
    return getOptionTagLabel(selectedOptions[0]);
  }

  return (
    <DefaultMultipleValueContent
      classes={classes}
      selectedOptions={selectedOptions}
      onRemove={onRemove}
      onRemoveMouseDown={onRemoveMouseDown}
    />
  );
};

export const SelectValueContent = memo(SelectValueContentBase);

export default SelectValueContent;
