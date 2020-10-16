import React from 'react'
import styled from 'styled-components'

import { examples } from '../../'
import theme, { GlobalStyle } from './theme'
import { Header } from './components/Header'
import { ExampleEditor } from './components/ExampleEditor'

import '../../dist/css/index.css'
import 'stream-chat-react/dist/css/index.css'

const Wrap = styled.div`
  flex: 1;
  width: 100%;
  max-width: ${theme.containerMax + theme.gutter * 10}px;
  margin: 0 auto;
  background: white;
`

function App() {
  const examplesList = Object.keys(examples).map(key => examples[key])

  return (
    <Wrap>
      <GlobalStyle />
      <Header />
      <ExampleEditor examples={examplesList} />
    </Wrap>
  )
}

export default App
