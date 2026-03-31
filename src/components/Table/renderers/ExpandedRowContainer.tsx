import type { ReactNode } from 'react';

export const ExpandedRowContainer = ({ children }: { children: ReactNode }) => (
  <div className="table-expanded-row">{children}</div>
);
