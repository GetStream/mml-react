import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

/* eslint-disable */
import base from '!css-loader!../../../dist/styles/base.css';
import base_dark from '!css-loader!../../../dist/styles/base-dark.css';
import messaging_light from '!css-loader!../../../dist/styles/messaging-light.css';
import messaging_dark from '!css-loader!../../../dist/styles/messaging-dark.css';
import livestream_light from '!css-loader!../../../dist/styles/livestream-light.css';
import livestream_dark from '!css-loader!../../../dist/styles/livestream-dark.css';
import commerce_light from '!css-loader!../../../dist/styles/commerce-light.css';
import commerce_dark from '!css-loader!../../../dist/styles/commerce-dark.css';
import team_light from '!css-loader!../../../dist/styles/team-light.css';
import team_dark from '!css-loader!../../../dist/styles/team-dark.css';
/* eslint-enable */

const Themes = {
  'base-light': {
    name: 'Base Light',
    vars: base.locals,
    css: base.toString(),
  },
  'base-dark': {
    name: 'Base Dark',
    vars: base_dark.locals,
    css: base_dark.toString(),
  },
  'messaging-light': {
    name: 'Social Messenger Light',
    vars: messaging_light.locals,
    css: messaging_light.toString(),
  },
  'messaging-dark': {
    name: 'Social Messenger Dark',
    vars: messaging_dark.locals,
    css: messaging_dark.toString(),
  },
  'livestream-light': {
    name: 'Livestream Light',
    vars: livestream_light.locals,
    css: livestream_light.toString(),
  },
  'livestream-dark': {
    name: 'Livestream Dark',
    vars: livestream_dark.locals,
    css: livestream_dark.toString(),
  },
  'commerce-light': {
    name: 'Customer Support Light',
    vars: commerce_light.locals,
    css: commerce_light.toString(),
  },
  'commerce-dark': {
    name: 'Customer Support Dark',
    vars: commerce_dark.locals,
    css: commerce_dark.toString(),
  },
  'team-light': {
    name: 'Team Light',
    vars: team_light.locals,
    css: team_light.toString(),
  },
  'team-dark': {
    name: 'Team Dark',
    vars: team_dark.locals,
    css: team_dark.toString(),
  },
};

const Label = styled.label`
  padding-right: 10px;
  font-size: 13px;
`;

const Select = styled.select`
  height: 50px;
  display: block;
  padding: 0 10px;
  border: 1px solid transparent;
  background: transparent;
  font-size: 13px;

  &:focus {
    outline: none;
    color: ${(props) => props.theme.primaryAccent};
  }
`;

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
  background: rgb(245, 246, 247);
  border-radius: 3px;
`;

export const SelectOptions = ({ label, options, value, onChange }) => {
  return (
    <ThemeBar>
      <Label>{label}</Label>
      <Select onChange={onChange} value={value}>
        {Object.keys(options).map((key) => {
          return (
            <option key={options[key].name} value={key}>
              {options[key].name}
            </option>
          );
        })}
      </Select>
    </ThemeBar>
  );
};

const ThemeSelector = ({ children }) => {
  const [theme, setTheme] = useState('base-light');

  return (
    <ThemeProvider theme={Themes[theme].vars}>
      <style id={`theme-${theme}`}>{Themes[theme].css}</style>
      <SelectOptions label="Theme:" options={Themes} value={theme} onChange={(e) => setTheme(e.target.value)} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeSelector;
