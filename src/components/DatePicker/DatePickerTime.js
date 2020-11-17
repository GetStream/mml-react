import React from 'react';
import PropTypes from 'prop-types';
import formatDate from 'date-fns/format';
import { isWithinInterval, addMinutes } from 'date-fns';
import DatePickerSelect from './DatePickerSelect';

/**
 * Get item data
 *
 * @param {typeof DatePickerTime.propTypes & { idx: number }} props
 */
function getItem(props) {
  const { idx, format, interval } = props;
  const value = transformIdxToValue(props);

  return {
    idx,
    interval,
    value,
    displayValue: formatDate(value, format),
  };
}

/**
 * Transform given idx in date
 * @param {typeof DatePickerTime.propTypes & { idx: number }} props
 */
function transformIdxToValue(props) {
  const { idx, value, interval } = props;
  let newValue = addMinutes(value, idx * interval);
  return newValue;
}

/**
 * Generate item component
 *
 * @param {ReturnType<getItem>} item
 * @param {Date} selected
 * @param {(item: ReturnType<getItem>) => any} handleClick
 */
export function DatePickerTimeItem(item, selected, handleClick) {
  const { idx, interval, value, displayValue } = item;

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
      index={idx}
      // title={formatDate(value, 'HH:mm')}
      onClick={() => handleClick(item)}
    >
      {displayValue}
    </div>
  );
}

/**
 * DatePicker time
 *
 * @param {typeof DatePickerTime.propTypes} props
 */
export default function DatePickerTime(props) {
  return (
    <div className="mml-datepicker__time">
      <DatePickerSelect {...props} Item={DatePickerTimeItem} getItem={getItem} />
    </div>
  );
}

DatePickerTime.propTypes = {
  filter: PropTypes.func,
  value: PropTypes.instanceOf(Date),
  interval: PropTypes.number,
};
