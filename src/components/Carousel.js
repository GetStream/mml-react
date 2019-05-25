import React from "react";

import Slider from "react-slick";

export class Carousel extends React.Component {
  render() {
    console.log("this.props.items", this.props.items);
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="mml-carousel">
        <Slider {...settings}>{this.props.items}</Slider>
      </div>
    );
  }
}
