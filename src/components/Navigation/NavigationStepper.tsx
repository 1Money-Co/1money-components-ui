import { memo } from 'react';
import { default as classnames, joinCls } from '@/utils/classnames';
import { Icons } from '@/components/Icons';
import NavigationLogo from './NavigationLogo';
import type { FC, MouseEvent } from 'react';
import type { NavigationStepperProps, NavigationStepperStepStatus } from './interface';

const STATUS_SUCCESS_ICON_SIZE = 20;
const STATUS_SUCCESS_COLOR = '#1F580033';
const LOGO_BUTTON_ARIA_LABEL = 'Sidebar logo';
const DONE_STATUSES: ReadonlyArray<NavigationStepperStepStatus> = ['done', 'done-active'];

export const NavigationStepper: FC<NavigationStepperProps> = props => {
  const {
    id,
    steps,
    className,
    prefixCls = 'navigation-stepper',
    headerCls,
    bodyCls,
    footerCls,
    logoCls,
    onLogoClick,
    footer,
  } = props;
  const classes = classnames(prefixCls);

  const handleLogoClick = (e: MouseEvent<HTMLButtonElement>) => {
    onLogoClick?.(e);
  };

  return (
    <aside id={id} className={classes(void 0, className)}>
      <div className={classes('header', headerCls)}>
        <button
          type='button'
          className={classes('header-logo', logoCls)}
          onClick={handleLogoClick}
          aria-label={LOGO_BUTTON_ARIA_LABEL}
        >
          <NavigationLogo />
        </button>
      </div>
      <ul className={classes('steps', bodyCls)}>
        {steps.map(step => {
          const { key, label, status, disabled, onClick } = step;
          return (
            <li
              key={key}
              className={classes(
                'step',
                joinCls(classes(`step-${status}`), disabled && classes('step-disabled')),
              )}
              onClick={() => {
                if (disabled) return;
                onClick?.(step);
              }}
            >
              <span className={classes('step-label')}>{label}</span>
              {DONE_STATUSES.includes(status) && (
                <Icons name='statusSuccess' size={STATUS_SUCCESS_ICON_SIZE} color={STATUS_SUCCESS_COLOR} />
              )}
            </li>
          );
        })}
      </ul>
      {footer && <div className={classes('footer', footerCls)}>{footer}</div>}
    </aside>
  );
};

export default memo(NavigationStepper);
