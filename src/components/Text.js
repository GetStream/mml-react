import React, { useContext } from 'react'
import { MMLContext } from '../'

export function Text({ text, attributes, ...props }) {
  return <p {...attributes}>{text}</p>
}
