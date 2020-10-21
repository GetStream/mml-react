import React from 'react'
import PropTypes from 'prop-types'
import Helpers from 'react-add-to-calendar/lib/helpers'
import { Card } from './Card'
import { CardHeader } from './CardHeader'
import { CardBody } from './CardBody'
import { Icon } from './Icon'
import { ButtonList } from './ButtonList'

const helpers = new Helpers()

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
    { id: 'google', label: 'Google', google: 'Google', icon: 'add' },
    {
      id: 'apple',
      label: 'Apple Calendar',
      apple: 'Apple Calendar',
      icon: 'add'
    },
    { id: 'outlook', label: 'Outlook', outlook: 'Outlook', icon: 'add' },
    {
      id: 'outlookcom',
      label: 'Outlook.com',
      outlookcom: 'Outlook.com',
      icon: 'add'
    }
  ]

  const event = {
    startTime: start,
    endTime: end,
    title,
    location,
    description
  }

  const isIE =
    typeof window !== 'undefined' &&
    window.navigator.msSaveOrOpenBlob &&
    window.Blob

  function handleLinkClick(event) {
    event.preventDefault()
    let url = event.currentTarget.getAttribute('href')

    if (
      !helpers.isMobile() &&
      (url.startsWith('data') || url.startsWith('BEGIN'))
    ) {
      let filename = 'download.ics'
      let blob = new Blob([url], { type: 'text/calendar;charset=utf-8' })

      if (isIE) {
        window.navigator.msSaveOrOpenBlob(blob, filename)
      } else {
        // many browsers do not properly support downloading data URIs
        // (even with "download" attribute in use) so this solution
        // ensures the event will download cross-browser
        let link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.setAttribute('download', filename)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    } else {
      window.open(url, '_blank')
    }
  }

  // begin time, endtime (means we always need to have durationode...)
  // title
  // (optional: Description, Location)
  // react: https://jasonsalzmanode.github.io/react-add-to-calendar/
  // iOS: https://stackoverflow.com/questions/246249/programmatically-add-custom-event-in-the-iphone-calendar
  // Android: https://stackoverflow.com/questions/3721963/how-to-add-calendar-events-in-android
  return (
    <Card className="mml-scheduler">
      <CardHeader icon="date_range" text="Add to My Calendar" />
      <ButtonList>
        {items.map((item, idx) => (
          <a
            key={item.id + idx}
            className="mml-btn"
            onClick={handleLinkClick}
            href={helpers.buildUrl(event, item, isIE)}
            target="_blank"
          >
            {/* <Icon name={item.icon} /> */}
            {item.label}
          </a>
        ))}
      </ButtonList>
    </Card>
  )
}

AddToCalendar.propTypes = {
  /** The title for the calendar entry */
  title: PropTypes.string.isRequired,
  /** The start time for the calendar entry */
  start: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
    .isRequired,
  /** The end time for the calendar entry */
  end: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
    .isRequired,
  /** The optional location for the calendar entry */
  location: PropTypes.string,
  /** The optional description for the calendar entry */
  description: PropTypes.string
}
