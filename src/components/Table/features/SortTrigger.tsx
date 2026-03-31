import { Icons } from '@/components/Icons';

export const SortTrigger = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => (
  <button type="button" aria-label={`Sort ${label}`} onClick={onClick}>
    <Icons name="chevronDown" size={16} />
  </button>
);
