import { useId } from 'react';
import IconWrapper from './Wrapper';
/* import types */
import type { FC } from 'react';
import type { IconWrapperProps } from './interface';

export interface IllustrationsCustomProps {
  borderColor?: string;
  gradientColor?: string | [string, string];
}

type IllustrationGradientColor = NonNullable<IllustrationsCustomProps['gradientColor']>;

const DEFAULT_BORDER_COLOR = '#131313';
const DEFAULT_ALERT_COLOR = '#AE0000';
const DEFAULT_PENDING_COLOR = '#F4C600';
const DEFAULT_GRADIENT_COLOR: IllustrationGradientColor = ['#B9CCE4', 'white'];
const DEFAULT_FIGMA_STROKE_COLOR = '#131313';

const renderGradientStops = (gradientColor: IllustrationGradientColor) => {
  const [startColor, endColor] = Array.isArray(gradientColor) ? gradientColor : [gradientColor, gradientColor];

  return (
    <>
      <stop stopColor={startColor} />
      <stop offset="1" stopColor={endColor} />
    </>
  );
};

export const IllusChecked: FC<IconWrapperProps & IllustrationsCustomProps> = ({ borderColor = DEFAULT_BORDER_COLOR, gradientColor = DEFAULT_GRADIENT_COLOR, ...rest }) => {
  const gradientId = useId();
  return (
    <IconWrapper viewBox="0 0 74 74" {...rest}>
      <g transform="translate(10 6)">
        <path fillRule="evenodd" clipRule="evenodd" d="M17 60H16.5V62H17H21H25H29H33H37H37.5V60H37H33H29H25H21H17Z" fill={borderColor} />
        <circle cx="27" cy="27" r="27" fill="white" />
        <circle cx="27" cy="27" r="26" stroke={borderColor} strokeWidth="2" fill="transparent" />
        <circle cx="26.997" cy="27.0009" r="20.1064" fill={`url(#${gradientId})`} />
        <circle cx="26.997" cy="27.0009" r="19.6064" stroke={borderColor} fill="transparent" />
        <path d="M16 26.3462L24 34.5L37.5 20" stroke={borderColor} strokeWidth="2" fill="transparent" />
      </g>
      <defs>
        <linearGradient id={gradientId} x1="36.997" y1="12.89453" x2="36.997" y2="53.1073" gradientUnits="userSpaceOnUse">
          {renderGradientStops(gradientColor)}
        </linearGradient>
      </defs>
    </IconWrapper>
  );
};

export const IllusEmailError: FC<IconWrapperProps & IllustrationsCustomProps> = ({ borderColor = DEFAULT_BORDER_COLOR, color = DEFAULT_ALERT_COLOR, gradientColor = DEFAULT_GRADIENT_COLOR, ...rest }) => {
  const gradientId = useId();
  return (
    <IconWrapper viewBox="0 0 74 74" {...rest}>
      <path d="M41 66H37V64H41V66ZM49 66H45V64H49V66Z" fill={borderColor} />
      <path d="M13 14C13 10.6863 15.6863 8 19 8L59 8C62.3137 8 65 10.6863 65 14V17.8824C65 18.5769 64.6397 19.2217 64.0482 19.5857L40.0482 34.355C39.4054 34.7505 38.5946 34.7505 37.9518 34.355L13.9518 19.5857C13.3603 19.2217 13 18.5769 13 17.8824V14Z" fill={`url(#${gradientId})`} />
      <path d="M61 8C63.2091 8 65 9.79086 65 12V50C65 52.2091 63.2091 54 61 54H17C14.7909 54 13 52.2091 13 50V12C13 9.79086 14.7909 8 17 8H61ZM41.1895 35.5684C39.8596 36.4379 38.1404 36.4379 36.8105 35.5684L15 21.3076V52H63V21.3076L41.1895 35.5684ZM15 18.918L39 34.6104L63 18.918V10H15V18.918Z" fill={borderColor} />
      <circle cx="16" cy="48" r="13" fill={color} />
      <circle cx="16" cy="48" r="12" stroke={borderColor} strokeWidth="2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M10.3416 52.2411L11.7559 53.6553L15.9984 49.4128L20.2425 53.6569L21.6568 52.2427L17.4126 47.9986L21.6553 43.7558L20.2411 42.3416L15.9984 46.5844L11.7573 42.3432L10.343 43.7574L14.5842 47.9986L10.3416 52.2411Z" fill="white" />
      <rect x="30" y="64" width="21" height="2" fill={borderColor} />
      <defs>
        <linearGradient id={gradientId} x1="39" y1="8" x2="39" y2="35" gradientUnits="userSpaceOnUse">
          {renderGradientStops(gradientColor)}
        </linearGradient>
      </defs>
    </IconWrapper>
  );
};

