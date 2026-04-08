import type { TableCellContentValue, TableColumn, TableRenderedCell } from '../interface';
import { CellContent } from './CellContent';

const isCellContentValue = (value: unknown): value is TableCellContentValue => {
  return !!value && typeof value === 'object' && 'primary' in (value as Record<string, unknown>);
};

const isRenderedCell = (value: unknown): value is TableRenderedCell<unknown> => {
  if (!value || typeof value !== 'object') return false;
  const obj = value as Record<string, unknown>;
  // React elements also have 'props', so exclude them by checking for $$typeof
  if ('$$typeof' in obj) return false;
  return 'props' in obj && typeof obj.props === 'object';
};

export const BodyCell = ({
  column,
  value,
  record,
  index,
}: {
  column: TableColumn<Record<string, unknown>>;
  value: unknown;
  record: Record<string, unknown>;
  index: number;
}) => {
  const rendered = column.render
    ? column.render(value, record, index, { column })
    : value;

  if (isRenderedCell(rendered)) {
    const inner = isCellContentValue(rendered.children)
      ? <CellContent value={rendered.children} />
      : rendered.children;
    return { children: inner, props: rendered.props };
  }

  if (isCellContentValue(rendered)) {
    return <CellContent value={rendered} />;
  }

  return <>{rendered}</>;
};
