import React from "react";
import { MMLTag } from "../base";

export class ButtonList extends MMLTag {
  toReact(rc) {
    <div class="mml-selectlist">{this.childrenToReact(rc)}</div>;
  }
}
