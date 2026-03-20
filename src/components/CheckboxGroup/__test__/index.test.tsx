import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '../../Checkbox';
import { CheckboxGroup } from '../index';

const originalConsoleError = console.error;
console.error = (message, ...optionalParams) => {
  const errorMessage = typeof message === 'string' ? message : String(message);
  if (
    errorMessage.includes('Could not parse CSS stylesheet') ||
    errorMessage.includes('findDOMNode is deprecated and will be removed')
  ) {
    return;
  }
  originalConsoleError(message, ...optionalParams);
};

jest.mock('lottie-web', () => ({
  loadAnimation: jest.fn(() => ({
    play: jest.fn(),
    pause: jest.fn(),
    destroy: jest.fn(),
  })),
}));

describe('CheckboxGroup', () => {
  it('renders options correctly', () => {
    const { container } = render(
      <CheckboxGroup
        options={[
          { label: 'Alpha', value: 'alpha' },
          { label: 'Beta', value: 'beta' },
        ]}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('toggles uncontrolled option values in option order', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(
      <CheckboxGroup
        options={[
          { label: 'Alpha', value: 'alpha' },
          { label: 'Beta', value: 'beta' },
          { label: 'Gamma', value: 'gamma' },
        ]}
        onChange={handleChange}
      />,
    );

    await user.click(screen.getByRole('checkbox', { name: 'Gamma' }));
    await user.click(screen.getByRole('checkbox', { name: 'Alpha' }));

    expect(handleChange).toHaveBeenLastCalledWith(['alpha', 'gamma']);
  });

  it('keeps the controlled value until the parent updates it', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(
      <CheckboxGroup
        options={[
          { label: 'Alpha', value: 'alpha' },
          { label: 'Beta', value: 'beta' },
        ]}
        value={['alpha']}
        onChange={handleChange}
      />,
    );

    const betaCheckbox = screen.getByRole('checkbox', { name: 'Beta' });

    await user.click(betaCheckbox);

    expect(handleChange).toHaveBeenCalledWith(['alpha', 'beta']);
    expect(betaCheckbox).not.toBeChecked();
  });

  it('supports direct Checkbox children', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(
      <CheckboxGroup onChange={handleChange} defaultValue={['beta']}>
        <Checkbox value="alpha" label="Alpha" />
        <Checkbox value="beta" label="Beta" />
      </CheckboxGroup>,
    );

    const alphaCheckbox = screen.getByRole('checkbox', { name: 'Alpha' });
    const betaCheckbox = screen.getByRole('checkbox', { name: 'Beta' });

    expect(betaCheckbox).toBeChecked();

    await user.click(alphaCheckbox);

    expect(handleChange).toHaveBeenLastCalledWith(['alpha', 'beta']);
    expect(alphaCheckbox).toBeChecked();
  });

  it('disables all checkboxes when the group is disabled', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(
      <CheckboxGroup
        disabled
        options={[
          { label: 'Alpha', value: 'alpha' },
          { label: 'Beta', value: 'beta' },
        ]}
        onChange={handleChange}
      />,
    );

    const alphaCheckbox = screen.getByRole('checkbox', { name: 'Alpha' });

    await user.click(alphaCheckbox);

    expect(alphaCheckbox).toBeDisabled();
    expect(handleChange).not.toHaveBeenCalled();
  });
});
