import React, { FC } from 'react';
import Progress, { ProgressProps } from './Progress';

export type LoaderProps = {
  loading?: boolean;
  text?: string;
} & ProgressProps;

/**
 * Loading indicator for MML
 */
export const Loader: FC<LoaderProps> = ({ loading = false, text }) => {
  if (!loading) return null;

  return (
    <div className="mml-loader">
      <Progress />
      {text && <div className="mml-loader__text">{text}</div>}
    </div>
  );
};
