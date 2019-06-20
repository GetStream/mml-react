import { Button } from "./button";
import { Text } from "./text";

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
  }
};

export function register(tagMeta) {
  console.log("tagmeta", tagMeta, tags);
  tags[tagMeta.name] = tagMeta;
}

export function getMMLTags() {
  return tags;
}
