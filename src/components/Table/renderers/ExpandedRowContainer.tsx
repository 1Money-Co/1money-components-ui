import type { ReactNode } from 'react';
import { TABLE_DEFAULT_PREFIX } from '../constants';

export const ExpandedRowContainer = ({ children }: { children: ReactNode }) => (
  <div className={`${TABLE_DEFAULT_PREFIX}-expanded-row__content`}>{children}</div>
);
