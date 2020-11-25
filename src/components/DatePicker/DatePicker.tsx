import React, { useEffect, useState, FC } from 'react';
import { DatePickerDate } from './DatePickerDate';
import { DatePickerTime } from './DatePickerTime';
import {
  format as formatDate,
  roundToNearestMinutes,
  setDate,
  setMonth,
  setYear,
  setHours,
  setMinutes,
} from 'date-fns';

export type DatePickerProps = {
  /**
   * The scheduler name attached to hidden input
   */
  name: string;
  /**
   * The selected date time
   */
  selected?: string;
  /**
   * Interval in days for time selection
   * @default 1
   */
  dateInterval?: number;
  /**
   * Interval in minutes for time selection
   * @default 30
   */
  timeInterval?: number;
  /**
   * Whether to show the time picker
   * @default true
   */
  showTimeSelect?: boolean;
  /**
   * Datetime format, see [date-fns docs](https://date-fns.org/v2.16.1/docs/format)
   * @default 'MMMM d, yyyy h:mm aa'
   */
  format?: string;
  /**
   * Date format, see [date-fns docs](https://date-fns.org/v2.16.1/docs/format)
   * @default 'E LLL dd'
   */
  dateFormat?: string;
  /**
   * Time format, see [date-fns docs](https://date-fns.org/v2.16.1/docs/format)
   * @default 'h:mm a'
   */
  timeFormat?: string;
  /**
   * Filter dates, it should return a boolean
   */
  filter?: (date: Date) => boolean;
  /**
   * Start date, it defaults from 3 days behind the given date
   * @default
   */
  startDate?: Date;
  /**
   * Allows to select a date in the past
   * @default false
   */
  allowPast?: boolean;
  /**
   * On change callback
   */
  onChange?: (date: Date) => any;
};

/**
 * Split datetime in parts in order to recompose a date
 */
export function splitDatetime(datetime: Date) {
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

export const DatePicker: FC<DatePickerProps> = ({
  name,
  selected,
  dateInterval = 1,
  timeInterval = 30,
  format = 'MMMM d, yyyy h:mm aa',
  dateFormat = 'E LLL dd',
  timeFormat = 'h:mm a',
  allowPast = false,
  showTimeSelect = true,
  startDate,
  filter,
  onChange,
}) => {
  const [datetime, setDatetime] = useState(
    selected
      ? new Date(selected)
      : roundToNearestMinutes(new Date(), { nearestTo: Math.min(30, Math.round(timeInterval)) }),
  );

  /**
   * Handle date change
   */
  function handleChangeDate(value: Date) {
    const { day, month, year } = splitDatetime(value);
    let newDatetime = datetime;
    newDatetime = setDate(newDatetime, day);
    newDatetime = setMonth(newDatetime, month);
    newDatetime = setYear(newDatetime, year);

    setDatetime(newDatetime);
  }

  /**
   * Handle time change
   */
  function handleChangeTime(value: Date) {
    const { hours, minutes } = splitDatetime(value);
    let newDatetime = datetime;
    newDatetime = setHours(newDatetime, hours);
    newDatetime = setMinutes(newDatetime, minutes);

    setDatetime(newDatetime);
  }

  useEffect(() => {
    if (onChange && datetime) onChange(datetime);
  }, [datetime, onChange]);

  return (
    <div className="mml-datepicker">
      <input name={name} value={formatDate(datetime, format)} type="hidden" />
      <DatePickerDate
        filter={filter}
        format={dateFormat}
        value={datetime}
        onChange={handleChangeDate}
        interval={dateInterval}
        allowPast={allowPast}
        startDate={startDate}
      />
      {showTimeSelect && (
        <DatePickerTime
          filter={filter}
          format={timeFormat}
          value={datetime}
          onChange={handleChangeTime}
          interval={timeInterval}
          allowPast={allowPast}
        />
      )}
    </div>
  );
};
