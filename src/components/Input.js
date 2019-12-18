import React, { useContext } from "react";
import { MMLContext } from "../";

export function Input({ text, attributes, ...props }) {
  const mmlContext = useContext(MMLContext);

  return (
    <input
      {...attributes}
      onChange={() => mmlContext.handleAction(attributes)}
    />
  );
}