export const IllusLinkExpired: FC<IconWrapperProps & IllustrationsCustomProps> = ({ borderColor = DEFAULT_BORDER_COLOR, color = DEFAULT_ALERT_COLOR, gradientColor = DEFAULT_GRADIENT_COLOR, ...rest }) => {
  const gradientId = useId();
  return (
    <IconWrapper viewBox="0 0 74 74" {...rest}>
      <circle cx="36.9996" cy="36.9979" r="29.5909" fill="white" />
      <circle cx="37" cy="37" r="30" stroke={borderColor} strokeWidth="2" />
      <circle cx="37" cy="37" r="24" fill={`url(#${gradientId})`} />
      <circle cx="37" cy="37" r="23.5" stroke={borderColor} />
      <path fillRule="evenodd" clipRule="evenodd" d="M47.0743 26.8327C44.5082 24.3902 40.3476 24.3902 37.7815 26.8327L34.4629 29.9915C31.3969 32.9098 31.3969 37.6414 34.4629 40.5597L35.9115 39.1808C33.6456 37.024 33.6456 33.5272 35.9115 31.3704L39.2302 28.2116C40.9962 26.5307 43.8596 26.5307 45.6256 28.2116C47.3917 29.8926 47.3917 32.618 45.6256 34.299L43.5137 36.3091L44.9624 37.688L47.0743 35.6779C49.6404 33.2354 49.6404 29.2753 47.0743 26.8327ZM26.9241 47.1673C29.4902 49.6098 33.6507 49.6098 36.2169 47.1673L39.5355 44.0085C42.6015 41.0902 42.6015 36.3587 39.5355 33.4403L38.0868 34.8192C40.3527 36.976 40.3528 40.4728 38.0868 42.6296L34.7682 45.7884C33.0021 47.4693 30.1388 47.4693 28.3728 45.7884C26.6067 44.1074 26.6067 41.382 28.3728 39.701L30.4846 37.6909L29.036 36.312L26.9241 38.3221C24.358 40.7646 24.358 44.7247 26.9241 47.1673Z" fill={borderColor} />
      <circle cx="15" cy="58" r="13" fill={color} />
      <circle cx="15" cy="58" r="12" stroke={borderColor} strokeWidth="2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13.5842 57.9986L9.34164 62.2411L10.7559 63.6553L14.9984 59.4128L19.2425 63.6569L20.6568 62.2427L16.4126 57.9986L20.6553 53.7558L19.2411 52.3416L14.9984 56.5844L10.7573 52.3432L9.34305 53.7574L13.5842 57.9986Z" fill="white" />
      <defs>
        <linearGradient id={gradientId} x1="37" y1="13" x2="37" y2="61" gradientUnits="userSpaceOnUse">
          {renderGradientStops(gradientColor)}
        </linearGradient>
      </defs>
    </IconWrapper>
  );
};

