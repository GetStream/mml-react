import React from 'react';
import { storiesOf } from '@storybook/react';

import { Text } from './Text';

storiesOf('Text', module)
  .add('random text', () => <Text text="random text" />)
  .add('another random text', () => <Text text="another random text" />);
