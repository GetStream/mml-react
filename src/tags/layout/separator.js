import React from "react";
import { MMLTag } from "../base";

export class Separator extends MMLTag {
  toReact(rc) {
    return <hr className="mml-separator" />;
  }
}
