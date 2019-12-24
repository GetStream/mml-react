import {
  AddToCalendar,
  ButtonList,
  Button,
  Input,
  Scheduler,
  Number
} from './data'

import { Carousel, Column, Item, Row } from './layout'

import { Icon, Image, MD, Text } from './core'

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
