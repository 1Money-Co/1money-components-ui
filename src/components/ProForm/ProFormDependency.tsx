import { memo, useMemo } from 'react';
import type { FC } from 'react';
import { useFormContext } from '@/components/Form';
import type { ProFormDependencyProps } from './interface';

const ProFormDependencyBase: FC<ProFormDependencyProps> = ({ name, children }) => {
  const { values } = useFormContext();

  const watchedValues = useMemo(() => {
    const result: Record<string, unknown> = {};
    for (const key of name) {
      result[key] = values[key];
    }
    return result;
  }, [name, values]);

  return <>{children(watchedValues)}</>;
};

ProFormDependencyBase.displayName = 'ProFormDependency';

export const ProFormDependency = memo(ProFormDependencyBase);

export default ProFormDependency;
