import styled from 'styled-components'
import { gutter, breakpoints, containerMax, above } from '../theme'

export const Container = styled.div`
  width: 100%;
  max-width: ${containerMax}px;
  margin: 0 auto;
  padding-left: ${gutter}px;
  padding-right: ${gutter}px;
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 100%;
  margin-left: -${gutter}px;
  margin-right: -${gutter}px;
`

export const Col = styled.div`
  padding-left: ${gutter}px;
  padding-right: ${gutter}px;
  ${({ alignV }) => (alignV ? 'align-items: ' + alignV : '')};
  ${({ alignH }) => (alignH ? 'justify-content: ' + alignH : '')};

  ${props => {
    let output = ''
    for (const name in breakpoints) {
      if (typeof props[name] !== 'undefined') {
        output += above(name, colWidth(props[name]))
      }
    }

    return output
  }}
`

export const ColCentered = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

/**
 * Column width
 *
 * @param {string | number | "auto"} width
 */
function colWidth(width) {
  if (width === 'auto') {
    return `
      min-width: 0;
      flex: 1;
    `
  }

  return `
    min-width: ${typeof width === 'number' ? width + '%' : width};
    flex: 0 0 ${typeof width === 'number' ? width + '%' : width};
  `
}
