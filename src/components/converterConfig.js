import React from 'react';

import { Input } from './Input';
import { Button } from './Button';
import { ButtonList } from './ButtonList';
import { AddToCalendar } from './AddToCalendar';
import { Scheduler } from './Scheduler';
import { Text } from './Text';
import { MD } from './MD';
import { Row } from './Row';
import { Col } from './Col';
import { Image } from './Image';
import { Icon } from './Icon';
import { Carousel } from './Carousel';
import { CarouselItem } from './CarouselItem';
import { Number } from './Number';

/**
 * The converterConfig maps MML tags to react nodes
 * Every converter is passed the MML tag as well as the children (as React nodes)
 */
export const converterConfig = {
  button: function Button(tag) {
    return <Button text={tag.getText()} {...tag.node.attributes} key={tag.key} />;
  },
  button_list: function ButtonList(tag, children) {
    return (
      <ButtonList key={tag.key} {...tag.node.attributes}>
        {children}
      </ButtonList>
    );
  },
  input: function Input(tag) {
    return <Input key={tag.key} {...tag.node.attributes} />;
  },
  add_to_calendar: function AddToCalendar(tag) {
    return <AddToCalendar key={tag.key} {...tag.node.attributes} />;
  },
  col: function Col(tag, children) {
    return (
      <Col key={tag.key} {...tag.node.attributes}>
        {children}
      </Col>
    );
  },
  row: function Row(tag, children) {
    return (
      <Row key={tag.key} {...tag.node.attributes}>
        {children}
      </Row>
    );
  },
  icon: function Icon(tag) {
    return <Icon key={tag.key} {...tag.node.attributes} />;
  },
  image: function Image(tag) {
    return <Image key={tag.key} {...tag.node.attributes} />;
  },
  md: function MD(tag) {
    return <MD key={tag.key} text={tag.getText()} {...tag.node.attributes} />;
  },
  text: function Text(tag) {
    return <Text key={tag.key} text={tag.getText()} {...tag.node.attributes} />;
  },
  scheduler: function Scheduler(tag) {
    return (
      <Scheduler
        key={tag.key}
        interval={tag.node.attributes.interval}
        duration={tag.node.attributes.duration}
        full_day={tag.node.attributes.full_day}
        ical_availability={tag.node.attributes.ical_availability}
      />
    );
  },
  carousel: function Carousel(tag, children) {
    return <Carousel key={tag.key}>{children}</Carousel>;
  },
  item: function CarouselItem(tag, children) {
    return <CarouselItem key={tag.key}>{children}</CarouselItem>;
  },
  number: function Number(tag) {
    return <Number key={tag.key} {...tag.node.attributes} />;
  },
};
