import { useState } from 'react';
import type { Key } from 'react';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { Dropdown } from '@/components/Dropdown';
import type { TableFilterOption } from '../interface';

export const FilterDropdown = ({
  label,
  options,
  onApply,
}: {
  label: string;
  options: TableFilterOption[];
  onApply: (values: Array<Key | boolean>) => void;
}) => {
  const [values, setValues] = useState<Array<Key | boolean>>([]);

  return (
    <Dropdown
      content={(
        <div className="table-filter-dropdown">
          {options.map(option => (
            <Checkbox
              key={String(option.value)}
              checked={values.includes(option.value)}
              onChange={() => setValues(prev => (
                prev.includes(option.value)
                  ? prev.filter(value => value !== option.value)
                  : [...prev, option.value]
              ))}
              label={option.text}
            />
          ))}
          <div className="table-filter-dropdown__actions">
            <Button size="small" variant="text" onClick={() => setValues([])}>Reset</Button>
            <Button size="small" onClick={() => onApply(values)}>Apply</Button>
          </div>
        </div>
      )}
    >
      <button type="button" aria-label={`Filter ${label}`}>Filter</button>
    </Dropdown>
  );
};
