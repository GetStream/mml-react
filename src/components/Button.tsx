import React, { FC, SyntheticEvent } from 'react';
import { sanitizeUrl } from '@braintree/sanitize-url';

export type ButtonProps = {
  /** The text to display in the button */
  text: string;
  /** The name of the button */
  name?: string;
  /** The value of the button */
  value?: string;
  /** If the button should open a link use this prop */
  url?: string;
  /** Button style variant */
  variant?: 'floating';
};

/**
 * Button can be used to open a URL, submit the form or trigger a select when clicked
 */
export const Button: FC<ButtonProps> = ({ text, name, value, url = '', variant }) => {
  return (
    <button
      className={`mml-btn ${variant === 'floating' ? ' mml--floating' : ''}`}
      type={url ? 'button' : 'submit'}
      name={name}
      value={value}
      onClick={(event: SyntheticEvent) => {
        if (url) {
          event.preventDefault();
          window.location.href = sanitizeUrl(url);
        }
      }}
    >
      {text}
    </button>
  );
};
