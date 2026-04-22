import { isValidElement } from 'react';
import type { ReactNode } from 'react';
import { Empty } from '@/components/Empty';
import type { EmptyProps } from '@/components/Empty';

const isEmptyProps = (value: unknown): value is EmptyProps =>
  typeof value === 'object' && value !== null && !isValidElement(value);

export const TableEmptyState = ({ empty }: { empty?: EmptyProps | ReactNode }) => {
  if (!empty) {
    return <Empty title="No data" />;
  }

  if (isEmptyProps(empty)) {
    return <Empty {...empty} />;
  }

  return <>{empty}</>;
};
