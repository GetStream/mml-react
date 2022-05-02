import React, { PropsWithChildren } from 'react';

export type CardProps = {
  /** Additional card class name */
  className?: string;
};

export const Card = ({ className = '', children }: PropsWithChildren<CardProps>) => {
  return <div className={`mml-card ${className}`}>{children}</div>;
};
