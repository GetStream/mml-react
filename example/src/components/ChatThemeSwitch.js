import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const Wrap = styled.div`
  margin-top: -50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Label = styled.label`
  padding-right: 10px;
  font-size: 13px;
`

const Select = styled.select`
  height: 50px;
  display: block;
  padding: 0 10px;
  border: 1px solid transparent;
  background: transparent;
  font-size: 13px;

  &:focus {
    outline: none;
    border-top: 1px solid ${theme.primary};
  }
`

/**
 *
 * @param {*} param0
 */
export default function ChatThemeSwitch({ label, options, value, onChange }) {
  return (
    <Wrap>
      <Label>{label}</Label>
      <Select onChange={onChange} value={value}>
        {options.map(theme => (
          <option key={theme.value} value={theme.value}>
            {theme.name}
          </option>
        ))}
      </Select>
    </Wrap>
  )
}
