import React from 'react'

import DatePicker from 'react-datepicker'
import IcalExpander from 'ical-expander'

export class Scheduler extends React.Component {
  // TODO: document props
  constructor(props) {
    super(props)
    this.state = { loading: true, error: '' }
  }

  setupIcalFilter = async (icalURL, duration) => {
    let icalExpander = null

    if (!icalURL) {
      this.setState({ loading: false })
    } else {
      this.setState({ loading: true })
      const response = await fetch(icalURL, {
        method: 'GET',
        redirect: 'follow'
      })
      const bodyText = await response.text()
      if (response.ok) {
        const options = { ics: bodyText, maxIterations: 10 }
        icalExpander = new IcalExpander(options)
        console.log('all events', icalExpander.all())
      } else {
        this.setState({ error: 'failed to load availability' })
      }
      this.setState({ loading: false })
    }

    function icalFilter(start) {
      if (icalExpander) {
        const stop = new Date(start.getTime() + duration * 60000)
        const events = icalExpander.between(start, stop)

        console.log('events', start, events)

        const booked = events && events.length >= 1
        return !booked
      } else {
        return true
      }
    }
    this.icalFilter = icalFilter
  }

  componentDidMount() {
    // runs in the background...
    const duration = this.props.duration
      ? 1 * parseInt(this.props.duration, 10)
      : 30
    this.setupIcalFilter(this.props.ical_availability, duration)
  }

  render() {
    const dateOnly = !!this.props.full_day
    const interval = this.props.interval ? 1 * this.props.interval : 30
    const showTime = !dateOnly
    const format = showTime ? 'MMMM d, yyyy h:mm aa' : 'h:mm aa'

    if (this.state.error) {
      return (
        <div className="mml-scheduler">
          Failed to load availability, error: {this.state.error}
        </div>
      )
    }

    return (
      <div className="mml-scheduler">
        {this.state.loading ? (
          <div>Loading availability</div>
        ) : (
          <DatePicker
            selected={this.props.selected}
            timeIntervals={interval}
            showTimeSelect={!dateOnly}
            dateFormat={format}
            filterDate={this.icalFilter}
            timeCaption="Time"
            onChange={this.props.onChange}
          />
        )}
      </div>
    )
  }
}
