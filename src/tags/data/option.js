import React from "react";
import { MMLDataTag } from "../base";
import { getNodeText } from "../../utils";

export class Option extends MMLDataTag {
  toReact(rc) {
    const text = getNodeText(this.node);
    return <option value={this.attr.value}>{text}</option>;
  }
}