export const Illus2FA: FC<IconWrapperProps & IllustrationsCustomProps> = ({ borderColor = DEFAULT_BORDER_COLOR, color = DEFAULT_ALERT_COLOR, gradientColor = DEFAULT_GRADIENT_COLOR, ...rest }) => {
  const gradientId = useId();
  return (
    <IconWrapper viewBox="0 0 74 74" {...rest}>
      <path d="M47.7071 26.1213L46.2929 24.7071L32 39L24.7071 31.7071L23.2929 33.1213L32 41.8284L47.7071 26.1213Z" fill={borderColor} />
      <path fillRule="evenodd" clipRule="evenodd" d="M31.675 67.3393C33.0658 68.3327 34.9342 68.3327 36.325 67.3393L43.6217 62.1273C53.0704 55.3783 59.1201 44.8564 60.1991 33.2952L61.7016 17.1972C61.8759 15.3294 60.7288 13.5914 58.9429 13.0174L35.224 5.39344C34.4281 5.13759 33.5719 5.13759 32.776 5.39344L9.05706 13.0174C7.27115 13.5914 6.12408 15.3294 6.29841 17.1972L7.80088 33.2952C8.87994 44.8564 14.9296 55.3783 24.3783 62.1273L31.675 67.3393ZM59.8595 15.4127L34 7.10078L8.14055 15.4127L9.79223 33.1093C10.8173 44.0925 16.5645 54.0883 25.5407 60.4999L34 66.5422L42.4593 60.4999C51.4355 54.0883 57.1827 44.0925 58.2078 33.1093L59.8595 15.4127Z" fill={borderColor} />
      <circle cx="53" cy="54" r="15" fill={`url(#${gradientId})`} />
      <circle cx="53" cy="54" r="14" stroke={borderColor} strokeWidth="2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M50.5 49.5C50.5 48.1193 51.6193 47 53 47C54.3807 47 55.5 48.1193 55.5 49.5V51H50.5V49.5ZM48.5 51V49.5C48.5 47.0147 50.5147 45 53 45C55.4853 45 57.5 47.0147 57.5 49.5V51H59H60V52V60V61H59H47H46V60V52V51H47H48.5ZM48 59V53H58V59H48Z" fill={borderColor} />
      <defs>
        <linearGradient id={gradientId} x1="53" y1="39" x2="53" y2="69" gradientUnits="userSpaceOnUse">
          {renderGradientStops(gradientColor)}
        </linearGradient>
      </defs>
    </IconWrapper>
  );
};

export const IllusLocked: FC<IconWrapperProps & IllustrationsCustomProps> = ({ borderColor = DEFAULT_BORDER_COLOR, color = DEFAULT_ALERT_COLOR, gradientColor = DEFAULT_GRADIENT_COLOR, ...rest }) => {
  const svgId = useId().replace(/:/g, '');
  const gradientId = `illus-locked-gradient-${svgId}`;
  const lockedBorderColor = borderColor === DEFAULT_BORDER_COLOR ? DEFAULT_FIGMA_STROKE_COLOR : borderColor;

  return (
    <IconWrapper viewBox="0 0 74 74" {...rest}>
      <path d="M39 3C48.9411 3 57 11.0589 57 21V28H65C66.1046 28 67 28.8954 67 30V64C67 65.1046 66.1046 66 65 66H13C11.8954 66 11 65.1046 11 64V30C11 28.8954 11.8954 28 13 28H21V21C21 11.0589 29.0589 3 39 3ZM39 11C33.4772 11 29 15.4772 29 21V28H49V21C49 15.4772 44.5229 11 39 11Z" fill="white" />
      <rect x="67" y="66" width="56" height="37" rx="4" transform="rotate(-180 67 66)" fill={`url(#${gradientId})`} />
      <path d="M65 64V66H13V64H65ZM65 30H55V21C55 12.1634 47.8366 5 39 5C30.1634 5 23 12.1634 23 21V30H13V66C11.8954 66 11 65.1046 11 64V30C11 28.8954 11.8954 28 13 28H21V21C21 11.0589 29.0589 3 39 3C48.9411 3 57 11.0589 57 21V28H65C66.1046 28 67 28.8954 67 30V64C67 65.1046 66.1046 66 65 66V30ZM49 28V21C49 15.4772 44.5229 11 39 11C33.4772 11 29 15.4772 29 21V28H49ZM51 30H27V21C27 14.3726 32.3726 9 39 9C45.6274 9 51 14.3726 51 21V30Z" fill={lockedBorderColor} />
      <circle cx="14" cy="58" r="13" fill={color} />
      <circle cx="14" cy="58" r="12" stroke={lockedBorderColor} strokeWidth="2" />
      <path d="M15.4128 57.9986L19.6569 62.2426L18.2426 63.6568L13.9986 59.4128L9.75598 63.6555L8.34176 62.2412L12.5844 57.9986L8.34315 53.7573L9.75736 52.3431L13.9986 56.5844L18.2413 52.3418L19.6555 53.756L15.4128 57.9986Z" fill="white" />
      <defs>
        <linearGradient id={gradientId} x1="95" y1="66" x2="95" y2="103" gradientUnits="userSpaceOnUse">
          {renderGradientStops(gradientColor)}
        </linearGradient>
      </defs>
    </IconWrapper>
  );
};

