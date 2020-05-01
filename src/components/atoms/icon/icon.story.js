import { storiesOf } from '@storybook/react';
import { Example, Stack } from 'components/_helpers';

import { Icon } from 'components/components';
import { spacing } from 'tokens';

storiesOf('Icon', module).add('default', () => (
  <Example title='Icons'>
    <Stack>
      <Icon name='analytics' />
      <Icon name='anomaly-detection' />
      <Icon name='apis' />
      <Icon name='arrow-left' />
      <Icon name='arrow-right' />
      <Icon name='authorization' />
      <Icon name='check' />
    </Stack>
  </Example>
));

storiesOf('Icon', module).add('size', () => (
  <Example title='Size'>
    <Stack>
      <Icon name='analytics' size={spacing.xsmall} />
      <Icon name='analytics' size={spacing.small} />
      <Icon name='analytics' size={spacing.medium} />
      <Icon name='analytics' size={spacing.large} />
      <Icon name='analytics' size={spacing.xlarge} />
      <Icon name='analytics' size={spacing.xxlarge} />
    </Stack>
  </Example>
));

storiesOf('Icon', module).add('color', () => (
  <Example title='Size'>
    <Stack>
      <Icon name='analytics' color='white' />
      <Icon name='analytics' color='black' />
      <Icon name='analytics' color='gray' />
      <Icon name='analytics' color='blue' />
      <Icon name='analytics' color='orange' />
      <Icon name='analytics' color='green' />
      <Icon name='analytics' color='red' />
    </Stack>
  </Example>
));
