import React from 'react';
import { THEMES, THEMES_MAP, THEMES_TONES } from './themes';

const theme = THEMES[0].value;
const tone = THEMES_TONES[0].value;

export const ThemeContext = React.createContext({
  theme: THEMES_MAP[theme][tone].vars,
  setTheme: () => {},
  setTone: () => {},
});