export const IllusError: FC<IconWrapperProps & IllustrationsCustomProps> = ({ borderColor = DEFAULT_BORDER_COLOR, color = DEFAULT_ALERT_COLOR, ...rest }) => <IconWrapper viewBox="0 0 74 74" {...rest}>
  <path d="M12 59C12 55.6863 14.6863 53 18 53H56C59.3137 53 62 55.6863 62 59C62 62.3137 59.3137 65 56 65H18C14.6863 65 12 62.3137 12 59Z" fill={color} />
  <path d="M36 37V22H38V37H36Z" fill={borderColor} />
  <path d="M37 40C35.8954 40 35 40.8954 35 42C35 43.1046 35.8954 44 37 44C38.1046 44 39 43.1046 39 42C39 40.8954 38.1046 40 37 40Z" fill={borderColor} />
  <path fillRule="evenodd" clipRule="evenodd" d="M16.2308 53L7.84256 41.3164C6.76234 39.8118 6.85635 37.7624 8.06979 36.3631L33.9779 6.48512C35.5729 4.64582 38.4271 4.64582 40.0221 6.48512L65.9302 36.3631C67.1436 37.7624 67.2377 39.8118 66.1574 41.3164L57.7692 53H58C60.2091 53 62 54.7909 62 57V61C62 63.2091 60.2091 65 58 65H16C13.7909 65 12 63.2091 12 61V57C12 54.7909 13.7909 53 16 53H16.2308ZM37 6.05282L65.4541 38.8668L55.3072 53H18.6928L8.54593 38.8668L37 6.05282ZM60 55V63H14V55H60Z" fill={borderColor} />
</IconWrapper>;

export const IllusRegionNotSupported: FC<IconWrapperProps & IllustrationsCustomProps> = ({ borderColor = DEFAULT_BORDER_COLOR, color = DEFAULT_ALERT_COLOR, gradientColor = DEFAULT_GRADIENT_COLOR, ...rest }) => {
  const gradientId = useId();
  return (
    <IconWrapper viewBox="0 0 74 74" {...rest}>
      <rect width="74" height="74" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M20.8809 38.6129L14.5057 60.129H67.4943L61.1191 38.6129H20.8809ZM63.3099 39.4208C62.8391 37.8319 61.3793 36.7419 59.7221 36.7419H22.2779C20.6207 36.7419 19.1609 37.8319 18.6901 39.4208L13.4237 57.195C12.7131 59.5932 14.5102 62 17.0115 62H64.9885C67.4898 62 69.2869 59.5932 68.5763 57.195L63.3099 39.4208Z" fill={borderColor} />
      <path d="M28.7911 9.05709C35.5338 2.31432 46.466 2.31432 53.2088 9.05709C59.4298 15.2781 59.9783 25.1819 54.4824 32.0519L40.9999 48.9049L27.5175 32.0519C22.0215 25.1819 22.5701 15.2781 28.7911 9.05709Z" fill={`url(#${gradientId})`} />
      <path fillRule="evenodd" clipRule="evenodd" d="M41.0004 45.9099L53.0219 30.8831C57.9223 24.7576 57.4332 15.9269 51.8863 10.38C45.8742 4.36794 36.1266 4.36794 30.1145 10.38C24.5676 15.9269 24.0786 24.7576 28.979 30.8831L41.0004 45.9099ZM42.1984 47.4074L54.4828 32.0519C59.9788 25.1819 59.4303 15.2781 53.2093 9.05707C46.4665 2.31431 35.5343 2.31431 28.7916 9.05707C22.5706 15.2781 22.022 25.1819 27.518 32.0519L39.8024 47.4074L41.0004 48.9049L42.1984 47.4074Z" fill={borderColor} />
      <circle cx="41" cy="21.7742" r="7.48387" fill="white" />
      <circle cx="41" cy="21.7742" r="6.54839" stroke={borderColor} strokeWidth="1.87097" />
      <rect x="19.4839" y="55.4516" width="5.6129" height="1.87097" fill={borderColor} />
      <rect x="28.8389" y="55.4516" width="5.6129" height="1.87097" fill={borderColor} />
      <rect x="38.1934" y="55.4516" width="5.6129" height="1.87097" fill={borderColor} />
      <rect x="47.5483" y="55.4516" width="5.6129" height="1.87097" fill={borderColor} />
      <rect x="56.9033" y="55.4516" width="5.6129" height="1.87097" fill={borderColor} />
      <circle cx="16" cy="57" r="13" fill={color} />
      <circle cx="16" cy="57" r="12" stroke={borderColor} strokeWidth="2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14.5842 56.9986L10.3416 61.2411L11.7559 62.6553L15.9984 58.4128L20.2425 62.6569L21.6568 61.2427L17.4126 56.9986L21.6553 52.7558L20.2411 51.3416L15.9984 55.5844L11.7573 51.3432L10.343 52.7574L14.5842 56.9986Z" fill="white" />
      <defs>
        <linearGradient id={gradientId} x1="40.9999" y1="4.00002" x2="40.9999" y2="48.9049" gradientUnits="userSpaceOnUse">
          {renderGradientStops(gradientColor)}
        </linearGradient>
      </defs>
    </IconWrapper>
  );
};

