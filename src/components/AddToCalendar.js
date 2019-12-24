import React from 'react'
import AddToCalendarComponent from 'react-add-to-calendar'
import PropTypes from 'prop-types'

/**
 * AddToCalendar widget that supports google, apple and outlook calendars
 */
export function AddToCalendar({
  title,
  start,
  end,
  location = '',
  description = '',
  ...props
}) {
  // remove yahoo
  const items = [
    { google: 'Google' },
    { apple: 'Apple Calendar' },
    { outlook: 'Outlook' },
    { outlookcom: 'Outlook.com' }
  ]

  const event = {
    startTime: start,
    endTime: end,
    title,
    location,
    description
  }

  // begin time, endtime (means we always need to have durationode...)
  // title
  // (optional: Description, Location)
  // react: https://jasonsalzmanode.github.io/react-add-to-calendar/
  // iOS: https://stackoverflow.com/questions/246249/programmatically-add-custom-event-in-the-iphone-calendar
  // Android: https://stackoverflow.com/questions/3721963/how-to-add-calendar-events-in-android
  return <AddToCalendarComponent event={event} listItems={items} />
}

AddToCalendar.propTypes = {
  /** The title for the calendar entry */
  title: PropTypes.string.isRequired,
  /** The start time for the calendar entry */
  start: PropTypes.instanceOf(Date).isRequired,
  /** The end time for the calendar entry */
  end: PropTypes.instanceOf(Date).isRequired,
  /** The optional location for the calendar entry */
  location: PropTypes.string,
  /** The optional description for the calendar entry */
  description: PropTypes.string
}
