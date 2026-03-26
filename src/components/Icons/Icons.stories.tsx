import React from 'react';
import {
  IconWrapper,
  Icons,
  IconHover,
} from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';
import clipboard from '../../utils/clipboard';


const meta: Meta<typeof Icons> = {
  title: 'Components/Icons',
  component: Icons,
  // https://storybook.js.org/docs/api/arg-types#controltype
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
    size: { control: 'number' },
    color: { control: 'color' },
    borderColor: { control: 'color' },
    gradientColor: { control: 'object' },
  },
  args: {
    prefixCls: 'icons',
  },
  tags: ['autodocs'],
};

export default meta;

const COPY_ICON_BOX_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 12,
  textAlign: 'center',
  cursor: 'pointer',
  padding: 8,
  borderRadius: 8,
};

const copy = (name: string) => {
  clipboard(name, (succeeded: boolean) => {
    if (!succeeded) {
      console.log('copied failed');
    }
  });
};


type Story = StoryObj<typeof Icons>;



export const PrimaryIcons: Story = {
  args: {
    prefixCls: 'icons',
    color: 'red',
    borderColor: '#03163A',
    size: 24
  },
  parameters: {
    docs: {
      description: {
        story: 'The primary icons are used to represent the 1Money icons.',
      },
    },
  },
  render: function Render(args) {
    const handleCopy = (el: string) => {
      copy(el);
    };

    return <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))' }}>
      {/* Primary Icons */}
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='deposit' />")}>
        <IconHover>
          <Icons {...args} name='deposit' />
        </IconHover>
        <span>Deposit</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='withdrawal' />")}>
        <Icons {...args} name='withdrawal' />
        <span>Withdrawal</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='conversion' />")}>
        <Icons {...args} name='conversion' />
        <span>Conversion</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='mintToken' />")}>
        <Icons {...args} name='mintToken' />
        <span>MintToken</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='burnToken' />")}>
        <Icons {...args} name='burnToken' />
        <span>BurnToken</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='accountLocked' />")}>
        <Icons {...args} name='accountLocked' />
        <span>Account Locked</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='pending' />")}>
        <Icons {...args} name='pending' />
        <span>Pending</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='success' />")}>
        <Icons {...args} name='success' />
        <span>Success</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='fail' />")}>
        <Icons {...args} name='fail' />
        <span>Fail</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='error' />")}>
        <Icons {...args} name='error' />
        <span>Error</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='statusSuccess' color='#1F580033' />")}>
        <Icons {...args} name='statusSuccess' color='#1F580033' />
        <span>Status Success</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='statusFail' color='#AE00001A' />")}>
        <Icons {...args} name='statusFail' color='#AE00001A' />
        <span>Status Fail</span>
      </div>
      {/* Menu Icons */}
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='dashboard' />")}>
        <Icons {...args} name='dashboard' />
        <span>Dashboard</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='digitalAsset' />")}>
        <Icons {...args} name='digitalAsset' />
        <span>Digital Asset</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='addressBook' />")}>
        <Icons {...args} name='addressBook' />
        <span>Address Book</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='linkedBankAccounts' />")}>
        <Icons {...args} name='linkedBankAccounts' />
        <span>Linked Bank Accounts</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='wire' />")}>
        <Icons {...args} name='wire' />
        <span>Wire</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='swift' />")}>
        <Icons {...args} name='swift' />
        <span>Swift</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='account' />")}>
        <Icons {...args} name='account' />
        <span>Account</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='profile' />")}>
        <Icons {...args} name='profile' />
        <span>Profile</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='security' />")}>
        <Icons {...args} name='security' />
        <span>Security</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='logout' />")}>
        <Icons {...args} name='logout' />
        <span>Logout</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='portfolio' />")}>
        <Icons {...args} name='portfolio' />
        <span>Portfolio</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='home' />")}>
        <Icons {...args} name='home' />
        <span>Home</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='convert' />")}>
        <Icons {...args} name='convert' />
        <span>Convert</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='withdraw' />")}>
        <Icons {...args} name='withdraw' />
        <span>Withdraw</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='send' />")}>
        <Icons {...args} name='send' />
        <span>Send</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='menuDeposit' />")}>
        <Icons {...args} name='menuDeposit' />
        <span>Menu Deposit</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='company' />")}>
        <Icons {...args} name='company' />
        <span>Company</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='parties' />")}>
        <Icons {...args} name='parties' />
        <span>Parties</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='transactions' />")}>
        <Icons {...args} name='transactions' />
        <span>Transactions</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='fiat' />")}>
        <Icons {...args} name='fiat' />
        <span>Fiat</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='money' />")}>
        <Icons {...args} name='money' />
        <span>Money</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='sendCrypto' />")}>
        <Icons {...args} name='sendCrypto' />
        <span>Send Crypto</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='businessAccount' />")}>
        <Icons {...args} name='businessAccount' />
        <span>Business Portfolio</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='individualAccount' />")}>
        <Icons {...args} name='individualAccount' />
        <span>Identity</span>
      </div>

      {/* Functional Icons */}
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='arrowUp' />")}>
        <Icons {...args} name='arrowUp' />
        <span>Arrow Up</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='arrowDown' />")}>
        <Icons {...args} name='arrowDown' />
        <span>Arrow Down</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='arrowLeft' />")}>
        <Icons {...args} name='arrowLeft' />
        <span>Arrow Left</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='arrowRight' />")}>
        <Icons {...args} name='arrowRight' />
        <span>Arrow Right</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='add' />")}>
        <Icons {...args} name='add' />
        <span>Add</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='minus' />")}>
        <Icons {...args} name='minus' />
        <span>Minus</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='cross' />")}>
        <Icons {...args} name='cross' />
        <span>Cross</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='more' />")}>
        <Icons {...args} name='more' />
        <span>More</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='chevronDown' />")}>
        <Icons {...args} name='chevronDown' />
        <span>Chevron Down</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='chevronUp' />")}>
        <Icons {...args} name='chevronUp' />
        <span>Chevron Up</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='chevronLeft' />")}>
        <Icons {...args} name='chevronLeft' />
        <span>Chevron Left</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='chevronRight' />")}>
        <Icons {...args} name='chevronRight' />
        <span>Chevron Right</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='collapse' />")}>
        <Icons {...args} name='collapse' />
        <span>Collapse</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='extend' />")}>
        <Icons {...args} name='extend' />
        <span>Extend</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='spinner' />")}>
        <Icons {...args} name='spinner' />
        <span>Spinner</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='check' />")}>
        <Icons {...args} name='check' />
        <span>Check</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='remove' />")}>
        <Icons {...args} name='remove' />
        <span>Remove</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='pix' />")}>
        <Icons {...args} name='pix' />
        <span>PIX</span>
      </div>
      {/* System Icons */}
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='info' />")}>
        <Icons {...args} name='info' />
        <span>Info</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='notifications' />")}>
        <Icons {...args} name='notifications' />
        <span>Notifications</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='favorite' />")}>
        <Icons {...args} name='favorite' />
        <span>Favorite</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='transferHistory' />")}>
        <Icons {...args} name='transferHistory' />
        <span>Transfer History</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='support' />")}>
        <Icons {...args} name='support' />
        <span>Support</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='help' />")}>
        <Icons {...args} name='help' />
        <span>Help</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='language' />")}>
        <Icons {...args} name='language' />
        <span>Language</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='share' />")}>
        <Icons {...args} name='share' />
        <span>Share</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='products' />")}>
        <Icons {...args} name='products' />
        <span>Products</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='hub' />")}>
        <Icons {...args} name='hub' />
        <span>Hub</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='systemSecurity' />")}>
        <Icons {...args} name='systemSecurity' />
        <span>System Security</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='fees' />")}>
        <Icons {...args} name='fees' />
        <span>Fees</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='settings' />")}>
        <Icons {...args} name='settings' />
        <span>Settings</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='id' />")}>
        <Icons {...args} name='id' />
        <span>ID</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='viewBalance' />")}>
        <Icons {...args} name='viewBalance' />
        <span>View Balance</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='hideBalance' />")}>
        <Icons {...args} name='hideBalance' />
        <span>Hide Balance</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='privacy' />")}>
        <Icons {...args} name='privacy' />
        <span>Privacy</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='card' />")}>
        <Icons {...args} name='card' />
        <span>Card</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='coin' />")}>
        <Icons {...args} name='coin' />
        <span>Coin</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='wallet' />")}>
        <Icons {...args} name='wallet' />
        <span>Wallet</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='email' />")}>
        <Icons {...args} name='email' />
        <span>Email</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='rewards' />")}>
        <Icons {...args} name='rewards' />
        <span>Rewards</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='time' />")}>
        <Icons {...args} name='time' />
        <span>Time</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='location' />")}>
        <Icons {...args} name='location' />
        <span>Location</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='calendar' />")}>
        <Icons {...args} name='calendar' />
        <span>Calendar</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='securityCheck' />")}>
        <Icons {...args} name='securityCheck' />
        <span>Security Check</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='devices' />")}>
        <Icons {...args} name='devices' />
        <span>Devices</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='images' />")}>
        <Icons {...args} name='images' />
        <span>Images</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='bank' />")}>
        <Icons {...args} name='bank' />
        <span>Bank</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='coins' />")}>
        <Icons {...args} name='coins' />
        <span>Coins</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='earn' />")}>
        <Icons {...args} name='earn' />
        <span>Earn</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='scan' />")}>
        <Icons {...args} name='scan' />
        <span>Scan</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='search' />")}>
        <Icons {...args} name='search' />
        <span>Search</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='maintenance' />")}>
        <Icons {...args} name='maintenance' />
        <span>Maintenance</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='editFile' />")}>
        <Icons {...args} name='editFile' />
        <span>Edit File</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='document' />")}>
        <Icons {...args} name='document' />
        <span>Document</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='upload' />")}>
        <Icons {...args} name='upload' />
        <span>Upload</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='gift' />")}>
        <Icons {...args} name='gift' />
        <span>Gift</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='filter' />")}>
        <Icons {...args} name='filter' />
        <span>Filter</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='expand' />")}>
        <Icons {...args} name='expand' />
        <span>Expand</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='systemCollapse' />")}>
        <Icons {...args} name='systemCollapse' />
        <span>System Collapse</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='refresh' />")}>
        <Icons {...args} name='refresh' />
        <span>Refresh</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='transfer' />")}>
        <Icons {...args} name='transfer' />
        <span>Transfer</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='link' />")}>
        <Icons {...args} name='link' />
        <span>Link</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='save' />")}>
        <Icons {...args} name='save' />
        <span>Save</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='like' />")}>
        <Icons {...args} name='like' />
        <span>Like</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='dislike' />")}>
        <Icons {...args} name='dislike' />
        <span>Dislike</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='copy' />")}>
        <Icons {...args} name='copy' />
        <span>Copy</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='mobile' />")}>
        <Icons {...args} name='mobile' />
        <span>Mobile</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='chat' />")}>
        <Icons {...args} name='chat' />
        <span>Chat</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='swap' />")}>
        <Icons {...args} name='swap' />
        <span>Swap</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='clock' />")}>
        <Icons {...args} name='clock' />
        <span>Clock</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='desktop' />")}>
        <Icons {...args} name='desktop' />
        <span>Desktop</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='usd' />")}>
        <Icons {...args} name='usd' />
        <span>USD</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='eur' />")}>
        <Icons {...args} name='eur' />
        <span>EUR</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='gbp' />")}>
        <Icons {...args} name='gbp' />
        <span>GBP</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='jpy' />")}>
        <Icons {...args} name='jpy' />
        <span>JPY</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='cny' />")}>
        <Icons {...args} name='cny' />
        <span>CNY</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='google' />")}>
        <Icons {...args} name='google' />
        <span>Google</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='apple' />")}>
        <Icons {...args} name='apple' />
        <span>Apple</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='twitter' />")}>
        <Icons {...args} name='twitter' />
        <span>Twitter</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='linkedIn' />")}>
        <Icons {...args} name='linkedIn' />
        <span>LinkedIn</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='passkey' />")}>
        <Icons {...args} name='passkey' />
        <span>Passkey</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='ach' />")}>
        <Icons {...args} name='ach' />
        <span>ACH</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='apiKey' />")}>
        <Icons {...args} name='apiKey' />
        <span>APIKey</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='brokenLink' />")}>
        <Icons {...args} name='brokenLink' />
        <span>Broken Link</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='pause' />")}>
        <Icons {...args} name='pause' />
        <span>Pause</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='autoConversionRules' />")}>
        <Icons {...args} name='autoConversionRules' />
        <span>Auto Conversion Rules</span>
      </div>
    </div>;
  },
};

