import NotificationErrorSvg from './source/notification/NotificationErrorIcon.svg';
import NotificationInfoSvg from './source/notification/NotificationInfoIcon.svg';
import NotificationSuccessSvg from './source/notification/NotificationSuccessIcon.svg';
import NotificationWarningSvg from './source/notification/NotificationWarningIcon.svg';
import IconWrapper from '../primitives';
import type { FC } from 'react';
import type { IconWrapperProps } from '../primitives';

export const NotificationErrorIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={NotificationErrorSvg} {...props} />;

export const NotificationInfoIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={NotificationInfoSvg} {...props} />;

export const NotificationSuccessIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={NotificationSuccessSvg} {...props} />;

export const NotificationWarningIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={NotificationWarningSvg} {...props} />;
