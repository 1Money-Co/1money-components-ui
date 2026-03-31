import type { Key } from 'react';
import { FilterDropdown } from '../features/FilterDropdown';
import { SortTrigger } from '../features/SortTrigger';

export const HeaderCell = ({
  column,
  onSortClick,
  onFilterApply,
}: {
  column: any;
  onSortClick: () => void;
  onFilterApply: (values: Array<Key | boolean>) => void;
}) => (
  <div className="table-header-cell">
    <span className="table-header-cell__title">{column.title}</span>
    {column.sorter ? <SortTrigger label={String(column.title)} onClick={onSortClick} /> : null}
    {column.filters?.length ? (
      <FilterDropdown label={String(column.title)} options={column.filters} onApply={onFilterApply} />
    ) : null}
  </div>
);