export const IllusID: FC<IconWrapperProps & IllustrationsCustomProps> = ({ borderColor = DEFAULT_BORDER_COLOR, gradientColor = DEFAULT_GRADIENT_COLOR, ...rest }) => {
  const gradientId0 = useId();
  const gradientId1 = useId();
  const gradientId2 = useId();
  return (
    <IconWrapper viewBox="0 0 74 74" {...rest}>
      <path d="M11 50H63V59H11V50Z" fill={`url(#${gradientId0})`} />
      <rect x="15" y="34" width="18" height="8" fill={`url(#${gradientId1})`} />
      <circle cx="24" cy="24" r="5" fill={`url(#${gradientId2})`} />
      <path fillRule="evenodd" clipRule="evenodd" d="M18 32C15.7909 32 14 33.7909 14 36V43H34V36C34 33.7909 32.2091 32 30 32H18ZM32 41V34H16V41H32Z" fill={borderColor} />
      <path fillRule="evenodd" clipRule="evenodd" d="M30 24C30 27.3137 27.3137 30 24 30C20.6863 30 18 27.3137 18 24C18 20.6863 20.6863 18 24 18C27.3137 18 30 20.6863 30 24ZM28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24C20 21.7909 21.7909 20 24 20C26.2091 20 28 21.7909 28 24Z" fill={borderColor} />
      <path d="M59 21H42V19H59V21Z" fill={borderColor} />
      <path d="M42 28H59V26H42V28Z" fill={borderColor} />
      <path d="M59 35H42V33H59V35Z" fill={borderColor} />
      <path d="M42 42H49V40H42V42Z" fill={borderColor} />
      <path d="M59 42H52V40H59V42Z" fill={borderColor} />
      <path fillRule="evenodd" clipRule="evenodd" d="M63 52H64C66.2091 52 68 50.2091 68 48V13C68 10.7909 66.2091 9 64 9H10C7.79086 9 6 10.7909 6 13V48C6 50.2091 7.79086 52 10 52H11V55C11 57.2091 12.7909 59 15 59H59C61.2091 59 63 57.2091 63 55V52ZM66 11H8V50H66V11ZM61 52H13V57H61V52Z" fill={borderColor} />
      <rect x="27" y="64" width="21" height="2" fill={borderColor} />
      <defs>
        <linearGradient id={gradientId0} x1="37" y1="50" x2="37" y2="59" gradientUnits="userSpaceOnUse">
          {renderGradientStops(gradientColor)}
        </linearGradient>
        <linearGradient id={gradientId1} x1="24" y1="34" x2="24" y2="42" gradientUnits="userSpaceOnUse">
          {renderGradientStops(gradientColor)}
        </linearGradient>
        <linearGradient id={gradientId2} x1="24" y1="19" x2="24" y2="29" gradientUnits="userSpaceOnUse">
          {renderGradientStops(gradientColor)}
        </linearGradient>
      </defs>
    </IconWrapper>
  );
};

