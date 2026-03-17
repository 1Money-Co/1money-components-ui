import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Checkbox } from '../index';

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

describe('CheckboxBeta', () => {
  it('renders correctly', () => {
    const wrapper = render(<Checkbox label="Test" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders checked state', () => {
    const wrapper = render(<Checkbox label="Test" checked />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders indeterminate state', () => {
    const wrapper = render(<Checkbox label="Test" indeterminate />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders disabled state', () => {
    const wrapper = render(<Checkbox label="Test" disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with description', () => {
    const wrapper = render(
      <Checkbox label="Label" description="Description" />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders direction right', () => {
    const wrapper = render(<Checkbox label="Test" direction="right" />);
    expect(wrapper).toMatchSnapshot();
  });
});
