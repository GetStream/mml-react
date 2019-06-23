import React from "react";
import { MMLTag } from "./base";

export class Icon extends MMLTag {
  toReact(rc) {
    return <i class="material-icons">{this.attr.name}</i>;
  }
}
