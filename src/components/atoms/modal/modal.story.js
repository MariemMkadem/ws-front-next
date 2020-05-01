import React from 'react';
import { storiesOf } from '@storybook/react';
import { Example } from 'components/_helpers';

import { DialogOverlay, DialogContent } from './modal';

class Modal extends React.Component {
  constructor() {
    super();
    this.buttonRef = React.createRef();
    this.state = { showDialog: false };
    this.open = () => this.setState({ showDialog: true });
    this.close = () => this.setState({ showDialog: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.open}>Show Dialogs</button>
        <DialogOverlay initialFocusRef={this.buttonRef} isOpen={this.state.showDialog}>
          <DialogContent>
            <p>Pass the button ref to DialogOverlay and the button.</p>
            <button onClick={this.close}>Not me</button>{' '}
            <button ref={this.buttonRef} onClick={this.close}>
              Got me!
            </button>
          </DialogContent>
        </DialogOverlay>
      </div>
    );
  }
}

storiesOf('Dialog', module).add('default', () => (
  <Example title='Paragraph' style={{ width: '300px' }}>
    <Modal />
  </Example>
));
