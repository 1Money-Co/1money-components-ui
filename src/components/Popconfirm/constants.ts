import type { CSSProperties } from 'react';
import type { Placement } from '@floating-ui/react';
import type { ButtonProps } from '@/components/Button';
import { BUTTON_COLOR, BUTTON_SIZE } from '@/components/Button/constants';
import type { IconName } from '@/components/Icons';
import type { TriggerAction, TriggerProps } from '@/components/Trigger/interface';

export const POPCONFIRM_DEFAULT_PREFIX = 'popconfirm';
export const POPCONFIRM_DEFAULT_ICON: IconName = 'notificationInfo';
export const POPCONFIRM_DEFAULT_CANCEL_TEXT = 'Cancel';
export const POPCONFIRM_DEFAULT_CONFIRM_TEXT = 'Confirm';
export const POPCONFIRM_DEFAULT_TRIGGER: TriggerAction = 'click';
export const POPCONFIRM_DEFAULT_PLACEMENT: Placement = 'top';
export const POPCONFIRM_DEFAULT_OFFSET = 8;
export const POPCONFIRM_ROLE: NonNullable<TriggerProps['role']> = 'alertdialog';
export const POPCONFIRM_ICON_SIZE = 32;

export const POPCONFIRM_ACTION_KIND = {
  cancel: 'cancel',
  confirm: 'confirm',
} as const;

export const POPCONFIRM_SLOT = {
  overlay: 'overlay',
  noArrow: 'no-arrow',
  header: 'header',
  icon: 'icon',
  content: 'content',
  title: 'title',
  body: 'body',
  actions: 'actions',
} as const;

export const POPCONFIRM_TRIGGER_OPTIONS: TriggerAction[] = [
  'click',
  'hover',
  'focus',
];

export const POPCONFIRM_PLACEMENTS: Placement[] = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end',
];

export const POPCONFIRM_ICON_OPTIONS: IconName[] = [
  'notificationInfo',
  'notificationWarning',
  'notificationSuccess',
  'notificationError',
];

export const POPCONFIRM_DEMO_COPY = {
  destructive: {
    title: 'Delete transfer rule?',
    body: 'This action removes the rule immediately and cannot be undone.',
    cancelText: 'Keep rule',
    confirmText: 'Delete',
    triggerText: 'Delete rule',
  },
  archive: {
    title: 'Archive this wallet?',
    body: 'Archiving keeps history intact, but the wallet will disappear from active lists.',
    cancelText: POPCONFIRM_DEFAULT_CANCEL_TEXT,
    confirmText: 'Archive',
    triggerText: 'Archive wallet',
  },
  placementBody: 'Popover alignment and beak placement should follow the trigger.',
  controlledTriggerText: 'Controlled Popconfirm',
  toggleText: 'Toggle',
  openStateText: 'Open',
  closedStateText: 'Closed',
} as const;

export const POPCONFIRM_STORY_STYLE = {
  placementsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
    padding: 120,
    justifyContent: 'center',
  } satisfies CSSProperties,
  controlledWrapper: {
    display: 'flex',
    gap: 12,
    alignItems: 'center',
  } satisfies CSSProperties,
} as const;

interface PopconfirmActionButtonDefaults {
  color: NonNullable<ButtonProps['color']>;
  size: NonNullable<ButtonProps['size']>;
}

export type PopconfirmActionKind =
  (typeof POPCONFIRM_ACTION_KIND)[keyof typeof POPCONFIRM_ACTION_KIND];

export const POPCONFIRM_ACTION_BUTTON_DEFAULTS: Record<
  PopconfirmActionKind,
  PopconfirmActionButtonDefaults
> = {
  [POPCONFIRM_ACTION_KIND.cancel]: {
    color: BUTTON_COLOR.secondary,
    size: BUTTON_SIZE.small,
  },
  [POPCONFIRM_ACTION_KIND.confirm]: {
    color: BUTTON_COLOR.primary,
    size: BUTTON_SIZE.small,
  },
};
