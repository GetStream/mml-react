import React from 'react'
import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Chat as StreamChat, Channel, MessageList } from 'stream-chat-react'
import { ResizableBox } from 'react-resizable'
import 'react-resizable/css/styles.css'

import { useQuery } from './history'
import theme from '../theme'
import { Container, Row, Col } from './Grid'
import { Nav } from './Nav'
import ChatThemeSwitch from './ChatThemeSwitch'
import Attachment from './Attachment'
import * as data from '../data'

const CHAT_NOTIFICATIONS = false
const CHAT_HEIGHT = 503 // 580
const CHAT_WIDTH = 465 + (CHAT_NOTIFICATIONS ? 80 : 0)
const QUERYPARAM_EXAMPLE = 'example'
// 80 is the notificaiton area min width

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
  .react-resizable {
    border: 1px solid #f0f0f0;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);
  }

  .str-chat {
    margin: 0 auto;
    height: 100%;
    width: 100%;

    &.livestream.light {
      background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-1383/bg.png)
        top left no-repeat;
    }
  }

  ${CHAT_NOTIFICATIONS
    ? ``
    : `
    .str-chat__list-notifications {
      display: none;
    }
  `}
`

// Themes:
// Messages from the current user with are marked differently across themes:
// - `team` uses `str-chat__message-simple--me`
// - `commerce` uses `str-chat__message-commerce--right`
// - `livestream` does not flag it
// - `messaging` does not flag it

export function ExampleEditor({ examples }) {
  const [chatTheme, setChatTheme] = useQuery('theme', data.THEMES[0].value)
  let [example, setExample] = useQuery(QUERYPARAM_EXAMPLE, 0)
  example = parseInt(example, 10)
  const exampleData = examples[example]
  const ChatMsg = data.THEMES_MAP[chatTheme].Msg

  data.message.attachments = [{ type: 'mml', mml: exampleData.mml }]
  const messages = data.messages.concat([data.message])

  function handleChangeTheme(event) {
    setChatTheme(event.target.value)
    // FIXME: otherwise the `Message` component does not get re-rendered
    // correctly...don't know if it is an issue with stream-chat-react
    window.location.reload()
  }

  return (
    <Wrap>
      <Row>
        <Col xs={100} xl={'300px'}>
          <Nav
            items={examples}
            current={example}
            onClick={setExample}
            linkParam={QUERYPARAM_EXAMPLE}
          />
        </Col>
        <Col xs={100} xl={70}>
          <Row>
            <Col xs={100} lg={'auto'}>
              <Desc>{exampleData.description}</Desc>
              <Syntax>
                <SyntaxHighlighter language="xml" style={atomDark}>
                  {exampleData.mml}
                </SyntaxHighlighter>
              </Syntax>
            </Col>
            <Col xs={100} lg={CHAT_WIDTH + theme.gutter * 2 + 'px'}>
              <ChatThemeSwitch
                label="Choose theme:"
                options={data.THEMES}
                value={chatTheme}
                onChange={handleChangeTheme}
              />
              <Chat>
                <ResizableBox
                  width={CHAT_WIDTH}
                  height={CHAT_HEIGHT}
                  minConstraints={[CHAT_WIDTH, CHAT_HEIGHT]}
                  maxConstraints={[CHAT_WIDTH * 3, CHAT_HEIGHT * 2]}
                >
                  <StreamChat
                    client={data.client}
                    key={exampleData.name}
                    theme={chatTheme}
                  >
                    <Channel channel={data.channel}>
                      <MessageList
                        messages={messages}
                        Attachment={Attachment}
                        Message={ChatMsg}
                      />
                    </Channel>
                  </StreamChat>
                </ResizableBox>
              </Chat>
            </Col>
          </Row>
        </Col>
      </Row>
    </Wrap>
  )
}
