import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { MMLContext } from './context'

/**
 * A simple Button
 */
export function Button({ text, name, value, ...props }) {
  const mmlContext = useContext(MMLContext)

  return (
    <button
      className="mml-btn"
      type="submit"
      onClick={() => mmlContext.setValue(name, value)}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  /** The text to display in the button */
  text: PropTypes.string.isRequired,
  /** The name of the button */
  name: PropTypes.string.isRequired,
  /** The value of the button */
  value: PropTypes.string.isRequired
}
