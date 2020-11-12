import { MMLDataTag, MMLTag } from './base';

export class AddToCalendar extends MMLTag {}

export class ButtonList extends MMLDataTag {}

export class Button extends MMLDataTag {}

export class Input extends MMLDataTag {
  initialState() {
    const data = {};
    data[this.node.attributes.name] = this.node.attributes.value;
    return data;
  }
}

export class Number extends MMLDataTag {
  initialState() {
    const data = {};
    data[this.node.attributes.name] = this.node.attributes.value;
    return data;
  }
}

export class Scheduler extends MMLDataTag {
  // TODO: implement initial state
}
