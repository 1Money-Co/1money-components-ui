import AppleSvg from './source/brand/AppleIcon.svg';
import GoogleSvg from './source/brand/GoogleIcon.svg';
import LinkedInSvg from './source/brand/LinkedInIcon.svg';
import TwitterSvg from './source/brand/TwitterIcon.svg';
import IconWrapper from '../primitives';
import type { FC } from 'react';
import type { IconWrapperProps } from '../primitives';

export const AppleIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={AppleSvg} {...props} />;

export const GoogleIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={GoogleSvg} {...props} />;

export const LinkedInIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={LinkedInSvg} {...props} />;

export const TwitterIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={TwitterSvg} {...props} />;