export const Logo: Story = {
  args: {
    prefixCls: 'icons',
    color: '#073387',
    logoColor: '#073387',
    wordColor: '#000000',
    networkColor: '#131313',
    size: 32
  },
  parameters: {
    docs: {
      description: {
        story: 'The logo icon is used to represent the 1Money logo.',
      },
    },
  },
  render: function Render(args) {
    const handleCopy = (el: string) => {
      copy(el);
    };

    return <div style={{
      display: 'grid', flexDirection: 'row', gap: 24, flexWrap: 'wrap', gridTemplateColumns: 'repeat(auto-fill, minmax(222px, 1fr))'
    }}>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='logo' />")}>
        <Icons {...args} name='logo' />
        <span>logo</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='logoWord' />")}>
        <Icons {...args} name='logoWord' width={150} height={30} />
        <span>logoWord</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='logoNetwork' />")}>
        <Icons {...args} name='logoNetwork' width={150} height={30} />
        <span>logoNetwork</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='logoWithWords' />")}>
        <Icons {...args} name='logoWithWords' width={180} height={36} />
        <span>logoWithWords</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='logoWithWords' networkLogo />")}>
        <Icons {...args} name='logoWithWords' width={320} height={30} networkLogo />
        <span>logoWithWordsAndNetwork</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='logoBg' />")}>
        <Icons {...args} name='logoBg' width={56} height={57} />
        <span>logoBg</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='logoBeta' />")}>
        <Icons {...args} name='logoBeta' width={30} height={9} />
        <span>logoBeta</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='logoWithBeta' />")}>
        <Icons {...args} name='logoWithBeta' width={152} height={22} />
        <span>logoWithBeta</span>
      </div>
    </div>;
  },
};

