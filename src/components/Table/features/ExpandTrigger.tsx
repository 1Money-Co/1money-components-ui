import { Icons } from '@/components/Icons';
import { TABLE_DEFAULT_PREFIX } from '../constants';

export const ExpandTrigger = ({
  expanded,
  onToggle,
}: {
  expanded: boolean;
  onToggle: () => void;
}) => (
  <button
    type="button"
    aria-label="Expand row"
    aria-expanded={expanded}
    className={`${TABLE_DEFAULT_PREFIX}-expand-trigger`}
    onClick={onToggle}
  >
    <Icons
      name="chevronDown"
      size={16}
      color="currentColor"
      className={`${TABLE_DEFAULT_PREFIX}-expand-trigger__icon`}
      style={{
        transform: expanded ? 'rotate(180deg)' : undefined,
      }}
    />
  </button>
);
