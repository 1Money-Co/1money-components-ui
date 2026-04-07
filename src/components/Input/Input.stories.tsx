import React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './index';
import { INPUT_SIZES, INPUT_STATUSES } from './constants';

import './FieldShell/FieldShell.scss';
import './Input/Input.scss';
import './TextArea/TextArea.scss';
import './OTP/OTP.scss';
import './Trade/Trade.scss';
import './Amount/style/Amount.scss';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    disabled: { control: 'boolean' },
    allowClear: { control: 'boolean' },
    size: { control: 'radio', options: [...INPUT_SIZES] },
    status: { control: 'radio', options: [...INPUT_STATUSES] },
    label: { control: 'text' },
    errorMsg: { control: 'text' },
    placeholder: { control: 'text' },
  },
  args: {
    disabled: false,
    allowClear: true,
    size: 'large',
    status: 'default',
    label: 'Label',
    errorMsg: 'Feedback',
    placeholder: 'Value',
    onChange: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => {
    const sizes = ['large', 'small'] as const;
    const statuses = ['default', 'error'] as const;
    const valueTypes = ['Placeholder', 'Filled'] as const;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        {sizes.map((size) => (
          <div key={size}>
            <h3 style={{ margin: '0 0 16px', textTransform: 'capitalize' }}>{size}</h3>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {statuses.map((status) =>
                valueTypes.map((vt) => (
                  <div key={`${status}-${vt}`} style={{ width: 310 }}>
                    <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>
                      {status} / {vt}
                    </p>
                    <Input
                      size={size}
                      status={status}
                      label="Label"

                      errorMsg="Feedback"
                      placeholder="Value"
                      allowClear
                      defaultValue={vt === 'Filled' ? 'Input value' : undefined}
                    />
                  </div>
                )),
              )}
              {/* Read-Only */}
              {valueTypes.map((vt) => (
                <div key={`readonly-${vt}`} style={{ width: 310 }}>
                  <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>
                    read-only / {vt}
                  </p>
                  <Input
                    size={size}
                    readOnly
                    label="Label"
                    errorMsg="Feedback"
                    placeholder="Value"
                    defaultValue={vt === 'Filled' ? 'Read-only value' : undefined}
                  />
                </div>
              ))}
              {/* Disabled */}
              {valueTypes.map((vt) => (
                <div key={`disabled-${vt}`} style={{ width: 310 }}>
                  <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>
                    disabled / {vt}
                  </p>
                  <Input
                    size={size}
                    disabled
                    label="Label"

                    errorMsg="Feedback"
                    placeholder="Value"
                    defaultValue={vt === 'Filled' ? 'Disabled value' : undefined}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* ── With Prefix / Suffix ── */}
        <div>
          <h3 style={{ margin: '0 0 16px' }}>With Prefix / Suffix</h3>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <div style={{ width: 310 }}>
              <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>Prefix + Suffix</p>
              <Input
                label="Label"
                defaultValue="100"
                prefix={<span>USD</span>}
                suffix={<span>Max</span>}
                allowClear
              />
            </div>
            <div style={{ width: 310 }}>
              <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>Prefix only</p>
              <Input
                label="Label"
                placeholder="Enter amount"
                prefix={<span>$</span>}
                allowClear
              />
            </div>
            <div style={{ width: 310 }}>
              <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>Suffix only</p>
              <Input
                label="Label"
                placeholder="Enter email"
                suffix={<span>@gmail.com</span>}
              />
            </div>
          </div>
        </div>

        {/* ── Required / Info ── */}
        <div>
          <h3 style={{ margin: '0 0 16px' }}>Required / Info</h3>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <div style={{ width: 310 }}>
              <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>Required</p>
              <Input
                label="Label"
                required
                placeholder="Required field"
              />
            </div>
            <div style={{ width: 310 }}>
              <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>With Info</p>
              <Input
                label="Label"
                info="Optional hint"
                placeholder="Value"
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
  tags: ['!autodocs'],
};

export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <div style={{ width: 310 }}>
        <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>Large</p>
        <Input
          label="Label"
          placeholder="Loading..."
          loading
        />
      </div>
      <div style={{ width: 310 }}>
        <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>Small</p>
        <Input
          size="small"
          label="Label"
          placeholder="Loading..."
          loading
        />
      </div>
    </div>
  ),
  tags: ['!autodocs'],
};

export const Password: Story = {
  render: () => {
    const sizes = ['large', 'small'] as const;
    const valueTypes = ['Placeholder', 'Filled'] as const;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        {sizes.map((size) => (
          <div key={size}>
            <h3 style={{ margin: '0 0 16px', textTransform: 'capitalize' }}>{size}</h3>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {valueTypes.map((vt) => (
                <div key={`default-${vt}`} style={{ width: 310 }}>
                  <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>
                    default / {vt}
                  </p>
                  <Input.Password
                    size={size}
                    label="Password"

                    errorMsg="Feedback"
                    placeholder="Enter password"
                    defaultValue={vt === 'Filled' ? 'secretpass' : undefined}
                  />
                </div>
              ))}
              {/* Error */}
              <div style={{ width: 310 }}>
                <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>error / Filled</p>
                <Input.Password
                  size={size}
                  status="error"
                  label="Password"
                  errorMsg="Password too short"
                  placeholder="Enter password"
                  defaultValue="123"
                />
              </div>
              {/* Disabled */}
              <div style={{ width: 310 }}>
                <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>disabled / Filled</p>
                <Input.Password
                  size={size}
                  disabled
                  label="Password"
                  placeholder="Enter password"
                  defaultValue="secretpass"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  },
  tags: ['!autodocs'],
};

export const Search: Story = {
  render: () => {
    const onSearch = fn();
    const sizes = ['large', 'small'] as const;
    const columns = [
      { label: 'Default', props: {} },
      { label: 'Disabled', props: { disabled: true } },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        {sizes.map((size) => (
          <div key={size}>
            <h3 style={{ margin: '0 0 16px', textTransform: 'capitalize' }}>{size}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {/* Placeholder row */}
              <div>
                <p style={{ margin: '0 0 8px', color: '#666', fontSize: 13 }}>Placeholder</p>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  {columns.map((col) => (
                    <div key={col.label} style={{ width: 310 }}>
                      <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>{col.label}</p>
                      <Input.Search
                        size={size}
                        placeholder="Search"
                        onSearch={onSearch}
                        {...col.props}
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Filled row */}
              <div>
                <p style={{ margin: '0 0 8px', color: '#666', fontSize: 13 }}>Filled</p>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  {columns.map((col) => (
                    <div key={col.label} style={{ width: 310 }}>
                      <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>{col.label}</p>
                      <Input.Search
                        size={size}
                        placeholder="Search"
                        defaultValue="Search"
                        allowClear
                        onSearch={onSearch}
                        {...col.props}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Loading */}
        <div>
          <h3 style={{ margin: '0 0 16px' }}>Loading</h3>
          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{ width: 310 }}>
              <Input.Search
                placeholder="Search"
                defaultValue="Search"
                loading
                onSearch={onSearch}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
  tags: ['!autodocs'],
};

export const TextArea: Story = {
  render: () => {
    const states = ['default', 'error'] as const;
    const valueTypes = ['Placeholder', 'Filled'] as const;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        {/* ── Large ── */}
        <div>
          <h3 style={{ margin: '0 0 16px' }}>Large</h3>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {states.map((status) =>
              valueTypes.map((vt) => (
                <div key={`${status}-${vt}`} style={{ width: 400 }}>
                  <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>
                    {status} / {vt}
                  </p>
                  <Input.TextArea
                    label="Label"
                    errorMsg="Feedback"
                    status={status}
                    placeholder="Value"
                    defaultValue={vt === 'Filled' ? 'Longer memo value that spans multiple lines to demonstrate the filled state of the textarea component' : undefined}
                    rows={4}
                    showCount
                    maxLength={250}
                  />
                </div>
              )),
            )}
            {/* Disabled */}
            {valueTypes.map((vt) => (
              <div key={`disabled-${vt}`} style={{ width: 400 }}>
                <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>
                  disabled / {vt}
                </p>
                <Input.TextArea
                  label="Label"
                  errorMsg="Feedback"
                  disabled
                  placeholder="Value"
                  defaultValue={vt === 'Filled' ? 'Disabled filled value' : undefined}
                  rows={4}
                  showCount
                  maxLength={250}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Small ── */}
        <div>
          <h3 style={{ margin: '0 0 16px' }}>Small</h3>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <div style={{ width: 400 }}>
              <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>default / Placeholder</p>
              <Input.TextArea
                size="small"
                label="Label"
                errorMsg="Feedback"
                placeholder="Value"
                rows={3}
                showCount
                maxLength={250}
              />
            </div>
            <div style={{ width: 400 }}>
              <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>default / Filled</p>
              <Input.TextArea
                size="small"
                label="Label"
                errorMsg="Feedback"
                placeholder="Value"
                defaultValue="Small filled value"
                rows={3}
                showCount
                maxLength={250}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
  tags: ['!autodocs'],
};

export const OTP: Story = {
  render: () => {
    const onComplete = fn();
    const onChange = fn();

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        {/* ── Large ── */}
        <div>
          <h3 style={{ margin: '0 0 16px' }}>Large</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>default / Empty</p>
              <Input.OTP
                label="Verification Code"

                errorMsg="Feedback"
                length={6}
                onComplete={onComplete}
                onChange={onChange}
              />
            </div>
            <div>
              <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>default / Partial</p>
              <Input.OTP
                label="Verification Code"

                errorMsg="Feedback"
                length={6}
                defaultValue="123"
                onComplete={onComplete}
                onChange={onChange}
              />
            </div>
            <div>
              <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>error</p>
              <Input.OTP
                label="Verification Code"
                status="error"
                errorMsg="Invalid code"
                length={6}
                defaultValue="999999"
                onComplete={onComplete}
                onChange={onChange}
              />
            </div>
            <div>
              <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>disabled</p>
              <Input.OTP
                label="Verification Code"
                disabled
                length={6}
                defaultValue="123456"
                onComplete={onComplete}
                onChange={onChange}
              />
            </div>
            <div>
              <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>mask (password style)</p>
              <Input.OTP
                label="PIN Code"
                length={6}
                defaultValue="1234"
                mask
                onComplete={onComplete}
                onChange={onChange}
              />
            </div>
          </div>
        </div>

        {/* ── Small ── */}
        <div>
          <h3 style={{ margin: '0 0 16px' }}>Small</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>default / Empty</p>
              <Input.OTP
                size="small"
                label="Code"
                length={6}
                onComplete={onComplete}
                onChange={onChange}
              />
            </div>
            <div>
              <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>4-digit code</p>
              <Input.OTP
                size="small"
                label="PIN"
                length={4}
                defaultValue="12"
                onComplete={onComplete}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
  tags: ['!autodocs'],
};

export const Trade: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 660 }}>
      <div>
        <h3 style={{ margin: '0 0 8px' }}>Default (Placeholder)</h3>
        <Input.Trade
          currencySymbol="$"
          currencyUnit="USD"
          showMax
          onMax={fn()}
          onSwap={fn()}
          exchangeText="0 USDT"
        />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px' }}>Default (Filled)</h3>
        <Input.Trade
          currencySymbol="$"
          currencyUnit="USD"
          defaultValue="123,456,789"
          showMax
          onMax={fn()}
          onSwap={fn()}
          exchangeText="123,456,789 USDT"
        />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px' }}>Error</h3>
        <Input.Trade
          currencySymbol="$"
          currencyUnit="USD"
          defaultValue="123,456,789"
          status="error"
          showMax
          onMax={fn()}
          onSwap={fn()}
          exchangeText="123,456,789 USDT"
          errorMsg="Insufficient balance"
        />
      </div>
      <div>
        <h3 style={{ margin: '0 0 8px' }}>Disabled</h3>
        <Input.Trade
          currencySymbol="$"
          currencyUnit="USD"
          defaultValue="123,456,789"
          disabled
          showMax
          onSwap={fn()}
          exchangeText="123,456,789 USDT"
        />
      </div>
    </div>
  ),
  tags: ['!autodocs'],
};

const USDT_ICON = 'https://static.1money.com/images/asset/usdt.png?w=48&q=75';
const USDC_ICON = 'https://static.1money.com/images/asset/usdc.png?w=48&q=75';

export const Amount: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      {/* ── Large ── */}
      <div>
        <h3 style={{ margin: '0 0 16px' }}>Large</h3>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {/* Placeholder */}
          <div style={{ width: 400 }}>
            <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>Placeholder</p>
            <Input.Amount
              label="You send"
              errorMsg="$2,992.68 USDC available"
              placeholder="Enter amount"
              actionLabel="Use Max"
              onAction={fn()}
              currencyIcon={<img src={USDC_ICON} alt="USDC" />}
              currencyLabel="USDC"
              onCurrencyClick={fn()}
            />
          </div>
          {/* Filled */}
          <div style={{ width: 400 }}>
            <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>Filled</p>
            <Input.Amount
              label="You send"
              errorMsg="$2,992.68 USDC available"
              defaultValue="1,250.00"
              actionLabel="Use Max"
              onAction={fn()}
              currencyIcon={<img src={USDC_ICON} alt="USDC" />}
              currencyLabel="USDC"
              onCurrencyClick={fn()}
            />
          </div>
          {/* Disabled */}
          <div style={{ width: 400 }}>
            <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>Disabled</p>
            <Input.Amount
              label="You send"
              errorMsg="$2,992.68 USDC available"
              disabled
              actionLabel="Use Max"
              currencyIcon={<img src={USDC_ICON} alt="USDC" />}
              currencyLabel="USDC"
            />
          </div>
          {/* Error */}
          <div style={{ width: 400 }}>
            <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>Error</p>
            <Input.Amount
              label="You send"
              status="error"
              errorMsg="Insufficient balance"
              defaultValue="999,999.99"
              actionLabel="Use Max"
              onAction={fn()}
              currencyIcon={<img src={USDC_ICON} alt="USDC" />}
              currencyLabel="USDC"
              onCurrencyClick={fn()}
            />
          </div>
        </div>
      </div>

      {/* ── Small ── */}
      <div>
        <h3 style={{ margin: '0 0 16px' }}>Small</h3>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ width: 400 }}>
            <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>Placeholder</p>
            <Input.Amount
              size="small"
              label="You send"
              errorMsg="$2,992.68 USDT available"
              placeholder="Enter amount"
              actionLabel="Use Max"
              onAction={fn()}
              currencyIcon={<img src={USDT_ICON} alt="USDT" />}
              currencyLabel="USDT"
              onCurrencyClick={fn()}
            />
          </div>
          <div style={{ width: 400 }}>
            <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>Filled</p>
            <Input.Amount
              size="small"
              label="You send"
              errorMsg="$2,992.68 USDT available"
              defaultValue="500.00"
              actionLabel="Use Max"
              onAction={fn()}
              currencyIcon={<img src={USDT_ICON} alt="USDT" />}
              currencyLabel="USDT"
              onCurrencyClick={fn()}
            />
          </div>
        </div>
      </div>

      {/* ── With prefix currency selector ── */}
      <div>
        <h3 style={{ margin: '0 0 16px' }}>With Prefix Currency</h3>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ width: 400 }}>
            <Input.Amount
              label="You send"
              errorMsg="65,482.55 USD1 available"
              defaultValue="0"
              prefix={
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <img src={USDT_ICON} alt="USDT" style={{ width: 24, height: 24, borderRadius: '50%' }} />
                  <span>USDT</span>
                </span>
              }
              actionLabel="Use Max"
              onAction={fn()}
              currencyIcon={<img src={USDC_ICON} alt="USDC" />}
              currencyLabel="USDC"
              onCurrencyClick={fn()}
            />
          </div>
        </div>
      </div>

      {/* ── Currency only (no action) ── */}
      <div>
        <h3 style={{ margin: '0 0 16px' }}>Currency Only (no action button)</h3>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ width: 400 }}>
            <Input.Amount
              label="Amount"
              placeholder="0.00"
              currencyIcon={<img src={USDC_ICON} alt="USDC" />}
              currencyLabel="USDC"
              onCurrencyClick={fn()}
            />
          </div>
        </div>
      </div>
    </div>
  ),
  tags: ['!autodocs'],
};

export const Mask: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      {/* ── Common Masks ── */}
      <div>
        <h3 style={{ margin: '0 0 16px' }}>Common Masks</h3>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ width: 310 }}>
            <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>Phone</p>
            <Input.Mask
              label="Phone"
              mask="(99) 99999-9999"
            />
          </div>
          <div style={{ width: 310 }}>
            <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>CPF</p>
            <Input.Mask
              label="CPF"
              mask="999.999.999-99"
            />
          </div>
          <div style={{ width: 310 }}>
            <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>CNPJ</p>
            <Input.Mask
              label="CNPJ"
              mask="99.999.999/9999-99"
            />
          </div>
          <div style={{ width: 310 }}>
            <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>Date</p>
            <Input.Mask
              label="Date"
              mask="99/99/9999"
            />
          </div>
        </div>
      </div>

      {/* ── States ── */}
      <div>
        <h3 style={{ margin: '0 0 16px' }}>States</h3>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ width: 310 }}>
            <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>Filled</p>
            <Input.Mask
              label="CPF"
              mask="999.999.999-99"
              defaultValue="12345678901"
            />
          </div>
          <div style={{ width: 310 }}>
            <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>Error</p>
            <Input.Mask
              label="CPF"
              mask="999.999.999-99"
              status="error"
              errorMsg="Invalid CPF"
              defaultValue="123"
            />
          </div>
          <div style={{ width: 310 }}>
            <p style={{ margin: '0 0 4px', fontSize: 12, color: '#999' }}>Disabled</p>
            <Input.Mask
              label="CPF"
              mask="999.999.999-99"
              disabled
              defaultValue="12345678901"
            />
          </div>
        </div>
      </div>

    </div>
  ),
  tags: ['!autodocs'],
};

