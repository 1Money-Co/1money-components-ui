import CNYSvg from './source/currency/CNYIcon.svg';
import EURSvg from './source/currency/EURIcon.svg';
import GBPSvg from './source/currency/GBPIcon.svg';
import JPYSvg from './source/currency/JPYIcon.svg';
import USDSvg from './source/currency/USDIcon.svg';
import IconWrapper from '../primitives';
import type { FC } from 'react';
import type { IconWrapperProps } from '../primitives';

export const CNYIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={CNYSvg} {...props} />;

export const EURIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={EURSvg} {...props} />;

export const GBPIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={GBPSvg} {...props} />;

export const JPYIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={JPYSvg} {...props} />;

export const USDIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={USDSvg} {...props} />;
