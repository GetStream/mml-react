import {
  AddToCalendar,
  ButtonList,
  Button,
  Input,
  Overflow,
  Scheduler,
  Number
} from './data'

import { Card, Carousel, Column, Item, Row, Separator } from './layout'

import { Icon } from './icon'
import { Image } from './image'
import { MD } from './md'
import { Text } from './text'
import { Video } from './video'

var tags = {
  add_to_calendar: AddToCalendar,
  buttonlist: ButtonList,
  button: Button,
  input: Input,
  scheduler: Scheduler,
  carousel: Carousel,
  column: Column,
  item: Item,
  row: Row,
  icon: Icon,
  image: Image,
  md: MD,
  text: Text,
  number: Number
}

export function getMMLTags() {
  return tags
}
