import React from 'react';
import PropTypes from 'prop-types';

export function CardBody({ className, children }) {
  return <div className={`mml-card-body ${className || ''}`}>{children}</div>;
}

CardBody.propTypes = {
  /** Additional card class name */
  className: PropTypes.string,
};
