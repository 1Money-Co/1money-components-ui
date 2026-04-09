import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Switch } from '../index';

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

describe('Switch', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Switch label="Test Label" />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders checked state', () => {
    const wrapper = render(
      <Switch label="Checked" defaultChecked />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders disabled state', () => {
    const wrapper = render(
      <Switch label="Disabled" disabled />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders disabled state with description', () => {
    const wrapper = render(
      <Switch label="Disabled" description="Description" disabled />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with description', () => {
    const wrapper = render(
      <Switch label="Label" description="Description" />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('uses the default tertiary typography color for description text', () => {
    const { getByText } = render(
      <Switch label="Label" description="Description" />,
    );

    expect(getByText('Description')).toHaveClass('om-component-ui-typography-color-default-tertiary');
  });

  it('renders with right label placement', () => {
    const wrapper = render(
      <Switch label="Right" labelPlacement="right" />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
