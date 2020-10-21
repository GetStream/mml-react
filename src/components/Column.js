import React from 'react'
import PropTypes from 'prop-types'

/**
 * A table Column
 * TODO: Consider renaming this element
 */
export function Column({ children, width = 12, offset = 0, align = 'left' }) {
  let classNames = `mml-col-${width}`
  if (offset) {
    classNames = classNames + ` mml-offset-${offset}`
  }

  classNames = classNames + ` mml-align-${align}`

  return <div className={classNames}>{children}</div>
}

Column.propTypes = {
  /** The column children can be anything */
  children: PropTypes.node,
  /** The width of the column */
  width: PropTypes.oneOf([PropTypes.number, 'auto']),
  /** The offset for the column */
  offset: PropTypes.number,

  /** Align either left or right */
  align: PropTypes.oneOf(['left', 'center', 'right'])
}
