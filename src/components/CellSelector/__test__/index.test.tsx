import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CellSelector } from '../index';
import { CellSelectorGroup } from '../CellSelectorGroup';

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

describe('CellSelector', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <CellSelector label="Test Label" description="Test Description" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders checked state', () => {
    const wrapper = render(
      <CellSelector label="Checked" checked />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders medium size', () => {
    const wrapper = render(
      <CellSelector size="medium" label="Medium" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders small size', () => {
    const wrapper = render(
      <CellSelector size="small" label="Small" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders vertical direction', () => {
    const wrapper = render(
      <CellSelector direction="vertical" label="Vertical" description="Desc" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('CellSelectorGroup', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <CellSelectorGroup defaultValue="a">
        <CellSelector value="a" label="Option A" description="Desc A" />
        <CellSelector value="b" label="Option B" description="Desc B" />
      </CellSelectorGroup>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
