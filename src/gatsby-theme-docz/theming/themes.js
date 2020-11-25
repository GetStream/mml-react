/* eslint-disable */
import index from '!css-loader!../../../../dist/styles/index.css';
import index_dark from '!css-loader!../../../../dist/styles/index-dark.css';
import messaging from '!css-loader!../../../../dist/styles/messaging.css';
import messaging_dark from '!css-loader!../../../../dist/styles/messaging-dark.css';
import livestream from '!css-loader!../../../../dist/styles/livestream.css';
import livestream_dark from '!css-loader!../../../../dist/styles/livestream-dark.css';
import commerce from '!css-loader!../../../../dist/styles/commerce.css';
import commerce_dark from '!css-loader!../../../../dist/styles/commerce-dark.css';
import team from '!css-loader!../../../../dist/styles/team.css';
import team_dark from '!css-loader!../../../../dist/styles/team-dark.css';
/* eslint-enable */

export const THEMES = [
  {
    name: 'Base',
    value: 'index',
    light: { vars: index.locals, css: index.toString() },
    dark: { vars: index_dark.locals, css: index_dark.toString() },
  },
  {
    name: 'Social Messenger',
    value: 'messaging',
    light: { vars: messaging.locals, css: messaging.toString() },
    dark: { vars: messaging_dark.locals, css: messaging_dark.toString() },
  },
  {
    name: 'Livestream',
    value: 'livestream',
    light: { vars: livestream.locals, css: livestream.toString() },
    dark: { vars: livestream_dark.locals, css: livestream_dark.toString() },
  },
  {
    name: 'Customer Support',
    value: 'commerce',
    light: { vars: commerce.locals, css: commerce.toString() },
    dark: { vars: commerce_dark.locals, css: commerce_dark.toString() },
  },
  {
    name: 'Team',
    value: 'team',
    light: { vars: team.locals, css: team.toString() },
    dark: { vars: team_dark.locals, css: team_dark.toString() },
  },
];

export const THEMES_MAP = THEMES.reduce((acc, key) => {
  acc[key.value] = key;
  return acc;
}, {});

export const THEMES_TONES = [
  {
    value: 'light',
    label: 'Light',
  },
  {
    value: 'dark',
    label: 'Dark',
  },
];
