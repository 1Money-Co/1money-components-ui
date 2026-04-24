import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Icons, IconWrapper } from '../index';
import { Illustrations as IllustrationsStory } from '../Icons.stories';

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

describe('Icons', () => {
  it('renders correctly', () => {
    const Icon = render(
      <Icons name='deposit' />
    );
    const wrapperIcon = render(
      <IconWrapper />
    );
    expect(Icon).toMatchSnapshot();
    expect(wrapperIcon).toMatchSnapshot();
  });

  it('renders figma alias names', () => {
    const { container } = render(
      <>
        <Icons name='depositFiatCrypto' />
        <Icons name='personalSettings' />
        <Icons name='security2' />
        <Icons name='iconPix' />
        <Icons name='noApiKeys' />
      </>
    );

    expect(container.querySelectorAll('svg')).toHaveLength(5);
  });

  it('renders sort icon variants', () => {
    const { container } = render(
      <>
        <Icons name='sort' />
        <Icons name='sort' status='ascend' />
        <Icons name='sort' status='descend' />
      </>
    );

    expect(container.querySelectorAll('svg')).toHaveLength(3);
    expect(Array.from(container.querySelectorAll('path')).map(path => path.getAttribute('fill'))).toEqual([
      '#9FA3A3',
      '#131313',
      '#9FA3A3',
      '#9FA3A3',
      '#131313',
    ]);
  });

  it('renders illustrations on a 74px canvas', () => {
    const { container } = render(
      <>
        <Icons name='illusChecked' />
        <Icons name='illusEmailError' />
        <Icons name='illusAddAccount' />
      </>
    );

    expect(Array.from(container.querySelectorAll('svg')).map(svg => svg.getAttribute('viewBox'))).toEqual([
      '0 0 74 74',
      '0 0 74 74',
      '0 0 74 74',
    ]);
  });

  it('uses figma default border color for illustrations', () => {
    const { container } = render(
      <>
        <Icons name='illusChecked' />
        <Icons name='illusEmailError' />
        <Icons name='illusAddAccount' />
      </>
    );

    expect(container.innerHTML).toContain('#131313');
    expect(container.innerHTML).not.toContain('#1D1D1F');
  });

  it('renders pending illustration with the figma transfer direction', () => {
    const { container } = render(<Icons name='illusPending' />);

    expect(container.innerHTML).toContain('translate(74 0) scale(-1 1)');
  });

  it('shows pending illustration with warning color in the story', () => {
    const renderStory = IllustrationsStory.render as any;
    render(renderStory(IllustrationsStory.args as any, {}));

    const pendingLabel = screen.getByText('illusPending');
    const pendingCard = pendingLabel.parentElement;

    expect(pendingCard?.innerHTML).toContain('#F4C600');
    expect(pendingCard?.innerHTML).not.toContain('#AE0000');
  });
});
