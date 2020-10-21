import React from 'react'
import PropTypes from 'prop-types'

export function Card({ className, children }) {
  return <div className={`mml-card ${className || ''}`}>{children}</div>
}

Card.propTypes = {
  /** Additional card class name */
  className: PropTypes.string
}
