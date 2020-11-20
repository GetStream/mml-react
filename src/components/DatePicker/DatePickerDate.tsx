import React, { FC } from 'react';
import formatDate from 'date-fns/format';
import { isSameDay, addDays } from 'date-fns';
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
  let newValue = addDays(value, idx * interval);
  return newValue;
}

/**
 * Generate item component
 */
const DatePickerDateItem: DatePickerSelectProps['Item'] = (item, selected, handleClick) => {
  const { idx, value, displayValue, interval } = item;
  let isSelected;

  if (interval === 1) {
    isSelected = isSameDay(selected, value);
  } else if (interval > 1) {
    isSelected = isSameDay(selected, addDays(value, interval));
  }

  let className = `mml-datepicker__item mml-datepicker__item--day`;

  if (isSelected) {
    className += ' mml-datepicker__item--selected';
  }

  return (
    <div
      className={className}
      // @ts-ignore
      index={idx}
      onClick={() => handleClick(item)}
      // title={formatDate(value, 'dd/MM/yyyy')}
    >
      {displayValue}
    </div>
  );
};

/**
 * DatePicker date
 */
export const DatePickerDate: FC<DatePickerDateProps> = (props) => (
  <div className="mml-datepicker__date">
    <DatePickerSelect {...props} Item={DatePickerDateItem} getItemData={getItemData} />
  </div>
);
