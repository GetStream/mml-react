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
  overflow: Overflow,
  scheduler: Scheduler,
  select: Select,
  card: Card,
  carousel: Carousel,
  column: Column,
  item: Item,
  row: Row,
  separator: Separator,
  icon: Icon,
  image: Image,
  md: MD,
  text: Text,
  video: Video
};

export function getMMLTags() {
  return tags;
}
