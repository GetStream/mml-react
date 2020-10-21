import React from 'react'
import PropTypes from 'prop-types'
import DatePickerScroller from './DatePickerScroller'
import { roundToNearestMinutes } from 'date-fns'

/**
 * DatePicker
 *
 * for datetime formats @see https://date-fns.org/v2.16.1/docs/format
 *
 * @param {typeof DatePicker.propTypes} props
 */
export function DatePicker({
  selected,
  dateInterval = 1,
  timeInterval = 30,
  showTimeSelect,
  dateFormat = 'E LLL dd',
  timeFormat = 'h:mm a',
  filterDate,
  onChange
}) {
  let initialDate

  if (selected) {
    initialDate = selected
  } else {
    initialDate = roundToNearestMinutes(new Date(), {
      nearestTo: Math.min(30, Math.round(timeInterval / 2))
    })
  }

  const [datetime, setDatetime] = React.useState(initialDate)
  // const format = dateFormat + ' ' + timeFormat;

  function handleChangeDate(val) {
    setDatetime(val)
    if (onChange) onChange(new Date(datetime))
  }

  function handeChangeTime(val) {
    setDatetime(val)
    if (onChange) onChange(new Date(datetime))
  }

  return (
    <div className="mml-datepicker">
      <DatePickerScroller
        type="date"
        filter={filterDate}
        format={dateFormat}
        value={datetime}
        onChange={handleChangeDate}
        dateInterval={dateInterval}
        timeInterval={timeInterval}
      />
      {showTimeSelect && (
        <DatePickerScroller
          type="time"
          format={timeFormat}
          value={datetime}
          onChange={handeChangeTime}
          dateInterval={dateInterval}
          timeInterval={timeInterval}
        />
      )}
    </div>
  )
}

DatePicker.propTypes = {
  /** The selected date time (optional) */
  selected: PropTypes.string,
  /** Interval in days for time selection */
  dateInterval: PropTypes.number,
  /** Interval in minutes for time selection */
  timeInterval: PropTypes.number,
  showTimeSelect: PropTypes.bool,
  /** Date format @see https://date-fns.org/v2.16.1/docs/format */
  dateFormat: PropTypes.string,
  /** Time format @see https://date-fns.org/v2.16.1/docs/format */
  timeFormat: PropTypes.string,
  /** Filter dates, it should return a boolean */
  filterDate: PropTypes.func,
  /** On change callback */
  onChange: PropTypes.func
}
