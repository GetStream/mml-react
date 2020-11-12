import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';

/**
 * A list of buttons
 */
export function ButtonList({ children, variant }) {
  return <div className={'mml-btnlist' + (variant === 'floating' ? ' mml--floating' : '')}>{children}</div>;
}

ButtonList.propTypes = {
  /** A list of buttons */
  children: PropTypes.oneOfType([PropTypes.arrayOf(Button), PropTypes.objectOf(Button)]),
  /** Button style variant */
  variant: PropTypes.oneOf(['floating']),
};
