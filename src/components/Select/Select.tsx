import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingPortal,
  offset,
  shift,
  size as floatingSize,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead,
} from '@floating-ui/react';
import { memo, useEffect, useId, useMemo, useRef, useState } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { Icons } from '@/components/Icons';
import { joinCls, default as rootClassnames } from '@/utils/classnames';
import type { FocusEvent, FC, KeyboardEvent as ReactKeyboardEvent, MouseEvent as ReactMouseEvent } from 'react';
import type {
  SelectOption,
  SelectOptionValue,
  SelectProps,
  SelectRenderOptionMeta,
  SelectRenderValueMeta,
  SelectSize,
  SelectValue,
} from './interface';
import SelectFieldShell from './SelectFieldShell';
import SelectOptionContent from './SelectOptionContent';
import SelectValueContent from './SelectValueContent';
import {
  extractOptionText,
  getMultipleValue,
  getOptionsByValues,
  getSelectedOptions,
  isOptionSelected,
  normalizeSize,
  removeMultipleValue,
  toggleMultipleValue,
} from './utils';

const DEFAULT_MAX_HEIGHT = 320;

export const Select: FC<SelectProps> = (props) => {
  const {
    className = '',
    prefixCls = 'select',
    style,
    id,
    name,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    placeholder = 'Value',
    options = [],
    value,
    defaultValue,
    size = 'large',
    status = 'default',
    variant = 'fill',
    disabled = false,
    multiple = false,
    label,
    info,
    description,
    feedback,
    required = false,
    prefix,
    emptyContent = 'No options',
    open,
    defaultOpen = false,
    listMaxHeight = DEFAULT_MAX_HEIGHT,
    onChange,
    onOpenChange,
    onBlur,
    renderOption,
    renderValue,
    ref,
    ...rest
  } = props;

  const classes = rootClassnames(prefixCls);
  const autoId = useId();
  const triggerId = id ?? autoId;
  const labelId = useId();
  const descriptionId = useId();
  const feedbackId = useId();
  const [innerValue, setInnerValue] = useControlledState<SelectValue>(
    defaultValue ?? (multiple ? [] : undefined),
    value,
  );
  const [innerOpen, setInnerOpen] = useControlledState(defaultOpen, open);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const normalizedSize = normalizeSize(size);
  const selectedOptions = useMemo(
    () => getSelectedOptions(options, innerValue, multiple),
    [options, innerValue, multiple],
  );
  const selectedIndex = useMemo(() => {
    if (selectedOptions.length === 0) {
      return null;
    }

    return options.findIndex((option) => option.value === selectedOptions[0].value);
  }, [options, selectedOptions]);
  const hasSelection = selectedOptions.length > 0;
  const listRef = useRef<Array<HTMLButtonElement | null>>([]);
  const listContentRef = useRef<Array<string | null>>([]);
  const floatingRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const handleTriggerRef = useEventCallback((node: HTMLButtonElement | null) => {
    triggerRef.current = node;
    if (ref) {
      (ref as { current: HTMLButtonElement | null }).current = node;
    }
  });

  const handleOpenChange = useEventCallback((nextOpen: boolean) => {
    setInnerOpen(nextOpen);
    onOpenChange?.(nextOpen);
  });

  const {
    refs,
    floatingStyles,
    context,
  } = useFloating<HTMLButtonElement>({
    open: innerOpen,
    onOpenChange: handleOpenChange,
    placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(0),
      flip({ padding: 8 }),
      shift({ padding: 8 }),
      floatingSize({
        apply({ rects, elements, availableHeight }) {
          const nextMaxHeight = Math.max(120, Math.min(listMaxHeight, availableHeight));
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${nextMaxHeight}px`,
          });
        },
      }),
    ],
  });

  const setReference = useEventCallback((node: HTMLButtonElement | null) => {
    refs.setReference(node);
    handleTriggerRef(node);
  });

  const setFloating = useEventCallback((node: HTMLDivElement | null) => {
    refs.setFloating(node);
    floatingRef.current = node;
  });

  const click = useClick(context, { enabled: !disabled });
  const dismiss = useDismiss(context, { enabled: !disabled, outsidePressEvent: 'mousedown' });
  const role = useRole(context, { role: 'select' });
  const listNavigation = useListNavigation(context, {
    listRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
    enabled: innerOpen,
    loop: true,
  });
  const typeahead = useTypeahead(context, {
    listRef: listContentRef,
    activeIndex,
    selectedIndex,
    enabled: innerOpen,
    onMatch: setActiveIndex,
  });
  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    click,
    dismiss,
    role,
    listNavigation,
    typeahead,
  ]);

  const firstEnabledIndex = useMemo(
    () => options.findIndex((option) => !option.disabled),
    [options],
  );

  useEffect(() => {
    if (!innerOpen) {
      setActiveIndex(selectedIndex);
      return;
    }

    setActiveIndex((prev) => {
      if (prev !== null && options[prev] && !options[prev].disabled) {
        return prev;
      }

      if (selectedIndex !== null && options[selectedIndex] && !options[selectedIndex].disabled) {
        return selectedIndex;
      }

      return firstEnabledIndex >= 0 ? firstEnabledIndex : null;
    });
  }, [firstEnabledIndex, innerOpen, options, selectedIndex]);

  useEffect(() => {
    if (!innerOpen || activeIndex === null) {
      return;
    }

    listRef.current[activeIndex]?.focus();
  }, [activeIndex, innerOpen]);

  const notifyBlurIfOutside = useEventCallback((relatedTarget: EventTarget | null, event?: FocusEvent<HTMLElement>) => {
    const nextTarget = relatedTarget as Node | null;
    const withinTrigger = !!(nextTarget && triggerRef.current?.contains(nextTarget));
    const withinFloating = !!(nextTarget && floatingRef.current?.contains(nextTarget));

    if (!withinTrigger && !withinFloating) {
      onBlur?.(event);
    }
  });

  const handleTriggerBlur = useEventCallback((event: FocusEvent<HTMLButtonElement>) => {
    notifyBlurIfOutside(event.relatedTarget, event as FocusEvent<HTMLElement>);
  });

  const handleOptionBlur = useEventCallback((event: FocusEvent<HTMLButtonElement>) => {
    notifyBlurIfOutside(event.relatedTarget, event as FocusEvent<HTMLElement>);
  });

  const commitChange = useEventCallback((nextValue: SelectValue, nextOption?: SelectOption | SelectOption[]) => {
    setInnerValue(nextValue);
    onChange?.(nextValue, nextOption);
  });

  const handleSelectOption = useEventCallback((option: SelectOption) => {
    if (option.disabled) {
      return;
    }

    if (multiple) {
      const nextValue = toggleMultipleValue(innerValue, option.value);
      const nextOptions = getOptionsByValues(options, nextValue);
      commitChange(nextValue, nextOptions);
      return;
    }

    commitChange(option.value, option);
    handleOpenChange(false);
    onBlur?.();
    triggerRef.current?.focus();
  });

  const handleRemoveSelectedValue = useEventCallback((optionValue: SelectOptionValue) => {
    if (!multiple) {
      return;
    }

    if (!getMultipleValue(innerValue).includes(optionValue)) {
      return;
    }

    const nextValue = removeMultipleValue(innerValue, optionValue);
    const nextOptions = getOptionsByValues(options, nextValue);
    commitChange(nextValue, nextOptions);
  });

  const handleTriggerKeyDown = useEventCallback((event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (disabled) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleOpenChange(!innerOpen);
      return;
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (!innerOpen) {
        handleOpenChange(true);
      }
    }
  });

  const handleItemMouseEnter = useEventCallback((index: number) => {
    if (!options[index]?.disabled) {
      setActiveIndex(index);
    }
  });

  const handleTagRemoveMouseDown = useEventCallback((event: ReactMouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  });

  const renderValueMeta: SelectRenderValueMeta = {
    disabled,
    multiple,
    open: innerOpen,
    placeholder: !hasSelection,
    selectedOptions,
  };
  const valueLabelClass = hasSelection ? 'value' : 'placeholder';
  const isMultipleValueFilled = multiple && hasSelection;
  const triggerClassName = classes(
    'trigger',
    joinCls(
      classes(`trigger-${normalizedSize}`),
      classes(`trigger-${variant}`),
      innerOpen && classes('trigger-open'),
      isMultipleValueFilled && classes('trigger-multiple-filled'),
      hasSelection ? classes('trigger-filled') : classes('trigger-placeholder'),
      status !== 'default' && classes(`trigger-${status}`),
      disabled && classes('trigger-disabled'),
    ),
  );
  const iconSize = normalizedSize === 'small' ? 16 : 20;
  const floatingAriaLabelledBy = ariaLabelledBy ?? (label ? labelId : undefined);
  const describedByIds = [
    description ? descriptionId : null,
    feedback ? feedbackId : null,
  ].filter(Boolean).join(' ') || undefined;

  return (
    <SelectFieldShell
      classes={classes}
      className={className}
      size={normalizedSize}
      variant={variant}
      status={status}
      disabled={disabled}
      label={label}
      info={info}
      description={description}
      feedback={feedback}
      required={required}
      labelId={labelId}
      descriptionId={descriptionId}
      feedbackId={feedbackId}
    >
      <button
        {...getReferenceProps({
          ref: setReference,
          id: triggerId,
          type: 'button',
          name,
          disabled,
          className: triggerClassName,
          onKeyDown: handleTriggerKeyDown,
          onBlur: handleTriggerBlur,
          'aria-label': ariaLabel,
          'aria-labelledby': floatingAriaLabelledBy,
          'aria-describedby': describedByIds,
        })}
      >
        <span className={classes('content')}>
          {prefix && <span className={classes('prefix')}>{prefix}</span>}
          <span
            className={classes(
              valueLabelClass,
              joinCls(
                classes(`${valueLabelClass}-${normalizedSize}`),
                isMultipleValueFilled && classes(`${valueLabelClass}-multiple`),
                disabled && classes(`${valueLabelClass}-disabled`),
              ),
            )}
          >
            <SelectValueContent
              classes={classes}
              hasSelection={hasSelection}
              multiple={multiple}
              placeholder={placeholder}
              renderValue={renderValue}
              renderValueMeta={renderValueMeta}
              selectedOptions={selectedOptions}
              onRemove={handleRemoveSelectedValue}
              onRemoveMouseDown={handleTagRemoveMouseDown}
            />
          </span>
        </span>
        <span className={classes('icon')}>
          <Icons
            name={innerOpen ? 'chevronUp' : 'chevronDown'}
            size={iconSize}
            color="currentColor"
          />
        </span>
      </button>

      {innerOpen && !disabled && (
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false} initialFocus={-1}>
            <div
              {...getFloatingProps({
                ref: setFloating,
                className: classes('panel'),
                style: floatingStyles,
              })}
            >
              {options.length === 0 ? (
                <div className={classes('empty')}>{emptyContent}</div>
              ) : (
                options.map((option, index) => {
                  const selected = isOptionSelected(innerValue, multiple, option.value);
                  const active = activeIndex === index;
                  const optionMeta: SelectRenderOptionMeta = {
                    active,
                    disabled: !!option.disabled,
                    index,
                    multiple,
                    open: innerOpen,
                    selected,
                  };

                  listContentRef.current[index] = extractOptionText(option);

                  return (
                    <button
                      key={option.value}
                      {...getItemProps({
                        ref(node: HTMLButtonElement | null) {
                          listRef.current[index] = node;
                        },
                        type: 'button',
                        role: 'option',
                        className: classes(
                          'option',
                          joinCls(
                            active && classes('option-active'),
                            selected && classes('option-selected'),
                            option.disabled && classes('option-disabled'),
                          ),
                        ),
                        disabled: option.disabled,
                        'aria-selected': selected,
                        onClick: (event: ReactMouseEvent<HTMLButtonElement>) => {
                          event.preventDefault();
                          handleSelectOption(option);
                        },
                        onMouseEnter: () => handleItemMouseEnter(index),
                        onBlur: handleOptionBlur,
                      })}
                    >
                      {renderOption ? (
                        renderOption(option, optionMeta)
                      ) : (
                        <SelectOptionContent classes={classes} option={option} selected={selected} />
                      )}
                    </button>
                  );
                })
              )}
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </SelectFieldShell>
  );
};

Select.displayName = 'Select';

export default memo(Select);
