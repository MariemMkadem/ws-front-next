import React from 'react';
import { createPortal } from 'react-dom';
import { element, string } from 'prop-types';

class Portal extends React.Component {
  static defaultProps = {
    type: 'div',
  };

  static propTypes = {
    children: element,
    type: string,
  };

  node = null;

  componentDidMount() {
    this.node = document.createElement(this.props.type);
    document.body.appendChild(this.node);
    this.forceUpdate();
  }

  componentWillUnmount() {
    document.body.removeChild(this.node);
  }

  render() {
    const { children } = this.props;
    return this.node ? createPortal(children, this.node) : null;
  }
}

export default Portal;
