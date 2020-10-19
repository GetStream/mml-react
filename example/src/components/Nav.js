import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import { getQueryString } from './history'

const Tabs = styled.nav`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid ${theme.grey};
  margin-bottom: ${theme.gutter}px;
  font-family: ${theme.fontMonospace};
  font-size: 12px;

  ${theme.between(
    'md',
    'xl',
    `
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: ${theme.gutter}px;
  `
  )}
`

const Tab = styled.a`
  white-space: nowrap;
  padding: 10px 20px;
  border-bottom: 1px solid ${theme.grey};
  background: ${props => (props.active ? theme.primary : '#fff')};
  color: ${props => (props.active ? '#fff' : theme.primary)};
  cursor: ${props => (props.active ? 'default' : 'pointer')};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  text-decoration: none;

  &:focus {
    outline: none;
    text-decoration: underline;
    border-left: 2px solid ${theme.primary};
  }
  &:hover {
    background: ${props => (props.active ? '' : theme.grey)};
  }

  ${theme.between(
    'md',
    'xl',
    `
    flex: 1;
    border-right: 1px solid ${theme.grey};
    &:last-child {
      border-right: 0;
    }
  `
  )}
`

/**
 * Nav
 *
 * @param {object} props
 * @param {{ name: string }} props.items
 * @param {number} props.current
 * @param {(index: number) => any} props.onClick
 * @param {string} [props.linkParam]
 */
export function Nav({ items, current, onClick, linkParam }) {
  return (
    <Tabs>
      {items.map((item, idx) => (
        <Tab
          href={linkParam ? getQueryString(linkParam, idx) : ''}
          active={idx === current}
          key={idx + item.name}
          onClick={event => {
            event.preventDefault()
            onClick(idx)
          }}
        >
          {item.name}
        </Tab>
      ))}
    </Tabs>
  )
}
