import React from 'react'
import PropTypes from 'prop-types'

import { Column } from './Column'

export function Row({ children, ...props }) {
  return <div className="mml-row">{children}</div>
}

Row.propTypes = {
  /** The children of a row must be columns */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(Column),
    PropTypes.objectOf(Column)
  ])
}
