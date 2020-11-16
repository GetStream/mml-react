import { MMLTag, MMLDataTag } from './base';

class Carousel extends MMLTag {}

class Item extends MMLTag {}

class Row extends MMLTag {}

class Col extends MMLTag {}

class Image extends MMLTag {}

class MD extends MMLTag {}

class Text extends MMLTag {}

class Icon extends MMLTag {}

class AddToCalendar extends MMLTag {}

class ButtonList extends MMLDataTag {}

class Button extends MMLDataTag {}

class Scheduler extends MMLDataTag {}

class Input extends MMLDataTag {
  initialState() {
    const { name, value } = this.attributes;
    if (name) return { [name]: value };
    return {};
  }
}

class Number extends MMLDataTag {
  initialState() {
    const { name, value } = this.attributes;
    if (name) return { [name]: value };
    return {};
  }
}

export const tags = {
  add_to_calendar: AddToCalendar,
  button_list: ButtonList,
  button: Button,
  input: Input,
  scheduler: Scheduler,
  carousel: Carousel,
  col: Col,
  item: Item,
  row: Row,
  icon: Icon,
  image: Image,
  md: MD,
  text: Text,
  number: Number,
};
