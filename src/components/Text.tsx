import React, { FC } from 'react';

export type TextProps = { text: string };

/**
 * Simple paragraph text element
 */
export const Text: FC<TextProps> = ({ text }) => {
  return <p className="mml-text">{text}</p>;
};