export const IllusVerification: FC<IconWrapperProps & IllustrationsCustomProps> = ({ borderColor = DEFAULT_BORDER_COLOR, gradientColor = DEFAULT_GRADIENT_COLOR, ...rest }) => {
  const gradientId0 = useId();
  const gradientId1 = useId();
  return (
    <IconWrapper viewBox="0 0 74 74" {...rest}>
      <path d="M10 6C7.79086 6 6 7.79086 6 10V19H8V8H19V6H10Z" fill={borderColor} />
      <path d="M64 6C66.2091 6 68 7.79086 68 10V19H66V8H55V6H64Z" fill={borderColor} />
      <path d="M64 68C66.2091 68 68 66.2091 68 64V55H66V66H55V68H64Z" fill={borderColor} />
      <path d="M68 10C68 7.79086 66.2091 6 64 6L55 6L55 8L66 8L66 19L68 19L68 10Z" fill={borderColor} />
      <path d="M68 64C68 66.2091 66.2091 68 64 68L55 68L55 66L66 66L66 55L68 55L68 64Z" fill={borderColor} />
      <path d="M6 64C6 66.2091 7.79086 68 10 68L19 68L19 66L8 66L8 55L6 55L6 64Z" fill={borderColor} />
      <path d="M42.4546 26.8544V12.9453L57.1819 26.8544H42.4546Z" fill={`url(#${gradientId0})`} />
      <path d="M49.8185 35.0359H29.3639V33.3995H49.8185V35.0359Z" fill={borderColor} />
      <path d="M29.3639 39.1268H32.6367V40.7631H29.3639V39.1268Z" fill={borderColor} />
      <path d="M35.0912 39.1268H38.3639V40.7631H35.0912V39.1268Z" fill={borderColor} />
      <path d="M44.0912 40.7631V39.1268H40.8185V40.7631H44.0912Z" fill={borderColor} />
      <path d="M46.5458 39.1268H49.8185V40.7631H46.5458V39.1268Z" fill={borderColor} />
      <path fillRule="evenodd" clipRule="evenodd" d="M41.9719 12.1268C42.8075 12.1268 43.6115 12.4464 44.219 13.0202L56.9747 25.0672C57.6293 25.6855 58.0003 26.5461 58.0003 27.4466V54.6722C58.0003 56.4797 56.5351 57.945 54.7276 57.945H24.4549C22.6474 57.945 21.1821 56.4797 21.1821 54.6722V15.3995C21.1821 13.592 22.6474 12.1268 24.4549 12.1268H41.9719ZM56.3639 56.3086H22.8185V13.7631H41.6367V24.3995C41.6367 26.207 43.1019 27.6722 44.9094 27.6722H56.3639V56.3086ZM55.6171 26.0359L43.273 14.3776V26.0359H55.6171Z" fill={borderColor} />
      <circle cx="24.4546" cy="51.4005" r="9" fill={`url(#${gradientId1})`} />
      <circle cx="24.4546" cy="51.4005" r="8.18182" stroke={borderColor} strokeWidth="1.63636" />
      <path d="M18.7273 57.127L13 62.8542" stroke={borderColor} strokeWidth="1.63636" />
      <defs>
        <linearGradient id={gradientId0} x1="49.8182" y1="12.9453" x2="49.8182" y2="26.8544" gradientUnits="userSpaceOnUse">
          {renderGradientStops(gradientColor)}
        </linearGradient>
        <linearGradient id={gradientId1} x1="24.4546" y1="42.4005" x2="24.4546" y2="60.4005" gradientUnits="userSpaceOnUse">
          {renderGradientStops(gradientColor)}
        </linearGradient>
      </defs>
    </IconWrapper>
  );
};

