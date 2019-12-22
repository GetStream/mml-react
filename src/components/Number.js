import React, { useContext } from "react";
import { MMLContext } from "../";
import { useMML } from "./MML";

export function Number({ attributes, ...props }) {
  const mmlContext = useContext(MMLContext);
  const [state, setState] = useMML();

  console.log("Number attributes", attributes, state);

  function changeScore(delta) {
    const newState = { ...state };
    const currentCount = newState[attributes.name] || 0;
    newState[attributes.name] = currentCount + delta;
    setState(newState);
  }

  const count = state[attributes.name];

  return (
    <div className="mml-number">
      <span
        onClick={() => {
          changeScore(-1);
        }}
      >
        -
      </span>
      {count}
      <span
        onClick={() => {
          changeScore(+1);
        }}
      >
        +
      </span>
    </div>
  );
}
