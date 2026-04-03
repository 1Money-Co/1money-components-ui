import React, { useRef } from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './index';
import { FormItem } from './FormItem';
import { useForm } from './hooks/useForm';
import { FORM_LAYOUTS, FORM_SIZES } from './constants';
import { Input } from '@/components/Input';
import { Checkbox } from '@/components/Checkbox';
import { Switch } from '@/components/Switch';
import { Button } from '@/components/Button';
import type { FormInstance } from './interface';

import './style';
import '@/components/Input/FieldShell/FieldShell.scss';
import '@/components/Input/Input/Input.scss';
import '@/components/Input/TextArea/TextArea.scss';
import '@/components/Input/OTP/OTP.scss';
import '@/components/Input/Trade/Trade.scss';
import '@/components/Checkbox/style';
import '@/components/Switch/style';
import '@/components/Button/style';

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  argTypes: {
    layout: { control: 'radio', options: [...FORM_LAYOUTS] },
    size: { control: 'radio', options: [...FORM_SIZES] },
    disabled: { control: 'boolean' },
    colon: { control: 'boolean' },
    requiredMark: { control: 'boolean' },
  },
  args: {
    layout: 'vertical',
    size: 'middle',
    disabled: false,
    colon: true,
    requiredMark: true,
    onFinish: fn(),
    onFinishFailed: fn(),
    onValuesChange: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: (args) => (
    <Form {...args} initialValues={{ username: '', email: '' }}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please enter username' }]}
      >
        <Input placeholder="Enter username" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please enter email' },
          { type: 'email', message: 'Invalid email format' },
        ]}
      >
        <Input placeholder="Enter email" />
      </Form.Item>
      <Form.Item>
        <Button type="submit" color="primary">Submit</Button>
      </Form.Item>
    </Form>
  ),
};

export const HorizontalLayout: Story = {
  args: {
    layout: 'horizontal',
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  },
  render: (args) => (
    <Form {...args} initialValues={{ name: '', bio: '' }}>
      <Form.Item label="Name" name="name" rules={[{ required: true }]}>
        <Input placeholder="Your name" />
      </Form.Item>
      <Form.Item label="Bio" name="bio">
        <Input.TextArea placeholder="Tell us about yourself" />
      </Form.Item>
      <Form.Item label="Active" name="active">
        <Switch />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
        <Button type="submit" color="primary">Save</Button>
      </Form.Item>
    </Form>
  ),
};

export const InlineLayout: Story = {
  args: { layout: 'inline' },
  render: (args) => (
    <Form {...args} initialValues={{ keyword: '' }}>
      <Form.Item label="Keyword" name="keyword">
        <Input placeholder="Search..." />
      </Form.Item>
      <Form.Item>
        <Button type="submit" color="primary">Search</Button>
      </Form.Item>
    </Form>
  ),
};

export const ValidationRules: Story = {
  render: (args) => (
    <Form
      {...args}
      initialValues={{ password: '', confirmPassword: '' }}
      validateTrigger="onBlur"
    >
      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: 'Password is required' },
          { min: 8, message: 'At least 8 characters' },
        ]}
      >
        <Input.Password placeholder="Enter password" />
      </Form.Item>
      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        rules={[
          { required: true, message: 'Please confirm password' },
          {
            validator: (value, values) => {
              if (value && value !== values.password) {
                return 'Passwords do not match';
              }
              return true;
            },
          },
        ]}
      >
        <Input.Password placeholder="Confirm password" />
      </Form.Item>
      <Form.Item>
        <Button type="submit" color="primary">Register</Button>
      </Form.Item>
    </Form>
  ),
};

export const WithCheckboxAndSwitch: Story = {
  render: (args) => (
    <Form
      {...args}
      initialValues={{ remember: false, notifications: true }}
      onFinish={(values) => {
        args.onFinish?.(values);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form.Item label="Username" name="username" rules={[{ required: true }]}>
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item name="remember" label="Remember me">
        <Checkbox />
      </Form.Item>
      <Form.Item name="notifications" label="Notifications">
        <Switch />
      </Form.Item>
      <Form.Item>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button type="submit" color="primary">Submit</Button>
          <Button type="reset" color="secondary">Reset</Button>
        </div>
      </Form.Item>
    </Form>
  ),
};

export const UseFormHook: Story = {
  render: (args) => {
    const [form] = useForm({ name: 'John', age: '25' });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Form {...args} initialValues={{ name: 'John', age: '25' }}>
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Age" name="age">
            <Input />
          </Form.Item>
        </Form>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button
            color="primary"
            onClick={() => form.setFieldValue('name', 'Jane')}
          >
            Set Name to Jane
          </Button>
          <Button
            color="secondary"
            onClick={() => form.resetFields()}
          >
            Reset
          </Button>
          <Button
            color="grey"
            onClick={() => alert(JSON.stringify(form.getFieldsValue(), null, 2))}
          >
            Get Values
          </Button>
        </div>
      </div>
    );
  },
  tags: ['!autodocs', 'dev'],
};

export const DisabledForm: Story = {
  args: { disabled: true },
  render: (args) => (
    <Form {...args} initialValues={{ email: 'user@example.com', active: true }}>
      <Form.Item label="Email" name="email">
        <Input />
      </Form.Item>
      <Form.Item label="Active" name="active">
        <Switch />
      </Form.Item>
    </Form>
  ),
};

export const AllLayouts: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {FORM_LAYOUTS.map((layout) => (
        <div key={layout}>
          <h3 style={{ margin: '0 0 8px' }}>{layout}</h3>
          <Form
            {...args}
            layout={layout}
            initialValues={{ field1: '', field2: '' }}
            labelCol={layout === 'horizontal' ? { span: 6 } : undefined}
            wrapperCol={layout === 'horizontal' ? { span: 18 } : undefined}
          >
            <Form.Item label="Field 1" name="field1" rules={[{ required: true }]}>
              <Input placeholder="Enter value" />
            </Form.Item>
            <Form.Item label="Field 2" name="field2">
              <Input placeholder="Enter value" />
            </Form.Item>
          </Form>
        </div>
      ))}
    </div>
  ),
  tags: ['!autodocs', 'dev'],
};
