import { getNodeText } from "../utils";
import React from "react";

export function Text(tagName, node, children) {
  const text = getNodeText(node);

  return <p>{text}</p>;
}
