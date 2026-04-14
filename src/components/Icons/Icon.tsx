import { memo } from 'react';
import { iconAliases } from './aliases';
import { iconRegistry } from './registry';
import type { FC } from 'react';
import type { IconProps } from './interface';
import type { CanonicalIconName, IconAliasName } from './types';

const resolveIconName = (name: IconProps['name']): CanonicalIconName =>
  iconAliases[name as IconAliasName] ?? (name as CanonicalIconName);

export const Icon: FC<IconProps & Record<string, unknown>> = ({ name, ...rest }) => {
  const ResolvedIcon = iconRegistry[resolveIconName(name)] as FC<Record<string, unknown>>;

  return ResolvedIcon ? <ResolvedIcon {...rest} /> : null;
};

export default memo(Icon);
