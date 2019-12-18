import React, { useContext } from "react";
import { MMLContext } from "../";

export function Icon({ attributes, ...props }) {
  return <i class="material-icons">{attributes.name}</i>;
}
