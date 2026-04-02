import { Checkbox } from '@/components/Checkbox';
import { Radio } from '@/components/Radio';

export const SelectionControl = ({
  checked,
  type,
  onChange,
}: {
  checked: boolean;
  type: 'checkbox' | 'radio';
  onChange: () => void;
}) => {
  if (type === 'radio') {
    return <Radio checked={checked} onChange={onChange as any} aria-label="Select row" />;
  }

  return <Checkbox checked={checked} onChange={onChange as any} aria-label="Select row" />;
};
