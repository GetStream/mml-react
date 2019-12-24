import React, { useContext } from 'react'
import { MMLContext } from './context'

export function Number({ attributes, ...props }) {
  const mmlContext = useContext(MMLContext)

  const name = attributes.name
  const count = mmlContext[name]

  return (
    <div className="mml-number">
      <span
        onClick={() => {
          mmlContext.changeValue(name, -1)
        }}
      >
        -
      </span>
      {count}
      <span
        onClick={() => {
          mmlContext.changeValue(name, +1)
        }}
      >
        +
      </span>
    </div>
  )
}
