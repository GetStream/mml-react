import React, { useState, useEffect, FC } from 'react';
// @ts-ignore
import IcalExpander from 'ical-expander';

import { DatePicker } from './DatePicker';
import { Card } from './Card';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { Error as ErrorComponent } from './Error';
import { Loader as LoaderComponent } from './Loader';

export type SchedulerProps = {
  /**
   * The name of the scheduler
   */
  name: string;
  /**
   * The selected date, it must be a valid parseable date string
   */
  selected: string;
  /**
   * The duration of the event in minutes
   * @default 30
   */
  duration?: number;
  /**
   * The interval of the event in minutes
   * @default 30
   */
  interval?: number;
  /**
   * Whether the event to schedule lasts a full day
   * @default false
   */
  fullDay?: boolean;
  /**
   * ICal availability public URL
   */
  icalAvailability?: string;
};

export type ICalFilter = (start?: Date) => boolean;

export const Scheduler: FC<SchedulerProps> = ({
  // name,
  selected,
  icalAvailability,
  duration = 30,
  interval = 30,
  fullDay = false,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [icalFilter, setIcalFilter] = useState<ICalFilter>(() => () => true);

  const setupIcalFilter = async (icalURL: string, duration: number) => {
    setLoading(true);

    let icalExpander: any = null;
    try {
      const response = await fetch(icalURL, { method: 'GET', redirect: 'follow', credentials: 'same-origin' });
      const body = await response.text();

      if (response.ok) icalExpander = new IcalExpander({ ics: body, maxIterations: 10 });
      else throw new Error(body);
    } catch (err) {
      console.warn('loading ical failed', { icalURL, err });
      setError('iCal availability could not be loaded');
    }

    const filter: ICalFilter = (start?: Date) => {
      if (!start || !icalExpander) return true;

      const stop = new Date(start.getTime() + duration * 60000);
      const { events } = icalExpander.between(start, stop);
      return !events.length;
    };

    setIcalFilter(() => filter);
    setLoading(false);
  };

  useEffect(() => {
    if (icalAvailability) setupIcalFilter(icalAvailability, duration);
  }, [duration, icalAvailability]);

  return (
    <Card className="mml-scheduler">
      <CardHeader icon="date_range" text="Scheduler" />
      <CardBody>
        {error && !loading && <ErrorComponent error={`Failed, error: ${error}`} />}
        {!error && loading && <LoaderComponent loading={true} text="Loading availability" />}
        {!error && !loading && (
          <DatePicker
            selected={selected}
            timeInterval={interval}
            showTimeSelect={!fullDay}
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
