import React from "react";
import { MMLDataTag } from "../base";

export class ButtonList extends MMLDataTag {
  toReact(rc) {
    return <div class="mml-selectlist">{this.childrenToReact(rc)}</div>;
  }
}