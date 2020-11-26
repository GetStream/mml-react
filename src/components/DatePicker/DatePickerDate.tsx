import React, { FC } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import { DatePickerProps } from './DatePicker';
import {
  DatePickerSelect,
  DatePickerSelectItemProps,
  DatePickerSelectReadyProps,
  DatePickerSelectProps,
} from './DatePickerSelect';

export type DatePickerDateProps = DatePickerSelectReadyProps & {
  startDate: DatePickerProps['startDate'];
  format: NonNullable<DatePickerProps['dateFormat']>;
  interval: NonNullable<DatePickerProps['dateInterval']>;
  value: Dayjs;
};

/**
 * Get item data
 */
const getItemData = (props: DatePickerSelectItemProps) => {
  const { idx, value, format, interval } = props;
  const newValue = dayjs(value).add(idx * interval, 'day');

  return {
    idx,
    interval,
    value: newValue,
    displayValue: dayjs(newValue).format(format),
  };
};

/**
 * Generate item component
 */
const DatePickerDateItem: DatePickerSelectProps['Item'] = (item, selected, handleClick) => {
  const { value, displayValue, interval } = item;
  const isSelected = dayjs(selected).isSame(interval === 1 ? dayjs(value) : dayjs(value).add(interval, 'day'), 'day');

  return (
    <div
      className={`mml-datepicker__item mml-datepicker__item--day ${isSelected ? 'mml-datepicker__item--selected' : ''}`}
      onClick={() => handleClick(item)}
    >
      {displayValue}
    </div>
  );
};

/**
 * DatePicker date
 */
export const DatePickerDate: FC<DatePickerDateProps> = (props) => (
  <div className="mml-datepicker__select mml-datepicker__date">
    <DatePickerSelect {...props} Item={DatePickerDateItem} getItemData={getItemData} />
  </div>
);
