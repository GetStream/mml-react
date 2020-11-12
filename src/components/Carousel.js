import React from 'react';
import PropTypes from 'prop-types';
import {
  CarouselProvider,
  Slider,
  // ButtonBack,
  // ButtonNext
} from 'pure-react-carousel';
import { CarouselItem } from './CarouselItem';
import 'pure-react-carousel/dist/react-carousel.es.css';

/**
 * A carousel is a nice mobile friendly way of letting a user select
 * something
 */
export function Carousel({ infinite, perView, perMove, autoHeight, slideWidth, slideHeight, children }) {
  const settings = {
    infinite,
    visibleSlides: perView,
    step: perMove,
    isIntrinsicHeight: autoHeight,
    naturalSlideWidth: slideWidth,
    naturalSlideHeight: slideHeight,
  };

  return (
    <div className="mml-carousel">
      <CarouselProvider className={'mml'} {...settings} totalSlides={React.Children.count(children)}>
        <Slider>{children}</Slider>
        {/* <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext> */}
      </CarouselProvider>
    </div>
  );
}

Carousel.defaultProps = {
  infinite: true,
  perView: 2.5,
  perMove: 1,
  autoHeight: true,
  slideWidth: 100,
  slideHeight: 125,
};

Carousel.propTypes = {
  /** Infinite loop */
  infinite: PropTypes.bool,
  /** Amount of slides per view */
  perView: PropTypes.number,
  /** Amount of slides per move */
  perMove: PropTypes.number,
  /** Auto caluclate slides' height */
  autoHeight: PropTypes.bool,
  /** Ideal slide width */
  slideWidth: PropTypes.number,
  /** Ideal slide height */
  slideHeight: PropTypes.number,
  /** A list of carousel items */
  children: PropTypes.oneOfType([PropTypes.arrayOf(CarouselItem), PropTypes.objectOf(CarouselItem)]),
};
