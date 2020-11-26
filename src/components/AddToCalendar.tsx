import React, { FC, ReactElement, SyntheticEvent } from 'react';
import dayjs from 'dayjs';
import isMobile from 'is-mobile';
import { v4 as uuid } from 'uuid';

import { Card } from './Card';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { ButtonList } from './ButtonList';
import { IconGoogle, IconMicrosoft, IconApple } from './Icon';

const isIE = (typeof window !== 'undefined' && window.navigator.msSaveOrOpenBlob && window.Blob) as boolean;

const getCurrentURL = () => {
  if (typeof window !== 'undefined') return window.location.href;
  return '';
};

export type AddToCalendarEvent = {
  /**
   * The title for the calendar entry, if a string it must be parseable as `Date`
   */
  start: string | Date;
  /**
   * The start time for the calendar entry, if a string it must be parseable as `Date`
   */
  end: string | Date;
  /**
   * The end time for the calendar entry
   */
  title: string;
  /**
   * The optional location for the calendar entry
   */
  location?: string;
  /**
   * The optional description for the calendar entry
   */
  description?: string;
};

export type AddToCalendarProps = AddToCalendarEvent & {
  /**
   * Additional element class name
   * @default ''
   */
  className?: string;
};

// we infer this from the the const CALENDAR_SERVICES, we might keep this
// here if we want to make the calendar services configurable
// type AddToCalendarService = {
//   id: string;
//   label: string;
//   Icon?: FC;
// };
type CalendarID = 'google' | 'apple' | 'outlook' | 'outlookcom';

const CALENDAR_SERVICES: Array<{ id: CalendarID; label: string; Icon: ReactElement }> = [
  { id: 'google', label: 'Google', Icon: IconGoogle },
  { id: 'apple', label: 'Apple Calendar', Icon: IconApple },
  { id: 'outlook', label: 'Outlook', Icon: IconMicrosoft },
  { id: 'outlookcom', label: 'Outlook.com', Icon: IconMicrosoft },
];

/**
 * Format time
 *
 * Adapted from the `moment` way of [react-add-to-calendar](https://git.io/JkWol)
 * to the dayjs way
 */
function formatTime(date: string | Date, id: CalendarID) {
  return dayjs(date).format(id === 'outlookcom' ? 'YYYY-MM-DDTHH:mm:ss' : 'YYYYMMDDTHHmmss') + 'Z';
}

/**
 * Create query string with given parameters
 *
 * It checks that the parameter value is not falsy
 */
function createQueryString(params: Record<string, string | undefined> = {}) {
  return Object.keys(params).reduce((acc, key) => {
    const value = params[key];
    if (value) acc += `&${key}=${encodeURIComponent(value)}`;
    return acc;
  }, '');
}

/**
 * Build calendar URL
 *
 * Resources:
 * - [SO question about Google](https://stackoverflow.com/q/22757908)
 * - [docs about outlook.com format](https://git.io/JkWp5)
 * - [addevent wrapper SaaS](https://www.addevent.com/)
 */
function buildUrl(event: AddToCalendarEvent, id: CalendarID) {
  const { start, end, title, location, description } = event;
  const startFormatted = formatTime(start, id);
  const endFormatted = formatTime(end, id);

  if (id === 'google')
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${startFormatted}/${endFormatted}${createQueryString(
      { location, text: title, details: description },
    )}`;

  if (id === 'outlookcom')
    return `https://outlook.live.com/owa/?rru=addevent${createQueryString({
      startdt: startFormatted,
      enddt: endFormatted,
      subject: title,
      location,
      body: description,
      allday: 'false', // TODO: calculate it?
      uid: uuid(),
    })}&path=/calendar/view/Month`;

  let url = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    'URL:' + getCurrentURL(),
    'DTSTART:' + startFormatted,
    'DTEND:' + endFormatted,
    'SUMMARY:' + title,
    'DESCRIPTION:' + description,
    'LOCATION:' + location,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\n');

  if (!isIE && isMobile()) url = encodeURI('data:text/calendar;charset=utf8,' + url);

  return url;
}

/**
 * AddToCalendar widget that supports google, apple and outlook calendars
 */
export const AddToCalendar: FC<AddToCalendarProps> = ({
  title,
  start,
  end,
  className = '',
  location = '',
  description = '',
}) => {
  const event = { start: start, end: end, title, location, description };

  function handleLinkClick(event: SyntheticEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const url = event.currentTarget.getAttribute('href') as string;

    if (!isMobile() && (url.startsWith('data') || url.startsWith('BEGIN'))) {
      const filename = 'download.ics';
      const blob = new Blob([url], { type: 'text/calendar;charset=utf-8' });

      if (isIE) {
        window.navigator.msSaveOrOpenBlob(blob, filename);
      } else {
        // many browsers do not properly support downloading data URIs
        // (even with "download" attribute in use) so this solution
        // ensures the event will download cross-browser
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } else {
      window.open(url, '_blank');
    }
  }

  return (
    <Card className={`mml-add-to-calendar ${className}`}>
      <CardHeader icon="date_range" text="Add to My Calendar" />
      <CardBody>
        <ButtonList>
          {CALENDAR_SERVICES.map(({ id, label, Icon }) => (
            <a
              key={id}
              className={`mml-btn ${Icon && 'mml-btn--with-icon'}`}
              onClick={handleLinkClick}
              href={buildUrl(event, id)}
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              {Icon} {label}
            </a>
          ))}
        </ButtonList>
      </CardBody>
    </Card>
  );
};
