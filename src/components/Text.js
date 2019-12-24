import React from 'react'
import PropTypes from 'prop-types'

/**
 * Simple paragraph text element
 */
export function Text({ text, ...props }) {
  return <p className="mml-text">{text}</p>
}

Text.propTypes = {
  /** The text to render */
  text: PropTypes.string.isRequired
}
