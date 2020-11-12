import React, { useContext, FC } from 'react';
import { MMLContext, MMLContextType } from '../context';
import { Icon } from './Icon';

export type NumberProps = {
  /** The name of the button */
  name: string;
};

/**
 * Mobile friendly number input
 */
export const Number: FC<NumberProps> = ({ name }) => {
  const { [name]: count, changeValue } = useContext(MMLContext) as MMLContextType;

  return (
    <div className="mml-number">
      <span className="mml-number__btn mml-number__btn--dec" onClick={() => changeValue(name, -1)}>
        <Icon name="remove" />
      </span>
      <span className="mml-number__count">{count}</span>
      <span className="mml-number__btn mml-number__btn--inc" onClick={() => changeValue(name, +1)}>
        <Icon name="add" />
      </span>
    </div>
  );
};
