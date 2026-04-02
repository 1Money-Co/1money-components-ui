import React, { useState } from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { Nav } from './Nav';
import { Icons } from '@/components/Icons';
import type { NavItem } from './interface';

import './style';

const meta: Meta<typeof Nav> = {
  title: 'Components/Nav',
  component: Nav,
  argTypes: {},
  args: {},
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

type Story = StoryObj<typeof Nav>;

// ── Default: matches Figma design ──
const FigmaTemplate = () => {
  const [activePage, setActivePage] = useState('us-licenses');

  const items: NavItem[] = [
    {
      key: 'licenses',
      label: 'LICENSES',
      icon: <Icons name="company" size={20} color="inherit" />,
      children: [
        {
          key: 'us-licenses',
          label: 'US Licenses',
          active: activePage === 'us-licenses',
          onClick: () => setActivePage('us-licenses'),
        },
        {
          key: 'non-us-licenses',
          label: 'Non-US Licenses',
          active: activePage === 'non-us-licenses',
          onClick: () => setActivePage('non-us-licenses'),
        },
      ],
    },
    {
      key: 'legal',
      label: 'LEGAL & PRIVACY',
      icon: <Icons name="document" size={20} color="inherit" />,
      children: [
        {
          key: 'terms',
          label: 'Terms and Conditions',
          defaultOpen: true,
          children: [
            {
              key: 'commercial',
              label: 'Commercial Agreement',
              active: activePage === 'commercial',
              onClick: () => setActivePage('commercial'),
            },
            {
              key: 'retail',
              label: 'Retail Agreement',
              active: activePage === 'retail',
              onClick: () => setActivePage('retail'),
            },
            {
              key: 'onboarding',
              label: 'Customer Onboarding Disclosure',
              active: activePage === 'onboarding',
              onClick: () => setActivePage('onboarding'),
            },
          ],
        },
        {
          key: 'stablecoin',
          label: 'Stablecoin Terms and Disclosures',
          children: [
            {
              key: 'stablecoin-terms',
              label: 'Stablecoin Terms',
              active: activePage === 'stablecoin-terms',
              onClick: () => setActivePage('stablecoin-terms'),
            },
          ],
        },
        {
          key: 'privacy',
          label: 'Privacy Policy',
          active: activePage === 'privacy',
          onClick: () => setActivePage('privacy'),
        },
        {
          key: 'cookie',
          label: 'Cookie Policy',
          active: activePage === 'cookie',
          onClick: () => setActivePage('cookie'),
        },
        {
          key: 'esign',
          label: 'E-sign Consent',
          active: activePage === 'esign',
          onClick: () => setActivePage('esign'),
        },
      ],
    },
    {
      key: 'developer',
      label: 'DEVELOPER',
      icon: <Icons name="securityCheck" size={20} color="inherit" />,
      children: [
        {
          key: 'dev-terms',
          label: 'Developer Terms of Service',
          active: activePage === 'dev-terms',
          onClick: () => setActivePage('dev-terms'),
        },
      ],
    },
  ];

  return <Nav items={items} />;
};

export const Default: Story = {
  render: () => <FigmaTemplate />,
};

// ── Deep nesting demo ──
const DeepNestingTemplate = () => {
  const [activePage, setActivePage] = useState('');

  const items: NavItem[] = [
    {
      key: 'docs',
      label: 'DOCUMENTATION',
      icon: <Icons name="document" size={20} color="inherit" />,
      children: [
        {
          key: 'getting-started',
          label: 'Getting Started',
          defaultOpen: true,
          children: [
            {
              key: 'installation',
              label: 'Installation',
              defaultOpen: true,
              children: [
                {
                  key: 'npm',
                  label: 'npm',
                  active: activePage === 'npm',
                  onClick: () => setActivePage('npm'),
                },
                {
                  key: 'yarn',
                  label: 'yarn',
                  active: activePage === 'yarn',
                  onClick: () => setActivePage('yarn'),
                },
              ],
            },
            {
              key: 'config',
              label: 'Configuration',
              active: activePage === 'config',
              onClick: () => setActivePage('config'),
            },
          ],
        },
        {
          key: 'api',
          label: 'API Reference',
          active: activePage === 'api',
          onClick: () => setActivePage('api'),
        },
      ],
    },
  ];

  return <Nav items={items} />;
};

export const DeepNesting: Story = {
  render: () => <DeepNestingTemplate />,
};
