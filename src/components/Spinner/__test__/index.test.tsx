import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Spinner } from '../index';

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

describe('Spinner', () => {
  it('renders default type correctly', () => {
    const wrapper = render(<Spinner />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders brand correctly', () => {
    const wrapper = render(<Spinner type="brand" size={32} title="Loading" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders brand-bg correctly', () => {
    const wrapper = render(<Spinner type="brand-bg" size={74} title="Loading" body="Please wait" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders brand-bg without body', () => {
    const wrapper = render(<Spinner type="brand-bg" size={74} title="Loading" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('simulate events on default type', async () => {
    const onClick = jest.fn();
    render(<Spinner data-testid="spinner" onClick={onClick} />);
    const user = userEvent.setup();
    await user.click(screen.getByTestId('spinner'));
    expect(onClick).toHaveBeenCalled();
  });
});
