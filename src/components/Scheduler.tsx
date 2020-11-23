import React, { useState, useEffect, FC } from 'react';
// @ts-ignore
import IcalExpander from 'ical-expander';

import { DatePicker } from './DatePicker';
import { Card } from './Card';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { Error } from './Error';
import { Loader } from './Loader';

export type SchedulerProps = {
  /**
   * The selected date, it must be a valid parseable date string
   */
  selected: string;
  /**
   * The duration of the event in minutes
   * @default 30
   */
  duration: number;
  /**
   * ICal availability public URL
   */
  ical_availability?: string;
  /**
   * Wether the event to schedule lasts a full day
   */
  full_day?: boolean;
  /**
   * The duration of the event in minutes
   * @default 30
   */
  interval: number;
};

export type ICalFilter = (start?: Date) => boolean;

/**
 * Parse prop as number despite its actualy type, this is convenient when
 * writing mml components
 */
function parseNumberProp(defaultValue: number, value?: string | number) {
  if (value) {
    if (typeof value === 'string') {
      return parseInt(value, 10);
    }
  }
  return defaultValue;
}

export const Scheduler: FC<SchedulerProps> = ({ selected, duration, ical_availability, full_day, interval }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [icalFilter, setIcalFilter] = useState<ICalFilter>(() => () => true);
  const dateOnly = !!full_day;
  const _duration = parseNumberProp(30, duration);
  const _interval = parseNumberProp(30, interval);

  const setupIcalFilter = async (duration: number, icalURL?: string) => {
    let icalExpander: any = null;

    if (!icalURL) {
      setLoading(false);
    } else {
      setLoading(true);

      await fetch(icalURL, {
        method: 'GET',
        redirect: 'follow',
      })
        .then((response) => {
          const bodyText = response.text();
          if (response.ok) {
            const options = { ics: bodyText, maxIterations: 10 };
            icalExpander = new IcalExpander(options);
          } else {
            setError('availability could not be loaded');
          }
          setLoading(false);
        })
        .catch(() => {
          setError('iCal url could not be loaded');
          setLoading(false);
        });
    }
    const filter: ICalFilter = (start?: Date) => {
      if (start && icalExpander) {
        const stop = new Date(start.getTime() + duration * 60000);
        const events = icalExpander.between(start, stop);

        const booked = events && events.length >= 1;
        return !booked;
      }

      return true;
    };
    setIcalFilter(() => filter);
  };

  useEffect(() => {
    setupIcalFilter(_duration, ical_availability);
  }, []);

  return (
    <Card className="mml-scheduler">
      <CardHeader icon="date_range" text="Scheduler" />
      <CardBody>
        {error && !loading && <Error error={`Failed, error: ${error}`} />}
        {!error && loading && <Loader loading={true} text="Loading availability"></Loader>}
        {!error && !loading && (
          <DatePicker
            selected={selected}
            timeInterval={_interval}
            showTimeSelect={!dateOnly}
            filter={icalFilter}
            // these props might be configurable from mml if we like
            // format={format}
            // dateFormat="ddd MMM DD"
            // timeFormat="H:mm A"
            // onChange={onChange}
          />
        )}
      </CardBody>
    </Card>
  );
};