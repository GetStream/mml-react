import React, { FC, SyntheticEvent } from 'react';
import { sanitizeUrl } from '@braintree/sanitize-url';

export type ButtonProps = {
  /** The text to display in the button */
  text: string;
  /** The name of the button */
  name?: string;
  /** The value of the button */
  value?: string;
  /** The url to open */
  url?: string;
  /** Button style variant */
  variant?: 'floating';
};

/**
 * A simple Button
 */
export const Button: FC<ButtonProps> = ({ text, name, value, url = '', variant }) => {
  // TODO: fix submit handler for Button list
  return (
    <button
      className={`mml-btn ${variant === 'floating' ? ' mml--floating' : ''}`}
      type="submit"
      name={name}
      value={value}
      onClick={(event: SyntheticEvent) => {
        if (url) {
          window.location.href = sanitizeUrl(url);
          return event.preventDefault();
        }
      }}
    >
      {text}
    </button>
  );
};
