import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCheckboxOption = styled.p`
  [type='checkbox']:checked,
  [type='checkbox']:not(:checked) {
    display: none;
  }
  [type='checkbox']:checked + label,
  [type='checkbox']:not(:checked) + label {
    position: relative;

    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
  }
  [type='checkbox']:checked + label:before,
  [type='checkbox']:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #666;
    background: #fff;
  }
  [type='checkbox']:checked + label:after,
  [type='checkbox']:not(:checked) + label:after {
    content: '';
    width: 12px;
    height: 12px;
    background: #3cbcd7;
    position: absolute;
    top: 4px;
    left: 4px;
    transition: all 0.2s ease;
  }
  [type='checkbox']:not(:checked) + label:after {
    opacity: 0;
    transform: scale(0);
  }
  [type='checkbox']:checked + label:after {
    opacity: 1;
    transform: scale(1);
  }
  [type='checkbox']:disabled:checked + label:before,
  [type='checkbox']:disabled:not(:checked) + label:before {
    border-color: #ccc;
    background-color: #eee;
  }
  [type='checkbox']:disabled:checked + label:after {
    background: #aaa;
  }
`;

const StyledCheckbox = styled.div`
  ${StyledCheckboxOption} {
  }
`;

const Checkbox = props => (
  <StyledCheckboxOption>
    <input
      type='checkbox'
      name={props.name}
      value={props.value}
      id={props.id}
      checked={props.checked}
      defaultChecked={props.defaultChecked}
      disabled={props.disabled}
      onChange={props.onChange}
    />
    <label htmlFor={props.id}>{props.children}</label>
  </StyledCheckboxOption>
);

Checkbox.propTypes = {
  align: PropTypes.oneOf(['horizontal', 'vertical']),
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

Checkbox.defaultProps = {
  align: 'vertical',
};

export default Checkbox;
export { StyledCheckbox, StyledCheckboxOption };