export const Illustrations: Story = {
  args: {
    prefixCls: 'icons',
    color: '#B31010',
    borderColor: '#1D1D1F',
    size: 50,
    // @ts-expect-error
    illustrations: true,
    gradientColor: ['#F4C600', 'white'],
  },
  render: function Render(args) {
    const handleCopy = (el: string) => {
      copy(el);
    };

    return <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='illusChecked' />")}>
        <Icons {...args} name='illusChecked' />
        <span>illusChecked</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='illusEmailError' />")}>
        <Icons {...args} name='illusEmailError' />
        <span>illusEmailError</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='illusLinkExpired' />")}>
        <Icons {...args} name='illusLinkExpired' />
        <span>Link Expired</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='illus2FA' />")}>
        <Icons {...args} name='illus2FA' />
        <span>illus2FA</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='illusLocked' />")}>
        <Icons {...args} name='illusLocked' />
        <span>illusLocked</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='illusError' />")}>
        <Icons {...args} name='illusError' />
        <span>illusError</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='illusRegionNotSupported' />")}>
        <Icons {...args} name='illusRegionNotSupported' />
        <span>illusRegionNotSupported</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='illusIDCard' />")}>
        <Icons {...args} name='illusIDCard' />
        <span>illusIDCard</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='illusVerification' />")}>
        <Icons {...args} name='illusVerification' />
        <span>illusVerification</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='illusTransfer' />")}>
        <Icons {...args} name='illusTransfer' />
        <span>illusTransfer</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='illusSend' />")}>
        <Icons {...args} name='illusSend' />
        <span>illusSend</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='illusAccount' />")}>
        <Icons {...args} name='illusAccount' />
        <span>illusAccount</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='illusPending' />")}>
        <Icons {...args} name='illusPending' />
        <span>illusPending</span>
      </div>
    </div>;
  }
};

