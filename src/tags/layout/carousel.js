import React from "react";
import { MMLTag } from "../base";
import { Carousel as CarouselComponent } from "../../components/Carousel";
import { getNodeText } from "../../utils";

export class Carousel extends MMLTag {
  toReact(rc) {
    const reactChildren = this.childrenToReact(rc);
    return <CarouselComponent items={reactChildren} />;
  }
}
