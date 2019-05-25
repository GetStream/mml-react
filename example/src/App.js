import React from "react";

import { examples } from "./examples";
import { ExampleSelector } from "./components/ExampleSelector";

import "stream-chat-react/dist/css/index.css";
import "mml-react/dist/css/index.css";

import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MML 1.0</h1>
        <p>
          Message Markup Language (MML) enables cross platform interactive
          messaging and chat. User have grown accustomed to powerful messaging
          capabilities from tools such as Slack. MML gives developers the power
          to quickly build cross platform rich messaging experiences. It works
          particularly well if you combine it with chat bots. Here are some
          examples of what you can build:
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

        <h3>The Syntax</h3>

        <p>
          MML uses XML and implements a 12 column grid system for layouts. It
          implements a basic form system for rich message interactions. Markdown
          is used for message formatting. MML is inspired by Slack's JSON based{" "}
          <a href="https://api.slack.com/block-kit">Block Kit</a>
        </p>

        <h3>Client Libraries</h3>

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
        </ol>

        <h3>Special thanks to</h3>

        <ol>
          <li>List of library authors</li>
        </ol>
        <div />
        <h3>The Spec</h3>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button class="dropdown-item" type="button">
              Action
            </button>
            <button class="dropdown-item" type="button">
              Another action
            </button>
            <button class="dropdown-item" type="button">
              Something else here
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
