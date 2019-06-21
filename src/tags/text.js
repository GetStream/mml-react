import { getNodeText } from "../utils";
import React from "react";
import { MMLTag } from "./base";

export class Text extends MMLTag {
  // return a react node for this mml tag
  toReact(rn) {
    const text = getNodeText(this.node);
    console.log("text", text, this.node);
    return <p>{text}</p>;
  }
}
