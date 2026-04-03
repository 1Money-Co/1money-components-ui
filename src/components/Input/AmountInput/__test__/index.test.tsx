import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InputAmount } from '../index';

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

describe('InputAmount', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <InputAmount placeholder="Enter amount" />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with action and currency', () => {
    const wrapper = render(
      <InputAmount
        label="You send"
        errorMsg="$2,992.68 USDC available"
        actionLabel="Use Max"
        onAction={jest.fn()}
        currencyIcon={<img src="usdc.png" alt="USDC" />}
        currencyLabel="USDC"
        onCurrencyClick={jest.fn()}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders disabled state', () => {
    const wrapper = render(
      <InputAmount
        disabled
        actionLabel="Use Max"
        currencyLabel="USDC"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
