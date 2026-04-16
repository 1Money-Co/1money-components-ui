import type { TypographyBodySize, TypographyColor, TypographyLabelSize } from '@/components/Typography';

export const INPUT_SIZES = ['large', 'small'] as const;
export const INPUT_STATUSES = ['default', 'error', 'warning', 'success'] as const;
export const SEARCH_TRIGGERS = ['enter', 'button', 'both'] as const;
export const OTP_DEFAULT_LENGTH = 6;

export type InputSize = (typeof INPUT_SIZES)[number];
export type InputStatus = (typeof INPUT_STATUSES)[number];
export type SearchTrigger = (typeof SEARCH_TRIGGERS)[number];

// ── Typography ──
export const INPUT_LABEL_SIZE: Record<InputSize, TypographyLabelSize> = { large: 'lg', small: 'md' };
export const INPUT_LABEL_COLOR: TypographyColor = 'default';
export const INPUT_INFO_SIZE: TypographyBodySize = 'sm';
export const INPUT_INFO_COLOR: TypographyColor = 'default-tertiary';
export const INPUT_FEEDBACK_SIZE: TypographyBodySize = 'sm';
export const INPUT_COUNT_SIZE: TypographyBodySize = 'lg';
export const INPUT_COUNT_COLOR: TypographyColor = 'neutral-secondary';
