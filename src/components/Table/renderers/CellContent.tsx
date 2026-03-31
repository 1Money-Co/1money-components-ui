import type { ReactNode } from 'react';
import { TypographyBody, TypographyHeadline } from '@/components/Typography';
import type { TableCellContentValue } from '../interface';

export const CellContent = ({ value }: { value: TableCellContentValue }) => (
  <div className="table-cell-content">
    {value.leading ? <span className="table-cell-content__leading">{value.leading}</span> : null}
    <span className="table-cell-content__text">
      <TypographyHeadline size="xs">{value.primary}</TypographyHeadline>
      {value.secondary ? <TypographyBody size="sm">{value.secondary}</TypographyBody> : null}
    </span>
    {value.trailing ? <span className="table-cell-content__trailing">{value.trailing}</span> : null}
  </div>
);
