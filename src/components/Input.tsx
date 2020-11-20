import React, { FC } from 'react';
import { MMLContext, MMLContextType } from '../context';

export type InputProps = {
  /** The name of the input */
  name: string;
  /** The placeholder of the input field */
  placeholder?: string;
};

/**
 * Text input element. Usually you'll want to rely on regular messages
 */
export const Input: FC<InputProps> = ({ name, placeholder }) => {
  const { [name]: value, setValue } = React.useContext(MMLContext) as MMLContextType;

  return (
    <input
      className="mml-input"
      value={value}
      placeholder={placeholder}
      onChange={(event) => setValue(name, event.target.value)}
    />
  );
};
