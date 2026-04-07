import 'jsdom-global/register';
import * as React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InputAmount } from '../index';

jest.mock('lottie-web', () => ({
  loadAnimation: jest.fn(() => ({ play: jest.fn(), pause: jest.fn(), destroy: jest.fn() })),
}));

const getInput = (container: HTMLElement) =>
  container.querySelector('input') as HTMLInputElement;

const type = (input: HTMLInputElement, value: string) => {
  fireEvent.change(input, { target: { value } });
};

describe('InputAmount — numeric behavior', () => {
  it('formats thousands separators while typing (uncontrolled)', () => {
    const onChange = jest.fn();
    const { container } = render(<InputAmount onChange={onChange} />);
    const input = getInput(container);

    type(input, '1234567');
    expect(input.value).toBe('1,234,567');
    expect(onChange).toHaveBeenLastCalledWith('1234567', expect.anything());

    type(input, '1234567.8');
    expect(input.value).toBe('1,234,567.8');
  });

  it('strips leading zeros via BigNumber normalization', () => {
    const { container } = render(<InputAmount />);
    const input = getInput(container);
    type(input, '000123');
    expect(input.value).toBe('123');
  });

  it('rejects non-numeric input (keeps previous value)', () => {
    const { container } = render(<InputAmount defaultValue="42" />);
    const input = getInput(container);
    expect(input.value).toBe('42');
    type(input, '42abc');
    expect(input.value).toBe('42');
  });

  it('rejects negative input when `negative` is not allowed', () => {
    const { container } = render(<InputAmount />);
    const input = getInput(container);
    type(input, '-5');
    expect(input.value).toBe('');
  });

  it('allows negative input when `negative` is true', () => {
    const { container } = render(<InputAmount negative />);
    const input = getInput(container);
    type(input, '-');
    expect(input.value).toBe('-');
    type(input, '-1234');
    expect(input.value).toBe('-1,234');
  });

  it('truncates fraction digits beyond maxFractionDigits', () => {
    const { container } = render(<InputAmount maxFractionDigits={2} />);
    const input = getInput(container);
    type(input, '1.2345');
    expect(input.value).toBe('1.23');
  });

  it('clamps value to max', () => {
    const { container } = render(<InputAmount max={100} />);
    const input = getInput(container);
    type(input, '9999');
    expect(input.value).toBe('100');
  });

  it('clamps value to min', () => {
    const { container } = render(<InputAmount min={10} />);
    const input = getInput(container);
    type(input, '5');
    expect(input.value).toBe('10');
  });

  it('supports controlled mode and reflects external value', () => {
    const Wrapper: React.FC = () => {
      const [v, setV] = React.useState('1000');
      return (
        <>
          <InputAmount value={v} onChange={(next) => setV(next)} />
          <button onClick={() => setV('9876543')}>set</button>
        </>
      );
    };
    const { container, getByText } = render(<Wrapper />);
    const input = getInput(container);
    expect(input.value).toBe('1,000');

    act(() => {
      getByText('set').click();
    });
    expect(input.value).toBe('9,876,543');

    type(input, '12345');
    expect(input.value).toBe('12,345');
  });

  it('normalizes initial defaultValue through the pipeline', () => {
    // No overflow: leading zeros stripped, fraction kept as-is
    const { container } = render(
      <InputAmount defaultValue="001234567.89" maxFractionDigits={2} />,
    );
    expect(getInput(container).value).toBe('1,234,567.89');
  });

  it('clears value via allowClear', () => {
    const onChange = jest.fn();
    const { container } = render(
      <InputAmount defaultValue="123" allowClear onChange={onChange} />,
    );
    const input = getInput(container);
    expect(input.value).toBe('123');
    const clearBtn = container.querySelector('button[aria-label="clear input"]') as HTMLButtonElement;
    expect(clearBtn).not.toBeNull();
    fireEvent.click(clearBtn);
    expect(input.value).toBe('');
    expect(onChange).toHaveBeenLastCalledWith('', expect.anything());
  });

  it('does not accept input when readOnly', () => {
    const onChange = jest.fn();
    const { container } = render(
      <InputAmount readOnly defaultValue="10" onChange={onChange} />,
    );
    const input = getInput(container);
    type(input, '999');
    expect(input.value).toBe('10');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('supports full-width period as decimal point', () => {
    const { container } = render(<InputAmount />);
    const input = getInput(container);
    type(input, '1\uFF0E5');
    expect(input.value).toBe('1.5');
  });

  it('supports full-width comma (stripped as thousands separator)', () => {
    const { container } = render(<InputAmount />);
    const input = getInput(container);
    type(input, '1\uFF0C234');
    expect(input.value).toBe('1,234');
  });

  it('keeps trailing decimal point while typing', () => {
    const { container } = render(<InputAmount />);
    const input = getInput(container);
    type(input, '12.');
    expect(input.value).toBe('12.');
  });

  it('rejects additional non-digit characters', () => {
    const { container } = render(<InputAmount defaultValue="1" />);
    const input = getInput(container);
    type(input, '1.2.3');
    expect(input.value).toBe('1');
  });

  it('invokes onClear callback when clear button is clicked', () => {
    const onClear = jest.fn();
    const { container } = render(
      <InputAmount defaultValue="123" allowClear onClear={onClear} />,
    );
    const clearBtn = container.querySelector('button[aria-label="clear input"]') as HTMLButtonElement;
    fireEvent.click(clearBtn);
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it('hides clear button when disabled or readOnly', () => {
    const { container: c1 } = render(
      <InputAmount defaultValue="1" allowClear disabled />,
    );
    expect(c1.querySelector('button[aria-label="clear input"]')).toBeNull();

    const { container: c2 } = render(
      <InputAmount defaultValue="1" allowClear readOnly />,
    );
    expect(c2.querySelector('button[aria-label="clear input"]')).toBeNull();
  });

  it('fires onAction when action button clicked; blocked when disabled', () => {
    const onAction = jest.fn();
    const { getByText, rerender } = render(
      <InputAmount actionLabel="Use Max" onAction={onAction} />,
    );
    fireEvent.click(getByText('Use Max'));
    expect(onAction).toHaveBeenCalledTimes(1);

    rerender(<InputAmount disabled actionLabel="Use Max" onAction={onAction} />);
    fireEvent.click(getByText('Use Max'));
    expect(onAction).toHaveBeenCalledTimes(1);
  });

  it('fires onCurrencyClick; blocked when disabled', () => {
    const onCurrencyClick = jest.fn();
    const { getByText, rerender } = render(
      <InputAmount currencyLabel="USDC" onCurrencyClick={onCurrencyClick} />,
    );
    fireEvent.click(getByText('USDC'));
    expect(onCurrencyClick).toHaveBeenCalledTimes(1);

    rerender(
      <InputAmount disabled currencyLabel="USDC" onCurrencyClick={onCurrencyClick} />,
    );
    fireEvent.click(getByText('USDC'));
    expect(onCurrencyClick).toHaveBeenCalledTimes(1);
  });

  it('treats loading as disabled', () => {
    const onChange = jest.fn();
    const { container } = render(<InputAmount loading onChange={onChange} />);
    const input = getInput(container);
    expect(input.disabled).toBe(true);
    type(input, '1');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('renders prefix and custom suffix (builtin suffix suppressed)', () => {
    const { container, queryByText } = render(
      <InputAmount
        prefix={<span>$</span>}
        suffix={<span>END</span>}
        actionLabel="Use Max"
        currencyLabel="USDC"
      />,
    );
    expect(container.textContent).toContain('$');
    expect(queryByText('END')).not.toBeNull();
    // builtin suffix (action/currency) should NOT render when custom suffix provided
    expect(queryByText('Use Max')).toBeNull();
    expect(queryByText('USDC')).toBeNull();
  });

  it('sets aria-required and aria-invalid correctly', () => {
    const { container } = render(
      <InputAmount required status="error" errorMsg="bad" />,
    );
    const input = getInput(container);
    expect(input.getAttribute('aria-required')).toBe('true');
    expect(input.getAttribute('aria-invalid')).toBe('true');
  });
});
