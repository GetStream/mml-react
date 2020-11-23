import React, { ReactElement } from 'react';

import { MMLTag } from './MMLTag';
import {
  AddToCalendar,
  Button,
  ButtonList,
  Carousel,
  CarouselItem,
  Col,
  Icon,
  Image,
  Input,
  MD,
  Scheduler,
  Text,
  Row,
  Number,
} from '../components';

export type ConvertorType = (tag: MMLTag, children?: ReactElement[]) => ReactElement;

/**
 * The converters maps MML tags to react nodes
 * Every converter is passed the MML tag as well as the children (as React nodes)
 */
export const converters = {
  button: (tag: MMLTag) => {
    return <Button key={tag.key} text={tag.getText()} name={tag.attributes.name} {...tag.attributes} />;
  },
  button_list: (tag: MMLTag, children?: JSX.Element[]) => {
    return (
      <ButtonList key={tag.key} {...tag.attributes}>
        {children}
      </ButtonList>
    );
  },
  input: (tag: MMLTag) => {
    return <Input key={tag.key} name={tag.attributes.name} {...tag.attributes} />;
  },
  add_to_calendar: (tag: MMLTag) => {
    return (
      <AddToCalendar
        key={tag.key}
        title={tag.attributes.title}
        start={tag.attributes.start}
        end={tag.attributes.end}
        {...tag.attributes}
      />
    );
  },
  col: (tag: MMLTag, children?: JSX.Element[]) => {
    return (
      <Col key={tag.key} {...tag.attributes}>
        {children}
      </Col>
    );
  },
  row: (tag: MMLTag, children?: JSX.Element[]) => {
    return (
      <Row key={tag.key} {...tag.attributes}>
        {children}
      </Row>
    );
  },
  icon: (tag: MMLTag) => {
    return <Icon key={tag.key} name={tag.attributes.name} {...tag.attributes} />;
  },
  image: (tag: MMLTag) => {
    return <Image key={tag.key} src={tag.attributes.src} {...tag.attributes} />;
  },
  md: (tag: MMLTag) => {
    return <MD key={tag.key} text={tag.getText()} {...tag.attributes} />;
  },
  text: (tag: MMLTag) => {
    return <Text key={tag.key} text={tag.getText()} {...tag.attributes} />;
  },
  scheduler: (tag: MMLTag) => {
    return (
      <Scheduler
        key={tag.key}
        interval={parseInt(tag.attributes.interval, 10)}
        duration={parseInt(tag.attributes.duration, 10)}
        selected={tag.attributes.selected}
        full_day={tag.attributes.full_day === 'true'}
        ical_availability={tag.attributes.ical_availability}
      />
    );
  },
  carousel: (tag: MMLTag, children?: JSX.Element[]) => {
    return <Carousel key={tag.key}>{children}</Carousel>;
  },
  item: (tag: MMLTag, children?: JSX.Element[]) => {
    return <CarouselItem key={tag.key}>{children}</CarouselItem>;
  },
  number: (tag: MMLTag) => {
    return <Number key={tag.key} name={tag.attributes.name} {...tag.attributes} />;
  },
};
