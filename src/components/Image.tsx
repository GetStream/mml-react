import React, { FC } from 'react';

export type ImageProps = {
  /** The url to load the image from */
  src: string;
  /** The alt tag for the image */
  alt?: string;
  /** The title tag for the image */
  title?: string;
};

export const Image: FC<ImageProps> = ({ src, alt = '', title = '' }) => {
  return <img className="mml-image" src={src} alt={alt} title={title} />;
};
