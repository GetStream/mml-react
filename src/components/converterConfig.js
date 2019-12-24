import React from 'react'

import { Input } from './Input'
import { Button } from './Button'
import { ButtonList } from './ButtonList'
import { AddToCalendar } from './AddToCalendar'
import { Scheduler } from './Scheduler'
import { Text } from './Text'
import { MD } from './MD'
import { Row } from './Row'
import { Column } from './Column'
import { Image } from './Image'
import { Icon } from './Icon'
import { Carousel } from './Carousel'
import { CarouselItem } from './CarouselItem'
import { Number } from './Number'

/**
 * The converterConfig maps MML tags to react nodes
 * Every converter is passed the MML tag as well as the children (as React nodes)
 */
export const converterConfig = {
  button: tag => {
    return <Button text={tag.getText()} {...tag.node.attributes} />
  },
  buttonlist: (tag, children) => {
    return <ButtonList {...tag.node.attributes}>{children}</ButtonList>
  },
  input: tag => {
    return <Input {...tag.node.attributes} />
  },
  add_to_calendar: tag => {
    return <AddToCalendar {...tag.node.attributes} />
  },
  column: (tag, children) => {
    return <Column {...tag.node.attributes}>{children}</Column>
  },
  row: (tag, children) => {
    return <Row {...tag.node.attributes}>{children}</Row>
  },
  icon: tag => {
    return <Icon {...tag.node.attributes} />
  },
  image: tag => {
    return <Image {...tag.node.attributes} />
  },
  md: tag => {
    return <MD text={tag.getText()} {...tag.node.attributes} />
  },
  text: tag => {
    return <Text text={tag.getText()} {...tag.node.attributes} />
  },
  scheduler: tag => {
    return (
      <Scheduler
        interval={this.attr.interval}
        duration={this.attr.duration}
        full_day={this.attr.full_day}
        ical_availability={this.attr.ical_availability}
      />
    )
  },
  carousel: (tag, children) => {
    return <Carousel>{children}</Carousel>
  },
  item: (tag, children) => {
    return <CarouselItem>{children}</CarouselItem>
  },
  number: tag => {
    return <Number {...tag.node.attributes} />
  }
}
