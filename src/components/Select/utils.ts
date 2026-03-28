import type {
  SelectFilterOption,
  SelectMultipleValue,
  SelectOptionData,
  SelectOptionGroup,
  SelectOption,
  SelectOptionValue,
  SelectProps,
  SelectSize,
  SelectValue,
} from './interface';

export interface SelectOptionGroupSection {
  key: string;
  label?: SelectOptionGroup['label'];
  options: SelectOption[];
}

export function normalizeSize(size?: SelectProps['size']): SelectSize {
  return size === 'small' ? 'small' : 'large';
}

export function extractOptionText(option: SelectOption): string {
  if (typeof option.label === 'string' || typeof option.label === 'number') {
    return String(option.label);
  }

  return String(option.value);
}

function extractNodeText(value?: SelectOption['label'] | SelectOption['description']): string {
  if (typeof value === 'string' || typeof value === 'number') {
    return String(value);
  }

  return '';
}

export function isSelectMultipleValue(
  value: SelectValue,
  multiple: boolean,
): value is SelectMultipleValue {
  return multiple && Array.isArray(value);
}

export function isSelectOptionGroup(
  option: SelectOptionData,
): option is SelectOptionGroup {
  return 'options' in option && Array.isArray(option.options);
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

export function normalizeOptionGroups(
  options: SelectOptionData[],
): SelectOptionGroupSection[] {
  const groups: SelectOptionGroupSection[] = [];
  let ungroupedOptions: SelectOption[] = [];
  let ungroupedGroupIndex = 0;

  const pushUngroupedOptions = () => {
    if (ungroupedOptions.length === 0) {
      return;
    }

    groups.push({
      key: `ungrouped-${ungroupedGroupIndex}`,
      options: ungroupedOptions,
    });
    ungroupedOptions = [];
    ungroupedGroupIndex += 1;
  };

  options.forEach((option, index) => {
    if (isSelectOptionGroup(option)) {
      pushUngroupedOptions();
      groups.push({
        key: option.key ? String(option.key) : `group-${index}`,
        label: option.label,
        options: option.options,
      });
      return;
    }

    ungroupedOptions.push(option);
  });

  pushUngroupedOptions();

  return groups;
}

export function flattenOptionGroups(
  groups: SelectOptionGroupSection[],
): SelectOption[] {
  return groups.flatMap((group) => group.options);
}

export function getOptionSearchText(option: SelectOption): string {
  return [
    extractOptionText(option),
    extractNodeText(option.description),
    option.searchText,
    String(option.value),
  ]
    .filter(Boolean)
    .join(' ')
    .trim();
}

function matchesOptionSearch(
  searchValue: string,
  option: SelectOption,
  filterOption?: SelectFilterOption,
): boolean {
  if (!searchValue.trim()) {
    return true;
  }

  if (filterOption) {
    return filterOption(searchValue, option);
  }

  return getOptionSearchText(option).toLowerCase().includes(searchValue.trim().toLowerCase());
}

export function filterOptionGroups(
  groups: SelectOptionGroupSection[],
  searchValue: string,
  filterOption?: SelectFilterOption,
): SelectOptionGroupSection[] {
  if (!searchValue.trim()) {
    return groups;
  }

  const normalizedSearchValue = searchValue.trim().toLowerCase();

  return groups.reduce<SelectOptionGroupSection[]>((result, group) => {
    const groupLabelText = extractNodeText(group.label).toLowerCase();
    const matchedOptions = groupLabelText.includes(normalizedSearchValue)
      ? group.options
      : group.options.filter((option) => matchesOptionSearch(searchValue, option, filterOption));

    if (matchedOptions.length === 0) {
      return result;
    }

    result.push({
      ...group,
      options: matchedOptions,
    });

    return result;
  }, []);
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
