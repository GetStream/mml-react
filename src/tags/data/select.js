import React from "react";
import { MMLDataTag } from "../base";

export class Select extends MMLDataTag {
  toReact(rc) {
    <select {...this.attr} onChange={rc.handleActionode.bind(rc, this.attr)}>
      {this.reactChildren(rc)}
    </select>;
  }
}
