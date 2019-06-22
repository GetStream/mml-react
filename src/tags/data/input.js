import React from "react";
import { MMLDataTag } from "../base";

export class Input extends MMLDataTag {
  static validChildren = null;
  static validAttributes = { name: true, value: true };
  static requiredAttributes = ["name"];

  initialState() {
    const data = {};
    console.log("called", this.node.attributes);
    data[this.node.attributes.name] = this.node.attributes.value;
    return data;
  }

  toReact(rc) {
    return (
      <input
        {...this.node.attributes}
        onChange={rc.handleAction.bind(rc, this.node.attributes)}
      />
    );
  }
}
