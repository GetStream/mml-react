import React from "react";
import { MMLTag } from "./base";
import { getNodeText } from "../utils";

export class MD extends MMLTag {
  toReact(rc) {
    const text = getNodeText(this.node);
    <MMLMarkdown source={text} />;
  }
}
