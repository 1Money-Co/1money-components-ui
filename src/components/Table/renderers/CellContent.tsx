import type { ReactNode } from 'react';
import { TypographyBody, TypographyTitle } from '@/components/Typography';
import { TABLE_DEFAULT_PREFIX } from '../constants';
import type { TableCellContentValue } from '../interface';

export const CellContent = ({ value }: { value: TableCellContentValue }) => (
  <div className={`${TABLE_DEFAULT_PREFIX}-cell-content`}>
    {value.leading ? <span className={`${TABLE_DEFAULT_PREFIX}-cell-content__leading`}>{value.leading}</span> : null}
    <span className={`${TABLE_DEFAULT_PREFIX}-cell-content__text`}>
      <TypographyTitle size="sm">{value.primary}</TypographyTitle>
      {value.secondary ? <TypographyBody size="sm">{value.secondary}</TypographyBody> : null}
    </span>
    {value.trailing ? <span className={`${TABLE_DEFAULT_PREFIX}-cell-content__trailing`}>{value.trailing}</span> : null}
  </div>
);
