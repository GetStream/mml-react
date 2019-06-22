import React from "react";
import { MMLTag } from "./base";

export class Card extends MMLTag {
  toReact(rc) {
    <div class="mml-card">{this.reactChildren(rc)}</div>;
  }
}
