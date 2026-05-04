import 'jsdom-global/register';
import fs from 'fs';
import path from 'path';
import * as React from 'react';
import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Icons } from '@/components/Icons';
import {
  BUTTON_COLOR,
  BUTTON_COLORS,
  BUTTON_DEFAULT_HTML_TYPE,
  BUTTON_DEFAULT_PREFIX,
  BUTTON_ICON_INHERIT_COLOR,
  BUTTON_SIZE,
  BUTTON_VARIANT,
} from '../constants';
import { Button } from '../index';

const getButtonClassName = (slotOrModifier?: string) =>
  `om-component-ui-${BUTTON_DEFAULT_PREFIX}${slotOrModifier ? `-${slotOrModifier}` : ''}`;

const readButtonStylesSource = () =>
  fs.readFileSync(path.resolve(__dirname, '../style/Button.scss'), 'utf8');

const originalConsoleError = console.error;

beforeAll(() => {
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
});

afterAll(() => {
  console.error = originalConsoleError;
});

describe('Button', () => {
  it('renders a native button and forwards refs', () => {
    const ref = createRef<HTMLButtonElement>();
    const { container } = render(
      <Button
        ref={ref}
        color={BUTTON_COLOR.secondary}
        size={BUTTON_SIZE.small}
        rounded
        loading
        name="save"
        value="draft"
        data-testid="button"
        aria-label="Save draft"
      >
        Save
      </Button>
    );

    const button = screen.getByTestId('button');

    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveAttribute('type', BUTTON_DEFAULT_HTML_TYPE);
    expect(button).toHaveAttribute('name', 'save');
    expect(button).toHaveAttribute('value', 'draft');
    expect(button).toBeDisabled();
    expect(ref.current).toBe(button);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('supports native button attributes and click events', async () => {
    const onClick = jest.fn();

    render(
      <Button
        type="submit"
        form="button-form"
        data-testid="button"
        iconStart={<Icons name="add" size={16} />}
        iconEnd={<Icons name="arrowRight" size={16} />}
        onClick={onClick}
      >
        Submit
      </Button>
    );

    const button = screen.getByTestId('button');
    const user = userEvent.setup();

    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toHaveAttribute('form', 'button-form');

    await user.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('inherits label color and button-sized defaults for icons', () => {
    const { container } = render(
      <Button
        size={BUTTON_SIZE.small}
        iconStart={<Icons name="add" />}
        iconEnd={<Icons name="arrowRight" />}
      >
        Submit
      </Button>
    );

    const iconWrappers = container.querySelectorAll('.om-component-ui-icons-wrapper');

    expect(iconWrappers).toHaveLength(2);
    iconWrappers.forEach(iconWrapper => {
      expect(iconWrapper).toHaveAttribute(
        'style',
        expect.stringContaining(`--icon-color: ${BUTTON_ICON_INHERIT_COLOR}`)
      );
      expect(iconWrapper).toHaveAttribute(
        'style',
        expect.stringContaining('--icon-width: 16px')
      );
      expect(iconWrapper).toHaveAttribute(
        'style',
        expect.stringContaining('--icon-height: 16px')
      );
    });
  });

  it('keeps typography content color inherited from the button', () => {
    const stylesSource = readButtonStylesSource();

    expect(stylesSource).not.toContain(
      "> .#{theme.$prefix}-typography {\n    color: inherit;\n  }"
    );
  });

  it('renders text variant with a dedicated color modifier', () => {
    render(
      <Button
        variant={BUTTON_VARIANT.text}
        color={BUTTON_COLOR.danger}
        size={BUTTON_SIZE.medium}
        data-testid="text-btn"
      >
        Learn More
      </Button>
    );

    const button = screen.getByTestId('text-btn');

    expect(button.className).toContain(getButtonClassName(BUTTON_VARIANT.text));
    expect(button.className).toContain(getButtonClassName(BUTTON_SIZE.medium));
    expect(button.className).toContain(
      getButtonClassName(`${BUTTON_VARIANT.text}-${BUTTON_COLOR.danger}`)
    );
    expect(button.className).not.toContain(getButtonClassName(BUTTON_COLOR.danger));
  });

  it('maps button color tokens to the Figma button spec', () => {
    const stylesSource = readButtonStylesSource();

    expect(stylesSource).toContain(
      "'grey': (\n    text: theme.palette(text, 'default'),\n    bg: theme.palette(bg, 'neutral-tertiary'),\n    hover-bg: theme.palette(bg, 'neutral-tertiary-hover'),\n    disabled-text: theme.palette(text, 'disabled'),\n    disabled-bg: theme.palette(bg, 'disabled'),"
    );
    expect(stylesSource).toContain(
      "'danger': (\n    text: theme.palette(text, 'danger'),\n    bg: theme.palette(bg, 'danger-secondary'),\n    hover-bg: theme.palette(bg, 'danger-secondary-hover'),\n    disabled-text: theme.palette(text, 'danger-secondary'),\n    disabled-bg: theme.palette(bg, 'danger-tertiary'),"
    );
    expect(stylesSource).toContain(
      "'warning': (\n    text: theme.palette(text, 'default'),\n    bg: theme.palette(bg, 'warning'),\n    hover-bg: theme.palette(bg, 'warning-hover'),\n    disabled-text: theme.palette(text, 'disabled'),\n    disabled-bg: theme.palette(bg, 'warning-secondary-hover'),"
    );
    expect(BUTTON_COLORS).toContain('positive');
    expect(stylesSource).toContain(
      "'positive': (\n    text: theme.palette(text, 'positive'),\n    bg: theme.palette(bg, 'positive-secondary'),\n    hover-bg: theme.palette(bg, 'positive-secondary-hover'),\n    disabled-text: theme.palette(text, 'positive-secondary'),\n    disabled-bg: theme.palette(bg, 'positive-tertiary'),"
    );
    expect(stylesSource).toContain(
      "&-text-danger {\n    --om-button-text: #{theme.palette(text, 'danger')};\n    --om-button-hover-text: #{theme.palette(text, 'on-danger-secondary')};\n    --om-button-disabled-text: #{theme.palette(text, 'danger-secondary')};"
    );
    expect(stylesSource).toContain(
      "&-text-positive {\n    --om-button-text: #{theme.palette(text, 'positive')};\n    --om-button-hover-text: #{theme.palette(text, 'on-positive-secondary')};\n    --om-button-disabled-text: #{theme.palette(text, 'positive-secondary')};"
    );
  });

  it('renders text variant with positive color modifier', () => {
    render(
      <Button
        variant={BUTTON_VARIANT.text}
        color={BUTTON_COLOR.positive}
        size={BUTTON_SIZE.medium}
        data-testid="text-positive-btn"
      >
        Success
      </Button>
    );

    const button = screen.getByTestId('text-positive-btn');

    expect(button.className).toContain(getButtonClassName(BUTTON_VARIANT.text));
    expect(button.className).toContain(
      getButtonClassName(`${BUTTON_VARIANT.text}-${BUTTON_COLOR.positive}`)
    );
    expect(button.className).not.toContain(getButtonClassName(BUTTON_COLOR.positive));
  });

  it('preserves explicit icon color and sizing props', () => {
    const { container } = render(
      <Button
        iconStart={<Icons name="add" size={24} color="#ff0000" />}
      >
        Submit
      </Button>
    );

    const iconWrapper = container.querySelector('.om-component-ui-icons-wrapper');

    expect(iconWrapper).toHaveAttribute(
      'style',
      expect.stringContaining('--icon-color: #ff0000')
    );
    expect(iconWrapper).toHaveAttribute(
      'style',
      expect.stringContaining('--icon-width: 24px')
    );
    expect(iconWrapper).toHaveAttribute(
      'style',
      expect.stringContaining('--icon-height: 24px')
    );
  });
});
