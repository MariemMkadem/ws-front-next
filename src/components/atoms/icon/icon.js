import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from 'tokens';
import { icons } from './icons.json';

const Icon = props => {
  const icon = icons[props.name] || icons.help;
  const color = colors.base[props.color] || props.color;

  return (
    <Icon.Element {...props}>
      <Image
        width={props.size}
        height={props.size}
        viewBox={`0 0 ${icon.width} ${icon.height}`}
        color={color}
      >
        {icon.paths.map((path, index) => (
          <path key={index} d={path} />
        ))}
      </Image>
    </Icon.Element>
  );
};

Icon.Element = styled.i`
  display: inline-block;
  line-height: 1;
`;
const Image = styled.svg`
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
  path {
    fill: ${props => props.color};
  }
`;

const ICONNAMES = Object.keys(icons);
// const COLORS = Object.keys(colors.base);

Icon.propTypes = {
  name: PropTypes.oneOf(ICONNAMES).isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: '20px',
  color: 'default',
};

export default Icon;
export { ICONNAMES };
