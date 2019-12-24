import React from 'react'

import { Input } from './Input'
import { Button } from './Button'
import { ButtonList } from './ButtonList'
import { Calendar } from './Calendar'
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

export const converterConfig = {
  button: tag => {
    return <Button text={tag.getText()} {...tag.node.attributes} />
  },
  buttonlist: tag => {
    const children = this.childrenToReact(tag)
    return <ButtonList {...tag.node.attributes}>{children}</ButtonList>
  },
  input: tag => {
    return <Input attributes={tag.node.attributes} />
  },
  add_to_calendar: tag => {
    return <Calendar attributes={tag.node.attributes} />
  },
  column: tag => {
    const children = this.childrenToReact(tag)
    return <Column attributes={tag.node.attributes} children={children} />
  },
  row: tag => {
    const children = this.childrenToReact(tag)
    return <Row attributes={tag.node.attributes} children={children} />
  },
  icon: tag => {
    return <Icon {...tag.node.attributes} />
  },
  image: tag => {
    return <Image {...tag.node.attributes} />
  },
  md: tag => {
    return <MD text={tag.getText()} attributes={tag.node.attributes} />
  },
  text: tag => {
    return <Text text={tag.getText()} attributes={tag.node.attributes} />
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
  carousel: tag => {
    const children = this.childrenToReact(tag)
    return <Carousel children={children} />
  },
  item: tag => {
    const children = this.childrenToReact(tag)
    return <CarouselItem children={children} />
  },
  number: tag => {
    return <Number attributes={tag.node.attributes} />
  }
}
