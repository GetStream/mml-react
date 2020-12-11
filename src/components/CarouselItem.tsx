import React, { FC, ReactNode } from 'react';
import { CarouselProps } from './Carousel';

export type CarouselItemProps = {
  /**
   * The carousel item inner components can contain any type of nodes, such as buttons, images, etc.
   */
  children?: ReactNode;
  /**
   * Determines the slide width, by default it uses a minWidth set by SCSS variable `$mml-carousel__item-min-width`.
   * Despite the set width slides automatically expands independently from each other if their content is larger.
   *
   * It can be set to either a percentage, e.g. `width="40%"` or to a pixel based value `width="200px"`.
   *
   * @default 'SCSS: $mml-carousel__item-min-width: 120px'
   */
  width?: string;
  /**
   * Additional carousel item class name
   */
  className?: string;
} & Pick<CarouselProps, 'slideWidth'>;

/**
 * A carousel item
 */
export const CarouselItem: FC<CarouselItemProps> = ({ children, slideWidth, width, className = '' }) => {
  const minWidth = width || slideWidth;
  return (
    <div className={`mml-carousel-item ${className}`} style={{ minWidth }}>
      {children}
    </div>
  );
};
