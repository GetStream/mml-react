import React from 'react'
import PropTypes from 'prop-types'

export function Icon({ name, ...props }) {
  return <i className="material-icons">{name}</i>
}

Icon.propTypes = {
  /** The name of the material icon, see https://material.io/resources/icons/ */
  name: PropTypes.string.isRequired
}