export const OldIcons: Story = {
  name: 'Old Icons (Deprecated)',
  args: {
    prefixCls: 'icons',
    color: '#073387',
    borderColor: '#131313',
  },
  render: function Render(args) {
    const handleCopy = (el: string) => {
      copy(el);
    };
    return <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='burger' />")}>
        <Icons {...args} name='burger' />
        <span>burger</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='return' />")}>
        <Icons {...args} name='return' />
        <span>return</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='close' />")}>
        <Icons {...args} name='close' />
        <span>close</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='arrow' />")}>
        <Icons {...args} name='arrow' />
        <span>arrow</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='circle' />")}>
        <Icons {...args} name='circle' />
        <span>circle</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='times' />")}>
        <Icons {...args} name='times' />
        <span>times</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='doubleCheck' />")}>
        <Icons {...args} name='doubleCheck' />
        <span>doubleCheck</span>
      </div>

      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='checkCircle' />")}>
        <Icons {...args} name='checkCircle' />
        <span>checkCircle</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='timesCircle' />")}>
        <Icons {...args} name='timesCircle' />
        <span>timesCircle</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='content' />")}>
        <Icons {...args} name='content' />
        <span>Content</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='locked' />")}>
        <Icons {...args} name='locked' />
        <span>locked</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='exclamation' />")}>
        <Icons {...args} name='exclamation' />
        <span>exclamation</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='arrowLink' />")}>
        <Icons {...args} name='arrowLink' />
        <span>arrowLink</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='union' />")}>
        <Icons {...args} name='union' />
        <span>union</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='eyeClose' />")}>
        <Icons {...args} name='eyeClose' />
        <span>eyeClose</span>
      </div>
      <div style={COPY_ICON_BOX_STYLE} onClick={() => handleCopy("<Icons name='eyeOn' />")}>
        <Icons {...args} name='eyeOn' />
        <span>eyeOn</span>
      </div>
    </div>;
  }
};


