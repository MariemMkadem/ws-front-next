import { storiesOf } from '@storybook/react';
import { Example } from 'components/_helpers';

import Select from './index';

storiesOf('Select input', module).add('simple', () => (
  <Example title='Code'>
    <Select />
  </Example>
));
