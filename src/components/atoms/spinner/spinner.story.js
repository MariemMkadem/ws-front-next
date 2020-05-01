import { storiesOf } from '@storybook/react';
import { Example } from 'components/_helpers';

import { Spinner } from 'components/components';

storiesOf('Spinner', module).add('default', () => (
  <Example title='Spinner'>
    <Spinner />
  </Example>
));

storiesOf('Spinner', module).add('dark background', () => (
  <Example title='Spinner' background='dark'>
    <Spinner inverse />
  </Example>
));
