import React from "react";
import { MMLDataTag } from "../base";
import { Scheduler as SchedulerComponent } from "../../components/Scheduler";

export class Scheduler extends MMLDataTag {
  toReact(rc) {
    const initialDate = new Date(this.attr.value);
    <SchedulerComponent
      selected={rc.state[this.attr.name]}
      interval={this.attr.interval}
      duration={this.attr.duration}
      full_day={this.attr.full_day}
      ical_availability={this.attr.ical_availability}
      onChange={rc.handleAction.bind(rc, this.attr)}
    />;
  }
}
