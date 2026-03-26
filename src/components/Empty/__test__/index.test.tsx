import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Empty } from '../index';

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

describe('Empty', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Empty
        icon="transactions"
        title="No record found"
        description="Try adjusting your filters"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders fill variant', () => {
    const wrapper = render(
      <Empty
        variant="fill"
        icon="transactions"
        description="No data available"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with action', () => {
    const wrapper = render(
      <Empty
        icon="bank"
        description="You don't have any bank accounts linked"
        action={<button>Add new bank account</button>}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with custom icon element', () => {
    const wrapper = render(
      <Empty
        icon={<svg data-testid="custom-icon" />}
        description="Custom icon test"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
