import React, { FC } from 'react';
import formatDate from 'date-fns/format';
import { isWithinInterval, addMinutes } from 'date-fns';
import { DatePickerProps } from './DatePicker';
import {
  DatePickerSelect,
  DatePickerSelectProps,
  DatePickerSelectReadyProps,
  DatePickerSelectItemProps,
} from './DatePickerSelect';

export type DatePickerTimeProps = DatePickerSelectReadyProps & {
  format: NonNullable<DatePickerProps['timeFormat']>;
  interval: NonNullable<DatePickerProps['timeInterval']>;
  value: Date;
};

/**
 * Get item data
 */
const getItemData = (props: DatePickerSelectItemProps) => {
  const { idx, format, interval } = props;
  const value = transformIdxToValue(props);

  return {
    idx,
    interval,
    value,
    displayValue: formatDate(value, format),
  };
};

/**
 * Transform given idx in date
 */
function transformIdxToValue(props: DatePickerSelectItemProps) {
  const { idx, value, interval } = props;
  let newValue = addMinutes(value, idx * interval);
  return newValue;
}

/**
 * Generate item component
 */
export const DatePickerTimeItem: DatePickerSelectProps['Item'] = (item, selected, handleClick) => {
  const { /* idx, */ interval, value, displayValue } = item;

  const isSelected = isWithinInterval(selected, {
    start: value,
    end: addMinutes(value, interval - 1),
  });

  let className = `mml-datepicker__item mml-datepicker__item--time`;

  if (isSelected) {
    className += ' mml-datepicker__item--selected';
  }

  return (
    <div
      className={className}
      // index={idx}
      // title={formatDate(value, 'HH:mm')}
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
  <div className="mml-datepicker__time">
    <DatePickerSelect {...props} Item={DatePickerTimeItem} getItemData={getItemData} />
  </div>
);
