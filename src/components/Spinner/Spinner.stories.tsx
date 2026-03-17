import { Spinner } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
  },
  args: {
    prefixCls: 'spinner',
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof Spinner>;
 
export const Primary: Story = {
  args: {
    prefixCls: 'spinner'
  },
};
