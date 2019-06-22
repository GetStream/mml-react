import React from "react";
import { MMLTag } from "../base";

export class Select extends MMLTag {
  toReact(rc) {
    <select {...this.attr} onChange={rc.handleActionode.bind(rc, this.attr)}>
      {this.reactChildren(rc)}
    </select>;
  }
}
