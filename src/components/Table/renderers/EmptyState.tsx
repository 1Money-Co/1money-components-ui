import type { ReactNode } from 'react';
import { Empty } from '@/components/Empty';

export const TableEmptyState = ({ empty }: { empty?: ReactNode }) => {
  if (empty) {
    return <>{empty}</>;
  }

  return <Empty title="No data" description="" />;
};
