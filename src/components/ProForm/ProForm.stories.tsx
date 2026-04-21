import React, { useState } from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { ProForm } from './index';
import {
  ProFormText,
  ProFormPassword,
  ProFormTextArea,
  ProFormCheckbox,
  ProFormCheckboxGroup,
  ProFormSwitch,
  ProFormSelect,
  ProFormRadioGroup,
  ProFormSlider,
  ProFormDatePicker,
} from './fields';
import { ProFormUpload } from './fields/ProFormUpload';
import { ProFormFieldSet } from './fields/ProFormFieldSet';
import { ProFormDependency } from './ProFormDependency';
import { ProFormList } from './ProFormList';
import { ProFormGroup } from './ProFormGroup';
import { DrawerForm } from './layouts/DrawerForm';
import { DialogForm } from './layouts/DialogForm';
import { QueryFilter } from './layouts/QueryFilter';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

import './style';
import '@/components/Input/FieldShell/FieldShell.scss';
import '@/components/Input/Input/Input.scss';
import '@/components/Input/TextArea/TextArea.scss';
import '@/components/Input/OTP/OTP.scss';
import '@/components/Input/Trade/Trade.scss';
import '@/components/Checkbox/style';
import '@/components/Switch/style';
import '@/components/Button/style';
import '@/components/Grid/style';
import '@/components/Dialog/style';
import '@/components/Drawer/style';
import '@/components/Upload/style';
import '@/components/Radio/style';
import '@/components/Slider/style';
import '@/components/Calendar/style';

