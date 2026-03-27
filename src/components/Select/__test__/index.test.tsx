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

  it('does not open when disabled', () => {
    const { getByRole } = render(
      <Select label="Disabled" options={OPTIONS} disabled />,
    );

    fireEvent.click(getByRole('combobox'));

    expect(document.querySelector('[role="option"]')).toBeNull();
  });
});
