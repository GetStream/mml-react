import React, { FC } from 'react';

// TODO: remove
// import { LoadingIndicator } from 'stream-chat-react';

export type LoaderProps = {
  loading?: boolean;
  text?: string;
};

/**
 * Loading indicator for MML
 */
export const Loader: FC<LoaderProps> = ({ loading = false, text }) => {
  if (!loading) return null;

  return (
    <div className="mml-loader">
      {/* <LoadingIndicator /> */}
      {text && <div className="mml-loader__text">{text}</div>}
    </div>
  );
};
