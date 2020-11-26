import React, { FC, SyntheticEvent } from 'react';
import { sanitizeUrl } from '@braintree/sanitize-url';

import { Icon } from './Icon';

export type ButtonProps = {
  /** Additional button class name */
  className?: string;
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
  /** Optional button icon name to display besides the text (from [material icons](https://material.io/resources/icons/)) */
  icon?: string;
};

/**
 * A simple Button
 */
export const Button: FC<ButtonProps> = ({ className = '', text, name, value, url = '', variant, icon }) => {
  // TODO: fix submit handler for Button list
  if (icon) {
    className += text ? ' mml-btn--with-icon' : ' mml-btn--icon';
  } else {
    className += ' mml-btn--text';
  }
  if (variant === 'floating') {
    className += ' mml--floating';
  }

  return (
    <button
      className={`mml-btn ${className}`}
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
      {icon && <Icon name={icon} />}
      {text}
    </button>
  );
};
