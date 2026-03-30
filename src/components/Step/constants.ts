import type { IconName } from '@/components/Icons';
import type { TagProps } from '@/components/Tag';
import type {
  TypographyBodyProps,
  TypographyHeadlineProps,
} from '@/components/Typography';

export const STEP_DEFAULT_PREFIX = 'step';
export const STEP_INDICATOR_SIZE = 22;
export const STEP_STORY_WRAPPER_WIDTH = 251;

export const STEP_STATUS = {
  default: 'default',
  completed: 'completed',
  error: 'error',
} as const;

export const STEP_STATUSES = [
  STEP_STATUS.default,
  STEP_STATUS.completed,
  STEP_STATUS.error,
] as const;

export type StepStatus = (typeof STEP_STATUSES)[number];

interface StepStatusIconDef {
  name: Extract<IconName, 'statusSuccess' | 'statusFail'>;
  color: string;
  innerColor: string;
}

export const STEP_TITLE_TYPOGRAPHY: Pick<
  TypographyHeadlineProps,
  'size' | 'color'
> = {
  size: 'xs',
  color: 'default',
};

export const STEP_DESCRIPTION_TYPOGRAPHY: Pick<
  TypographyBodyProps,
  'size' | 'color'
> = {
  size: 'md',
  color: 'default-tertiary',
};

export const STEP_STATUS_TAG_COLOR: Record<
  StepStatus,
  NonNullable<TagProps['color']>
> = {
  [STEP_STATUS.default]: 'neutral',
  [STEP_STATUS.completed]: 'success',
  [STEP_STATUS.error]: 'negative',
};

export const STEP_STATUS_ICON: Partial<Record<StepStatus, StepStatusIconDef>> = {
  [STEP_STATUS.completed]: {
    name: 'statusSuccess',
    color: 'var(--om-step-status-success-bg)',
    innerColor: 'var(--om-step-status-success-fg)',
  },
  [STEP_STATUS.error]: {
    name: 'statusFail',
    color: 'var(--om-step-status-error-bg)',
    innerColor: 'var(--om-step-status-error-fg)',
  },
};

export const STEP_SAMPLE_COPY = {
  title: 'Text Heading',
  description: 'Body text',
  tag: 'Tag',
} as const;

export const STEP_ITEM_KEYS = {
  verifyBusiness: 'verify-business',
  verifyOwners: 'verify-owners',
  reviewSubmission: 'review-submission',
  start: 'start',
  complete: 'complete',
  error: 'error',
  details: 'details',
  verification: 'verification',
  finalize: 'finalize',
  one: 'one',
  two: 'two',
  three: 'three',
} as const;

export const STEP_CUSTOM_COPY = {
  review: 'Review',
  pendingSignerConfirmation: 'Pending signer confirmation',
  actionRequired: 'Action required',
  settlementReview: 'Settlement review',
  uploadOwnershipDocuments: 'Upload ownership documents',
  approved: 'Approved',
  beneficialOwnerCheck: 'Beneficial owner check',
  waitingForPasskeyConfirmation: 'Waiting for passkey confirmation',
  pending: 'Pending',
  finalConfirmation: 'Final confirmation',
  signerRejectedAgreement: 'A signer rejected the agreement',
  rejected: 'Rejected',
} as const;

export const STEP_RECOMMENDED_TAG_COLOR: NonNullable<TagProps['color']> = 'recommended';
export const STEP_CUSTOM_INDICATOR_TEST_ID = 'custom-indicator';
export const STEP_TEST_ERROR_MESSAGES = [
  'Could not parse CSS stylesheet',
  'findDOMNode is deprecated and will be removed',
] as const;
