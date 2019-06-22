import React from "react";
import { MMLTag } from "../base";

export class Separator extends MMLTag {
  toReact(rc) {
    <hr className="mml-separator" />;
  }
}
