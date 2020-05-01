import { useState, useRef } from 'react';
import { storiesOf } from '@storybook/react';
import { Example } from 'components/_helpers';

import { Button } from 'components/components';
import useOnClickOutside from '../useOnClickOutside';

/* eslint-disable */
function App() {
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <div>
      {isModalOpen ? (
        <div ref={ref}>Click anywhere outside of me to close.</div>
      ) : (
        <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
      )}
    </div>
  );
}

storiesOf('hooks', module).add('useOnClickOutside', () => (
  <Example title='Appearances'>
    <App />
  </Example>
));
