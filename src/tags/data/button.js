import React from "react";
import { MMLTag } from "./base";

import { getNodeText } from "../utils";

export class Button extends MMLTag {
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
