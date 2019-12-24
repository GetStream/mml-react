import React, { useContext } from 'react'
import { MMLContext } from './context'

export function Input({ text, attributes, ...props }) {
  const mmlContext = useContext(MMLContext)

  return (
    <input
      {...attributes}
      onChange={() => mmlContext.handleAction(attributes)}
    />
  )
}
