import React from '../../node_modules/react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { MML } from '../../../'
import * as data from '../data'
import {
  Message,
  MessageSimple,
  Chat,
  Channel,
  MessageList
} from 'stream-chat-react'

export class ExampleEditor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: 0
    }
  }

  selectExample = exampleName => {
    this.setState((state, props) => {
      return { selected: exampleName }
    })
    return false
  }

  handleLayoutChange = event => {
    this.setState({ layout: event.target.value })
  }

  render() {
    const example = this.props.examples[this.state.selected]
    if (!example) {
      return <div>No Example Selected</div>
    }

    function onAction(data) {
      return new Promise(resolve => setTimeout(() => resolve(), 3000))
    }

    data.message.attachments = [{ type: 'mml', mml: example.mml }]
    let messages = data.messages.concat([data.message])

    return (
      <div className="container-fluid">
        <div className="row">
          <ul className="navigation">
            {Object.keys(this.props.examples).map(key => (
              <li
                className={key === this.state.selected ? 'active' : 'inactive'}
                key={key}
              >
                <a onClick={() => this.selectExample(key)}>
                  {this.props.examples[key].name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="row">
          <div>
            <p>{example.description}</p>
          </div>
          <div className="col syntax-mml">
            <SyntaxHighlighter language="xml" style={atomDark}>
              {example.mml}
            </SyntaxHighlighter>
          </div>
          <div className="col">
            <div
              className="str-chat"
              style={{ height: 'unset', width: '700px' }}
            >
              <Chat
                client={data.client}
                key={example.name}
                theme={'messaging light'}
              >
                <Channel channel={data.channel}>
                  <MessageList messages={messages} />
                </Channel>
              </Chat>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
