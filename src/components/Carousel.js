import React from 'react'

import Slider from 'react-slick'

export function Carousel({ children, attributes, ...props }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }

  return (
    <div className="mml-carousel">
      <Slider {...settings} {...attributes}>
        {children}
      </Slider>
    </div>
  )
}
