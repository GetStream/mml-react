import React from "react";
import { MMLTag } from "./base";
import ReactPlayer from "react-player";

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
