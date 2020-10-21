import React from 'react'
import PropTypes from 'prop-types'
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel'
import { CarouselItem } from './CarouselItem'
import 'pure-react-carousel/dist/react-carousel.es.css'

/**
 * A carousel is a nice mobile friendly way of letting a user select
 * something
 */
export function Carousel({ children, ...props }) {
  const settings = {
    infinite: false,
    visibleSlides: 2.5,
    step: 1
  }

  return (
    <div className="mml-carousel">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={React.Children.count(children)}
        className={'mml'}
        {...settings}
      >
        <Slider>{children}</Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
      {/* <Slider {...settings}>{children}</Slider> */}
    </div>
  )
}

Carousel.propTypes = {
  /** A list of carousel items */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(CarouselItem),
    PropTypes.objectOf(CarouselItem)
  ])
}
