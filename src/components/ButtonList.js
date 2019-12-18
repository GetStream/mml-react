import React, { useContext } from "react";
import { MMLContext } from "../";

export function ButtonList({ attributes, children, ...props }) {
  const mmlContext = useContext(MMLContext);

  return <div class="mml-selectlist">{children}</div>;
}
