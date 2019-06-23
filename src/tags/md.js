import React from "react";
import { MMLTag } from "./base";
import { getNodeText } from "../utils";
import { MMLMarkdown } from "../components/MMLMarkdown";

export class MD extends MMLTag {
  toReact(rc) {
    const text = getNodeText(this.node);
    <MMLMarkdown source={text} />;
  }
}
