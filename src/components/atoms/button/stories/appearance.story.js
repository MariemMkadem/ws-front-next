import { storiesOf } from '@storybook/react';
import { Example, Stack } from 'components/_helpers';

import { Button } from 'components/components';

storiesOf('Button', module).add('appearance', () => (
  <Example title='Appearances'>
    <Stack>
      <Button>Button 4</Button>
      <Button appearance='primary' style={{ borderRadius: '0 25px 25px 0' }}>
        Primary
      </Button>
      <Button appearance='secondary'>Secondary</Button>
      <Button appearance='tertiaryButton'>tertiaryButton</Button>
      <Button appearance='link'>Link</Button>
      <Button appearance='destructive'>Destructive</Button>
    </Stack>
  </Example>
));
