import React, { FC, ReactNode } from 'react';
import { Slide } from 'pure-react-carousel';

export type CarouselItemProps = {
  /** The error message */
  children?: ReactNode;
};

/**
 * The only children of the Carousel are the carousel item.
 * A carousel item can contain any type of nodes, such as buttons, images etc.
 */
export const CarouselItem: FC<CarouselItemProps> = ({ children }) => {
  //TODO: index should come from parser as prop
  return (
    <Slide index={0} className="mml-carousel-item">
      {children}
    </Slide>
  );
};
