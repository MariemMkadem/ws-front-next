import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'tokens';

const StyledRadioOption = styled.p`
  [type='radio']:checked,
  [type='radio']:not(:checked) {
    display: none;
  }
  [type='radio']:checked + label,
  [type='radio']:not(:checked) + label {
    position: relative;

    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: ${colors.base.gray};
  }
  [type='radio']:checked + label:before,
  [type='radio']:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: 1px solid ${colors.base.gray};
    background: ${colors.base.white};
  }
  [type='radio']:checked + label:after,
  [type='radio']:not(:checked) + label:after {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${colors.base.default};
    position: absolute;
    top: 4px;
    left: 4px;
    transition: all 0.2s ease;
  }
  [type='radio']:not(:checked) + label:after {
    opacity: 0;
    transform: scale(0);
  }
  [type='radio']:checked + label:after {
    opacity: 1;
    transform: scale(1);
  }
  [type='radio']:disabled:checked + label:before,
  [type='radio']:disabled:not(:checked) + label:before {
    border-color: ${colors.base.gray};
    background-color: ${colors.base.gray};
  }
  [type='radio']:disabled:checked + label:after {
    background: ${colors.base.gray};
  }
`;

const StyledRadio = styled.div`
  ${StyledRadioOption} {
  }
`;

const RadioOption = props => (
  <StyledRadioOption readOnly={props.readOnly}>
    <input
      type='radio'
      name={props.name}
      value={props.value}
      id={props.id}
      checked={props.checked}
      defaultChecked={props.defaultChecked}
      disabled={props.disabled}
      onChange={props.onChange}
    />
    <label htmlFor={props.id}>{props.children}</label>
  </StyledRadioOption>
);

const Radio = props => (
  <StyledRadio {...props}>
    {React.Children.map(props.children, child =>
      React.cloneElement(child, {
        name: props.name,
        checked: props.selected === child.props.value,
        readOnly: props.readOnly || child.props.readOnly,
        onChange: props.onChange,
      }),
    )}
  </StyledRadio>
);

RadioOption.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.arrayOf(PropTypes.string),
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  children: PropTypes.string,
};
Radio.propTypes = {
  align: PropTypes.oneOf(['horizontal', 'vertical']),
  name: PropTypes.string.isRequired,
  selected: PropTypes.arrayOf(PropTypes.string),
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  children: PropTypes.element,
};

Radio.defaultProps = {
  align: 'vertical',
};

Radio.Option = RadioOption;

export default RadioOption;
export { StyledRadio, StyledRadioOption };