export const IllusPasskey: FC<IconWrapperProps & IllustrationsCustomProps> = ({ borderColor = DEFAULT_BORDER_COLOR, gradientColor = DEFAULT_GRADIENT_COLOR, ...rest }) => {
  const gradientId0 = useId();
  const gradientId1 = useId();
  const gradientId2 = useId();
  const badgeGradientId = useId();

  return (
    <IconWrapper viewBox="0 0 74 74" {...rest}>
      <path d="M11 52H63V61H11V52Z" fill={`url(#${gradientId0})`} />
      <rect x="15" y="36" width="18" height="8" fill={`url(#${gradientId1})`} />
      <circle cx="24" cy="26" r="5" fill={`url(#${gradientId2})`} />
      <path fillRule="evenodd" clipRule="evenodd" d="M18 34C15.7909 34 14 35.7909 14 38V45H34V38C34 35.7909 32.2091 34 30 34H18ZM32 43V36H16V43H32Z" fill={borderColor} />
      <path fillRule="evenodd" clipRule="evenodd" d="M30 26C30 29.3137 27.3137 32 24 32C20.6863 32 18 29.3137 18 26C18 22.6863 20.6863 20 24 20C27.3137 20 30 22.6863 30 26ZM28 26C28 28.2091 26.2091 30 24 30C21.7909 30 20 28.2091 20 26C20 23.7909 21.7909 22 24 22C26.2091 22 28 23.7909 28 26Z" fill={borderColor} />
      <path d="M59 23H42V21H59V23Z" fill={borderColor} />
      <path d="M42 30H59V28H42V30Z" fill={borderColor} />
      <path d="M59 37H42V35H59V37Z" fill={borderColor} />
      <path d="M42 44H49V42H42V44Z" fill={borderColor} />
      <path d="M59 44H52V42H59V44Z" fill={borderColor} />
      <path fillRule="evenodd" clipRule="evenodd" d="M63 54H64C66.2091 54 68 52.2091 68 50V15C68 12.7909 66.2091 11 64 11H10C7.79086 11 6 12.7909 6 15V50C6 52.2091 7.79086 54 10 54H11V57C11 59.2091 12.7909 61 15 61H59C61.2091 61 63 59.2091 63 57V54ZM66 13H8V52H66V13ZM61 54H13V59H61V54Z" fill={borderColor} />
      <rect x="27" y="66" width="21" height="2" fill={borderColor} />
      <circle cx="59" cy="15" r="15" fill={`url(#${badgeGradientId})`} />
      <circle cx="59" cy="15" r="14" stroke={borderColor} strokeWidth="2" />
      <g transform="translate(50.6667 6.8333)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.66667 1.66667H15V5.48801C15 10.1102 12.4249 14.3413 8.33333 16.4682C4.24177 14.3413 1.66667 10.1102 1.66667 5.48801V1.66667ZM0 1.66667C0 0.746192 0.746192 0 1.66667 0H15C15.9205 0 16.6667 0.746192 16.6667 1.66667V5.48801C16.6667 10.8069 13.6616 15.6692 8.90424 18.0479C8.54484 18.2276 8.12182 18.2276 7.76243 18.0479C3.0051 15.6692 0 10.8069 0 5.48801V1.66667ZM8.33333 6.2498C8.79357 6.2498 9.16667 5.8767 9.16667 5.41646C9.16667 4.95623 8.79357 4.58313 8.33333 4.58313C7.8731 4.58313 7.5 4.95623 7.5 5.41646C7.5 5.8767 7.8731 6.2498 8.33333 6.2498ZM10.8333 5.41646C10.8333 6.50498 10.1377 7.43101 9.16667 7.77421V9.9998H10.8333V11.6665H9.16667V13.3331H7.5V7.77421C6.52901 7.43101 5.83333 6.50498 5.83333 5.41646C5.83333 4.03575 6.95262 2.91646 8.33333 2.91646C9.71405 2.91646 10.8333 4.03575 10.8333 5.41646Z"
          fill={borderColor}
        />
      </g>
      <defs>
        <linearGradient id={gradientId0} x1="37" y1="52" x2="37" y2="61" gradientUnits="userSpaceOnUse">
          {renderGradientStops(gradientColor)}
        </linearGradient>
        <linearGradient id={gradientId1} x1="24" y1="36" x2="24" y2="44" gradientUnits="userSpaceOnUse">
          {renderGradientStops(gradientColor)}
        </linearGradient>
        <linearGradient id={gradientId2} x1="24" y1="21" x2="24" y2="31" gradientUnits="userSpaceOnUse">
          {renderGradientStops(gradientColor)}
        </linearGradient>
        <linearGradient id={badgeGradientId} x1="59" y1="0" x2="59" y2="30" gradientUnits="userSpaceOnUse">
          {renderGradientStops(gradientColor)}
        </linearGradient>
      </defs>
    </IconWrapper>
  );
};

export const IllusPending: FC<IconWrapperProps & IllustrationsCustomProps> = ({ borderColor = DEFAULT_BORDER_COLOR, color = DEFAULT_PENDING_COLOR, gradientColor = DEFAULT_GRADIENT_COLOR, ...rest }) => {
  const gradientId = useId();
  return (
    <IconWrapper viewBox="0 0 74 74" {...rest}>
      <circle cx="36.9972" cy="36.9981" r="29.5909" fill="white"/>
      <circle cx="37" cy="37" r="30" stroke={borderColor} strokeWidth="2"/>
      <circle cx="37" cy="37" r="24" fill={`url(#${gradientId})`}/>
      <circle cx="37" cy="37" r="23.5" stroke={borderColor}/>
      <circle cx="15" cy="58" r="13" fill={color}/>
      <path d="M15 52V58L21 61" stroke={borderColor} strokeWidth="2"/>
      <circle cx="15" cy="58" r="12" stroke={borderColor} strokeWidth="2"/>
      <path transform="translate(74 0) scale(-1 1)" fillRule="evenodd" clipRule="evenodd" d="M30.4144 31.0001L33.7073 34.293L32.293 35.7072L26.5859 30.0001L32.293 24.293L33.7073 25.7072L30.4144 29.0001L40.0002 29.0001C43.8661 29.0001 47.0002 32.1341 47.0002 36.0001L45.0002 36.0001C45.0002 33.2387 42.7616 31.0001 40.0002 31.0001L30.4144 31.0001ZM29.0002 36.0001C29.0002 38.7615 31.2387 41.0001 34.0002 41.0001H43.5859L40.293 37.7072L41.7073 36.293L47.4144 42.0001L41.7073 47.7072L40.293 46.293L43.5859 43.0001H34.0002C30.1342 43.0001 27.0002 39.8661 27.0002 36.0001H29.0002Z" fill={borderColor}/>
      <defs>
        <linearGradient id={gradientId} x1="37" y1="13" x2="37" y2="61" gradientUnits="userSpaceOnUse">
          {renderGradientStops(gradientColor)}
        </linearGradient>
      </defs>
    </IconWrapper>
  );
};

