import { storiesOf } from '@storybook/react';
import { Example } from 'components/_helpers';

import Heading from './index';

storiesOf('Heading', module).add('sizes', () => (
  <Example title='Sizes'>
    <Heading size={1}>Lorem ipsum dolor sit amet</Heading>
    <Heading size={2}>Lorem ipsum dolor sit amet</Heading>
    <Heading size={3}>Lorem ipsum dolor sit amet</Heading>
    <Heading size={4}>Lorem ipsum dolor sit amet</Heading>
    <Heading size={5}>Lorem ipsum dolor sit amet</Heading>
    <Heading size={6}>Lorem ipsum dolor sit amet</Heading>
  </Example>
));
