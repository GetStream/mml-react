import React, { useContext } from 'react'

export function Row({ children, attributes, ...props }) {
  return (
    <div className="mml-row" {...attributes}>
      {children}
    </div>
  )
}
