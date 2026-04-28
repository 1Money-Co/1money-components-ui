import { memo } from 'react';
import {
  Logo,
  LogoWord,
  LogoNetwork,
  LogoWithWords,
  LogoBg,
  LogoBeta,
  LogoWithBeta,
} from './Logo';
import './style';

import {
  IllusChecked,
  IllusEmailError,
  IllusLinkExpired,
  Illus2FA,
  IllusLocked,
  IllusError,
  IllusRegionNotSupported,
  IllusID,
  IllusVerification,
  IllusPasskey,
  IllusAddAccount,
  IllusPending,
  IllusRewards,
} from './Illustrations';

import {
  /* Primary Icons */
  DepositIcon,
  WithdrawalIcon,
  ConversionIcon,
  MintTokenIcon,
  BurnTokenIcon,
  AccountLockedIcon,
  PendingIcon,
  SuccessIcon,
  FailIcon,
  ErrorIcon,
  /* Status Icons */
  StatusSuccessIcon,
  StatusFailIcon,
  /* Menu Icons */
  DashboardIcon,
  DigitalAssetIcon,
  AddressBookIcon,
  LinkedBankAccountsIcon,
  WireIcon,
  SWIFTIcon,
  AccountIcon,
  ProfileIcon,
  SecurityIcon,
  LogoutIcon,
  PortfolioIcon,
  HomeIcon,
  ConvertIcon,
  WithdrawIcon,
  SendIcon,
  MenuDepositIcon,
  CompanyIcon,
  PartiesIcon,
  TransactionsIcon,
  FiatIcon,
  MoneyIcon,
  SendCryptoIcon,

  /* Functional Icons */
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  AddIcon,
  MinusIcon,
  CrossIcon,
  MoreIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SortIcon,
  CollapseIcon,
  ExtendIcon,
  SpinnerIcon,
  CheckIcon,
  RemoveIcon,
  PixIcon,
  /* System Icons */
  InfoIcon,
  NotificationsIcon,
  FavoriteIcon,
  TransferHistoryIcon,
  SupportIcon,
  HelpIcon,
  LanguageIcon,
  ShareIcon,
  ProductsIcon,
  HubIcon,
  SystemSecurityIcon,
  FeesIcon,
  SettingsIcon,
  IDIcon,
  ViewBalanceIcon,
  HideBalanceIcon,
  PrivacyIcon,
  CardIcon,
  CoinIcon,
  WalletIcon,
  EmailIcon,
  RewardsIcon,
  TimeIcon,
  LocationIcon,
  CalendarIcon,
  SecurityCheckIcon,
  DevicesIcon,
  ImagesIcon,
  BankIcon,
  CoinsIcon,
  EarnIcon,
  ScanIcon,
  SearchIcon,
  MaintenanceIcon,
  EditFileIcon,
  DocumentIcon,
  UploadIcon,
  GiftIcon,
  FilterIcon,
  ExpandIcon,
  SystemCollapseIcon,
  RefreshIcon,
  TransferIcon,
  LinkIcon,
  SaveIcon,
  LikeIcon,
  DislikeIcon,
  CopyIcon,
  MobileIcon,
  ChatIcon,
  SwapIcon,
  ClockIcon,
  DesktopIcon,
  USDIcon,
  EURIcon,
  GBPIcon,
  JPYIcon,
  CNYIcon,
  GoogleIcon,
  AppleIcon,
  TwitterIcon,
  LinkedInIcon,
  PasskeyIcon,
  ACHIcon,
  BusinessAccountIcon,
  IndividualAccountIcon,
  APIKeyIcon,
  BrokenLinkIcon,
  PauseIcon,
  AutoConversionRulesIcon,
  NotificationInfoIcon,
  NotificationWarningIcon,
  NotificationSuccessIcon,
  NotificationErrorIcon,
} from './SVGs';
/* import types */
import type { FC } from 'react';
import type { IconsProps, IconWrapperProps } from './interface';
import type { LogoWithWordsCustomProps, LogoWithBetaCustomProps } from './Logo';
import type { IllustrationsCustomProps } from './Illustrations';
import type { SortIconStatus } from './SVGs';

