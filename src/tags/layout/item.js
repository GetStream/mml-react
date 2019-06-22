import { getNodeText } from "../../utils";
import React from "react";
import { MMLTag } from "../base";

export class Item extends MMLTag {
  toReact(rc) {
    return <div className="mml-carousel-item">{this.childrenToReact(rc)}</div>;
  }
}
