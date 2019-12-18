import React, { useContext } from "react";
import { MMLContext } from "../";

export function Number({ text, attributes, ...props }) {
  const mmlContext = useContext(MMLContext);

  return (
    <div className="mml-number">
      <span>-</span>3<span>+</span>
    </div>
  );
}
