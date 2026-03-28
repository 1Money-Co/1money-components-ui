import { isValidElement, memo } from 'react';
import { Icons } from '@/components/Icons';
import { Tag } from '@/components/Tag';
import { TypographyBody, TypographyHeadline } from '@/components/Typography';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { FC, ReactNode } from 'react';
import type { ClassNamesFn } from '@/utils/classnames';
import type { TagProps } from '@/components/Tag';
import type { StepItem, StepProps, StepStatus, StepTagConfig } from './interface';

/* ── Constants ─────────────────────────────────────────────── */

const INDICATOR_SIZE = 22;

const STATUS_TAG_COLOR: Record<StepStatus, NonNullable<TagProps['color']>> = {
  default: 'neutral',
  completed: 'success',
  error: 'negative',
};

type StatusIconDef = { name: 'statusSuccess' | 'statusFail'; color: string; innerColor: string };

const STATUS_ICON: Partial<Record<StepStatus, StatusIconDef>> = {
  completed: {
    name: 'statusSuccess',
    color: 'var(--om-step-status-success-bg)',
    innerColor: 'var(--om-step-status-success-fg)',
  },
  error: {
    name: 'statusFail',
    color: 'var(--om-step-status-error-bg)',
    innerColor: 'var(--om-step-status-error-fg)',
  },
};

/* ── Type guards ───────────────────────────────────────────── */

const isPrimitive = (value: unknown): value is string | number =>
  typeof value === 'string' || typeof value === 'number';

const isTagConfig = (value: StepItem['tag']): value is StepTagConfig =>
  !!value && typeof value === 'object' && !isValidElement(value) && 'label' in value;

/* ── Render helpers ────────────────────────────────────────── */

const wrapPrimitive = (
  value: ReactNode,
  wrapper: (content: string | number) => ReactNode,
): ReactNode => (isPrimitive(value) ? wrapper(value) : value);

const resolveTag = (tag: StepItem['tag'], status: StepStatus): ReactNode => {
  if (tag == null) return null;
  if (isValidElement(tag)) return tag;
  if (isPrimitive(tag)) {
    return <Tag label={String(tag)} color={STATUS_TAG_COLOR[status]} />;
  }
  if (isTagConfig(tag)) {
    return (
      <Tag
        label={tag.label}
        color={tag.color ?? STATUS_TAG_COLOR[status]}
        size={tag.size}
        icon={tag.icon}
      />
    );
  }
  return null;
};

const resolveIndicator = (
  cls: ClassNamesFn,
  status: StepStatus,
  index: number,
  custom?: ReactNode,
): ReactNode => {
  if (custom != null) return custom;

  const icon = STATUS_ICON[status];
  if (icon) {
    return (
      <Icons
        name={icon.name}
        size={INDICATOR_SIZE}
        color={icon.color}
        innerColor={icon.innerColor}
        className={joinCls(cls('indicator-icon'), cls(`indicator-icon-${status}`))}
      />
    );
  }

  return <span className={cls('indicator-number')}>{index + 1}</span>;
};

/* ── Component ─────────────────────────────────────────────── */

export const Step: FC<StepProps> = ({ className = '', prefixCls = 'step', items, ...rest }) => {
  const cls = classnames(prefixCls);

  return (
    <div {...rest} className={cls(undefined, className)}>
      {items.map((item, index) => {
        const status = item.status ?? 'default';
        const isLast = index === items.length - 1;
        const tag = resolveTag(item.tag, status);

        return (
          <div key={item.key} className={cls('item', cls(`item-${status}`))}>
            <div className={cls('indicator-column')} aria-hidden="true">
              <div className={cls('indicator')}>
                {resolveIndicator(cls, status, index, item.indicator)}
              </div>
              {!isLast && <span className={cls('connector')} />}
            </div>

            <div className={cls('content', isLast ? undefined : cls('content-continuation'))}>
              <div className={cls('copy')}>
                {wrapPrimitive(item.title, v => (
                  <TypographyHeadline size="xs" color="default">{v}</TypographyHeadline>
                ))}
                {item.description != null && wrapPrimitive(item.description, v => (
                  <TypographyBody size="md" color="default-tertiary">{v}</TypographyBody>
                ))}
              </div>
              {tag && <div className={cls('tag')}>{tag}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(Step);
