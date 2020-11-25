import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeContext, THEMES, THEMES_TONES, THEMES_MAP, ThemeSelect, useQuery } from './theming';

const ThemeBar = styled.div`
  z-index: 1000;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  height: 81px;
  padding: 0 15px;
  border-style: solid;
  border-color: #ddd;
  border-width: 0 0 1px 0;
  background: #f3f3f3;
`;

const Wrapper = ({ children }) => {
  const [theme, setTheme] = useQuery('theme', THEMES[0].value);
  const [tone, setTone] = useQuery('tone', THEMES_TONES[0].value);
  const themeData = THEMES_MAP[theme][tone];
  const changeTheme = (e) => setTheme(e.target.value);
  const changeTone = (e) => setTone(e.target.value);

  return (
    <ThemeContext.Provider value={{ theme: themeData.vars }}>
      <ThemeProvider theme={themeData.vars}>
        <style id={`theme-${theme}-${tone}`}>{themeData.css}</style>
        <ThemeBar>
          <ThemeSelect label="Choose MML theme:" options={THEMES} value={theme.value} onChange={changeTheme} />
          {THEMES_TONES.map((tone) => (
            <label key={tone.value}>
              <input
                type="radio"
                name="tone"
                value={tone.value}
                onChange={changeTone} /*  checked={tone.value === tone} */
              />
              {tone.label}
            </label>
          ))}
        </ThemeBar>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Wrapper;
