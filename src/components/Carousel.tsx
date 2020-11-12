import React, { FC, ReactElement } from 'react';
import { CarouselProvider, Slider } from 'pure-react-carousel';
import { CarouselItemProps } from './CarouselItem';

// TODO: remove css and import it in scss file if necessary
import 'pure-react-carousel/dist/react-carousel.es.css';

export type CarouselProps = {
  /** Infinite loop */
  infinite?: boolean;
  /** Amount of slides per view */
  perView?: number;
  /** Amount of slides per move */
  perMove?: number;
  /** Auto calculate slides' height */
  autoHeight?: boolean;
  /** Ideal slide width */
  slideWidth?: number;
  /** Ideal slide height */
  slideHeight?: number;
  /** A list of carousel items */
  children?: ReactElement<CarouselItemProps>[] | ReactElement<CarouselItemProps>;
};

/**
 * A carousel is a nice mobile friendly way of letting a user select
 * something
 */
export const Carousel: FC<CarouselProps> = ({
  infinite = true,
  perView = 2.5,
  perMove = 1,
  autoHeight = true,
  slideWidth = 100,
  slideHeight = 125,
  children,
}) => {
  return (
    <div className="mml-carousel">
      <CarouselProvider
        className="mml"
        infinite={infinite}
        visibleSlides={perView}
        step={perMove}
        isIntrinsicHeight={autoHeight}
        naturalSlideWidth={slideWidth}
        naturalSlideHeight={slideHeight}
        totalSlides={React.Children.count(children)}
      >
        <Slider>{children}</Slider>
      </CarouselProvider>
    </div>
  );
};
