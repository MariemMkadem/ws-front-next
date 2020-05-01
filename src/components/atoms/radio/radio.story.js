import { storiesOf } from '@storybook/react';
import { Example } from 'components/_helpers';

import RadioBox from './index';

const RadioBoxExample = () => (
  <div>
    <RadioBox value='one' name='e' id='test4' disabled={true}>
      Option 1
    </RadioBox>
    <RadioBox value='two' name='r' id='test3' checked={true} disabled={true}>
      Option 2
    </RadioBox>
    <RadioBox value='three' name='t' type='RadioBox' id='test2' checked={true}>
      Option 3
    </RadioBox>
    <RadioBox value='four' name='g'>
      Option 4
    </RadioBox>
  </div>
);

storiesOf('RadioBox', module).add('light', () => (
  <Example>
    <RadioBoxExample />
  </Example>
));
