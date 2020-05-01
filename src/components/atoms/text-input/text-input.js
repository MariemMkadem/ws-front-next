import PropTypes from 'prop-types';
import { colors, fonts, misc } from 'tokens';
import styled from 'styled-components';
import { divide } from '../../_helpers/pixel-calc';

const config = {
  basic: {
    background: colors.input.background,
    border: colors.input.border,
    hoverBorder: colors.input.borderHover,
    focusBorder: colors.input.borderFocus,
    placeholder: colors.input.placeholder,
  },
  readOnly: {
    background: colors.input.backgroundReadOnly,
    border: colors.input.border,
    hoverBorder: colors.input.border,
    focusBorder: colors.input.border,
    placeholder: colors.input.placeholderReadOnly,
  },
  error: {
    background: colors.input.background,
    border: colors.input.borderError,
    hoverBorder: colors.input.borderError,
    focusBorder: colors.input.borderError,
  },
};

const getAttributes = props => {
  if (props.readOnly) return config.readOnly;
  if (props.hasError || props.error) return config.error;
  return config.basic;
};

const FormInput = styled.div`
  position: relative;
  .fix {
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
  }
  .prefix {
    left: 8px;
  }
  .sufix {
    right: 8px;
  }
`;
const TextInput = ({ defaultValue, type, ...props }) => {
  if (props.masked) {
    const length = defaultValue ? defaultValue.length : 8;
    const maskedValue = new Array(length).join('•');
    return <TextInput.Element type={type} {...props} placeholder={maskedValue} readOnly />;
  }
  const prefix = props.prefix && props.prefix();
  const sufix = props.sufix && props.sufix();

  return (
    <FormInput>
      {props.prefix && <prefix.type {...prefix.props} className='fix prefix' />}
      {props.sufix && <sufix.type {...sufix.props} className='fix sufix' />}
      <TextInput.Element type={type} defaultValue={defaultValue} {...props} />
    </FormInput>
  );
};

TextInput.propTypes = {
  prefix: PropTypes.element,
  sufix: PropTypes.element,
};
TextInput.Element = styled.input`
  &::-ms-clear {
    display: none;
  }
  height: ${props => misc.input[props.size].height};
  border-radius: ${props => divide(misc.input[props.size].height, 2)};
  border: 1px solid #666;
  width: 100%;
  outline: none;
  padding-left: 45px;
  width: 100%;
  box-sizing: border-box;

  background: ${props => getAttributes(props).background};
  border: 1px solid;
  border-color: ${props => getAttributes(props).border};

  font-family: ${props => (props.code ? fonts.family.code : 'inherit')};

  cursor: ${props => (props.readOnly ? 'not-allowed' : 'auto')};
  transition: border-color ${misc.animationDuration}, box-shadow ${misc.animationDuration};

  &:hover {
    border-color: ${props => getAttributes(props).hoverBorder};
  }
  &:focus {
    border-color: ${props => getAttributes(props).focusBorder};
    box-shadow: 0px 0px 0 1px ${props => getAttributes(props).focusBorder};
    outline: none;
  }
  &::-webkit-input-placeholder {
    color: ${props => getAttributes(props).placeholder};
  }
`;

TextInput.propTypes = {
  masked: PropTypes.bool,
  readOnly: PropTypes.bool,
  code: PropTypes.bool,
  hasError: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOf(['default', 'large', 'small', 'compressed']),
};

TextInput.defaultProps = {
  readOnly: false,
  code: false,
  error: null,
  onChange: null,
  type: 'text',
  size: 'default',
};

export default TextInput;
