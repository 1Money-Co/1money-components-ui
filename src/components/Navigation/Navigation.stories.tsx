import React, { useRef, useState } from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './index';
import { Icons } from '@/components/Icons';
import type { NavigationItem, NavigationHandlers } from './interface';

import './style';

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  argTypes: {
    collapsed: { control: 'boolean' },
    collapsible: { control: 'boolean' },
  },
  args: {
    collapsible: true,
    onCollapse: fn(),
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ height: 800, display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Navigation>;

const DashboardTemplate = () => {
  const sidebarRef = useRef<NavigationHandlers>(null);
  const [collapsed, setCollapsed] = useState(false);
  const [activePage, setActivePage] = useState('/app/auto-conversion-rules');

  const items: NavigationItem[] = [
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: <Icons name="dashboard" size={16} color="inherit" />,
      active: activePage === '/app/dashboard',
      onClick: () => setActivePage('/app/dashboard'),
    },
    {
      key: 'transaction-history',
      label: 'Transaction History',
      icon: <Icons name="transferHistory" size={16} color="inherit" />,
      active: activePage === '/app/transaction-history',
      onClick: () => setActivePage('/app/transaction-history'),
    },
    {
      key: 'auto-conversion-rules',
      label: 'Auto-Conversion Rules',
      icon: <Icons name="autoConversionRules" size={16} color="inherit" />,
      active: activePage === '/app/auto-conversion-rules',
      onClick: () => setActivePage('/app/auto-conversion-rules'),
    },
    {
      key: 'external-accounts',
      label: <span style={{ display: 'inline-block', width: 57 }}>My External Accounts</span>,
      icon: <Icons name="addressBook" size={16} color="inherit" />,
      defaultOpen: !collapsed,
      children: [
        {
          key: 'bank-accounts',
          label: 'Bank Accounts',
          icon: <Icons name="wire" size={16} color="inherit" />,
          active: activePage === '/app/address/bank-accounts',
          suffix: collapsed ? <Icons name="arrowRight" size={16} color="inherit" /> : null,
          onClick: () => setActivePage('/app/address/bank-accounts'),
        },
        {
          key: 'digital-wallets',
          label: 'Digital Wallets',
          icon: <Icons name="wallet" size={16} color="inherit" />,
          active: activePage === '/app/address/digital-wallets',
          suffix: collapsed ? <Icons name="arrowRight" size={16} color="inherit" /> : null,
          onClick: () => setActivePage('/app/address/digital-wallets'),
        },
      ],
    },
    {
      key: 'global-payouts',
      label: 'Global Payouts',
      icon: <Icons name="money" size={16} color="inherit" />,
      defaultOpen: !collapsed,
      children: [
        {
          key: 'recipients',
          label: 'Recipients',
          icon: <Icons name="parties" size={16} color="inherit" />,
          active: activePage === '/app/recipients',
          suffix: collapsed ? <Icons name="arrowRight" size={16} color="inherit" /> : null,
          onClick: () => setActivePage('/app/recipients'),
        },
        {
          key: 'payouts',
          label: 'Payouts',
          icon: <Icons name="sendCrypto" size={16} color="inherit" />,
          active: activePage === '/app/payouts',
          suffix: collapsed ? <Icons name="arrowRight" size={16} color="inherit" /> : null,
          onClick: () => setActivePage('/app/payouts'),
        },
      ],
    },
    {
      key: 'customer',
      label: 'My Customer',
      icon: <Icons name="parties" size={16} color="inherit" />,
      defaultOpen: !collapsed,
    },
  ];

  return (
    <Navigation
      ref={sidebarRef}
      items={items}
      collapsible
      onCollapse={setCollapsed}
      header={collapsed ? <Icons name="logo" size={32} /> : <Icons name="logoWithWords" width={132} height={24} />}
      selector={
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1 }}>
          <Icons name="flagUnitedStates" size={20} />
          <span style={{ fontWeight: 500, fontSize: 14 }}>1Money USA Inc.</span>
        </div>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            cursor: 'pointer',
            fontWeight: 500,
            lineHeight: '108%',
            color: 'inherit',
            ...(collapsed
              ? { flexDirection: 'column', fontSize: 10, gap: 4, padding: 8, textAlign: 'center' as const }
              : { flexDirection: 'row', fontSize: 14, gap: 12, padding: '8px 16px' }),
          }}
        >
          <Icons name="settings" size={16} color="inherit" />
          Settings
        </div>
        <div style={{ width: '100%', height: 1, backgroundColor: '#e3e4e4' }} />
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            cursor: 'pointer',
            fontWeight: 500,
            lineHeight: '108%',
            color: 'inherit',
            ...(collapsed
              ? { flexDirection: 'column', fontSize: 10, gap: 4, padding: 8, textAlign: 'center' as const }
              : { flexDirection: 'row', fontSize: 14, gap: 12, padding: '8px 16px' }),
          }}
        >
          <Icons name="profile" size={16} color="inherit" />
          Yvonne Ni
        </div>
      </div>
    </Navigation>
  );
};

