import React from "react";
import { MMLTag } from "./base";

export class Video extends MMLTag {
  toReact(rc) {
    return (
      <ReactPlayer
        className="react-player"
        url={this.attr.src}
        width="100%"
        controls
      />
    );
  }
}