const meta: Meta<typeof ProForm> = {
  title: 'Components/ProForm',
  component: ProForm,
  argTypes: {
    readonly: { control: 'boolean' },
    loading: { control: 'boolean' },
    grid: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      source: { type: 'code' },
    },
  },
  args: {
    readonly: false,
    loading: false,
    grid: false,
    disabled: false,
    onFinish: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProForm>;

// ─── Basic ───────────────────────────────────────────────────

export const Default: Story = {
  render: (args) => (
    <ProForm
      {...args}
      initialValues={{ username: '', email: '' }}
      onFinish={(values) => {
        args.onFinish?.(values);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <ProFormText
        name="username"
        label="Username"
        placeholder="Enter username"
        rules={[{ required: true, message: 'Username is required' }]}
      />
      <ProFormText
        name="email"
        label="Email"
        placeholder="Enter email"
        rules={[{ required: true }, { type: 'email', message: 'Invalid email' }]}
      />
    </ProForm>
  ),
};

// ─── All Field Types ─────────────────────────────────────────

export const AllFieldTypes: Story = {
  render: (args) => (
    <ProForm
      {...args}
      initialValues={{
        text: 'Hello',
        textWithButton: '',
        password: 'secret123',
        textarea: 'Multi-line\ncontent',
        agree: true,
        options: [],
        darkMode: false,
        role: 'admin',
        volume: 60,
        date: null,
      }}
      onFinish={(values) => alert(JSON.stringify(values, null, 2))}
    >
      <ProFormText name="text" label="Text Input" placeholder="Type here..." />
      <ProFormText
        name="textWithButton"
        label="Text with Button"
        placeholder="Enter verification code"
        fieldProps={{
          suffix: (
            <Button color="primary" size="small" style={{ marginRight: -4 }}>
              Send Code
            </Button>
          ),
        }}
      />
      <ProFormPassword name="password" label="Password" placeholder="Password" />
      <ProFormTextArea name="textarea" label="Text Area" placeholder="Enter long text" />
      <ProFormCheckbox name="agree" label="I agree to the terms" />
      <ProFormCheckboxGroup
        name="options"
        label="Pick options"
        fieldProps={{
          options: [
            { label: 'Option A', value: 'a' },
            { label: 'Option B', value: 'b' },
            { label: 'Option C', value: 'c' },
          ],
        }}
      />
      <ProFormSwitch name="darkMode" label="Dark Mode" />
      <ProFormRadioGroup
        name="role"
        label="Role"
        fieldProps={{
          direction: 'horizontal',
          options: [
            { label: 'Admin', value: 'admin' },
            { label: 'Editor', value: 'editor' },
            { label: 'Viewer', value: 'viewer' },
          ],
        }}
      />
      <ProFormSlider
        name="volume"
        label="Volume"
        fieldProps={{ min: 0, max: 100 }}
      />
      <ProFormDatePicker
        name="date"
        label="Date"
        fieldProps={{ dateFormat: 'yy-mm-dd' }}
      />
    </ProForm>
  ),
};

// ─── Readonly Mode ───────────────────────────────────────────

export const ReadonlyMode: Story = {
  args: { readonly: true },
  render: (args) => (
    <ProForm
      {...args}
      initialValues={{
        name: 'John Doe',
        email: 'john@example.com',
        bio: 'Software engineer with 10 years of experience.',
        newsletter: true,
        active: true,
      }}
    >
      <ProFormText name="name" label="Name" />
      <ProFormText name="email" label="Email" />
      <ProFormTextArea name="bio" label="Bio" />
      <ProFormCheckbox name="newsletter" label="Newsletter" />
      <ProFormSwitch name="active" label="Active" />
    </ProForm>
  ),
};

// ─── Loading State ───────────────────────────────────────────

export const LoadingState: Story = {
  args: { loading: true },
  render: (args) => (
    <ProForm {...args} initialValues={{ name: 'Loading...' }}>
      <ProFormText name="name" label="Name" />
      <ProFormText name="email" label="Email" />
    </ProForm>
  ),
};

// ─── Grid Layout ─────────────────────────────────────────────

export const GridLayout: Story = {
  args: { grid: true },
  render: (args) => (
    <ProForm
      {...args}
      rowProps={{ gutter: 16 }}
      initialValues={{}}
    >
      <ProFormText name="firstName" label="First Name" colProps={{ span: 12 }} />
      <ProFormText name="lastName" label="Last Name" colProps={{ span: 12 }} />
      <ProFormText name="email" label="Email" colProps={{ span: 12 }} />
      <ProFormText name="phone" label="Phone" colProps={{ span: 12 }} />
      <ProFormTextArea name="address" label="Address" colProps={{ span: 24 }} />
    </ProForm>
  ),
};

// ─── Width Presets ───────────────────────────────────────────

export const WidthPresets: Story = {
  render: (args) => (
    <ProForm {...args}>
      <ProFormText name="sm" label="Small (sm = 160px)" width="sm" />
      <ProFormText name="md" label="Medium (md = 240px)" width="md" />
      <ProFormText name="lg" label="Large (lg = 320px)" width="lg" />
      <ProFormText name="xl" label="XL (xl = 420px)" width="xl" />
      <ProFormText name="custom" label="Custom (200px)" width={200} />
    </ProForm>
  ),
};

// ─── Custom Submitter ────────────────────────────────────────

export const CustomSubmitter: Story = {
  render: (args) => (
    <ProForm
      {...args}
      submitter={{
        submitText: 'Save Changes',
        resetText: 'Discard',
        render: (props, dom) => (
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            {dom}
          </div>
        ),
      }}
    >
      <ProFormText name="title" label="Title" rules={[{ required: true }]} />
      <ProFormTextArea name="content" label="Content" />
    </ProForm>
  ),
};

export const NoSubmitter: Story = {
  render: (args) => (
    <ProForm {...args} submitter={false}>
      <ProFormText name="search" label="Search" placeholder="Type to search..." />
    </ProForm>
  ),
};

// ─── Validation ──────────────────────────────────────────────

export const Validation: Story = {
  render: (args) => (
    <ProForm
      {...args}
      initialValues={{}}
      onFinish={(values) => alert('Success: ' + JSON.stringify(values))}
    >
      <ProFormText
        name="username"
        label="Username"
        rules={[
          { required: true, message: 'Username is required' },
          { min: 3, message: 'At least 3 characters' },
          { max: 20, message: 'At most 20 characters' },
        ]}
      />
      <ProFormText
        name="email"
        label="Email"
        rules={[
          { required: true, message: 'Email is required' },
          { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
        ]}
      />
      <ProFormPassword
        name="password"
        label="Password"
        rules={[
          { required: true },
          { min: 8, message: 'At least 8 characters' },
        ]}
      />
      <ProFormCheckbox
        name="terms"
        label="I accept the terms"
        rules={[
          {
            validator: (value) => {
              if (!value) return 'You must accept the terms';
              return true;
            },
          },
        ]}
      />
    </ProForm>
  ),
};

// ─── Request + Params ────────────────────────────────────────

export const AsyncRequest: Story = {
  render: (args) => {
    const [userId, setUserId] = useState(1);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button color={userId === 1 ? 'primary' : 'grey'} onClick={() => setUserId(1)}>
            User 1
          </Button>
          <Button color={userId === 2 ? 'primary' : 'grey'} onClick={() => setUserId(2)}>
            User 2
          </Button>
        </div>
        <ProForm
          {...args}
          params={{ userId }}
          request={async (params) => {
            await new Promise((r) => setTimeout(r, 1000));
            const data: Record<number, Record<string, unknown>> = {
              1: { name: 'Alice', email: 'alice@example.com' },
              2: { name: 'Bob', email: 'bob@example.com' },
            };
            return data[(params as { userId: number })?.userId] || {};
          }}
        >
          <ProFormText name="name" label="Name" />
          <ProFormText name="email" label="Email" />
        </ProForm>
      </div>
    );
  },
  tags: ['!autodocs', 'dev'],
};

// ─── ProFormDependency ───────────────────────────────────────

export const Dependency: Story = {
  render: (args) => (
    <ProForm
      {...args}
      initialValues={{ hasAccount: false, accountType: '' }}
    >
      <ProFormSwitch name="hasAccount" label="Has Account" />
      <ProFormDependency name={['hasAccount']}>
        {({ hasAccount }) =>
          hasAccount ? (
            <>
              <ProFormText
                name="accountId"
                label="Account ID"
                rules={[{ required: true }]}
              />
              <ProFormText name="accountName" label="Account Name" />
            </>
          ) : null
        }
      </ProFormDependency>
    </ProForm>
  ),
};

// ─── ProFormList ─────────────────────────────────────────────

export const DynamicList: Story = {
  render: (args) => (
    <ProForm
      {...args}
      initialValues={{
        members: [
          { name: 'Alice', role: 'Admin' },
          { name: 'Bob', role: 'Member' },
        ],
      }}
      onFinish={(values) => alert(JSON.stringify(values, null, 2))}
    >
      <ProFormList name="members" label="Team Members" min={1} max={5}>
        {(fields) =>
          fields.map(({ name, key }) => (
            <div key={key} style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
              <ProFormText name={`${name}.name`} label="Name" placeholder="Name" />
              <ProFormText name={`${name}.role`} label="Role" placeholder="Role" />
            </div>
          ))
        }
      </ProFormList>
    </ProForm>
  ),
};

// ─── DialogForm ──────────────────────────────────────────────

export const DialogFormStory: Story = {
  render: (args) => (
    <DialogForm
      {...args}
      title="Create User"
      trigger={<Button color="primary">Open Dialog Form</Button>}
      onFinish={async (values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <ProFormText name="name" label="Name" rules={[{ required: true }]} />
      <ProFormText name="email" label="Email" rules={[{ required: true }]} />
      <ProFormSwitch name="active" label="Active" />
    </DialogForm>
  ),
};

// ─── DrawerForm ─────────────────────────────────────────────

export const DrawerFormStory: Story = {
  render: (args) => (
    <DrawerForm
      {...args}
      title="Create User"
      trigger={<Button color="primary">Open Drawer Form</Button>}
      onFinish={async (values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <ProFormText name="name" label="Name" rules={[{ required: true }]} />
      <ProFormText name="email" label="Email" rules={[{ required: true }]} />
      <ProFormTextArea name="bio" label="Bio" />
      <ProFormSwitch name="active" label="Active" />
    </DrawerForm>
  ),
};

export const DrawerFormControlled: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ display: 'flex', gap: 8 }}>
        <Button color="primary" onClick={() => setOpen(true)}>Open (Controlled)</Button>
        <Button color="secondary" onClick={() => setOpen(false)}>Close</Button>
        <DrawerForm
          {...args}
          open={open}
          onOpenChange={setOpen}
          title="Edit Profile"
          width={520}
          initialValues={{ name: 'Alice', role: 'Admin' }}
          onFinish={async (values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <ProFormText name="name" label="Name" rules={[{ required: true }]} />
          <ProFormText name="role" label="Role" />
        </DrawerForm>
      </div>
    );
  },
  tags: ['!autodocs', 'dev'],
};

export const DrawerFormLeft: Story = {
  render: (args) => (
    <DrawerForm
      {...args}
      title="Settings"
      placement="left"
      width={400}
      trigger={<Button color="secondary">Open from Left</Button>}
      onFinish={async (values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <ProFormText name="theme" label="Theme" placeholder="dark / light" />
      <ProFormText name="language" label="Language" placeholder="en / zh" />
      <ProFormSwitch name="notifications" label="Enable Notifications" />
    </DrawerForm>
  ),
};

// ─── RadioGroup ─────────────────────────────────────────────

export const RadioGroupStory: Story = {
  render: (args) => (
    <ProForm
      {...args}
      initialValues={{ gender: 'male', plan: 'pro' }}
      onFinish={(values) => alert(JSON.stringify(values, null, 2))}
    >
      <ProFormRadioGroup
        name="gender"
        label="Gender"
        fieldProps={{
          options: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Other', value: 'other' },
          ],
        }}
      />
      <ProFormRadioGroup
        name="plan"
        label="Plan"
        fieldProps={{
          direction: 'horizontal',
          options: [
            { label: 'Free', value: 'free' },
            { label: 'Pro', value: 'pro' },
            { label: 'Enterprise', value: 'enterprise' },
          ],
        }}
      />
    </ProForm>
  ),
};

// ─── Slider ─────────────────────────────────────────────────

export const SliderStory: Story = {
  render: (args) => (
    <ProForm
      {...args}
      initialValues={{ volume: 50, price: 200 }}
      onFinish={(values) => alert(JSON.stringify(values, null, 2))}
    >
      <ProFormSlider
        name="volume"
        label="Volume"
        fieldProps={{ min: 0, max: 100, step: 1 }}
      />
      <ProFormSlider
        name="price"
        label="Price"
        fieldProps={{ min: 0, max: 1000, step: 10, valuePrefix: '$' }}
      />
    </ProForm>
  ),
};

// ─── DatePicker ─────────────────────────────────────────────

export const DatePickerStory: Story = {
  render: (args) => (
    <ProForm
      {...args}
      initialValues={{ birthday: null, startDate: null }}
      onFinish={(values) => alert(JSON.stringify(values, null, 2))}
    >
      <ProFormDatePicker
        name="birthday"
        label="Birthday"
        fieldProps={{ dateFormat: 'yy-mm-dd', showIcon: true }}
      />
      <ProFormDatePicker
        name="startDate"
        label="Start Date"
        fieldProps={{ dateFormat: 'mm/dd/yy', showButtonBar: true }}
      />
    </ProForm>
  ),
};

// ─── All Features Combined ───────────────────────────────────

export const KitchenSink: Story = {
  render: (args) => (
    <ProForm
      {...args}
      grid
      rowProps={{ gutter: 16 }}
      initialValues={{
        name: '',
        email: '',
        bio: '',
        newsletter: false,
        darkMode: true,
        items: [{ title: 'Item 1' }],
      }}
      submitter={{ submitText: 'Create', resetText: 'Clear All' }}
      onFinish={(values) => alert(JSON.stringify(values, null, 2))}
    >
      <ProFormText
        name="name"
        label="Full Name"
        colProps={{ span: 12 }}
        rules={[{ required: true }]}
      />
      <ProFormText
        name="email"
        label="Email"
        colProps={{ span: 12 }}
        rules={[{ required: true }]}
      />
      <ProFormTextArea
        name="bio"
        label="Biography"
        colProps={{ span: 24 }}
      />
      <ProFormCheckbox name="newsletter" label="Subscribe to newsletter" colProps={{ span: 12 }} />
      <ProFormSwitch name="darkMode" label="Dark Mode" colProps={{ span: 12 }} />
      <ProFormDependency name={['newsletter']}>
        {({ newsletter }) =>
          newsletter ? (
            <ProFormText
              name="frequency"
              label="Email Frequency"
              placeholder="daily / weekly / monthly"
              colProps={{ span: 24 }}
            />
          ) : null
        }
      </ProFormDependency>
    </ProForm>
  ),
  tags: ['!autodocs', 'dev'],
};

// ─── ProFormUpload ──────────────────────────────────────────

export const UploadField: Story = {
  render: (args) => (
    <ProForm
      {...args}
      onFinish={(values) => {
        const files = values.attachment as FileList | null;
        alert(files ? `Selected: ${Array.from(files).map(f => f.name).join(', ')}` : 'No file');
      }}
    >
      <ProFormUpload
        name="attachment"
        label="Attachment"
        fieldProps={{ accept: '.pdf,.png,.jpg', multiple: true, buttonLabel: 'Choose Files' }}
      />
    </ProForm>
  ),
};

// ─── Grid Responsive ────────────────────────────────────────

export const GridResponsive: Story = {
  render: (args) => (
    <ProForm
      {...args}
      grid
      rowProps={{ gutter: 16 }}
      initialValues={{}}
      onFinish={(values) => alert(JSON.stringify(values, null, 2))}
    >
      <ProFormText
        name="firstName"
        label="First Name"
        colProps={{ span: 12, sm: 12, md: 8, lg: 6 }}
      />
      <ProFormText
        name="lastName"
        label="Last Name"
        colProps={{ span: 12, sm: 12, md: 8, lg: 6 }}
      />
      <ProFormText
        name="email"
        label="Email"
        colProps={{ span: 24, sm: 24, md: 8, lg: 6 }}
      />
      <ProFormText
        name="phone"
        label="Phone"
        colProps={{ span: 24, sm: 12, md: 12, lg: 6 }}
      />
      <ProFormTextArea
        name="address"
        label="Address"
        colProps={{ span: 24 }}
      />
    </ProForm>
  ),
};

// ─── Three Modes ────────────────────────────────────────────

export const ModeEdit: Story = {
  render: (args) => (
    <ProForm
      {...args}
      mode="edit"
      initialValues={{ name: '', email: '' }}
      onFinish={(values) => alert(JSON.stringify(values, null, 2))}
    >
      <ProFormText name="name" label="Name" rules={[{ required: true }]} />
      <ProFormText name="email" label="Email" />
    </ProForm>
  ),
};

export const ModeRead: Story = {
  render: (args) => (
    <ProForm
      {...args}
      mode="read"
      initialValues={{ name: 'Alice', email: 'alice@example.com', active: true }}
    >
      <ProFormText name="name" label="Name" />
      <ProFormText name="email" label="Email" />
      <ProFormSwitch name="active" label="Active" />
    </ProForm>
  ),
};

export const ModeUpdate: Story = {
  render: (args) => (
    <ProForm
      {...args}
      mode="update"
      initialValues={{ id: 'USR-001', name: 'Alice', email: 'alice@example.com' }}
      onFinish={(values) => alert(JSON.stringify(values, null, 2))}
    >
      <ProFormText name="id" label="ID" mode="read" />
      <ProFormText name="name" label="Name" rules={[{ required: true }]} />
      <ProFormText name="email" label="Email" />
    </ProForm>
  ),
};

// ─── omitNil ────────────────────────────────────────────────

export const OmitNil: Story = {
  render: (args) => (
    <ProForm
      {...args}
      omitNil
      initialValues={{ name: '', email: '', note: null }}
      onFinish={(values) => {
        alert('Nil values stripped:\n' + JSON.stringify(values, null, 2));
      }}
    >
      <ProFormText name="name" label="Name (leave empty to omit)" />
      <ProFormText name="email" label="Email (leave empty to omit)" />
      <ProFormText name="note" label="Note (null → omitted)" />
    </ProForm>
  ),
};

// ─── valueEnum ──────────────────────────────────────────────

export const ValueEnum: Story = {
  render: (args) => (
    <ProForm
      {...args}
      onFinish={(values) => alert(JSON.stringify(values, null, 2))}
    >
      <ProFormSelect
        name="status"
        label="Status"
        valueEnum={{ active: 'Active', inactive: 'Inactive', pending: { text: 'Pending', disabled: true } }}
      />
      <ProFormRadioGroup
        name="role"
        label="Role"
        valueEnum={{ admin: 'Admin', editor: 'Editor', viewer: 'Viewer' }}
      />
    </ProForm>
  ),
};

// ─── Field-level dependencies ───────────────────────────────

export const FieldDependencies: Story = {
  render: (args) => (
    <ProForm
      {...args}
      initialValues={{ country: '', city: '' }}
      onFinish={(values) => alert(JSON.stringify(values, null, 2))}
    >
      <ProFormSelect
        name="country"
        label="Country"
        valueEnum={{ us: 'United States', cn: 'China', jp: 'Japan' }}
      />
      <ProFormSelect
        name="city"
        label="City (auto-loads based on Country)"
        dependencies={['country']}
        request={async (params) => {
          await new Promise((r) => setTimeout(r, 500));
          const cities: Record<string, Array<{ label: string; value: string }>> = {
            us: [{ label: 'New York', value: 'ny' }, { label: 'Los Angeles', value: 'la' }],
            cn: [{ label: 'Beijing', value: 'bj' }, { label: 'Shanghai', value: 'sh' }],
            jp: [{ label: 'Tokyo', value: 'tk' }, { label: 'Osaka', value: 'os' }],
          };
          return cities[params?.country as string] ?? [];
        }}
      />
    </ProForm>
  ),
};

// ─── Field-level request ────────────────────────────────────

export const FieldRequest: Story = {
  render: (args) => (
    <ProForm
      {...args}
      onFinish={(values) => alert(JSON.stringify(values, null, 2))}
    >
      <ProFormSelect
        name="user"
        label="User (async loaded)"
        request={async () => {
          await new Promise((r) => setTimeout(r, 800));
          return [
            { label: 'Alice', value: 'alice' },
            { label: 'Bob', value: 'bob' },
            { label: 'Charlie', value: 'charlie' },
          ];
        }}
      />
    </ProForm>
  ),
};

// ─── debounceTime ───────────────────────────────────────────

export const DebounceField: Story = {
  render: (args) => (
    <ProForm
      {...args}
      onValuesChange={(changed) => {
        console.log('onValuesChange (debounced):', changed);
      }}
    >
      <ProFormText
        name="search"
        label="Search (300ms debounce — check console)"
        debounceTime={300}
        placeholder="Type fast..."
      />
      <ProFormText name="instant" label="Instant (no debounce)" placeholder="Type fast..." />
    </ProForm>
  ),
  tags: ['!autodocs', 'dev'],
};

// ─── ProFormGroup ───────────────────────────────────────────

export const GroupCollapsible: Story = {
  render: (args) => (
    <ProForm
      {...args}
      initialValues={{ name: 'Alice', bio: '', theme: 'light' }}
      onFinish={(values) => alert(JSON.stringify(values, null, 2))}
    >
      <ProForm.Group title="Basic Info" collapsible>
        <ProFormText name="name" label="Name" rules={[{ required: true }]} />
        <ProFormText name="bio" label="Bio" />
      </ProForm.Group>
      <ProForm.Group title="Preferences" collapsible defaultCollapsed>
        <ProFormText name="theme" label="Theme" />
        <ProFormSwitch name="notifications" label="Notifications" />
      </ProForm.Group>
    </ProForm>
  ),
};

export const GroupWithExtra: Story = {
  render: (args) => (
    <ProForm
      {...args}
      onFinish={(values) => alert(JSON.stringify(values, null, 2))}
    >
      <ProForm.Group
        title="Contact"
        extra={<Button color="secondary" size="small">Import</Button>}
      >
        <ProFormText name="email" label="Email" />
        <ProFormText name="phone" label="Phone" />
      </ProForm.Group>
    </ProForm>
  ),
};

// ─── ProFormFieldSet ────────────────────────────────────────

export const FieldSet: Story = {
  render: (args) => (
    <ProForm
      {...args}
      initialValues={{ phone: ['+1', '555-0100'] }}
      onFinish={(values) => alert(JSON.stringify(values, null, 2))}
    >
      <ProForm.FieldSet name="phone" label="Phone Number" gap={8}>
        <Input placeholder="Area code" style={{ width: 80 }} />
        <Input placeholder="Number" style={{ width: 200 }} />
      </ProForm.FieldSet>
      <ProFormText name="email" label="Email" />
    </ProForm>
  ),
};

// ─── Nested List ────────────────────────────────────────────

export const NestedList: Story = {
  render: (args) => (
    <ProForm
      {...args}
      initialValues={{
        groups: [
          { title: 'Group A', items: [{ name: 'Item 1' }] },
        ],
      }}
      onFinish={(values) => alert(JSON.stringify(values, null, 2))}
    >
      <ProFormList name="groups" label="Groups">
        {(fields) =>
          fields.map(({ name, key }) => (
            <div key={key} style={{ border: '1px solid #eee', padding: 12, marginBottom: 8, borderRadius: 4 }}>
              <ProFormText name={`${name}.title`} label="Group Title" />
              <ProFormList name="items" label="Items">
                {(subFields) =>
                  subFields.map((sf) => (
                    <ProFormText key={sf.key} name={`${sf.name}.name`} label="Item Name" />
                  ))
                }
              </ProFormList>
            </div>
          ))
        }
      </ProFormList>
    </ProForm>
  ),
  tags: ['!autodocs', 'dev'],
};

// ─── Empty List Validation ──────────────────────────────────

export const ListRequired: Story = {
  render: (args) => (
    <ProForm
      {...args}
      initialValues={{ members: [] }}
      onFinish={(values) => alert(JSON.stringify(values, null, 2))}
    >
      <ProFormList
        name="members"
        label="Team Members"
        required
        requiredMessage="Add at least one member"
      >
        {(fields) =>
          fields.map(({ name, key }) => (
            <ProFormText key={key} name={`${name}.name`} label="Name" />
          ))
        }
      </ProFormList>
    </ProForm>
  ),
};

// ─── syncToUrl ──────────────────────────────────────────────

export const SyncToUrl: Story = {
  render: (args) => (
    <QueryFilter
      {...args}
      syncToUrl
      onFinish={(values) => {
        console.log('QueryFilter submit:', values);
        alert('Check URL bar — params synced!\n' + JSON.stringify(values));
      }}
    >
      <ProFormText name="keyword" label="Keyword" placeholder="Search..." />
      <ProFormSelect
        name="status"
        label="Status"
        valueEnum={{ all: 'All', active: 'Active', inactive: 'Inactive' }}
      />
    </QueryFilter>
  ),
  tags: ['!autodocs', 'dev'],
};
