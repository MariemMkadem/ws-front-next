import React from 'react';
import { storiesOf } from '@storybook/react';
import { Example } from 'components/_helpers';
import { string } from 'prop-types';

import Checkbox from './index';

class Ex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: ['one', 'two'] };
  }

  static propTypes = {
    value: string,
  };

  handleChange(evt) {
    let selected = [...this.state.selected];
    const evtChecked = evt.target.checked;
    const evtValue = evt.target.value;

    if (evtChecked) {
      selected.push(evtValue);
    } else {
      selected = selected.filter(item => item !== evtValue);
    }

    this.setState({ selected });
  }

  render() {
    return (
      <Checkbox
        onChange={evt => this.handleChange(evt)}
        checked={this.state.selected.indexOf(this.props.value) >= 0}
        {...this.props}
      >
        You can check and uncheck me
      </Checkbox>
    );
  }
}

const CheckBoxExample = () => (
  <div>
    <Ex value='one' name='e' id='test4' disabled={true}>
      Option 1
    </Ex>
    <Ex value='two' name='r' id='test3' checked={true} disabled={true}>
      Option 2
    </Ex>
    <Ex value='three' name='t' type='checkbox' id='test2' checked={true}>
      Option 3
    </Ex>
    <Ex value='four' name='g'>
      Option 4
    </Ex>
  </div>
);

storiesOf('Checkbox', module).add('light', () => (
  <Example>
    <CheckBoxExample />
  </Example>
));
