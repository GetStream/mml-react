import { createContext } from 'react';

export type MMLContextType = {
  [key: string]: any;
  submitState: { loading: boolean; error: string; success: string };
  setValue: (name: string, value: any) => void;
};

const defaultValue = {
  submitState: { loading: false, error: '', success: '' },
  setValue: (name: string, value: string) => console.info('setValue called with: ', name, value),
};

export const MMLContext = createContext<MMLContextType>(defaultValue);
