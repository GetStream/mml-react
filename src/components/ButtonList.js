import React from 'react'
import PropTypes from 'prop-types'

/**
 * A list of buttons
 */
export function ButtonList({ children, ...props }) {
  return <div className="mml-selectlist">{children}</div>
}

ButtonList.propTypes = {
  /** A list of buttons */
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}
