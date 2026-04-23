import AccountLockedSvg from './source/primary/AccountLockedIcon.svg';
import BurnTokenSvg from './source/primary/BurnTokenIcon.svg';
import ConversionSvg from './source/primary/ConversionIcon.svg';
import DepositSvg from './source/primary/DepositIcon.svg';
import ErrorSvg from './source/primary/ErrorIcon.svg';
import FailSvg from './source/primary/FailIcon.svg';
import MintTokenSvg from './source/primary/MintTokenIcon.svg';
import MoneySvg from './source/primary/MoneyIcon.svg';
import PendingSvg from './source/primary/PendingIcon.svg';
import SendCryptoSvg from './source/primary/SendCryptoIcon.svg';
import SuccessSvg from './source/primary/SuccessIcon.svg';
import WithdrawalSvg from './source/primary/WithdrawalIcon.svg';
import IconWrapper from '../primitives';
import type { FC } from 'react';
import type { IconWrapperProps } from '../primitives';

export const AccountLockedIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={AccountLockedSvg} {...props} />;

export const BurnTokenIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={BurnTokenSvg} {...props} />;

export const ConversionIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={ConversionSvg} {...props} />;

export const DepositIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={DepositSvg} {...props} />;

export const ErrorIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={ErrorSvg} {...props} />;

export const FailIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={FailSvg} {...props} />;

export const MintTokenIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={MintTokenSvg} {...props} />;

export const MoneyIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={MoneySvg} {...props} />;

export const PendingIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={PendingSvg} {...props} />;

export const SendCryptoIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={SendCryptoSvg} {...props} />;

export const SuccessIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={SuccessSvg} {...props} />;

export const WithdrawalIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={WithdrawalSvg} {...props} />;
