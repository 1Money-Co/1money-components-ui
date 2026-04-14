import ArrowLeftSvg from '../assets/raw/functional/ArrowLeftIcon.svg';
import CheckSvg from '../assets/raw/functional/CheckIcon.svg';
import ChevronLeftSvg from '../assets/raw/functional/ChevronLeftIcon.svg';
import ChevronRightSvg from '../assets/raw/functional/ChevronRightIcon.svg';
import CrossSvg from '../assets/raw/functional/CrossIcon.svg';
import IconWrapper from '../primitives';
import type { FC } from 'react';
import type { IconWrapperProps } from '../primitives';

export const ArrowLeftIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={ArrowLeftSvg} {...props} />;

export const CheckIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={CheckSvg} {...props} />;

export const ChevronLeftIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={ChevronLeftSvg} {...props} />;

export const ChevronRightIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={ChevronRightSvg} {...props} />;

export const CrossIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={CrossSvg} {...props} />;
