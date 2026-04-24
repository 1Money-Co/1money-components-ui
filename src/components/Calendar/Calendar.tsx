import React, { memo, useState } from 'react';
import { Calendar as PrimeCalendar } from 'primereact/calendar';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { Icons } from '@/components/Icons';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { FC } from 'react';
import type { CalendarProps } from './interface';
import './style';

const isSameDay = (d1?: Date, d2?: Date): boolean => {
  if (!d1 || !d2) return false;
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

const getRangeDateStyles = (
  params: { context?: { date?: { year: number; month: number; day: number } } },
  selectedDates: Date[] | (Date | null)[] | undefined,
  classes: ReturnType<typeof classnames>,
) => {
  const { context } = params || {};
  const { date } = context || {};

  if (!date || !Array.isArray(selectedDates)) return '';

  const cellDate = new Date(date.year, date.month, date.day);

  const hasRange =
    selectedDates[0] &&
    selectedDates[1] &&
    !isSameDay(selectedDates[0], selectedDates[1]);
  const isStart = hasRange && isSameDay(cellDate, selectedDates[0] ?? undefined);
  const isEnd = hasRange && isSameDay(cellDate, selectedDates[1] ?? undefined);
  const inRange =
    selectedDates[0] &&
    selectedDates[1] &&
    cellDate > selectedDates[0] &&
    cellDate < selectedDates[1];

  return joinCls(
    isStart && classes('p-start'),
    isEnd && classes('p-end'),
    inRange && classes('p-range'),
  );
};

export const Calendar: FC<CalendarProps> = props => {
  const {
    prefixCls = 'calendar',
    wrapperCls,
    labelCls,
    messageCls,
    className,
    panelClassName,
    label,
    message,
    required,
    success,
    invalid,
    placeholder = 'MM/DD/YYYY',
    defaultValue,
    value,
    size = 'large',
    selectionMode = 'single',
    contentWidth,
    panelStyle,
    viewDate: viewDateProp,
    onViewDateChange,
    onChange,
    ref,
    ...rest
  } = props;
  const classes = classnames(prefixCls);
  const [date, setDate] = useControlledState<CalendarProps['value']>(
    defaultValue ?? null,
    value,
  );
  const [viewDate, setViewDate] = useState<Date | undefined>(viewDateProp ?? undefined);

  const handleViewDateChange = useEventCallback(
    (e: Parameters<NonNullable<CalendarProps['onViewDateChange']>>[0]) => {
      setViewDate(e.value);
      onViewDateChange?.(e);
    },
  );

  const handleChange = useEventCallback((e: Parameters<NonNullable<CalendarProps['onChange']>>[0]) => {
    setDate(e.value);
    onChange?.(e);
    const event = new Event('change', { bubbles: true });
    e.originalEvent?.target?.dispatchEvent(event);
  });

  return (
    <div ref={ref} className={classes('wrapper', wrapperCls)}>
      {label && (
        <span
          className={classes(
            'label',
            joinCls(required && classes('label-required'), labelCls),
          )}
        >
          {label}
        </span>
      )}
      <PrimeCalendar
        {...rest}
        invalid={invalid}
        value={date as PrimeCalendar['props']['value']}
        viewDate={viewDate}
        onViewDateChange={handleViewDateChange}
        onChange={handleChange}
        panelStyle={{
          ...panelStyle,
          '--content-width': contentWidth,
        } as React.CSSProperties}
        className={classes(
          void 0,
          joinCls(
            className,
            classes(size),
            date && classes('filled'),
            success && classes('success'),
          ),
        )}
        panelClassName={classes('panel', panelClassName)}
        placeholder={placeholder}
        prevIcon={<Icons name="chevronLeft" size={24} />}
        nextIcon={<Icons name="chevronRight" size={24} />}
        selectionMode={selectionMode}
        pt={
          selectionMode === 'range'
            ? {
                day: params => ({
                  className: getRangeDateStyles(
                    params as { context?: { date?: { year: number; month: number; day: number } } },
                    date as Date[] | (Date | null)[] | undefined,
                    classes,
                  ),
                }),
              }
            : undefined
        }
      />
      {message && (
        <span
          className={classes(
            'message',
            joinCls(
              success && classes('message-success'),
              invalid && classes('message-error'),
              messageCls,
            ),
          )}
        >
          {message}
        </span>
      )}
    </div>
  );
};

Calendar.displayName = 'Calendar';

export default memo(Calendar);
