import AccountSvg from './source/menu/AccountIcon.svg';
import AddressBookSvg from './source/menu/AddressBookIcon.svg';
import CompanySvg from './source/menu/CompanyIcon.svg';
import ConvertSvg from './source/menu/ConvertIcon.svg';
import DashboardSvg from './source/menu/DashboardIcon.svg';
import DigitalAssetSvg from './source/menu/DigitalAssetIcon.svg';
import FiatSvg from './source/menu/FiatIcon.svg';
import HomeSvg from './source/menu/HomeIcon.svg';
import LinkedBankAccountsSvg from './source/menu/LinkedBankAccountsIcon.svg';
import LogoutSvg from './source/menu/LogoutIcon.svg';
import MenuDepositSvg from './source/menu/MenuDepositIcon.svg';
import PartiesSvg from './source/menu/PartiesIcon.svg';
import PortfolioSvg from './source/menu/PortfolioIcon.svg';
import ProfileSvg from './source/menu/ProfileIcon.svg';
import SWIFTSvg from './source/menu/SWIFTIcon.svg';
import SecuritySvg from './source/menu/SecurityIcon.svg';
import SendSvg from './source/menu/SendIcon.svg';
import TransactionsSvg from './source/menu/TransactionsIcon.svg';
import WireSvg from './source/menu/WireIcon.svg';
import WithdrawSvg from './source/menu/WithdrawIcon.svg';
import IconWrapper from '../primitives';
import type { FC } from 'react';
import type { IconWrapperProps } from '../primitives';

export const AccountIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={AccountSvg} {...props} />;

export const AddressBookIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={AddressBookSvg} {...props} />;

export const CompanyIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={CompanySvg} {...props} />;

export const ConvertIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={ConvertSvg} {...props} />;

export const DashboardIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={DashboardSvg} {...props} />;

export const DigitalAssetIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={DigitalAssetSvg} {...props} />;

export const FiatIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={FiatSvg} {...props} />;

export const HomeIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={HomeSvg} {...props} />;

export const LinkedBankAccountsIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={LinkedBankAccountsSvg} {...props} />;

export const LogoutIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={LogoutSvg} {...props} />;

export const MenuDepositIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={MenuDepositSvg} {...props} />;

export const PartiesIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={PartiesSvg} {...props} />;

export const PortfolioIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={PortfolioSvg} {...props} />;

export const ProfileIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={ProfileSvg} {...props} />;

export const SWIFTIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={SWIFTSvg} {...props} />;

export const SecurityIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={SecuritySvg} {...props} />;

export const SendIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={SendSvg} {...props} />;

export const TransactionsIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={TransactionsSvg} {...props} />;

export const WireIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={WireSvg} {...props} />;

export const WithdrawIcon: FC<IconWrapperProps> = (props) => <IconWrapper svgComponent={WithdrawSvg} {...props} />;
