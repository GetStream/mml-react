import React from "react";
import { MMLDataTag } from "../base";
import AddToCalendarComponent from "react-add-to-calendar";

export class AddToCalendar extends MMLDataTag {
  toReact(rc) {
    // required fields
    const { title, start, end } = this.attr;
    // optional
    const { location, description } = this.attr;

    // remove yahoo
    const items = [
      { google: "Google" },
      { apple: "Apple Calendar" },
      { outlook: "Outlook" },
      { outlookcom: "Outlook.com" }
    ];

    const event = {
      startTime: start,
      endTime: end,
      title,
      location,
      description
    };

    // begin time, endtime (means we always need to have durationode...)
    // title
    // (optional: Description, Location)
    // react: https://jasonsalzmanode.github.io/react-add-to-calendar/
    // iOS: https://stackoverflow.com/questions/246249/programmatically-add-custom-event-in-the-iphone-calendar
    // Android: https://stackoverflow.com/questions/3721963/how-to-add-calendar-events-in-android
    return <AddToCalendarComponent event={event} listItems={items} />;
  }
}
