import React from 'react';
import PropTypes from 'prop-types';

export function Success({ success, ...props }) {
  if (success) {
    return <div className="mml-success">{success}</div>;
  }
  return null;
}

Success.propTypes = {
  /** The success message */
  success: PropTypes.string,
};
