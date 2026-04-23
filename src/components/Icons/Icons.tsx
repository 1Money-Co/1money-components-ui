import { memo } from 'react';
import Icon from './Icon';
import type { FC } from 'react';
import type { IconsProps } from './interface';
import type { IllustrationsCustomProps } from './illustrations';
import type { LogoWithBetaCustomProps, LogoWithWordsCustomProps } from './logos';
import type { SortIconStatus } from './icon-set';

export interface StatusIconsProps extends IconsProps {
  name: 'statusSuccess' | 'statusFail';
  innerColor?: string;
}

export interface LogoWithWordsProps extends IconsProps, LogoWithWordsCustomProps {
  name: 'logoWithWords';
}

export interface LogoWithBetaProps extends IconsProps, LogoWithBetaCustomProps {
  name: 'logoWithBeta';
}

export interface IllustrationsProps extends IconsProps, IllustrationsCustomProps {
  name:
    | 'illus2FA'
    | 'illusAddAccount'
    | 'illusChecked'
    | 'illusEmailError'
    | 'illusError'
    | 'illusID'
    | 'illusLinkExpired'
    | 'illusLocked'
    | 'illusPasskey'
    | 'illusPending'
    | 'illusRegionNotSupported'
    | 'illusVerification';
}

export interface SortIconsProps extends IconsProps {
  name: 'sort';
  status?: SortIconStatus;
  inactiveColor?: string;
}

export const Icons: FC<
  IconsProps
  | StatusIconsProps
  | LogoWithWordsProps
  | LogoWithBetaProps
  | IllustrationsProps
  | SortIconsProps
> = (props) => <Icon {...props} />;

export type { SortIconStatus } from './icon-set';

export default memo(Icons);
