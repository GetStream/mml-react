import React, { useContext } from 'react'
import { MMLContext } from './context'
import { Icon } from './Icon'
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
        className="mml-number__btn mml-number__btn--dec"
        onClick={() => {
          mmlContext.changeValue(name, -1)
        }}
      >
        <Icon name="remove" />
      </span>
      <span className="mml-number__count">{count}</span>
      <span
        className="mml-number__btn mml-number__btn--inc"
        onClick={() => {
          mmlContext.changeValue(name, +1)
        }}
      >
        <Icon name="add" />
      </span>
    </div>
  )
}

Number.propTypes = {
  /** The name of the button */
  name: PropTypes.string.isRequired
}
