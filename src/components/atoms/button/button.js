import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors, spacing, misc } from 'tokens';
import { subtract, divide } from '../../_helpers/pixel-calc';
import Icon, { ICONNAMES } from '../icon';
import Spinner, { StyledSpinner } from '../spinner';

const appearances = {
  default: {
    text: colors.button.default.text,
    icon: colors.button.default.icon,
    background: colors.button.default.background,
    border: colors.button.default.border,
    hoverBackground: colors.button.default.backgroundHover,
    hoverBorder: colors.button.default.borderHover,
    focusBackground: colors.button.default.backgroundFocus,
    focusBorder: colors.button.default.borderFocus,
    activeBackground: colors.button.default.backgroundActive,
    activeBorder: colors.button.default.borderActive,
    textHover: colors.button.default.textHover,
    iconHover: colors.button.default.iconHover,
  },
  primary: {
    text: colors.button.primary.text,
    icon: colors.button.primary.icon,
    background: colors.button.primary.background,
    border: colors.button.primary.border,
    hoverBackground: colors.button.primary.backgroundHover,
    hoverBorder: colors.button.primary.borderHover,
    focusBackground: colors.button.primary.backgroundFocus,
    focusBorder: colors.button.primary.borderFocus,
    activeBackground: colors.button.primary.backgroundActive,
    activeBorder: colors.button.primary.borderActive,
    textHover: colors.button.primary.textHover,
    iconHover: colors.button.primary.iconHover,
  },
  secondary: {
    text: colors.button.secondary.text,
    icon: colors.button.secondary.icon,
    background: colors.button.secondary.background,
    border: colors.button.secondary.border,
    hoverBackground: colors.button.secondary.backgroundHover,
    hoverBorder: colors.button.secondary.borderHover,
    focusBackground: colors.button.secondary.backgroundFocus,
    focusBorder: colors.button.secondary.borderFocus,
    activeBackground: colors.button.secondary.backgroundActive,
    activeBorder: colors.button.secondary.borderActive,
    textHover: colors.button.secondary.textHover,
    iconHover: colors.button.secondary.iconHover,
  },
  tertiaryButton: {
    text: colors.button.tertiaryButton.text,
    icon: colors.button.tertiaryButton.icon,
    background: colors.button.tertiaryButton.background,
    border: colors.button.tertiaryButton.border,
    hoverBackground: colors.button.tertiaryButton.backgroundHover,
    hoverBorder: colors.button.tertiaryButton.borderHover,
    focusBackground: colors.button.tertiaryButton.backgroundFocus,
    focusBorder: colors.button.tertiaryButton.borderFocus,
    activeBackground: colors.button.tertiaryButton.backgroundActive,
    activeBorder: colors.button.tertiaryButton.borderActive,
    textHover: colors.button.tertiaryButton.textHover,
    iconHover: colors.button.tertiaryButton.iconHover,
  },
  destructive: {
    text: colors.button.destructive.text,
    icon: colors.button.destructive.icon,
    background: colors.button.destructive.background,
    border: colors.button.destructive.border,
    hoverBackground: colors.button.destructive.backgroundHover,
    hoverBorder: colors.button.destructive.borderHover,
    focusBackground: colors.button.destructive.backgroundFocus,
    focusBorder: colors.button.destructive.borderFocus,
    activeBackground: colors.button.destructive.backgroundActive,
    activeBorder: colors.button.destructive.borderActive,
  },
  link: {
    text: colors.button.link.text,
    icon: colors.button.link.icon,
    background: 'transparent',
    border: 'transparent',
    hoverText: colors.button.link.hover,
    hoverBackground: 'transparent',
    hoverBorder: 'transparent',
    focusText: colors.button.link.focus,
    focusBackground: 'transparent',
    focusBorder: 'transparent',
  },
};

const states = {
  success: {
    text: colors.button.success.text,
    icon: colors.button.success.icon,
    background: colors.button.success.background,
    border: colors.button.success.border,
    hoverBackground: colors.button.success.backgroundHover,
    hoverBorder: colors.button.success.borderHover,
    focusBackground: colors.button.success.backgroundFocus,
    focusBorder: colors.button.success.borderFocus,
    activeBackground: colors.button.success.backgroundActive,
    activeBorder: colors.button.success.borderActive,
  },
};
const sizes = {
  large: {
    lineHeight: subtract(misc.button.large.height, '2px'),
    minWidth: '96px',
    padding: spacing.medium,
    borderRadius: divide(misc.button.large.height, '2'),
  },
  default: {
    lineHeight: subtract(misc.button.default.height, '2px'),
    minWidth: '96px',
    padding: spacing.small,
    borderRadius: divide(misc.button.large.height, '2'),
  },
  compressed: {
    lineHeight: subtract(misc.button.compressed.height, '2px'),
    minWidth: 'auto',
    padding: spacing.small,
    borderRadius: divide(misc.button.large.height, '2'),
  },
  small: {
    lineHeight: subtract(misc.button.small.height, '2px'),
    minWidth: 'auto',
    padding: spacing.xsmall,
    borderRadius: divide(misc.button.large.height, '2'),
  },
};

