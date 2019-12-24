import React from 'react'
import PropTypes from 'prop-types'

export function Image({ src, ...props }) {
  return <img className="mml-image" src={src} />
}

Image.propTypes = {
  /** The url to load the image from */
  src: PropTypes.string.isRequired
}
