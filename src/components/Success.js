import React from "react";

export function Success({ success = "", ...props }) {
  if (success) {
    return <div className="mml-success">{success}</div>;
  }
  return null;
}
