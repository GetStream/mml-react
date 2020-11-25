import React, { FC, useState } from 'react';

export type InputProps = {
  /** The name of the input */
  name: string;
  /** Initial value of the input */
  value?: string;
  /** The placeholder of the input field */
  placeholder?: string;
};

/**
 * Text input element. Usually you'll want to rely on regular messages
 */
export const Input: FC<InputProps> = ({ name, value = '', placeholder = '' }) => {
  const [state, setState] = useState(value);

  return (
    <input
      className="mml-input"
      name={name}
      value={state}
      placeholder={placeholder}
      onChange={(event) => setState(event.target.value)}
    />
  );
};
