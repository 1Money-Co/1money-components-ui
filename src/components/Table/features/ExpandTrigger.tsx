import { Icons } from '@/components/Icons';

export const ExpandTrigger = ({
  expanded,
  onToggle,
}: {
  expanded: boolean;
  onToggle: () => void;
}) => (
  <button type="button" aria-label="Expand row" aria-expanded={expanded} onClick={onToggle}>
    <Icons name="chevronDown" size={16} style={{ transform: expanded ? 'rotate(180deg)' : undefined }} />
  </button>
);
