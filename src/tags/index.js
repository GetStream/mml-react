import {
  AddToCalendar,
  ButtonList,
  Button,
  Input,
  Option,
  Overflow,
  Scheduler,
  Select
} from "./data";

import { Card, Carousel, Column, Item, Row, Separator } from "./layout";

import { Icon } from "./icon";
import { Image } from "./image";
import { MD } from "./md";
import { Text } from "./text";
import { Video } from "./video";

var tags = {
  add_to_calendar: AddToCalendar,
  buttonlist: ButtonList,
  button: Button,
  input: Input,
  option: Option,
  scheduler: Scheduler,
  select: Select,
  carousel: Carousel,
  column: Column,
  item: Item,
  row: Row,
  icon: Icon,
  image: Image,
  md: MD,
  text: Text
};

export function getMMLTags() {
  return tags;
}
