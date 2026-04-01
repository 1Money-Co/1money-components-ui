import { SortTrigger } from '../features/SortTrigger';

export const HeaderCell = ({
  column,
  onSortClick,
}: {
  column: any;
  onSortClick: () => void;
}) => (
  <div className="table-header-cell">
    <span className="table-header-cell__title">{column.title}</span>
    {column.sorter ? <SortTrigger label={String(column.title)} onClick={onSortClick} /> : null}
  </div>
);