export const IllusAddAccount: FC<IconWrapperProps & IllustrationsCustomProps> = ({ borderColor = DEFAULT_BORDER_COLOR, gradientColor = DEFAULT_GRADIENT_COLOR, ...rest }) => {
  const cardGradientId = useId();
  const badgeGradientId = useId();

  return (
    <IconWrapper viewBox="0 0 74 74" {...rest}>
      <rect width="74" height="74" fill="white"/>
      <rect x="22.5" y="26" width="30" height="28" fill={`url(#${cardGradientId})`}/>
      <path d="M37.5 14.5C35.8431 14.5 34.5 15.8431 34.5 17.5C34.5 19.1569 35.8431 20.5 37.5 20.5C39.1569 20.5 40.5 19.1569 40.5 17.5C40.5 15.8431 39.1569 14.5 37.5 14.5Z" fill={borderColor}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M60.5 27L64.5 27C66.7091 27 68.5 25.2091 68.5 23L68.5 20.7408C68.5 19.0889 67.4845 17.6069 65.944 17.0106L38.944 6.55896C38.0149 6.19932 36.9851 6.19932 36.056 6.55896L9.05602 17.0106C7.51549 17.6069 6.5 19.0889 6.5 20.7408L6.5 23C6.5 25.2091 8.29086 27 10.5 27L14.5 27L14.5 53L13.5 53C11.2909 53 9.5 54.7909 9.5 57L9.5 59L8.5 59C6.29086 59 4.5 60.7909 4.5 63L4.5 67L70.5 67L70.5 63C70.5 60.7909 68.7091 59 66.5 59L64.5 59L64.5 57C64.5 54.7909 62.7091 53 60.5 53L60.5 27ZM66.5 19.3704L37.5 8.14462L8.5 19.3704L8.5 25L66.5 25L66.5 19.3704ZM58.5 27L53.5 27L53.5 53L58.5 53L58.5 27ZM51.5 53L51.5 27L23.5 27L23.5 53L51.5 53ZM11.5 55L11.5 59L62.5 59L62.5 55L11.5 55ZM21.5 53L16.5 53L16.5 27L21.5 27L21.5 53ZM6.5 61L6.5 65L68.5 65L68.5 61L6.5 61Z" fill={borderColor}/>
      <circle cx="59.8848" cy="59.3848" r="13" transform="rotate(-45 59.8848 59.3848)" fill={`url(#${badgeGradientId})`}/>
      <circle cx="59.8848" cy="59.3848" r="12" transform="rotate(-45 59.8848 59.3848)" stroke={borderColor} strokeWidth="2"/>
      <path d="M60.8828 58.3848H66.8848V60.3848H60.8828V66.3848H58.8828V60.3848H52.8848V58.3848H58.8828V52.3848H60.8828V58.3848Z" fill={borderColor}/>
      <defs>
      <linearGradient id={cardGradientId} x1="37.5" y1="26" x2="37.5" y2="54" gradientUnits="userSpaceOnUse">
        {renderGradientStops(gradientColor)}
      </linearGradient>
      <linearGradient id={badgeGradientId} x1="59.8848" y1="46.3848" x2="59.8848" y2="72.3848" gradientUnits="userSpaceOnUse">
        {renderGradientStops(gradientColor)}
      </linearGradient>
      </defs>
    </IconWrapper>
  );
};
