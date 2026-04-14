import ErrorSvg from '../assets/raw/primary/ErrorIcon.svg';
import IconWrapper from '../primitives';
import type { FC } from 'react';
import type { IconWrapperProps } from '../primitives';

export const ErrorIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={ErrorSvg} {...props} />;
