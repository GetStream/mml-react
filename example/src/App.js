import React from '../node_modules/react'

import { examples } from '../../'
import { ExampleEditor } from './components/ExampleEditor'

import '../../dist/css/index.css'
import 'stream-chat-react/dist/css/index.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MML 1.0: Rich Messaging - Preview tool</h1>
        <p>
          Message Markup Language (MML) enables cross platform interactive
          messaging and chat. User have grown accustomed to powerful messaging
          capabilities from tools such as Slack. MML gives developers the power
          to quickly build cross platform rich messaging experiences. It works
          particularly well if you combine it with chat bots and AI. Here are
          some examples of what you can build. For more information visit{' '}
          <a href="https://getstream.io/chat/mml/">
            the MML Homepage for Rich messaging Chat
          </a>
        </p>

        <h3>What you can build</h3>
        <ExampleEditor examples={examples} />
      </header>
    </div>
  )
}

export default App
