import React, { FC } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

import { DatePickerProps } from './DatePicker';
import { DatePickerSelect, DatePickerSelectProps, DatePickerSelectReadyProps } from './DatePickerSelect';

dayjs.extend(isBetween);

export type DatePickerTimeProps = DatePickerSelectReadyProps & {
  format: NonNullable<DatePickerProps['timeFormat']>;
  interval: NonNullable<DatePickerProps['timeInterval']>;
};

/**
 * Get item data
 */
const getItemData: DatePickerSelectProps['getItemData'] = (props) => {
  const { idx, interval, value, format } = props;
  // const offset = Math.min(idx * interval, 24 * 60);
  const newValue =
    idx >= 0 ? dayjs(value).add(idx * interval, 'minute') : dayjs(value).subtract(idx * -1 * interval, 'minute');
  // const newValue = dayjs(value).add(idx * interval, 'minute');

  return {
    idx,
    value: newValue,
    displayValue: dayjs(newValue).format(format),
    isSelected: (currentValue: Dayjs) => {
      // const currentTime = dayjs().set('hour', currentValue.hour()).minute(currentValue.minute());
      // const newTime = dayjs().set('hour', newValue.hour()).minute(newValue.minute());
      // const interval = currentTime.diff(newTime, 'minute');
      // return currentTime.diff(newTime, 'minute') < interval;
      // return dayjs(newValue.set('day', currentValue.day()).set('month', currentValue.month()).set('year', currentValue.year())).isBetween(currentValue, dayjs(currentValue).add(interval - 1, 'minute'), 'minute', '[]');
      return dayjs(newValue).isBetween(currentValue, dayjs(currentValue).add(interval - 1, 'minute'), 'minute', '[]');
    },
  };
};

/**
 * DatePicker time
 */
export const DatePickerTime: FC<DatePickerTimeProps> = (props) => (
  <div className="mml-datepicker__select mml-datepicker__time">
    <DatePickerSelect {...props} itemClassName="mml-datepicker__item--time" getItemData={getItemData} />
  </div>
);
