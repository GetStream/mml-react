import React from "react";
import { MMLTag } from "./base";
import { getNodeText } from "../utils";

export class Option extends MMLTag {
  toReact(rc) {
    const text = getNodeText(this.node);
    <option value={this.attr.value}>{text}</option>;
  }
}
