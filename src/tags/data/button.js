import React from "react";
import { MMLDataTag } from "../base";

import { getNodeText } from "../../utils";

export class Button extends MMLDataTag {
  toReact(rc) {
    const text = getNodeText(this.node);

    return (
      <button
        className={`mml-btn`}
        type="submit"
        onClick={() => rc.handleAction(this.node.attributes)}
      >
        {text}
      </button>
    );
  }
}
