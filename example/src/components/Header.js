import React from 'react'
import styled from 'styled-components'
import { Row, ColCentered, Container } from './Grid'
import theme from '../theme'
import logo from '../assets/logo.svg'

const Wrap = styled(Container)`
  font-family: ${theme.fontMonospace};
`

const Logo = styled.a`
  padding: 50px 0;
  display: inline-block;
`

const Title = styled.h1`
  margin: 0;
  font-weight: 100;
`

const Desc = styled.p`
  max-width: 800px;
  font-size: 13px;
  line-height: 1.3;

  a {
    color: ${theme.primary};
  }
`
const Heading = styled.h3`
  text-transform: uppercase;
  letter-spacing: 1px;
`

export function Header() {
  return (
    <Wrap>
      <Row>
        <ColCentered>
          <Logo href="https://getstream.io">
            <img src={logo} alt="Stream logo" />
          </Logo>
        </ColCentered>
        <ColCentered>
          <Title>MML 1.0: Rich Messaging - Preview tool</Title>
        </ColCentered>
      </Row>
      <Desc>
        Message Markup Language (MML) enables cross platform interactive
        messaging and chat. User have grown accustomed to powerful messaging
        capabilities from tools such as Slack. MML gives developers the power to
        quickly build cross platform rich messaging experiences. It works
        particularly well if you combine it with chat bots and AI. Here are some
        examples of what you can build. For more information visit{' '}
        <a href="https://getstream.io/chat/mml/">
          the MML Homepage for Rich messaging Chat
        </a>
      </Desc>
      <Heading>What you can build</Heading>
    </Wrap>
  )
}
