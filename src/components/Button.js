import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MMLContext } from '../context';
import { sanitizeUrl } from '@braintree/sanitize-url';

/**
 * A simple Button
 */
export function Button({ text, name, value, url, variant }) {
  const mmlContext = useContext(MMLContext);

  function onClick(event) {
    event.preventDefault();
    if (url) {
      window.location.href = sanitizeUrl(url);
    } else {
      mmlContext.setValue(name, value);
    }
  }

  return (
    <button className={'mml-btn' + (variant === 'floating' ? ' mml--floating' : '')} type="submit" onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  /** The text to display in the button */
  text: PropTypes.string.isRequired,
  /** The name of the button */
  name: PropTypes.string,
  /** The value of the button */
  value: PropTypes.string,
  /** The url to open */
  url: PropTypes.string,
  /** Button style variant */
  variant: PropTypes.oneOf(['floating']),
};
