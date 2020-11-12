import React from 'react';
import PropTypes from 'prop-types';
import { LoadingIndicator } from 'stream-chat-react/dist/index.es';

/**
 * Loading indicator for MML
 */
export function Loader({ loading, text, ...props }) {
  if (loading) {
    return (
      <div className="mml-loader">
        <LoadingIndicator />
        {text && <div className="mml-loader__text">{text}</div>}
      </div>
    );
  }
  return null;
}

Loader.defaultProps = {
  loading: false,
};

Loader.propTypes = {
  /** Loading boolean */
  loading: PropTypes.bool,
  /** Loading text */
  text: PropTypes.string,
};
