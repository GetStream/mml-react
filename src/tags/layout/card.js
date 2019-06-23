import React from "react";
import { MMLTag } from "../base";

export class Card extends MMLTag {
  toReact(rc) {
    console.log("rendering card...");
    return <div class="mml-card">{this.childrenToReact(rc)}</div>;
  }
}
