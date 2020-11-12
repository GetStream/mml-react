import React from 'react';
import { Slide } from 'pure-react-carousel';
import PropTypes from 'prop-types';

/**
 * The only children of the Carousel are the carousel item.
 * A carousel item can contain any type of nodes, such as buttons, images etc.
 */
export function CarouselItem({ children, ...props }) {
  return <Slide className="mml-carousel-item mml-wrap">{children}</Slide>;
}

CarouselItem.propTypes = {
  /** The children of this carousel item */
  children: PropTypes.node,
};
