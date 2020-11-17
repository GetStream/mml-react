import React from 'react';
import PropTypes from 'prop-types';
import DatePickerDate from './DatePickerDate';
import DatePickerTime from './DatePickerTime';
import {
  format as formatDate,
  roundToNearestMinutes,
  setDate,
  setMonth,
  setYear,
  setHours,
  setMinutes,
} from 'date-fns';

/**
 * Split datetime in date and time
 *
 * @param {Date} datetime
 */
export function splitDatetime(datetime) {
  const day = datetime.getDate();
  const month = datetime.getMonth();
  const year = datetime.getFullYear();
  const hours = datetime.getHours();
  const minutes = datetime.getMinutes();
  const seconds = datetime.getSeconds();

  return {
    day,
    month,
    year,
    hours,
    minutes,
    seconds,
  };
}

/**
 * DatePicker
 *
 * for datetime formats @see https://date-fns.org/v2.16.1/docs/format
 *
 * @param {typeof DatePicker.propTypes} props
 */
export function DatePicker({
  selected,
  dateInterval,
  timeInterval,
  format,
  dateFormat,
  timeFormat,
  allowPast,
  showTimeSelect,
  startDate,
  filterDate,
  onChange,
}) {
  let initialDate;

  if (selected) {
    initialDate = new Date(selected);
  } else {
    initialDate = roundToNearestMinutes(new Date(), {
      nearestTo: Math.min(30, Math.round(timeInterval)),
    });
  }

  const [datetime, setDatetime] = React.useState(initialDate);

  /**
   * Handle date change
   *
   * @param {Date} value
   */
  function handleChangeDate(value) {
    const { day, month, year } = splitDatetime(value);
    let newDatetime = datetime;
    newDatetime = setDate(newDatetime, day);
    newDatetime = setMonth(newDatetime, month);
    newDatetime = setYear(newDatetime, year);

    setDatetime(newDatetime);
  }

  /**
   * Handle date change
   *
   * @param {Date} value
   */
  function handleChangeTime(value) {
    const { hours, minutes } = splitDatetime(value);
    let newDatetime = datetime;
    newDatetime = setHours(newDatetime, hours);
    newDatetime = setMinutes(newDatetime, minutes);

    setDatetime(newDatetime);
  }

  React.useEffect(() => {
    if (onChange) onChange(datetime);
  }, [datetime, onChange]);

  return (
    <div className="mml-datepicker">
      <input type="hidden" value={formatDate(datetime, format)} />
      <DatePickerDate
        type="date"
        filter={filterDate}
        format={dateFormat}
        value={datetime}
        onChange={handleChangeDate}
        interval={dateInterval}
        allowPast={allowPast}
        startDate={startDate}
      />
      {showTimeSelect && (
        <DatePickerTime
          type="time"
          filter={filterDate}
          format={timeFormat}
          value={datetime}
          onChange={handleChangeTime}
          interval={timeInterval}
          allowPast={allowPast}
        />
      )}
    </div>
  );
}

DatePicker.defaultProps = {
  dateInterval: 1,
  timeInterval: 30,
  format: 'MMMM d, yyyy h:mm aa',
  dateFormat: 'E LLL dd',
  timeFormat: 'h:mm a',
  allowPast: false,
  showTimeSelect: true,
};

DatePicker.propTypes = {
  /** The selected date time */
  selected: PropTypes.string,
  /** Interval in days for time selection */
  dateInterval: PropTypes.number,
  /** Interval in minutes for time selection */
  timeInterval: PropTypes.number,
  /** Whether to show the time picker */
  showTimeSelect: PropTypes.bool,
  /** Date format @see https://date-fns.org/v2.16.1/docs/format */
  dateFormat: PropTypes.string,
  /** Time format @see https://date-fns.org/v2.16.1/docs/format */
  timeFormat: PropTypes.string,
  /** Filter dates, it should return a boolean */
  filterDate: PropTypes.func,
  /** Start date, it defaults from 3 days behind the given date */
  startDate: PropTypes.instanceOf(Date),
  /** Allows to select a date in the past */
  allowPast: PropTypes.bool,
  /** On change callback */
  onChange: PropTypes.func,
};