const IconList = {
  illusChecked: IllusChecked,
  illusEmailError: IllusEmailError,
  illusLinkExpired: IllusLinkExpired,
  illus2FA: Illus2FA,
  illusLocked: IllusLocked,
  illusError: IllusError,
  illusRegionNotSupported: IllusRegionNotSupported,
  illusID: IllusID,
  illusVerification: IllusVerification,
  illusPasskey: IllusPasskey,
  illusAddAccount: IllusAddAccount,
  illusPending: IllusPending,
  illusRewards: IllusRewards,
  /* Logo */
  logo: Logo,
  logoWord: LogoWord,
  logoNetwork: LogoNetwork,
  logoWithWords: LogoWithWords,
  logoBg: LogoBg,
  logoBeta: LogoBeta,
  logoWithBeta: LogoWithBeta,

  /* Primary Icons */
  deposit: DepositIcon,
  withdrawal: WithdrawalIcon,
  conversion: ConversionIcon,
  mintToken: MintTokenIcon,
  burnToken: BurnTokenIcon,
  accountLocked: AccountLockedIcon,
  pending: PendingIcon,
  success: SuccessIcon,
  fail: FailIcon,
  error: ErrorIcon,

  /* Status Icons */
  statusSuccess: StatusSuccessIcon,
  statusFail: StatusFailIcon,

  /* Menu Icons */
  dashboard: DashboardIcon,
  digitalAsset: DigitalAssetIcon,
  addressBook: AddressBookIcon,
  linkedBankAccounts: LinkedBankAccountsIcon,
  wire: WireIcon,
  swift: SWIFTIcon,
  account: AccountIcon,
  profile: ProfileIcon,
  security: SecurityIcon,
  logout: LogoutIcon,
  portfolio: PortfolioIcon,
  home: HomeIcon,
  convert: ConvertIcon,
  withdraw: WithdrawIcon,
  send: SendIcon,
  menuDeposit: MenuDepositIcon,
  company: CompanyIcon,
  parties: PartiesIcon,
  transactions: TransactionsIcon,
  fiat: FiatIcon,
  money: MoneyIcon,
  sendCrypto: SendCryptoIcon,

  /* Functional Icons */
  arrowUp: ArrowUpIcon,
  arrowDown: ArrowDownIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  add: AddIcon,
  minus: MinusIcon,
  cross: CrossIcon,
  more: MoreIcon,
  chevronDown: ChevronDownIcon,
  chevronUp: ChevronUpIcon,
  chevronLeft: ChevronLeftIcon,
  chevronRight: ChevronRightIcon,
  sort: SortIcon,
  collapse: CollapseIcon,
  extend: ExtendIcon,
  spinner: SpinnerIcon,
  check: CheckIcon,
  remove: RemoveIcon,
  pix: PixIcon,

  /* System Icons */
  info: InfoIcon,
  notifications: NotificationsIcon,
  favorite: FavoriteIcon,
  transferHistory: TransferHistoryIcon,
  support: SupportIcon,
  help: HelpIcon,
  language: LanguageIcon,
  share: ShareIcon,
  products: ProductsIcon,
  hub: HubIcon,
  systemSecurity: SystemSecurityIcon,
  fees: FeesIcon,
  settings: SettingsIcon,
  id: IDIcon,
  viewBalance: ViewBalanceIcon,
  hideBalance: HideBalanceIcon,
  privacy: PrivacyIcon,
  card: CardIcon,
  coin: CoinIcon,
  wallet: WalletIcon,
  email: EmailIcon,
  rewards: RewardsIcon,
  time: TimeIcon,
  location: LocationIcon,
  calendar: CalendarIcon,
  securityCheck: SecurityCheckIcon,
  devices: DevicesIcon,
  images: ImagesIcon,
  bank: BankIcon,
  coins: CoinsIcon,
  earn: EarnIcon,
  scan: ScanIcon,
  search: SearchIcon,
  maintenance: MaintenanceIcon,
  editFile: EditFileIcon,
  document: DocumentIcon,
  upload: UploadIcon,
  gift: GiftIcon,
  filter: FilterIcon,
  expand: ExpandIcon,
  systemCollapse: SystemCollapseIcon,
  refresh: RefreshIcon,
  transfer: TransferIcon,
  link: LinkIcon,
  save: SaveIcon,
  like: LikeIcon,
  dislike: DislikeIcon,
  copy: CopyIcon,
  mobile: MobileIcon,
  chat: ChatIcon,
  swap: SwapIcon,
  clock: ClockIcon,
  desktop: DesktopIcon,
  ach: ACHIcon,
  businessAccount: BusinessAccountIcon,
  individualAccount: IndividualAccountIcon,
  apiKey: APIKeyIcon,
  brokenLink: BrokenLinkIcon,
  autoConversionRules: AutoConversionRulesIcon,

  /* Currency Icons */
  usd: USDIcon,
  eur: EURIcon,
  gbp: GBPIcon,
  jpy: JPYIcon,
  cny: CNYIcon,

  /* Social Icons */
  google: GoogleIcon,
  apple: AppleIcon,
  twitter: TwitterIcon,
  linkedIn: LinkedInIcon,
  passkey: PasskeyIcon,
  pause: PauseIcon,

  /* Notification Icons */
  notificationInfo: NotificationInfoIcon,
  notificationWarning: NotificationWarningIcon,
  notificationSuccess: NotificationSuccessIcon,
  notificationError: NotificationErrorIcon,

  /* Figma Aliases */
  depositFiatCrypto: DepositIcon,
  withdrawFiatCrypto: WithdrawalIcon,
  accountdLocked: AccountLockedIcon,
  personalSettings: AccountIcon,
  security2: SystemSecurityIcon,
  iconPix: PixIcon,
  noApiKeys: BrokenLinkIcon,
} as const;

export type IconName = keyof typeof IconList;

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
  name: 'illusLocked' | 'illusChecked' | 'illusError' | 'illusEmailError' | 'illusLinkExpired' | 'illus2FA' | 'illusID' | 'illusVerification' | 'illusRegionNotSupported' | 'illusPending' | 'illusPasskey' | 'illusAddAccount' | 'illusRewards';
}

export interface SortIconsProps extends IconsProps {
  name: 'sort';
  status?: SortIconStatus;
  inactiveColor?: string;
}

export type { SortIconStatus } from './SVGs';

export const Icons: FC<
  (IconsProps & { name: IconName })
  | StatusIconsProps
  | LogoWithWordsProps
  | LogoWithBetaProps
  | IllustrationsProps
  | SortIconsProps
> = ({ name, ...rest }) => {
  const Icon = IconList[name];
  return Icon ? <Icon {...rest} /> : null;
};

export default memo(Icons);
