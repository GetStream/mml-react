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
  const ctx = useContext(MMLContext) as MMLContextType;
  const count = (ctx[name] || 0) * 1;

  return (
    <div className="mml-number">
      <span className="mml-number__btn mml-number__btn--dec" onClick={() => ctx.setValue(name, count - 1)}>
        <Icon name="remove" />
      </span>
      <span className="mml-number__count">{count}</span>
      <span className="mml-number__btn mml-number__btn--inc" onClick={() => ctx.setValue(name, count + 1)}>
        <Icon name="add" />
      </span>
    </div>
  );
};
