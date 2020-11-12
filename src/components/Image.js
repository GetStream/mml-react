import React from 'react';
import PropTypes from 'prop-types';

export function Image({ src, alt, title, ...props }) {
  return <img className="mml-image" src={src} alt={alt} title={title} />;
}

Image.propTypes = {
  /** The url to load the image from */
  src: PropTypes.string.isRequired,
  /** The alt tag for the image */
  alt: PropTypes.string,
  /** The title tag for the image */
  title: PropTypes.string,
};
