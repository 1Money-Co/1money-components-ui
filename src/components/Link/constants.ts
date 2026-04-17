export const LINK_PREFIX_CLS = 'link';

export const LINK_COLORS = ['primary', 'black', 'grey'] as const;
export const LINK_SIZES = ['large', 'small'] as const;

export const LINK_DEFAULT_COLOR: (typeof LINK_COLORS)[number] = 'primary';
export const LINK_DEFAULT_SIZE: (typeof LINK_SIZES)[number] = 'large';