const getAttributes = props => {
  const appearanceStyles = appearances[props.appearance]
    ? appearances[props.appearance]
    : appearances.default;
  const sizeStyles = sizes[props.size] ? sizes[props.size] : sizes.default;

  let styles = { ...appearanceStyles, ...sizeStyles };

  if (props.success) {
    styles = { ...styles, ...states.success };
  }

  if (props.loading) {
    styles.background = styles.hoverBackground;
    styles.focusBackground = styles.hoverBackground;
    styles.activeBackground = styles.hoverBackground;
    styles.border = styles.hoverBorder;
    styles.focusBorder = styles.hoverBorder;
    styles.activeBorder = styles.hoverBorder;
  }

  if (props.icon && !props.text) {
    styles.padding = 0;
    styles.minWidth = '36px';
    styles.icon = colors.button.link.icon;
  }

  return styles;
};

const Button = ({ children, ...props }) => {
  const button = <ButtonContent {...props} text={children} />;
  return button;
};

const ButtonContent = props => {
  const content = [];
  const icon = props.success ? 'check' : props.icon;

  if (props.text) {
    content.push(
      <Button.Text key='text' hasIcon={icon || props.loading}>
        {props.text}
      </Button.Text>,
    );
  }

  if (props.loading) {
    content.push(<Spinner key='spinner' inverse={props.primary} />);
  } else if (icon) {
    content.push(<Icon key='icon' size={16} name={icon} color={getAttributes(props).icon} />);
  }

  const Element = props.href ? Button.LinkElement : Button.Element;

  return <Element {...props}>{content}</Element>;
};

Button.Element = styled.button`
  min-height: ${props => getAttributes(props).lineHeight};
  min-width: ${props => getAttributes(props).minWidth};
  box-sizing: border-box;

  text-transform: uppercase;
  white-space: nowrap;
  letter-spacing: 1px;
  font-size: 13px;

  background: ${props => getAttributes(props).background};
  border: 1px solid;
  border-color: ${props => getAttributes(props).border};
  border-radius: ${props => getAttributes(props).borderRadius};
  color: ${props => getAttributes(props).text};

  padding: 0 ${props => getAttributes(props).padding};

  opacity: ${props => (props.disabled ? 0.5 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${props => (props.disabled || props.loading || props.success ? 'none' : null)};
  transition: border-color ${misc.animationDuration}, background ${misc.animationDuration};

  ${Icon.Element}, ${StyledSpinner} {
    position: relative;
    top: -1px;
    margin-right: ${props => (props.text ? spacing.xsmall : 0)};
  }

  ${Icon.Element} {
    color: ${props => getAttributes(props).text};
  }

  &:hover {
    color: ${props => getAttributes(props).textHover || getAttributes(props).text};
    background: ${props => getAttributes(props).hoverBackground};
    border-color: ${props => getAttributes(props).hoverBorder};
    ${Icon.Element} {
      path {
        fill: ${props => getAttributes(props).iconHover};
      }
    }
  }

  &:focus {
    background: ${props => getAttributes(props).focusBackground};
    border-color: ${props => getAttributes(props).focusBorder};
    outline: none;
  }

  &:active {
    background: ${props => getAttributes(props).activeBackground};
    border-color: ${props => getAttributes(props).activeBorder};
    outline: none;
  }
`;

Button.Text = styled.span`
  margin-right: ${({ hasIcon }) => (hasIcon ? '20px' : 'auto')};
`;
const LinkButton = Button`
  display: table;
  text-decoration: none;

  ${Button.Text} {
    display: table-cell;
  }
`;
Button.LinkElement = props => <LinkButton {...props} as='a' />;
const communPropTypes = {
  size: PropTypes.oneOf(['default', 'large', 'small', 'compressed']),
  appearance: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'cta',
    'link',
    'destructive',
    'tertiaryButton',
  ]),
  icon: PropTypes.oneOf(ICONNAMES),
  label: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  success: PropTypes.bool,
};
ButtonContent.propTypes = { ...communPropTypes, text: PropTypes.string };
Button.propTypes = communPropTypes;

Button.defaultProps = {
  size: 'default',
  appearance: 'default',
  icon: null,
  disabled: false,
  loading: false,
  success: false,
};

export default Button;
