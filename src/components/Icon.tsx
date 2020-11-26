import React, { FC } from 'react';

export type IconProps = {
  /** The name of the material icon, see https://material.io/resources/icons/ */
  name: string;
};

export const Icon: FC<IconProps> = ({ name }) => {
  return <i className="mml-icon material-icons">{name}</i>;
};

export type SvgIconProps = {
  /** The SVG path, calibrated for a 24 sized viewBox (as in Material Icons) */
  path: string;
};

/**
 * Utility to have custom svg icons outside the `material-icons` system provided by the Icon component
 * Use case internal to this library is the AddToCalendar component which needs brand icons which are not
 * included in [the default material-icons set and probably never will be](https://git.io/Jk9yH)
 */
export const SvgIcon: FC<SvgIconProps> = ({ path }) => (
  <i className="mml-icon">
    <svg className="mml-icon__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  </i>
);

/** Icon path from https://materialdesignicons.com/ */
export const IconGoogle = (
  <SvgIcon path="M21.35 11.1h-9.17v2.73h6.5c-.33 3.8-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.1 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.1 0-1.15-.15-1.8-.15-1.8h0z" />
);

/** Icon path from https://materialdesignicons.com/ */
export const IconMicrosoft = (
  <SvgIcon path="M3 12V6.75l6-1.32v6.48L3 12m17-9v8.75l-10 .15V5.2L20 3M3 13l6 .1v6.8l-6-1.15V13m17 .25V22l-10-1.9v-7l10 .15z" />
);

/** Icon path from https://materialdesignicons.com/ */
export const IconApple = (
  <SvgIcon path="M18.7 19.5c-.83 1.24-1.7 2.45-3.05 2.47-1.34.03-1.77-.8-3.3-.8-1.53 0-2 .77-3.27.82-1.3.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.4c.87-1.52 2.43-2.48 4.12-2.5 1.28-.02 2.5.87 3.3.87.78 0 2.26-1.07 3.8-.9.65.03 2.47.26 3.64 1.98-.1.06-2.17 1.28-2.15 3.8.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.2-.7.85-1.83 1.5-2.95 1.42-.15-1.15.4-2.35 1.05-3.1z" />
);
