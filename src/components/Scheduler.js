import React from 'react';
import IcalExpander from 'ical-expander';
import { DatePicker } from './DatePicker';
import { Card } from './Card';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { Error } from './Error';
import Loader from './Loader';

export class Scheduler extends React.Component {
  // TODO: document props
  constructor(props) {
    super(props);
    this.state = { loading: true, error: '' };
  }

  setupIcalFilter = async (icalURL, duration) => {
    let icalExpander = null;

    if (!icalURL) {
      this.setState({ loading: false });
    } else {
      this.setState({ loading: true });
      const response = await fetch(icalURL, {
        method: 'GET',
        redirect: 'follow',
      });
      const bodyText = await response.text();
      if (response.ok) {
        const options = { ics: bodyText, maxIterations: 10 };
        icalExpander = new IcalExpander(options);
      } else {
        this.setState({ error: 'failed to load availability' });
      }
      this.setState({ loading: false });
    }

    function icalFilter(start) {
      if (icalExpander) {
        const stop = new Date(start.getTime() + duration * 60000);
        const events = icalExpander.between(start, stop);

        const booked = events && events.length >= 1;
        return !booked;
      } else {
        return true;
      }
    }
    this.icalFilter = icalFilter;
  };

  componentDidMount() {
    // runs in the background...
    const duration = this.props.duration ? 1 * parseInt(this.props.duration, 10) : 30;
    this.setupIcalFilter(this.props.ical_availability, duration);
  }

  render() {
    const dateOnly = !!this.props.full_day;
    const interval = this.props.interval ? 1 * this.props.interval : 30;
    const { error, loading } = this.state;

    return (
      <Card className="mml-scheduler">
        <CardHeader icon="date_range" text="Scheduler" />
        <CardBody>
          {error && !loading && <Error error={`Failed to load availability, error: ${error}`} />}
          {!error && loading && <Loader loading={true} text="Loading availability"></Loader>}
          {!error && !loading && (
            <DatePicker
              selected={this.props.selected}
              timeIntervals={interval}
              showTimeSelect={!dateOnly}
              format={this.props.format}
              // dateFormat="ddd MMM DD"
              // timeFormat="H:mm A"
              filterDate={this.icalFilter}
              onChange={this.props.onChange}
            />
          )}
        </CardBody>
      </Card>
    );
  }
}
