import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Divider } from '../index';

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

describe('Divider', () => {
  it('renders horizontal divider correctly', () => {
    const wrapper = render(<Divider />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with text correctly', () => {
    const wrapper = render(<Divider>Section</Divider>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders vertical divider correctly', () => {
    const wrapper = render(<Divider type="vertical" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders dashed variant correctly', () => {
    const wrapper = render(<Divider variant="dashed">Dashed</Divider>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders dotted variant correctly', () => {
    const wrapper = render(<Divider variant="dotted" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with left orientation correctly', () => {
    const wrapper = render(<Divider orientation="left">Left</Divider>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with right orientation correctly', () => {
    const wrapper = render(<Divider orientation="right">Right</Divider>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders plain style correctly', () => {
    const wrapper = render(<Divider plain>Plain</Divider>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with orientationMargin correctly', () => {
    const wrapper = render(
      <Divider orientation="left" orientationMargin={0}>Custom Margin</Divider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('has role="separator"', () => {
    const { container } = render(<Divider />);
    expect(container.firstChild).toHaveAttribute('role', 'separator');
  });
});
