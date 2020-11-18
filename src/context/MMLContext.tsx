import { createContext } from 'react';

export type MMLContextType = {
  [key: string]: any;
  submitState: { loading: boolean; error: string; success: string };
  setValue: (name: string, value: any) => void;
};

export const MMLContext = createContext<MMLContextType | {}>({});
