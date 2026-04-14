import { forwardRef, memo } from 'react';
import { SearchIcon } from '@/components/Icons';
import type { ClassNamesFn } from '@/utils/classnames';
import type {
  ChangeEvent,
  FocusEvent as ReactFocusEvent,
  KeyboardEvent as ReactKeyboardEvent,
} from 'react';

interface SelectSearchControlProps {
  classes: ClassNamesFn;
  placeholder: string;
  value: string;
  onBlur: (event: ReactFocusEvent<HTMLInputElement>) => void;
  onChange: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: ReactKeyboardEvent<HTMLInputElement>) => void;
}

const SelectSearchControlBase = forwardRef<HTMLInputElement, SelectSearchControlProps>(
  (
    {
      classes,
      placeholder,
      value,
      onBlur,
      onChange,
      onKeyDown,
    },
    ref,
  ) => (
    <div className={classes('search')}>
      <span className={classes('search-icon')}>
        <SearchIcon size={20} color="currentColor" />
      </span>
      <input
        ref={ref}
        type="text"
        value={value}
        placeholder={placeholder}
        aria-label={placeholder}
        className={classes('search-input')}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onChange={(event) => onChange(event.target.value, event)}
      />
    </div>
  ),
);

SelectSearchControlBase.displayName = 'SelectSearchControl';

export const SelectSearchControl = memo(SelectSearchControlBase);

export default SelectSearchControl;
