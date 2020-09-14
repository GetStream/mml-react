import React, { useContext, useState, useEffect } from 'react'
import { MMLContext } from './context'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'

/**
 * Scheduler datepicker element.
 */

export function Scheduler({ name, ...props }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const duration = props.duration ? 1 * parseInt(props.duration, 10) : 30
  let icalFilter

  useEffect(() => {
    const setupIcal = async () => {
      let icalURL = props.ical_availability
      let icalExpander = null

      if (!icalURL) {
        setLoading(false)
      } else {
        setLoading(true)
        const response = await fetch(icalURL, {
          method: 'GET',
          redirect: 'follow'
        })
        const bodyText = await response.text()
        if (response.ok) {
          const options = { ics: bodyText, maxIterations: 10 }
          icalExpander = new IcalExpander(options)
        } else {
          setError('failed to load availability')
        }
        setLoading(false)
      }

      icalFilter = start => {
        if (icalExpander) {
          const stop = new Date(start.getTime() + duration * 60000)
          const events = icalExpander.between(start, stop)

          const booked = events && events.length >= 1
          return !booked
        } else {
          return true
        }
      }
    }
    setupIcal()
  })

  const mmlContext = useContext(MMLContext)
  const value = mmlContext[name]

  const dateOnly = !!props.full_day
  const interval = props.interval ? 1 * props.interval : 30
  const showTime = !dateOnly
  const format = showTime ? 'MMMM d, yyyy h:mm aa' : 'MMMM d, yyyy'

  return (
    <div className="mml-scheduler">
      {loading ? (
        <div>Loading availability</div>
      ) : (
        <DatePicker
          selected={value || new Date()}
          onChange={date => {
            mmlContext.setValue(name, date)
            mmlContext.setValue(name + '_iso', date.toISOString())
          }}
          timeIntervals={interval}
          showTimeSelect={!dateOnly}
          dateFormat={format}
          filterDate={icalFilter}
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
