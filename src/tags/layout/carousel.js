import React from "react";
import { MMLTag } from "../base";
import { Carousel } from "../../components/Carousel";
import { getNodeText } from "../../utils";

export class CarouselTag extends MMLTag {
  toReact(rc) {
    const reactChildren = this.childrenToReact(rc);
    console.log("caorusel reactChildren", reactChildren, this.children);
    return <Carousel items={reactChildren} />;
  }
}
