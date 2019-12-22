import React, { useContext } from 'react'
import { MMLContext } from '../'

export function Image({ attributes, ...props }) {
  return <img className="mml-image" {...attributes} />
}
