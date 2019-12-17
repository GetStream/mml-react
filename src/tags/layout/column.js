import React from "react";
import { MMLTag } from "../base";

export class Column extends MMLTag {
  toReact(rc) {
    console.log("rendering column");
    const attr = this.node.attributes;
    const width = attr.width ? attr.width : 12;
    const offset = attr.offset ? attr.offset : 0;
    let classNames = `mml-col-${width}`;
    if (offset) {
      classNames = classNames + ` mml-offset-${offset}`;
    }

    const align = attr.align ? attr.align : "left";
    classNames = classNames + ` mml-align-${align}`;
    console.log("made it here");

    return <div className={classNames}>{this.childrenToReact(rc)}</div>;
  }
}