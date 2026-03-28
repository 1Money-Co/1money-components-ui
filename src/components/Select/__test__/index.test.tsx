import 'jsdom-global/register';
import * as React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Select } from '../index';

const OPTIONS = [
  { label: 'Bitcoin', value: 'btc' },
  { label: 'Ethereum', value: 'eth' },
  { label: 'USDT', value: 'usdt' },
];

const GROUPED_OPTIONS = [
  {
    label: 'Stablecoins',
    options: [
      { label: 'USDT', value: 'usdt', description: 'Ethereum' },
      { label: 'USDC', value: 'usdc', description: 'Solana' },
    ],
  },
  {
    label: 'Address History',
    options: [
      { label: 'EUR', value: 'eur', description: 'Euro' },
      { label: 'GBP', value: 'gbp', description: 'British Pound' },
    ],
  },
];

describe('Select', () => {
  it('renders label, placeholder, and feedback content', () => {
    const { getByText, getByRole } = render(
      <Select
        label="Asset"
        placeholder="Choose one"
        status="error"
        feedback="Required"
        options={OPTIONS}
      />,
    );

    expect(getByText('Asset')).toBeInTheDocument();
    expect(getByRole('combobox')).toHaveTextContent('Choose one');
    expect(getByRole('alert')).toHaveTextContent('Required');
  });

  it('opens the panel and selects an option in uncontrolled mode', async () => {
    const onChange = jest.fn();
    const { getByRole, getAllByRole } = render(
      <Select label="Asset" options={OPTIONS} onChange={onChange} />,
    );

    fireEvent.click(getByRole('combobox'));

    await waitFor(() => {
      expect(getAllByRole('option')).toHaveLength(3);
    });

    fireEvent.click(getByRole('option', { name: 'Ethereum' }));

    expect(onChange).toHaveBeenCalledWith('eth', expect.objectContaining({ value: 'eth' }));
    expect(getByRole('combobox')).toHaveTextContent('Ethereum');

    await waitFor(() => {
      expect(document.querySelectorAll('[role="option"]')).toHaveLength(0);
    });
  });

  it('supports multiple selection without closing the panel', async () => {
    const { getByRole, getAllByRole } = render(
      <Select label="Assets" options={OPTIONS} multiple />,
    );

    fireEvent.click(getByRole('combobox'));

    await waitFor(() => {
      expect(getAllByRole('option')).toHaveLength(3);
    });

    fireEvent.click(getByRole('option', { name: 'Bitcoin' }));
    fireEvent.click(getByRole('option', { name: 'USDT' }));

    expect(getAllByRole('option')).toHaveLength(3);
    expect(getByRole('combobox')).toHaveTextContent('Bitcoin');
    expect(getByRole('combobox')).toHaveTextContent('USDT');
  });

  it('removes a selected tag in multiple mode', () => {
    const onChange = jest.fn();
    const { container, getByRole } = render(
      <Select
        label="Assets"
        options={OPTIONS}
        multiple
        defaultValue={['btc', 'eth']}
        onChange={onChange}
      />,
    );

    const removeButton = container.querySelector('.om-react-ui-select-tag-remove');

    expect(removeButton).not.toBeNull();

    fireEvent.mouseDown(removeButton as Element);

    expect(onChange).toHaveBeenCalledWith(
      ['eth'],
      [expect.objectContaining({ value: 'eth' })],
    );
    expect(getByRole('combobox')).toHaveTextContent('Ethereum');
    expect(getByRole('combobox')).not.toHaveTextContent('Bitcoin');
  });

  it('supports collapsed display for multiple selections', () => {
    const { getByRole } = render(
      <Select
        label="Assets"
        options={OPTIONS}
        multiple
        maxVisibleValues={1}
        value={['btc', 'eth', 'usdt']}
      />,
    );

    expect(getByRole('combobox')).toHaveTextContent('Bitcoin');
    expect(getByRole('combobox')).toHaveTextContent('+ 2...');
  });

  it('does not open when disabled', () => {
    const { getByRole } = render(
      <Select label="Disabled" options={OPTIONS} disabled />,
    );

    fireEvent.click(getByRole('combobox'));

    expect(document.querySelector('[role="option"]')).toBeNull();
  });

  it('renders grouped options and selects items across groups', async () => {
    const onChange = jest.fn();
    const { getByRole, getByText, getAllByRole } = render(
      <Select label="Currency" options={GROUPED_OPTIONS} onChange={onChange} />,
    );

    fireEvent.click(getByRole('combobox'));

    await waitFor(() => {
      expect(getAllByRole('option')).toHaveLength(4);
    });

    expect(getByText('Stablecoins')).toBeInTheDocument();
    expect(getByText('Address History')).toBeInTheDocument();

    fireEvent.click(getByRole('option', { name: 'GBP British Pound' }));

    expect(onChange).toHaveBeenCalledWith('gbp', expect.objectContaining({ value: 'gbp' }));
    expect(getByRole('combobox')).toHaveTextContent('GBP');
  });

  it('filters grouped options when searchable is enabled', async () => {
    const { getByRole, getByPlaceholderText, getByText, getAllByRole, queryByText } = render(
      <Select label="Currency" options={GROUPED_OPTIONS} searchable />,
    );

    fireEvent.click(getByRole('combobox'));

    fireEvent.change(getByPlaceholderText('Search'), {
      target: { value: 'GBP' },
    });

    await waitFor(() => {
      expect(getAllByRole('option')).toHaveLength(1);
    });

    expect(getByText('Address History')).toBeInTheDocument();
    expect(queryByText('Stablecoins')).toBeNull();
    expect(getByRole('option', { name: 'GBP British Pound' })).toBeInTheDocument();
  });

  it('renders footer content inside the panel', async () => {
    const { getByRole, getByText } = render(
      <Select
        label="Asset"
        options={OPTIONS}
        panelFooter={<button type="button">Apply</button>}
      />,
    );

    fireEvent.click(getByRole('combobox'));

    await waitFor(() => {
      expect(getByText('Apply')).toBeInTheDocument();
    });
  });
});
