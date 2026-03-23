export const INPUT_SIZES = ['large', 'small'] as const;
export const INPUT_STATUSES = ['default', 'error', 'warning', 'success'] as const;
export const SEARCH_TRIGGERS = ['enter', 'button', 'both'] as const;
export const OTP_DEFAULT_LENGTH = 6;

export type InputSize = (typeof INPUT_SIZES)[number];
export type InputStatus = (typeof INPUT_STATUSES)[number];
export type SearchTrigger = (typeof SEARCH_TRIGGERS)[number];
