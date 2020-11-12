import React from 'react';
import PropTypes from 'prop-types';

export function Error({ error = '', ...props }) {
  if (error) {
    return <span className="mml-error">{error}</span>;
  }
  return null;
}

Error.propTypes = {
  /** The error message */
  error: PropTypes.string,
};
