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
  maxVisibleValues?: number;
  placeholder: ReactNode;
  renderValue?: SelectProps['renderValue'];
  renderValueMeta: SelectRenderValueMeta;
  selectedOptions: SelectOption[];
  onRemove: (optionValue: SelectOptionValue) => void;
  onRemoveClick: (event: ReactMouseEvent<HTMLSpanElement>) => void;
  onRemoveMouseDown: (event: ReactMouseEvent<HTMLSpanElement>) => void;
}

const DefaultMultipleValueContent: FC<
  Pick<
    SelectValueContentProps,
    'classes' | 'selectedOptions' | 'onRemove' | 'onRemoveClick' | 'onRemoveMouseDown'
  >
> = ({ classes, selectedOptions, onRemove, onRemoveClick, onRemoveMouseDown }) => (
  <>
    {selectedOptions.map((option) => (
      <span key={option.value} className={classes('tag')}>
        <span className={classes('tag-label')}>{getOptionTagLabel(option)}</span>
        <span
          className={classes('tag-remove')}
          aria-hidden="true"
          onMouseDown={(event) => {
            onRemoveMouseDown(event);
            onRemove(option.value);
          }}
          onClick={onRemoveClick}
        >
          <Icons name="cross" size={12} color="currentColor" />
        </span>
      </span>
    ))}
  </>
);

const CollapsedMultipleValueContent: FC<
  Pick<SelectValueContentProps, 'classes' | 'maxVisibleValues' | 'selectedOptions' | 'renderValueMeta'>
> = ({ classes, maxVisibleValues, selectedOptions, renderValueMeta }) => {
  const resolvedMaxVisibleValues = Math.max(0, Math.trunc(maxVisibleValues ?? 0));
  const visibleLabels = selectedOptions
    .slice(0, resolvedMaxVisibleValues)
    .map((option) => getOptionTagLabel(option));
  const hiddenCount = Math.max(0, selectedOptions.length - visibleLabels.length);

  if (visibleLabels.length === 0 && hiddenCount === 0) {
    return null;
  }

  return (
    <span className={classes('collapsed-values')}>
      {visibleLabels.length > 0 && (
        <span className={classes('collapsed-values-list')}>
          {visibleLabels.join(', ')}
        </span>
      )}
      {hiddenCount > 0 && (
        <span
          className={classes(
            'collapsed-values-extra',
            renderValueMeta.disabled ? classes('collapsed-values-extra-disabled') : undefined,
          )}
        >
          {`+ ${hiddenCount}...`}
        </span>
      )}
    </span>
  );
};

const SelectValueContentBase: FC<SelectValueContentProps> = ({
  classes,
  hasSelection,
  multiple,
  maxVisibleValues,
  placeholder,
  renderValue,
  renderValueMeta,
  selectedOptions,
  onRemove,
  onRemoveClick,
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

  if (maxVisibleValues !== undefined) {
    return (
      <CollapsedMultipleValueContent
        classes={classes}
        maxVisibleValues={maxVisibleValues}
        selectedOptions={selectedOptions}
        renderValueMeta={renderValueMeta}
      />
    );
  }

  return (
    <DefaultMultipleValueContent
      classes={classes}
      selectedOptions={selectedOptions}
      onRemove={onRemove}
      onRemoveClick={onRemoveClick}
      onRemoveMouseDown={onRemoveMouseDown}
    />
  );
};

export const SelectValueContent = memo(SelectValueContentBase);

export default SelectValueContent;
