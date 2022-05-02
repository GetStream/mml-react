import React, { PropsWithChildren } from 'react';

export type CardBodyProps = {
  /** Additional card class name */
  className?: string;
};

export const CardBody = ({ className = '', children }: PropsWithChildren<CardBodyProps>) => {
  return <div className={`mml-card-body ${className}`}>{children}</div>;
};
