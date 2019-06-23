import React from "react";
import { MMLTag } from "./base";
import { getNodeText } from "../utils";

export class Text extends MMLTag {
  // return a react node for this mml tag
  toReact(rn) {
    const text = getNodeText(this.node);
    return <p>{text}</p>;
  }
}
