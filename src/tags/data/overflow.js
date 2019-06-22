import React from "react";
import { MMLTag } from "./base";

export class Overflow extends MMLTag {
  toReact(rc) {
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenu2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        ...
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
        {this.childrenToReact(rc)}
      </div>
    </div>;
  }
}
