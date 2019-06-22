import React from "react";
import { MMLTag } from "./base";

export class SchedulerTag extends MMLTag {
  toReact(rc) {
    const initialDate = new Date(node.attributes.value);
    <Scheduler
      selected={rc.state[node.attributes.name]}
      interval={this.attr.interval}
      duration={this.attr.duration}
      full_day={this.attr.full_day}
      ical_availability={this.attr.ical_availability}
      onChange={rc.handleDateChange.bind(rc, this.attr)}
    />;
  }
}
