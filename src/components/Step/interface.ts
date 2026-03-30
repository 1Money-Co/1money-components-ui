import type { HTMLAttributes, ReactNode } from 'react';
import type { TagProps } from '@/components/Tag';
import type { StepStatus } from './constants';

export type { StepStatus } from './constants';

export interface StepTagConfig {
  label: string;
  color?: TagProps['color'];
  size?: TagProps['size'];
  icon?: TagProps['icon'];
}

export interface StepItem {
  key: string;
  title: ReactNode;
  description?: ReactNode;
  status?: StepStatus;
  indicator?: ReactNode;
  tag?: ReactNode | StepTagConfig;
}

export interface StepProps extends HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  items: StepItem[];
}
