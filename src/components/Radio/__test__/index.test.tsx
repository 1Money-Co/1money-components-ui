import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Radio, RadioGroup } from '../index';

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

describe('Radio', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Radio label="Test radio" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with description', () => {
    const wrapper = render(
      <Radio label="Test radio" description="Helper text" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders checked state', () => {
    const wrapper = render(
      <Radio label="Checked radio" checked />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders disabled state', () => {
    const wrapper = render(
      <Radio label="Disabled radio" disabled />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('RadioGroup', () => {
  it('renders with children', () => {
    const wrapper = render(
      <RadioGroup value="a">
        <Radio value="a" label="Option A" />
        <Radio value="b" label="Option B" />
      </RadioGroup>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with options', () => {
    const wrapper = render(
      <RadioGroup
        value="email"
        options={[
          { value: 'email', label: 'Email' },
          { value: 'sms', label: 'SMS' },
        ]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders horizontal layout', () => {
    const wrapper = render(
      <RadioGroup value="a" layout="horizontal">
        <Radio value="a" label="Option A" />
        <Radio value="b" label="Option B" />
      </RadioGroup>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders disabled group', () => {
    const wrapper = render(
      <RadioGroup value="a" disabled>
        <Radio value="a" label="Option A" />
        <Radio value="b" label="Option B" />
      </RadioGroup>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
