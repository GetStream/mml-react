import React from "react";

import { examples } from "./examples";
import { ExampleSelector } from "./components/ExampleSelector";

import "mml-react/dist/css/index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MML 1.0: Rich Messaging</h1>
        <p>
          Message Markup Language (MML) enables cross platform interactive
          messaging and chat. User have grown accustomed to powerful messaging
          capabilities from tools such as Slack. MML gives developers the power
          to quickly build cross platform rich messaging experiences. It works
          particularly well if you combine it with chat bots and AI. Here are
          some examples of what you can build:
        </p>

        <h3>What you can build</h3>
        <ExampleSelector examples={examples} />

        <h3>Why not use HTML?</h3>
        <p>
          Rendering HTML for each message is slow in native mobile apps. MML is
          a simple layout syntax that translates straight to native mobile UI
          elements. The beauty of MML is it's simplicity. It works well for most
          rich messaging use cases. If you have more complex needs we recommend
          building custom components for specific message types.
        </p>

        <h3>Alternatives</h3>

        <p>
          Slack uses a JSON based layout language called{" "}
          <a href="https://api.slack.com/block-kit">Block Kit</a>. Microsoft
          uses a similar approach for their{" "}
          <a href="https://adaptivecards.io/samples/FlightItinerary.html">
            Adaptive Cards
          </a>
          . The approach that Facebook takes is more template based and less
          generic. It's called{" "}
          <a href="https://developers.facebook.com/docs/messenger-platform/send-messages/templates">
            Message Templates
          </a>
          . Google's RCS also has a rich messaging feature.
        </p>

        <h3>The Syntax</h3>

        <p>
          MML implements a basic form system for rich message interactions. For
          the message layout it combines Markdown, a grid system and a few
          built-in layouts that are common for chat messages.
        </p>

        <h3>Who created MML?</h3>
        <p>
          MML was invented to power rich messaging for Stream's{" "}
          <a href="https://getstream.io/chat/">Chat API</a>. Stream powers chat
          and activity feeds for over 500 million end users. The following
          people contributed to the MML spec:
        </p>

        <ol>
          <li>Thierry Schellenbach @tschellenbach</li>
          <li>Tommaso Barbugli</li>
          <li>Joshua Tilton @uijudo</li>
          <li>Jaap Bakker</li>
        </ol>

        <h3>MML - The Spec</h3>

        <h4>Input Tags</h4>

        <div>
          Input tags are used to build small forms and workflows right into your
          messaging experience. Each of the input tags accepts the `name`
          attribute which is used for submission of the data.
        </div>

        <div>
          input: A text input element. Valid Child Tags: None. Attributes: name:
          The name of the input element. `value`: The value of the button.
          Examples: ...
        </div>
        <div>button: A button</div>
        <div>select: A select element</div>
        <div>buttonlist: A list of buttons</div>
        <div>
          datepicker: The datepicker allows you to pick a date. You can specify
          available time/dates using an ical calendar.
        </div>
        <div>
          timepicker: The timepicker allows you to pick a time. You can specify
          available time/dates using an ical calendar.
        </div>
        <div>overflow: A overflow element. button is a child element..</div>

        <h4>Layout Tags</h4>

        <div>
          card: A container around your content that's visually differentiated
        </div>
        <div>
          carousel: A horizontally scrolling carousel, useful for showing a list
          of options. item is a child element.
        </div>
        <div>row: A row that must contain columns</div>
        <div>column: A column, you can specify the width</div>
        <div>divider: A simple divider between content</div>

        <h4>Content Tags</h4>

        <div>md: Markdown formatted content</div>
        <div>text: Simple text content without any formatting</div>
        <div>icon: An icon, specified by name using Material UI icon set</div>
        <div>image: An image</div>
        <div>video: A video element</div>
      </header>
    </div>
  );
}

export default App;
