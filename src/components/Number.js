import React, { useContext } from 'react'
import { MMLContext } from './context'
import PropTypes from 'prop-types'

/**
 * Mobile friendly number input
 */
export function Number({ name, ...props }) {
  const mmlContext = useContext(MMLContext)

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

Number.propTypes = {
  /** The name of the button */
  name: PropTypes.string.isRequired
}