export const Default: Story = {
  render: () => <DashboardTemplate />,
};

export const Collapsed: Story = {
  args: {
    collapsed: true,
    collapsible: true,
    header: <Icons name="logoWithWords" size={24} />,
    items: [
      { key: 'dashboard', label: 'Dashboard', icon: <Icons name="dashboard" size={16} color="inherit" />, active: true },
      { key: 'transaction-history', label: 'Transaction History', icon: <Icons name="transferHistory" size={16} color="inherit" /> },
      { key: 'auto-conversion-rules', label: 'Auto-Conversion Rules', icon: <Icons name="autoConversionRules" size={16} color="inherit" /> },
      { key: 'external-accounts', label: 'My External Accounts', icon: <Icons name="addressBook" size={16} color="inherit" /> },
      { key: 'global-payouts', label: 'Global Payouts', icon: <Icons name="money" size={16} color="inherit" /> },
      { key: 'customer', label: 'Customer', icon: <Icons name="parties" size={16} color="inherit" /> },
    ],
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', fontWeight: 500, lineHeight: '108%', fontSize: 10, gap: 4, padding: 8, textAlign: 'center' }}>
          <Icons name="settings" size={16} color="inherit" />
          Settings
        </div>
        <div style={{ width: '100%', height: 1, backgroundColor: '#e3e4e4' }} />
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', fontWeight: 500, lineHeight: '108%', fontSize: 10, gap: 4, padding: 8, textAlign: 'center' }}>
          <Icons name="profile" size={16} color="inherit" />
          Yvonne Ni
        </div>
      </div>
    ),
  },
};

export const WithDisabledItems: Story = {
  args: {
    header: <Icons name="logoWithWords" width={132} height={24} />,
    items: [
      { key: 'dashboard', label: 'Dashboard', icon: <Icons name="dashboard" size={16} color="inherit" />, active: true },
      { key: 'transaction-history', label: 'Transaction History', icon: <Icons name="transferHistory" size={16} color="inherit" />, disabled: true },
      { key: 'auto-conversion-rules', label: 'Auto-Conversion Rules', icon: <Icons name="autoConversionRules" size={16} color="inherit" />, disabled: true },
      {
        key: 'external-accounts',
        label: 'My External Accounts',
        icon: <Icons name="addressBook" size={16} color="inherit" />,
        disabled: true,
        children: [
          { key: 'bank-accounts', label: 'Bank Accounts', icon: <Icons name="wire" size={16} color="inherit" />, disabled: true },
          { key: 'digital-wallets', label: 'Digital Wallets', icon: <Icons name="wallet" size={16} color="inherit" />, disabled: true },
        ],
      },
      {
        key: 'global-payouts',
        label: 'Global Payouts',
        icon: <Icons name="money" size={16} color="inherit" />,
        disabled: true,
        children: [
          { key: 'recipients', label: 'Recipients', icon: <Icons name="parties" size={16} color="inherit" />, disabled: true },
          { key: 'payouts', label: 'Payouts', icon: <Icons name="sendCrypto" size={16} color="inherit" />, disabled: true },
        ],
      },
    ],
  },
};
