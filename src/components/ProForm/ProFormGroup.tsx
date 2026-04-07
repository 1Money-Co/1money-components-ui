import { memo } from 'react';
import type { FC } from 'react';
import { useControlledState } from '@1money/hooks';
import { default as classnames } from '@/utils/classnames';
import { TypographyLabel } from '@/components/Typography';
import { CSS_PREFIX, PROFORM_LIST_LABEL_SIZE, PROFORM_LIST_LABEL_COLOR } from './constants';
import type { ProFormGroupProps } from './interface';

const classes = classnames(`${CSS_PREFIX}-group`);

const ProFormGroupBase: FC<ProFormGroupProps> = (props) => {
  const {
    title,
    extra,
    collapsible = false,
    defaultCollapsed = false,
    collapsed: controlledCollapsed,
    onCollapse,
    style,
    children,
  } = props;

  const [collapsed, setCollapsed] = useControlledState(
    defaultCollapsed,
    controlledCollapsed,
  );

  const handleToggle = () => {
    if (!collapsible) return;
    const next = !collapsed;
    setCollapsed(next);
    onCollapse?.(next);
  };

  const hasHeader = title != null || extra != null;

  return (
    <div className={classes()} style={style}>
      {hasHeader && (
        <div
          className={classes('header')}
          role={collapsible ? 'button' : undefined}
          tabIndex={collapsible ? 0 : undefined}
          onClick={handleToggle}
          onKeyDown={collapsible ? (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleToggle();
            }
          } : undefined}
        >
          <div className={classes('title')}>
            {collapsible && (
              <span className={classes('arrow')} style={{ transform: collapsed ? undefined : 'rotate(90deg)' }}>
                &#9656;
              </span>
            )}
            {title && (
              <TypographyLabel size={PROFORM_LIST_LABEL_SIZE} color={PROFORM_LIST_LABEL_COLOR}>
                {title}
              </TypographyLabel>
            )}
          </div>
          {extra && (
            <div className={classes('extra')} role="presentation" onClick={(e) => e.stopPropagation()}>
              {extra}
            </div>
          )}
        </div>
      )}
      <div
        className={classes('body')}
        style={{ display: collapsible && collapsed ? 'none' : undefined }}
      >
        {children}
      </div>
    </div>
  );
};

ProFormGroupBase.displayName = 'ProFormGroup';

export const ProFormGroup = memo(ProFormGroupBase);

export default ProFormGroup;
