import React, { useContext } from 'react'
import { MMLContext } from '../'

export function Icon({ attributes, ...props }) {
  return <i className="material-icons">{attributes.name}</i>
}
