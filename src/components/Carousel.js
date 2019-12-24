import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

import { CarouselItem } from './CarouselItem'

/**
 * A carousel is a nice mobile friendly way of letting a user select
 * something
 */
export function Carousel({ children, ...props }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }

  return (
    <div className="mml-carousel">
      <Slider {...settings}>{children}</Slider>
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
