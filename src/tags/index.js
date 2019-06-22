import { Button } from "./button";
import { Text } from "./text";
import { CarouselTag } from "./carousel";
import { Input } from "./input";

import { Item } from "./item";

var tags = {
  button: Button,
  text: Text,
  carousel: CarouselTag,
  item: Item,
  input: Input
};

export function getMMLTags() {
  return tags;
}
