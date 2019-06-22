import React from "react";

/*
Issues
- initial state for input elements..
- handling state change...
- validation...
*/

export function Button(tagName, node, children) {
  return (
    <button
      className={`mml-btn`}
      type="submit"
      onClick={() => that.handleAction(node.attributes)}
    >
      {node.children[0].text}
    </button>
  );
}

export function Column(tagName, node, children) {
  const width = node.attributes.width ? node.attributes.width : 12;
  const offset = node.attributes.offset ? node.attributes.offset : 0;
  let classNames = `mml-col-${width}`;
  if (offset) {
    classNames = classNames + ` mml-offset-${offset}`;
  }

  const align = node.attributes.align ? node.attributes.align : "left";
  classNames = classNames + ` mml-align-${align}`;

  return <div className={classNames}>{children}</div>;
}

export function Icon(tagName, node, children) {
  return <i class="material-icons">{node.attributes.name}</i>;
}

export function AddToCalendar(tagName, node, children) {
  // required fields
  const { title, start, end } = node.attributes;
  // optional
  const { location, description } = node.attributes;

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
  return <AddToCalendar event={event} listItems={items} />;
}

export function Card(tagName, node, children) {
  return <div class="mml-card">{children}</div>;
}

export function ButtonList(tagName, node, children) {
  return <div class="mml-selectlist">{children}</div>;
}

export function Row(tagName, node, children) {
  return <div className="mml-row">{children}</div>;
}

export function Overflow(tagName, node, children) {
  return (
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenu2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        ...
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
        {children}
      </div>
    </div>
  );
}

export function Separator(tagName, node, children) {
  return <hr className="mml-separator" />;
}

export function Image(tagName, node, children) {
  return <img className="mml-image" {...node.attributes} />;
}

export function MD(tagName, node, children) {
  return <MMLMarkdown source={node.children[0].text} />;
}

export function Video(tagName, node, children) {
  return (
    <ReactPlayer
      className="react-player"
      url={node.attributes.src}
      width="100%"
      controls
    />
  );
}

export function Input(tagName, node, children) {
  return (
    <input
      {...node.attributes}
      onChange={that.handleActionode.bind(that, node.attributes)}
    />
  );
}

export function Scheduler(tagName, node, children) {
  // TODO: how do we set the initial state......
  const initialDate = new Date(node.attributes.value);
  return (
    <Scheduler
      selected={that.state[node.attributes.name]}
      interval={node.attributes.interval}
      duration={node.attributes.duration}
      full_day={node.attributes.full_day}
      ical_availability={node.attributes.ical_availability}
      onChange={that.handleDateChange.bind(that, node.attributes)}
    />
  );
}

export function Select(tagName, node, children) {
  return (
    <select
      {...node.attributes}
      onChange={that.handleActionode.bind(that, node.attributes)}
    >
      {children}
    </select>
  );
}

export function Option(tagName, node, children) {
  return <option value={node.attributes.value}>{node.children[0].text}</option>;
}
