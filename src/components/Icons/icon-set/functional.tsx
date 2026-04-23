import AddSvg from './source/functional/AddIcon.svg';
import ArrowDownSvg from './source/functional/ArrowDownIcon.svg';
import ArrowLeftSvg from './source/functional/ArrowLeftIcon.svg';
import ArrowRightSvg from './source/functional/ArrowRightIcon.svg';
import ArrowUpSvg from './source/functional/ArrowUpIcon.svg';
import CheckSvg from './source/functional/CheckIcon.svg';
import ChevronDownSvg from './source/functional/ChevronDownIcon.svg';
import ChevronLeftSvg from './source/functional/ChevronLeftIcon.svg';
import ChevronRightSvg from './source/functional/ChevronRightIcon.svg';
import ChevronUpSvg from './source/functional/ChevronUpIcon.svg';
import CollapseSvg from './source/functional/CollapseIcon.svg';
import CrossSvg from './source/functional/CrossIcon.svg';
import ExtendSvg from './source/functional/ExtendIcon.svg';
import MinusSvg from './source/functional/MinusIcon.svg';
import MoreSvg from './source/functional/MoreIcon.svg';
import RemoveSvg from './source/functional/RemoveIcon.svg';
import SpinnerSvg from './source/functional/SpinnerIcon.svg';
import IconWrapper from '../primitives';
import type { FC } from 'react';
import type { IconWrapperProps } from '../primitives';

export const AddIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={AddSvg} {...props} />;

export const ArrowDownIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={ArrowDownSvg} {...props} />;

export const ArrowLeftIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={ArrowLeftSvg} {...props} />;

export const ArrowRightIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={ArrowRightSvg} {...props} />;

export const ArrowUpIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={ArrowUpSvg} {...props} />;

export const CheckIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={CheckSvg} {...props} />;

export const ChevronDownIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={ChevronDownSvg} {...props} />;

export const ChevronLeftIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={ChevronLeftSvg} {...props} />;

export const ChevronRightIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={ChevronRightSvg} {...props} />;

export const ChevronUpIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={ChevronUpSvg} {...props} />;

export const CollapseIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={CollapseSvg} {...props} />;

export const CrossIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={CrossSvg} {...props} />;

export const ExtendIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={ExtendSvg} {...props} />;

export const MinusIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={MinusSvg} {...props} />;

export const MoreIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={MoreSvg} {...props} />;

export const RemoveIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={RemoveSvg} {...props} />;

export const SpinnerIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={SpinnerSvg} {...props} />;
