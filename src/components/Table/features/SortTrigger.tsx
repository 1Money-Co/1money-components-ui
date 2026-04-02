import { Icons } from '@/components/Icons';
import { TABLE_DEFAULT_PREFIX } from '../constants';
import type { TableSize, TableSortOrder } from '../interface';

const SORT_TRIGGER_ICON_SIZE = {
  large: 16,
  small: 12,
} as const;

export const SortTrigger = ({
  label,
  order = null,
  size,
  onClick,
}: {
  label: string;
  order?: TableSortOrder;
  size: TableSize;
  onClick: () => void;
}) => (
  <button
    type="button"
    aria-label={`Sort ${label}`}
    className={`${TABLE_DEFAULT_PREFIX}-sort-trigger ${TABLE_DEFAULT_PREFIX}-sort-trigger--${size}`}
    onClick={onClick}
  >
    <Icons name="sort" size={SORT_TRIGGER_ICON_SIZE[size]} status={order ?? 'default'} />
  </button>
);
