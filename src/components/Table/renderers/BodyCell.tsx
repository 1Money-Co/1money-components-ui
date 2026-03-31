import type { TableCellContentValue } from '../interface';
import { CellContent } from './CellContent';

const isCellContentValue = (value: unknown): value is TableCellContentValue => {
  return !!value && typeof value === 'object' && 'primary' in (value as Record<string, unknown>);
};

export const BodyCell = ({
  column,
  value,
  record,
  index,
}: {
  column: any;
  value: unknown;
  record: any;
  index: number;
}) => {
  const rendered = column.render
    ? column.render(value, record, index, { column })
    : value;

  if (isCellContentValue(rendered)) {
    return <CellContent value={rendered} />;
  }

  return <>{rendered}</>;
};
