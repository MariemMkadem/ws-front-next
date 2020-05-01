import { useRef } from 'react';
import { storiesOf } from '@storybook/react';
import { Example } from 'components/_helpers';

import Heading from 'components/atoms/heading';
import useOnScreen from '../useOnScreen';

/* eslint-disable */
function App() {
  const ref = useRef();
  const onScreen = useOnScreen(ref, '-300px');

  return (
    <div>
      <div style={{ height: '100vh' }}>
        <Heading size={1}>Scroll down to next section 👇</Heading>
      </div>
      <div
        ref={ref}
        style={{
          height: '100vh',
          backgroundColor: onScreen ? '#23cebd' : '#efefef',
        }}
      >
        {onScreen ? (
          <div>
            <Heading size={1}>Hey I'm on the screen</Heading>
            <img src='https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif' />
          </div>
        ) : (
          <Heading size={1}>Scroll down 300px from the top of this section 👇</Heading>
        )}
      </div>
    </div>
  );
}

storiesOf('hooks', module).add('useOnScreen', () => (
  <Example title='Appearances'>
    <App />
  </Example>
));
