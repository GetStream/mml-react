import React, { useContext, useState } from 'react'
import { MMLContext } from './context'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'

/**
 * Scheduler datepicker element.
 */
export function Scheduler({ name, ...props }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const mmlContext = useContext(MMLContext)
  const value = mmlContext[name]

  const dateOnly = !!props.full_day
  const interval = props.interval ? 1 * props.interval : 30
  const showTime = !dateOnly
  const format = showTime ? 'MMMM d, yyyy h:mm aa' : 'h:mm aa'

  return (
    <div className="mml-scheduler">
      {loading ? (
        <div>Loading availability</div>
      ) : (
        <DatePicker
          selected={value || new Date()}
          onChange={date => {
            mmlContext.setValue(name, date)
          }}
          timeIntervals={interval}
          showTimeSelect={!dateOnly}
          dateFormat={format}
          // filterDate={this.icalFilter}
          timeCaption="Time"
          popperPlacement="top-end"
          popperModifiers={{
            offset: {
              enabled: true,
              offset: '5px, 10px'
            },
            preventOverflow: {
              enabled: true,
              escapeWithReference: false,
              boundariesElement: 'viewport'
            }
          }}
        />
      )}
    </div>
  )
}

Scheduler.propTypes = {
  /** The name of the button */
  name: PropTypes.string.isRequired
}
