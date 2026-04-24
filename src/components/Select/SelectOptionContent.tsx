import { memo } from 'react';
import { Icons } from '@/components/Icons';
import { TypographyBody } from '@/components/Typography';
import type { ClassNamesFn } from '@/utils/classnames';
import type { FC } from 'react';
import type { SelectOption } from './interface';
import { SELECT_TYPOGRAPHY } from './constants';

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
      <TypographyBody className={classes('option-label')} size={SELECT_TYPOGRAPHY.option.label.size} strong>{option.label}</TypographyBody>
      {option.description && (
        <TypographyBody className={classes('option-description')} size={SELECT_TYPOGRAPHY.option.description.size} color={SELECT_TYPOGRAPHY.option.description.color}>{option.description}</TypographyBody>
      )}
    </span>
    <span className={classes('option-check')}>
      {selected && <Icons name="check" size={16} color="currentColor" />}
    </span>
  </>
);

export const SelectOptionContent = memo(SelectOptionContentBase);

export default SelectOptionContent;
