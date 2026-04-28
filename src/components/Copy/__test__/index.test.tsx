import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Copy, Clipboard } from '../index';

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

describe('Copy', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Copy value="test content" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Clipboard', () => {
  it('renders content only', () => {
    const wrapper = render(
      <Clipboard content="GWKLDLVE25dfLIJOHUD578JPIHD24JLJGHGOUH27HLIHOUGOLIKHJ547HOU" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders content with label', () => {
    const wrapper = render(
      <Clipboard
        label="Setup Key"
        content="GWKLDLVE25dfLIJOHUD578JPIHD24JLJGHGOUH27HLIHOUGOLIKHJ547HOU"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
