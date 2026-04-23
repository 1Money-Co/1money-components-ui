import IconWrapper from '../primitives';
/* import types */
import type { FC } from 'react';
import type { IconWrapperProps } from '../primitives';

const SORT_ICON_VIEWBOX = '0 0 14.1738 19.0029';
const SORT_ICON_DEFAULT_PATH = 'M7.08984 16.2559L12.8037 10.9014L14.1738 12.3633L7.08984 19.0029L0.00488281 12.3623L1.375 10.9004L7.08984 16.2559ZM14.1689 6.63965L12.7979 8.10156L7.08496 2.74707L1.37012 8.10254L0 6.64062L7.08496 0L14.1689 6.63965Z';
const SORT_ICON_ARROW_PATH = 'M0 1.4621L1.3705 0L7.08464 5.35613L12.7984 0.00133538L14.1687 1.46356L7.08452 8.10276L0 1.4621Z';
const SORT_ICON_ARROW_HEIGHT = 8.10276;
const SORT_ICON_BOTTOM_OFFSET = 10.9004;
const SORT_ICON_INACTIVE_COLOR = '#9FA3A3';
const SORT_ICON_ACTIVE_COLOR = '#131313';

const SORT_ICON_STATUSES = ['default', 'ascend', 'descend'] as const;

export type SortIconStatus = (typeof SORT_ICON_STATUSES)[number];

export interface SortIconProps extends IconWrapperProps {
  inactiveColor?: string;
  status?: SortIconStatus;
}

export const SortIcon: FC<SortIconProps> = ({
  color = SORT_ICON_ACTIVE_COLOR,
  inactiveColor = SORT_ICON_INACTIVE_COLOR,
  status = 'default',
  ...props
}) => {
  if (status === 'default') {
    return (
      <IconWrapper viewBox={SORT_ICON_VIEWBOX} color={color} {...props}>
        <path d={SORT_ICON_DEFAULT_PATH} fill={inactiveColor} />
      </IconWrapper>
    );
  }

  return (
    <IconWrapper viewBox={SORT_ICON_VIEWBOX} color={color} {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d={SORT_ICON_ARROW_PATH}
        fill={status === 'ascend' ? color : inactiveColor}
        transform={`translate(0 ${SORT_ICON_ARROW_HEIGHT}) scale(1 -1)`}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d={SORT_ICON_ARROW_PATH}
        fill={status === 'descend' ? color : inactiveColor}
        transform={`translate(0 ${SORT_ICON_BOTTOM_OFFSET})`}
      />
    </IconWrapper>
  );
};

export const StatusSuccessIcon: FC<IconWrapperProps & { innerColor?: string }> = (props) => <IconWrapper viewBox='0 0 22 22' {...props}>
  <path fillRule="evenodd" clipRule="evenodd" d="M11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0ZM10.1992 12.3398L7.11426 9.32715L5.7168 10.7578L10.2373 15.1719L16.8418 8.37012L15.4072 6.97656L10.1992 12.3398Z" />
  <path fillRule="evenodd" clipRule="evenodd" d="M16.8417 8.36972L10.2374 15.1716L5.71699 10.7579L7.11423 9.32687L10.1996 12.3395L15.4068 6.97651L16.8417 8.36972Z" fill={props.innerColor || '#1F5800'} />
</IconWrapper>;

export const StatusFailIcon: FC<IconWrapperProps & { innerColor?: string }> = (props) => <IconWrapper viewBox='0 0 22 22' {...props}>
  <path fillRule="evenodd" clipRule="evenodd" d="M11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0ZM11 13.5C10.1716 13.5 9.5 14.1716 9.5 15C9.5 15.8284 10.1716 16.5 11 16.5C11.8284 16.5 12.5 15.8284 12.5 15C12.5 14.1716 11.8284 13.5 11 13.5ZM10 5.5V12H12V5.5H10Z" />
  <path fillRule="evenodd" clipRule="evenodd" d="M10 12V5.5H12V12H10Z" fill={props.innerColor || '#AE0000'} />
  <path d="M12.5 15C12.5 15.8284 11.8284 16.5 11 16.5C10.1716 16.5 9.5 15.8284 9.5 15C9.5 14.1716 10.1716 13.5 11 13.5C11.8284 13.5 12.5 14.1716 12.5 15Z" fill={props.innerColor || '#AE0000'} />
</IconWrapper>;
