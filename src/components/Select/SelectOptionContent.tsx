import { memo } from 'react';
import { Icons } from '@/components/Icons';
import type { ClassNamesFn } from '@/utils/classnames';
import type { FC } from 'react';
import type { SelectOption } from './interface';

interface SelectOptionContentProps {
  classes: ClassNamesFn;
  option: SelectOption;
  selected: boolean;
}

const SelectOptionContentBase: FC<SelectOptionContentProps> = ({
  classes,
  option,
  selected,
}) => (
  <>
    <span className={classes('option-content')}>
      <span className={classes('option-label')}>{option.label}</span>
      {option.description && (
        <span className={classes('option-description')}>{option.description}</span>
      )}
    </span>
    <span className={classes('option-check')}>
      {selected && <Icons name="check" size={16} color="currentColor" />}
    </span>
  </>
);

export const SelectOptionContent = memo(SelectOptionContentBase);

export default SelectOptionContent;
