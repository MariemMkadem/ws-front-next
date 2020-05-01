import { storiesOf } from '@storybook/react';
import { Example, Stack } from 'components/_helpers';

import { Button } from 'components/components';

storiesOf('Button', module).add('loading state', () => (
  <Example title='Loading state' align='center'>
    <Stack>
      <Button loading>Default</Button>
      <Button loading appearance='primary'>
        Primary
      </Button>
      <Button loading appearance='secondary'>
        Secondary
      </Button>
      <Button loading appearance='link'>
        Link
      </Button>
      <Button loading appearance='destructive'>
        Destructive
      </Button>
    </Stack>
  </Example>
));
