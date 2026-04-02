import { Checkbox } from '@/components/Checkbox';
import { Radio } from '@/components/Radio';

export const SelectionControl = ({
  checked,
  type,
  disabled,
  onChange,
}: {
  checked: boolean;
  type: 'checkbox' | 'radio';
  disabled?: boolean;
  onChange: () => void;
}) => {
  if (type === 'radio') {
    return <Radio checked={checked} disabled={disabled} onChange={() => onChange()} aria-label="Select row" />;
  }

  return <Checkbox checked={checked} disabled={disabled} onChange={() => onChange()} aria-label="Select row" />;
};

export const SelectionHeaderControl = ({
  checked,
  indeterminate,
  onChange,
}: {
  checked: boolean;
  indeterminate: boolean;
  onChange: () => void;
}) => (
  <Checkbox
    checked={checked}
    indeterminate={indeterminate}
    onChange={() => onChange()}
    aria-label="Select all rows"
  />
);
