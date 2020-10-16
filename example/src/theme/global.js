import { createGlobalStyle } from 'styled-components'
import { fontSans } from './variables'

// background: #f9f9f9;
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #0D1828;
    line-height: 1.26;
    font-size: 15px;
    font-family: ${fontSans};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    flex: 1;
  }
`
