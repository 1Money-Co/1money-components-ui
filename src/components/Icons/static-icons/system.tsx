import HideBalanceSvg from '../assets/raw/system/HideBalanceIcon.svg';
import NotificationErrorSvg from '../assets/raw/system/NotificationErrorIcon.svg';
import NotificationInfoSvg from '../assets/raw/system/NotificationInfoIcon.svg';
import NotificationSuccessSvg from '../assets/raw/system/NotificationSuccessIcon.svg';
import NotificationWarningSvg from '../assets/raw/system/NotificationWarningIcon.svg';
import SearchSvg from '../assets/raw/system/SearchIcon.svg';
import UploadSvg from '../assets/raw/system/UploadIcon.svg';
import ViewBalanceSvg from '../assets/raw/system/ViewBalanceIcon.svg';
import IconWrapper from '../primitives';
import type { FC } from 'react';
import type { IconWrapperProps } from '../primitives';

export const HideBalanceIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={HideBalanceSvg} {...props} />;

export const NotificationErrorIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={NotificationErrorSvg} {...props} />;

export const NotificationInfoIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={NotificationInfoSvg} {...props} />;

export const NotificationSuccessIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={NotificationSuccessSvg} {...props} />;

export const NotificationWarningIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={NotificationWarningSvg} {...props} />;

export const SearchIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={SearchSvg} {...props} />;

export const UploadIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={UploadSvg} {...props} />;

export const ViewBalanceIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={ViewBalanceSvg} {...props} />;
