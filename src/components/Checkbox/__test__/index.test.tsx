import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '../index';

const originalConsoleError = console.error;
beforeAll(() => {
  console.error = (message: unknown, ...optionalParams: unknown[]) => {
    const errorMessage = typeof message === 'string' ? message : String(message);
    if (
      errorMessage.includes('Could not parse CSS stylesheet') ||
      errorMessage.includes('findDOMNode is deprecated and will be removed')
    ) {
      return;
    }
    originalConsoleError(message, ...optionalParams);
  };
});
afterAll(() => {
  console.error = originalConsoleError;
});

jest.mock('lottie-web', () => ({
  loadAnimation: jest.fn(() => ({
    play: jest.fn(),
    pause: jest.fn(),
    destroy: jest.fn(),
  })),
}));

describe('Checkbox', () => {
  it('renders correctly', () => {
    const { container } = render(<Checkbox label="Test" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('toggles uncontrolled state and emits the next checked value', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<Checkbox label="Test" onChange={handleChange} />);

    const input = screen.getByRole('checkbox', { name: 'Test' });

    expect(input).not.toBeChecked();

    await user.click(screen.getByText('Test'));

    expect(input).toBeChecked();
    expect(handleChange).toHaveBeenCalledWith(true);

    await user.click(input);

    expect(input).not.toBeChecked();
    expect(handleChange).toHaveBeenLastCalledWith(false);
  });

  it('keeps the controlled checked state until the parent updates it', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<Checkbox label="Test" checked={false} onChange={handleChange} />);

    const input = screen.getByRole('checkbox', { name: 'Test' });

    await user.click(input);

    expect(handleChange).toHaveBeenCalledWith(true);
    expect(input).not.toBeChecked();
  });

  it('syncs the indeterminate state to the native input element', () => {
    render(<Checkbox label="Test" indeterminate />);

    const input = screen.getByRole('checkbox', {
      name: 'Test',
    }) as HTMLInputElement;

    expect(input.indeterminate).toBe(true);
  });

  it('supports aria-label when no visible label is rendered', () => {
    render(<Checkbox aria-label="Hidden label checkbox" />);

    expect(
      screen.getByRole('checkbox', { name: 'Hidden label checkbox' }),
    ).toBeInTheDocument();
  });

  it('prevents changes while disabled', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<Checkbox label="Test" disabled onChange={handleChange} />);

    const input = screen.getByRole('checkbox', { name: 'Test' });

    await user.click(input);

    expect(input).not.toBeChecked();
    expect(handleChange).not.toHaveBeenCalled();
  });
});
