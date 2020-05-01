import React from 'react';
import { Portal } from 'components/_helpers';
import createFocusTrap from 'focus-trap';
import { func, bool, object } from 'prop-types';

const createAriaHider = dialogNode => {
  const originalValues = [];
  const rootNodes = [];

  Array.prototype.forEach.call(document.querySelectorAll('body > *'), node => {
    if (node === dialogNode.parentNode) {
      return;
    }
    const attr = node.getAttribute('aria-hidden');
    const alreadyHidden = attr !== null && attr !== 'false';
    if (alreadyHidden) {
      return;
    }
    originalValues.push(attr);
    rootNodes.push(node);
    node.setAttribute('aria-hidden', 'true');
  });

  return () => {
    rootNodes.forEach((node, index) => {
      const originalValue = originalValues[index];
      if (originalValue === null) {
        node.removeAttribute('aria-hidden');
      } else {
        node.setAttribute('aria-hidden', originalValue);
      }
    });
  };
};

const FocusContext = React.createContext();

export class DialogContext extends React.Component {
  static defaultProps = {
    onDismiss: () => {},
    isOpen: true,
  };

  static propTypes = {
    initialFocusRef: object,
    isOpen: bool,
    onDismiss: func,
    onClick: func,
    onKeyDown: func,
  };

  contentNode = React.createRef();

  overlayNode = React.createRef();

  componentDidMount() {
    const { initialFocusRef } = this.props;
    this.disposeAriaHider = createAriaHider(this.overlayNode.current);
    this.trap = createFocusTrap(this.overlayNode.current, {
      initialFocus: initialFocusRef ? () => initialFocusRef.current : undefined,
      fallbackFocus: this.contentNode.current,
      escapeDeactivates: false,
      clickOutsideDeactivates: false,
    });
    this.trap.activate();
  }

  componentWillUnmount() {
    this.trap.deactivate();
    this.disposeAriaHider();
  }

  render() {
    const { isOpen, onDismiss, initialFocusRef, onClick, onKeyDown, ...props } = this.props;

    return (
      <FocusContext.Provider value={this.contentNode}>
        <div
          tabIndex={0}
          role='button'
          data-dialog-overlay
          onClick={event => {
            event.stopPropagation();
            onDismiss();
          }}
          onKeyDown={event => {
            if (event.key === 'Escape') {
              // event.stopPropagation()
              onDismiss();
            }
          }}
          ref={this.overlayNode}
          {...props}
        />
      </FocusContext.Provider>
    );
  }
}

export const DialogOverlay = props =>
  props.isOpen ? (
    <Portal data-dialog-wrapper>
      <DialogContext {...props} />
    </Portal>
  ) : null;

DialogOverlay.propTypes = {
  isOpen: bool,
};

export const DialogContent = React.forwardRef(({ onClick, onKeyDown, ...props }) => (
  <FocusContext.Consumer>
    {contentRef => (
      <div
        data-dialog-content
        tabIndex='-1'
        role='button'
        onClick={onClick}
        onKeyDown={onKeyDown}
        ref={contentRef}
        {...props}
      />
    )}
  </FocusContext.Consumer>
));

DialogContent.propTypes = {
  onClick: func,
  onKeyDown: func,
};
export const Dialog = ({ isOpen, onDismiss = () => {}, ...props }) => (
  <DialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
    <DialogContent {...props} />
  </DialogOverlay>
);

Dialog.propTypes = {
  isOpen: bool,
  onDismiss: func,
};
