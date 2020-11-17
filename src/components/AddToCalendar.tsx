import React, { FC, SyntheticEvent } from 'react';
import isMobile from 'is-mobile';
import { v4 as uuid } from 'uuid';
import format from 'date-fns/format';
import { Card } from './Card';
import { CardHeader } from './CardHeader';
import { ButtonList } from './ButtonList';

export type AddToCalendarProps = AddToCalendarEvent & {
  /** Additional card class name */
  className?: string;
};

export type AddToCalendarEvent = {
  /** The title for the calendar entry, if a string it must be parseable as Date */
  start: string | Date;
  /** The start time for the calendar entry, if a string it must be parseable as Date */
  end: string | Date;
  /** The end time for the calendar entry */
  title: string;
  /** The optional location for the calendar entry */
  location?: string;
  /** The optional description for the calendar entry */
  description?: string;
};

// we infer this from the the const ADD_TO_CALENDAR_SERVICES, we might keep this
// here if we want to make the calendar services configurable
// type AddToCalendarService = {
//   id: string;
//   label: string;
//   icon?: string;
// };

const ADD_TO_CALENDAR_SERVICES = [
  { id: 'google', label: 'Google', icon: 'add' },
  { id: 'apple', label: 'Apple Calendar', icon: 'add' },
  { id: 'outlook', label: 'Outlook', icon: 'add' },
  { id: 'outlookcom', label: 'Outlook.com', icon: 'add' },
] as const;

/**
 * Format time
 *
 * Adapted from the `moment` way of [react-add-to-calendar](https://git.io/JkWol)
 * to the [date-fns way](https://stackoverflow.com/a/52840292)
 */
function formatTime(date: string | Date, id: typeof ADD_TO_CALENDAR_SERVICES[number]['id']) {
  date = date instanceof Date ? date : new Date(date);
  switch (id) {
    case 'outlookcom':
      return format(date, 'yyyy-MM-dd___HH:mm:ss').replace('___', 'T') + 'Z';
    default:
      return format(date, 'yyyyMMdd___HHmmss').replace('___', 'T') + 'Z';
  }
}

/**
 * Create query string with given parameters
 *
 * It checks that the parameter value is not falsy
 */
function createQueryString(params: [string, string | undefined][]) {
  let output = '';
  for (let i = 0; i < params.length; i++) {
    const [name, value] = params[i];
    if (value) output += `&${name}=${encodeURIComponent(value)}`;
  }

  return output;
}

/**
 * Build calendar URL
 *
 * Resources:
 * - [SO question about Google](https://stackoverflow.com/q/22757908)
 * - [docs about outlook.com format](https://git.io/JkWp5)
 * - [addevent wrapper SAAS](https://www.addevent.com/)
 */
function buildUrl(event: AddToCalendarEvent, { id }: typeof ADD_TO_CALENDAR_SERVICES[number], isIE: boolean) {
  const { start, end, title, location, description } = event;
  const startFormatted = formatTime(start, id);
  const endFormatted = formatTime(end, id);
  let url = '';

  switch (id) {
    case 'google':
      url = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
      url += '&dates=' + startFormatted + '/' + endFormatted;
      url += createQueryString([
        ['location', location],
        ['text', title],
        ['details', description],
      ]);
      break;

    case 'outlookcom':
      url = 'https://outlook.live.com/owa/?rru=addevent';
      url += createQueryString([
        ['startdt', startFormatted],
        ['enddt', endFormatted],
        ['subject', title],
        ['location', location],
        ['body', description],
        ['allday', 'false'], // TODO: calculate it?
        ['uid', uuid()],
      ]);
      url += '&path=/calendar/view/Month';
      break;

    default:
      url = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'BEGIN:VEVENT',
        'URL:' + document.URL,
        'DTSTART:' + startFormatted,
        'DTEND:' + endFormatted,
        'SUMMARY:' + title,
        'DESCRIPTION:' + description,
        'LOCATION:' + location,
        'END:VEVENT',
        'END:VCALENDAR',
      ].join('\n');

      if (!isIE && isMobile()) {
        url = encodeURI('data:text/calendar;charset=utf8,' + url);
      }
  }

  return url;
}

/**
 * AddToCalendar widget that supports google, apple and outlook calendars
 */
export const AddToCalendar: FC<AddToCalendarProps> = ({
  className,
  title,
  start,
  end,
  location = '',
  description = '',
}) => {
  const event: AddToCalendarEvent = {
    start: start,
    end: end,
    title,
    location,
    description,
  };

  const isIE = (typeof window !== 'undefined' && window.navigator.msSaveOrOpenBlob && window.Blob) as boolean;

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
      <ButtonList>
        {ADD_TO_CALENDAR_SERVICES.map((service, idx) => (
          <a
            key={service.id + idx}
            className="mml-btn"
            onClick={handleLinkClick}
            href={buildUrl(event, service, isIE)}
            target="_blank"
            rel="nofollow noreferrer noopener"
          >
            {/* <Icon name={service.icon} /> */}
            {service.label}
          </a>
        ))}
      </ButtonList>
    </Card>
  );
};
