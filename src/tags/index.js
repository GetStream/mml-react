import { Button } from "./button";
import { Text } from "./text";
import { CarouselTag } from "./carousel";
import { Input } from "./input";

import { Item } from "./item";

var tags = {
  button: {
    name: "button",
    constructor: Button,
    children: [],
    attributes: ["name", "value"]
  },
  text: {
    name: "text",
    constructor: Text,
    children: [],
    attributes: []
  },
  carousel: {
    name: "carousel",
    constructor: CarouselTag,
    children: ["item"],
    attributes: []
  },
  item: {
    name: "item",
    constructor: Item,
    children: ["all-except-self"],
    attributes: []
  },
  input: {
    name: "input",
    constructor: Input,
    children: ["all-except-self"],
    attributes: []
  }
};

export function register(tagMeta) {
  console.log("tagmeta", tagMeta, tags);
  tags[tagMeta.name] = tagMeta;
}

export function getMMLTags() {
  return tags;
}
