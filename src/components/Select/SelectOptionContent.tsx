import { memo } from 'react';
import { CheckIcon } from '@/components/Icons';
import { TypographyBody } from '@/components/Typography';
import type { ClassNamesFn } from '@/utils/classnames';
import type { FC } from 'react';
import type { SelectOption } from './interface';
import {
  SELECT_OPTION_LABEL_SIZE,
  SELECT_OPTION_DESCRIPTION_SIZE,
  SELECT_OPTION_DESCRIPTION_COLOR,
} from './constants';

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
      <TypographyBody className={classes('option-label')} size={SELECT_OPTION_LABEL_SIZE} strong>{option.label}</TypographyBody>
      {option.description && (
        <TypographyBody className={classes('option-description')} size={SELECT_OPTION_DESCRIPTION_SIZE} color={SELECT_OPTION_DESCRIPTION_COLOR}>{option.description}</TypographyBody>
      )}
    </span>
    <span className={classes('option-check')}>
      {selected && <CheckIcon size={16} color="currentColor" />}
    </span>
  </>
);

export const SelectOptionContent = memo(SelectOptionContentBase);

export default SelectOptionContent;
