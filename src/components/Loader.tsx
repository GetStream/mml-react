import React, { FC } from 'react';
import { Progress, ProgressProps } from './Progress';

export type LoaderProps = {
  /**
   * Flag that indicates whether the component should show
   * @default false
   */
  loading?: boolean;
  /**
   * Optional text to display besides the progress indicator
   */
  text?: string;
  /**
   * Additional element class name
   * @default ''
   */
  className?: string;
} & ProgressProps;

/**
 * Loader indicator
 */
export const Loader: FC<LoaderProps> = ({ className = '', loading = false, text, size, thickness, color }) => {
  if (!loading) return null;

  return (
    <div className={`mml-loader ${className}`}>
      <Progress {...{ size, thickness, color }} />
      {text && <div className="mml-loader__text">{text}</div>}
    </div>
  );
};

export default React.memo(Loader);
