import { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Example } from 'components/_helpers';

import { Button } from 'components/components';
import useLockBodyScroll from '../useLockBodyScroll';
/* eslint-disable */
function App() {
  // State for our modal
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setModalOpen(true)}>Show Modal</Button>
      <div style={{ height: '200vh' }} />
      {modalOpen && (
        <Modal
          title='Try scrolling'
          content="I bet you you can't! Muahahaha 😈"
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}

function Modal({ title, content, onClose }) {
  // Call hook to lock body scroll
  useLockBodyScroll();

  return (
    <div
      style={{
        background: 'rgba(0, 0 ,0 , 0.8)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Button onClick={onClose}>close Modal</Button>
      <div className='modal'>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

storiesOf('hooks', module).add('useLockBodyScroll', () => (
  <Example title='Appearances'>
    <App />
  </Example>
));
