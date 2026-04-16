import 'jsdom-global/register';
import * as React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InputTrade } from '../index';

jest.mock('lottie-web', () => ({
  loadAnimation: jest.fn(() => ({ play: jest.fn(), pause: jest.fn(), destroy: jest.fn() })),
}));

const getInput = (container: HTMLElement) =>
  container.querySelector('input') as HTMLInputElement;

const type = (input: HTMLInputElement, value: string) => {
  fireEvent.change(input, { target: { value } });
};

describe('InputTrade — numeric behavior', () => {
  it('formats thousands separators while typing', () => {
    const onChange = jest.fn();
    const { container } = render(<InputTrade onChange={onChange} />);
    const input = getInput(container);

    type(input, '1234567');
    expect(input.value).toBe('1,234,567');
    expect(onChange).toHaveBeenLastCalledWith('1234567', expect.anything());

    type(input, '1234567.8');
    expect(input.value).toBe('1,234,567.8');
  });

  it('strips leading zeros', () => {
    const { container } = render(<InputTrade />);
    const input = getInput(container);
    type(input, '000123');
    expect(input.value).toBe('123');
  });

  it('rejects non-numeric input', () => {
    const { container } = render(<InputTrade defaultValue="42" />);
    const input = getInput(container);
    expect(input.value).toBe('42');
    type(input, '42abc');
    expect(input.value).toBe('42');
  });

  it('rejects negative input by default', () => {
    const { container } = render(<InputTrade />);
    const input = getInput(container);
    type(input, '-5');
    expect(input.value).toBe('');
  });

  it('truncates fraction digits beyond maxFractionDigits', () => {
    const { container } = render(<InputTrade maxFractionDigits={2} />);
    const input = getInput(container);
    type(input, '1.2345');
    expect(input.value).toBe('1.23');
  });

  it('clamps value to max', () => {
    const { container } = render(<InputTrade max={100} />);
    const input = getInput(container);
    type(input, '9999');
    expect(input.value).toBe('100');
  });

  it('clamps value to min', () => {
    const { container } = render(<InputTrade min={10} />);
    const input = getInput(container);
    type(input, '5');
    expect(input.value).toBe('10');
  });

  it('supports controlled mode', () => {
    const Wrapper: React.FC = () => {
      const [v, setV] = React.useState('1000');
      return (
        <>
          <InputTrade value={v} onChange={(next) => setV(next)} />
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

  it('normalizes initial defaultValue', () => {
    const { container } = render(
      <InputTrade defaultValue="001234567.89" maxFractionDigits={2} />,
    );
    expect(getInput(container).value).toBe('1,234,567.89');
  });

  it('does not accept input when readOnly', () => {
    const onChange = jest.fn();
    const { container } = render(
      <InputTrade readOnly defaultValue="10" onChange={onChange} />,
    );
    const input = getInput(container);
    type(input, '999');
    expect(input.value).toBe('10');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('Max button triggers onMax callback', () => {
    const onMax = jest.fn();
    const { container } = render(<InputTrade showMax onMax={onMax} />);
    const btn = container.querySelector('button') as HTMLButtonElement;
    fireEvent.click(btn);
    expect(onMax).toHaveBeenCalled();
  });

  it('hides unit placeholder style when value exists', () => {
    const { container } = render(<InputTrade defaultValue="5" />);
    const unit = container.querySelector('.om-component-ui-input-trade-unit') as HTMLElement;
    expect(unit.className).not.toContain('placeholder');
  });

  it('allows negative input when `negative` is true', () => {
    const { container } = render(<InputTrade negative />);
    const input = getInput(container);
    type(input, '-12');
    expect(input.value).toBe('-12');
  });

  it('supports full-width period as decimal point', () => {
    const { container } = render(<InputTrade />);
    const input = getInput(container);
    type(input, '1\uFF0E5');
    expect(input.value).toBe('1.5');
  });

  it('renders custom currencySymbol and currencyUnit', () => {
    const { container } = render(
      <InputTrade currencySymbol="€" currencyUnit="EUR" />,
    );
    expect(container.textContent).toContain('€');
    expect(container.textContent).toContain('EUR');
  });

  it('renders exchangeText in subline', () => {
    const { container } = render(<InputTrade exchangeText="≈ 1.23 ETH" />);
    expect(container.textContent).toContain('≈ 1.23 ETH');
  });

  it('renders swap button and fires onSwap; blocked when disabled', () => {
    const onSwap = jest.fn();
    const { container, rerender } = render(<InputTrade onSwap={onSwap} />);
    const swap = container.querySelector('button[aria-label="swap currency"]') as HTMLButtonElement;
    expect(swap).not.toBeNull();
    fireEvent.click(swap);
    expect(onSwap).toHaveBeenCalledTimes(1);

    rerender(<InputTrade disabled onSwap={onSwap} />);
    const swap2 = container.querySelector('button[aria-label="swap currency"]') as HTMLButtonElement;
    fireEvent.click(swap2);
    expect(onSwap).toHaveBeenCalledTimes(1);
  });

  it('Max button blocked when disabled', () => {
    const onMax = jest.fn();
    const { container } = render(
      <InputTrade disabled showMax onMax={onMax} />,
    );
    const btn = container.querySelector('button') as HTMLButtonElement;
    fireEvent.click(btn);
    expect(onMax).not.toHaveBeenCalled();
  });

  it('applies error status class and aria-invalid, renders feedback', () => {
    const { container } = render(
      <InputTrade status="error" feedback="Insufficient balance" />,
    );
    const input = getInput(container);
    expect(input.getAttribute('aria-invalid')).toBe('true');
    expect(container.textContent).toContain('Insufficient balance');
    expect(container.querySelector('[class*="trade-error"]')).not.toBeNull();
  });

  it('applies disabled class and disables input', () => {
    const { container } = render(<InputTrade disabled />);
    expect(getInput(container).disabled).toBe(true);
    expect(container.querySelector('[class*="trade-disabled"]')).not.toBeNull();
  });
});
