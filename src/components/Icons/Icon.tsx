import { memo } from 'react';
import { iconRegistry } from './icon-set';
import type { FC } from 'react';
import type { IconProps } from './interface';

export const Icon: FC<IconProps & Record<string, unknown>> = ({ name, ...rest }) => {
  const ResolvedIcon = iconRegistry[name] as FC<Record<string, unknown>>;

  return ResolvedIcon ? <ResolvedIcon {...rest} /> : null;
};

export default memo(Icon);
