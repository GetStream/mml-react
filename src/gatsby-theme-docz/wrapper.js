import React from 'react';
import styled from 'styled-components';
import ThemeSwitch from '../../../example/src/components/ThemeSwitch';
import { useQuery } from '../../../example/src/components/history';

// style imports as strings so that we can swap them based on the current theme
// eslint-disable-next-line
import index from '!!to-string-loader!css-loader!../../../dist/styles/index.css';
// eslint-disable-next-line
import team from '!!to-string-loader!css-loader!../../../dist/styles/team.css';

const THEMES = [
  {
    name: 'Base',
    value: 'index',
    css: index,
  },
  {
    name: 'Team',
    value: 'team',
    css: team,
  },
];

const THEMES_MAP = THEMES.reduce((acc, key) => {
  acc[key.value] = key;
  return acc;
}, {});

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

  function handleChangeTheme(event) {
    setTheme(event.target.value);
  }

  return (
    <div>
      <style id={`theme-${theme}`}>{THEMES_MAP[theme].css}</style>
      <ThemeBar>
        <ThemeSwitch label="Choose MML theme:" options={THEMES} value={theme} onChange={handleChangeTheme} />
      </ThemeBar>
      {children}
    </div>
  );
};

export default Wrapper;
