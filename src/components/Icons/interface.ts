import type { IconHoverProps, IconWrapperProps } from './primitives';
import type { IconName } from './types';

export interface BaseIconProps extends IconWrapperProps {}

export interface IconProps extends BaseIconProps {
  name: IconName;
}

export interface IconsProps extends IconProps {}

export type { CanonicalIconName, IconAliasName, IconName } from './types';
export type { SortIconStatus } from './SVGs';
export type { IconHoverProps, IconWrapperProps };
