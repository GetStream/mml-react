import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './Icon'

export function CardHeader({ text, icon, className }) {
  return (
    <div className={`mml-card-header ${className || ''}`}>
      {icon && <Icon name={icon} />}
      <span className="mml-card-header__text">{text}</span>
    </div>
  )
}

CardHeader.propTypes = {
  /** Header text */
  text: PropTypes.string.isRequired,
  /** The name of the material icon, see https://material.io/resources/icons/ */
  icon: PropTypes.string,
  /** Additional card class name */
  className: PropTypes.string
}
