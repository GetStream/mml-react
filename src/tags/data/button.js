import React, { useContext } from "react";
import { MMLDataTag } from "../base";
import { MMLContext } from "../../";

import { getNodeText } from "../../utils";

export class Button extends MMLDataTag {}

export function ButtonInner({ text, attributes, ...props }) {
  const mmlContext = useContext(MMLContext);
  console.log("MMLContext", mmlContext, MMLContext);

  return (
    <button
      className={`mml-btn`}
      type="submit"
      onClick={() => mmlContext.handleAction(attributes)}
    >
      {text}
    </button>
  );
}
