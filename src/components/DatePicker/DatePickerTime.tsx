import React, { FC } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

import { DatePickerProps } from './DatePicker';
import {
  DatePickerSelect,
  DatePickerSelectProps,
  DatePickerSelectReadyProps,
  DatePickerSelectItemProps,
} from './DatePickerSelect';

dayjs.extend(isBetween);

export type DatePickerTimeProps = DatePickerSelectReadyProps & {
  format: NonNullable<DatePickerProps['timeFormat']>;
  interval: NonNullable<DatePickerProps['timeInterval']>;
  value: Dayjs;
};

/**
 * Get item data
 */
const getItemData = (props: DatePickerSelectItemProps) => {
  const { idx, value, format, interval } = props;
  const newValue = dayjs(value).add(idx * interval, 'minute');

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
export const DatePickerTimeItem: DatePickerSelectProps['Item'] = (item, selected, handleClick) => {
  const { interval, value, displayValue } = item;

  const isSelected = dayjs(selected).isBetween(value, dayjs(value).add(interval - 1, 'minute'), 'minute', '[]');

  return (
    <div
      className={`mml-datepicker__item mml-datepicker__item--time ${
        isSelected ? 'mml-datepicker__item--selected' : ''
      }`}
      onClick={() => handleClick(item)}
    >
      {displayValue}
    </div>
  );
};

/**
 * DatePicker time
 */
export const DatePickerTime: FC<DatePickerTimeProps> = (props) => (
  <div className="mml-datepicker__select mml-datepicker__time">
    <DatePickerSelect {...props} Item={DatePickerTimeItem} getItemData={getItemData} />
  </div>
);
