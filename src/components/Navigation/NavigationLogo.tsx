import { Icons } from '@/components/Icons';
import type { FC, MouseEvent } from 'react';

const LOGO_COLLAPSED_SIZE = 24;
const LOGO_WIDTH = 132;
const LOGO_HEIGHT = 24;
const LOGO_COLOR = '#073387';
const WORD_COLOR = '#131313';

interface NavigationLogoProps {
  collapsed?: boolean;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

const NavigationLogo: FC<NavigationLogoProps> = ({ collapsed, onClick }) => {
  const logo = collapsed
    ? <Icons name="logo" size={LOGO_COLLAPSED_SIZE} color={LOGO_COLOR} />
    : <Icons name="logoWithWords" width={LOGO_WIDTH} height={LOGO_HEIGHT} logoColor={LOGO_COLOR} wordColor={WORD_COLOR} />;

  if (onClick) {
    return (
      <span role="button" tabIndex={0} onClick={onClick} onKeyDown={(e) => { if (e.key === 'Enter') onClick(e as unknown as MouseEvent<HTMLElement>); }}>
        {logo}
      </span>
    );
  }

  return logo;
};

export default NavigationLogo;
