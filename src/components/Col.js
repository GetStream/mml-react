import React from 'react';
import PropTypes from 'prop-types';

/**
 * A grid column
 * TODO: Consider renaming this element
 */
export function Col({ children, width, offset, align }) {
  let classNames = `mml-col-${width}`;
  if (offset) {
    classNames = classNames + ` mml-offset-${offset}`;
  }

  classNames = classNames + ` mml-align-${align}`;

  return <div className={classNames}>{children}</div>;
}

Col.defaultProps = {
  width: 12,
  offset: 0,
  align: 'left',
};

Col.propTypes = {
  /** The column children can be anything */
  children: PropTypes.node,
  /** The width of the column (grid is by default made of 12 columns, you can change it with scss variable `$mml-grid-columns`) */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // FIXME: the following is the correct propType but it does not work:
  // width: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
  /** The offset for the column */
  offset: PropTypes.number,
  /** Align horizontally */
  align: PropTypes.oneOf(['left', 'center', 'right']),
};
