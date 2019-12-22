import React, { useContext } from 'react'
import { MMLContext } from '../'

export function Row({ children, attributes, ...props }) {
  return (
    <div className="mml-row" {...attributes}>
      {children}
    </div>
  )
}
