import { storiesOf } from '@storybook/react';
import { Example, Stack } from 'components/_helpers';

import { Button } from 'components/components';

storiesOf('Button', module).add('with icon', () => (
  <Example title='Button with icon' align='center'>
    <Stack>
      <Button appearance='primary' icon='plus'>
        Create Client
      </Button>
      <Button appearance='secondary' icon='play-circle'>
        Tutorial
      </Button>
      <Button appearance='link' icon='copy' style={{ width: '50px', height: '50px' }} />
      <Button icon='copy' label='Copy to Clipboard' style={{ width: '50px', height: '50px' }} />
    </Stack>
  </Example>
));
