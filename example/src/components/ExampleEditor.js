import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Chat as StreamChat, Channel, MessageList } from 'stream-chat-react'

import Attachment from './Attachment'
import * as data from '../data'
import styled from 'styled-components'
import { Container, Row, Col } from './Grid'
import theme from '../theme'
import { Nav } from './Nav'

const CHAT_WIDTH = 465

const Wrap = styled(Container)`
  flex: 1;
`

const Desc = styled.p`
  background: #eee;
  margin: 0 0 ${theme.gutter}px;
  padding: ${theme.gutter}px;
`

const Syntax = styled.div`
  margin-bottom: ${theme.gutter}px;
  font-family: ${theme.fontMonospace};
  font-size: 70%;

  pre {
    padding: ${theme.gutter}px !important;
  }
`

const Chat = styled.div`
  .str-chat {
    margin: 0 auto;
    height: 515px;
    width: ${CHAT_WIDTH}px;
  }

  .str-chat__list {
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);
  }

  .str-chat.messaging {
    background: transparent;
  }
`

export function ExampleEditor({ examples }) {
  const [current, setCurrent] = React.useState(0)
  const example = examples[current]

  if (!example) {
    return <div>No Example Selected</div>
  }

  data.message.attachments = [{ type: 'mml', mml: example.mml }]
  const messages = data.messages.concat([data.message])

  return (
    <Wrap>
      <Row>
        <Col xs={100} xl={'300px'}>
          <Nav items={examples} current={current} onClick={setCurrent} />
        </Col>
        <Col xs={100} xl={70}>
          <Row>
            <Col xs={100}>
              <Desc>{example.description}</Desc>
            </Col>
            <Col xs={100} lg={'auto'}>
              <Syntax>
                <SyntaxHighlighter language="xml" style={atomDark}>
                  {example.mml}
                </SyntaxHighlighter>
              </Syntax>
            </Col>
            <Col xs={100} lg={CHAT_WIDTH + theme.gutter * 2 + 'px'}>
              <Chat>
                <StreamChat
                  client={data.client}
                  key={example.name}
                  theme={'messaging light'}
                >
                  <Channel channel={data.channel}>
                    <MessageList messages={messages} Attachment={Attachment} />
                  </Channel>
                </StreamChat>
              </Chat>
            </Col>
          </Row>
        </Col>
      </Row>
    </Wrap>
  )
}
