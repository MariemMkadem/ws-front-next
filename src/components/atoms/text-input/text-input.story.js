import { storiesOf } from '@storybook/react';
import { Example } from 'components/_helpers';
import Icon from '../icon';
import TextInput from './index';

storiesOf('TextInput', module).add('simple', () => (
  <Example title='simple'>
    <TextInput
      type='text'
      placeholder='Enter some text'
      prefix={() => <Icon name='analytics' />}
      sufix={() => <span> € / mois</span>}
    />
  </Example>
));

storiesOf('TextInput', module).add('default value', () => (
  <Example title='default value'>
    <TextInput type='text' defaultValue='This is plain text field value' error />
  </Example>
));
