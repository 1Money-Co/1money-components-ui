import { SortTrigger } from '../features/SortTrigger';
import { TABLE_DEFAULT_PREFIX } from '../constants';
import type { TableSize, TableSortOrder } from '../interface';

export const HeaderCell = ({
  column,
  size,
  sortOrder,
  onSortClick,
}: {
  column: any;
  size: TableSize;
  sortOrder?: TableSortOrder;
  onSortClick: () => void;
}) => (
  <div className={`${TABLE_DEFAULT_PREFIX}-header-cell ${TABLE_DEFAULT_PREFIX}-header-cell--${size}`}>
    <span className={`${TABLE_DEFAULT_PREFIX}-header-cell__title`}>{column.title}</span>
    {column.sorter ? <SortTrigger label={String(column.title)} order={sortOrder} size={size} onClick={onSortClick} /> : null}
  </div>
);
