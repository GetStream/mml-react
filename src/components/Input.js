import React, { useContext } from 'react'
import { MMLContext } from './context'
import PropTypes from 'prop-types'

/**
 * Text input element. Usually you'll want to rely on regular messages
 */
export function Input({ name, placeholder, ...props }) {
  const mmlContext = useContext(MMLContext)

  const value = mmlContext[name]

  return (
    <input
      className="mml-input"
      value={value}
      placeholder={placeholder}
      onChange={event => mmlContext.setValue(name, event.target.value)}
    />
  )
}

Input.propTypes = {
  /** The name of the button */
  name: PropTypes.string.isRequired,
  /** The placeholder of the input field */
  placeholder: PropTypes.string
}
