import React from "react";
import { MMLTag } from "../base";

export class Row extends MMLTag {
  toReact(rc) {
    return <div className="mml-row">{this.childrenToReact(rc)}</div>;
  }
}