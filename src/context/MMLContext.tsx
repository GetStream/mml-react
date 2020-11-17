import { createContext } from 'react';

export type MMLContextType = {
  [key: string]: any;
  setValue: (name: string, value: any) => void;
  changeValue: (name: string, value: any) => void;
};

export const MMLContext = createContext<MMLContextType | {}>({});
