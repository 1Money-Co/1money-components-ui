import 'jsdom-global/register';
import fs from 'fs';
import path from 'path';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tag } from '../index';

const readTagStyleSource = () =>
  fs.readFileSync(path.resolve(__dirname, '../style/Tag.scss'), 'utf8');

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

describe('Tag', () => {
  it('renders correctly', () => {
    const wrapper = render(<Tag label="Test" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('applies size-specific label classes for font alignment', () => {
    const { getByText, rerender } = render(<Tag label="Large" size="large" />);

    expect(getByText('Large')).toHaveClass('om-react-ui-tag-label-large');

    rerender(<Tag label="Medium" size="medium" />);
    expect(getByText('Medium')).toHaveClass('om-react-ui-tag-label-medium');

    rerender(<Tag label="Small" size="small" />);
    expect(getByText('Small')).toHaveClass('om-react-ui-tag-label-small');
  });

  it('does not override typography token line-heights in tag styles', () => {
    const stylesSource = readTagStyleSource();

    expect(stylesSource).not.toContain('line-height: 1.33;');
    expect(stylesSource).not.toContain('line-height: 1.08;');
  });

  it('renders with icon', () => {
    const wrapper = render(<Tag label="Test" icon="add" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders removable', () => {
    const wrapper = render(<Tag label="Test" removable />);
    expect(wrapper).toMatchSnapshot();
  });
});
