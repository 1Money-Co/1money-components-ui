import { isValidElement, memo } from 'react';
import { Icons } from '@/components/Icons';
import { Tag } from '@/components/Tag';
import { TypographyBody, TypographyHeadline } from '@/components/Typography';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { ReactNode } from 'react';
import type { ClassNamesFn } from '@/utils/classnames';
import {
  STEP_DEFAULT_PREFIX,
  STEP_DESCRIPTION_TYPOGRAPHY,
  STEP_INDICATOR_SIZE,
  STEP_STATUS,
  STEP_STATUS_ICON,
  STEP_STATUS_TAG_COLOR,
  STEP_TITLE_TYPOGRAPHY,
} from './constants';
import type { StepProps, StepStatus, StepTagConfig } from './interface';

/* ── Type guards ───────────────────────────────────────────── */

type StepTag = StepProps['items'][number]['tag'];

const isPrimitive = (value: unknown): value is string | number =>
  typeof value === 'string' || typeof value === 'number';

const isTagConfig = (value: StepTag): value is StepTagConfig =>
  !!value && typeof value === 'object' && !isValidElement(value) && 'label' in value;

/* ── Render helpers ────────────────────────────────────────── */

const wrapPrimitive = (
  value: ReactNode,
  wrapper: (content: string | number) => ReactNode,
): ReactNode => (isPrimitive(value) ? wrapper(value) : value);

const resolveTag = (tag: StepTag, status: StepStatus): ReactNode => {
  if (tag == null) return null;
  if (isValidElement(tag)) return tag;
  if (isPrimitive(tag)) {
    return <Tag label={String(tag)} color={STEP_STATUS_TAG_COLOR[status]} />;
  }
  if (isTagConfig(tag)) {
    return (
      <Tag
        label={tag.label}
        color={tag.color ?? STEP_STATUS_TAG_COLOR[status]}
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

  const icon = STEP_STATUS_ICON[status];
  if (icon) {
    return (
      <Icons
        name={icon.name}
        size={STEP_INDICATOR_SIZE}
        color={icon.color}
        innerColor={icon.innerColor}
        className={joinCls(cls('indicator-icon'), cls(`indicator-icon-${status}`))}
      />
    );
  }

  return <span className={cls('indicator-number')}>{index + 1}</span>;
};

const renderTitle = (content: string | number): ReactNode => (
  <TypographyHeadline {...STEP_TITLE_TYPOGRAPHY}>{content}</TypographyHeadline>
);

const renderDescription = (content: string | number): ReactNode => (
  <TypographyBody {...STEP_DESCRIPTION_TYPOGRAPHY}>{content}</TypographyBody>
);

/* ── Component ─────────────────────────────────────────────── */

export const Step = ({
  className,
  prefixCls = STEP_DEFAULT_PREFIX,
  items,
  ...rest
}: StepProps) => {
  const cls = classnames(prefixCls);

  return (
    <div {...rest} className={cls(undefined, className)}>
      {items.map((item, index) => {
        const status = item.status ?? STEP_STATUS.default;
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
                {wrapPrimitive(item.title, renderTitle)}
                {item.description != null && wrapPrimitive(item.description, renderDescription)}
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
