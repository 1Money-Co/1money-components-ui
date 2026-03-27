import type {
  SelectMultipleValue,
  SelectOption,
  SelectOptionValue,
  SelectProps,
  SelectSize,
  SelectValue,
} from './interface';

export function normalizeSize(size?: SelectProps['size']): SelectSize {
  return size === 'small' ? 'small' : 'large';
}

export function extractOptionText(option: SelectOption): string {
  if (typeof option.label === 'string' || typeof option.label === 'number') {
    return String(option.label);
  }

  return String(option.value);
}

export function isSelectMultipleValue(
  value: SelectValue,
  multiple: boolean,
): value is SelectMultipleValue {
  return multiple && Array.isArray(value);
}

function findOptionByValue(options: SelectOption[], value: SelectOptionValue) {
  return options.find((option) => option.value === value) ?? null;
}

export function getSelectedOptions(
  options: SelectOption[],
  value: SelectValue,
  multiple: boolean,
): SelectOption[] {
  if (isSelectMultipleValue(value, multiple)) {
    return value
      .map((item) => findOptionByValue(options, item))
      .filter((option): option is SelectOption => option !== null);
  }

  if (value === null || value === undefined || value === '') {
    return [];
  }

  if (typeof value !== 'string' && typeof value !== 'number') {
    return [];
  }

  const matched = findOptionByValue(options, value);
  return matched ? [matched] : [];
}

export function getOptionTagLabel(option: SelectOption): string {
  return extractOptionText(option);
}

export function getMultipleValue(value: SelectValue): SelectMultipleValue {
  return Array.isArray(value) ? value : [];
}

export function getOptionsByValues(
  options: SelectOption[],
  values: SelectMultipleValue,
): SelectOption[] {
  return options.filter((option) => values.includes(option.value));
}

export function toggleMultipleValue(
  currentValue: SelectValue,
  optionValue: SelectOptionValue,
): SelectMultipleValue {
  const values = getMultipleValue(currentValue);

  if (values.includes(optionValue)) {
    return values.filter((item) => item !== optionValue);
  }

  return [...values, optionValue];
}

export function removeMultipleValue(
  currentValue: SelectValue,
  optionValue: SelectOptionValue,
): SelectMultipleValue {
  return getMultipleValue(currentValue).filter((item) => item !== optionValue);
}

export function isOptionSelected(
  value: SelectValue,
  multiple: boolean,
  optionValue: SelectOptionValue,
): boolean {
  return isSelectMultipleValue(value, multiple)
    ? value.includes(optionValue)
    : value === optionValue;
}
