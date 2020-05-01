import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, fonts } from 'tokens';

const BaseHeading = styled.h1`
  margin: 1em 0;
  color: ${colors.base.default};
  font-weight: ${fonts.weight.normal};
  line-height: 1.3;
`;

const Heading = props => {
  const Component = Heading.Element[props.size];
  const as = `h${props.size}`;
  return (
    <Component as={as} {...props}>
      {props.children}
    </Component>
  );
};

Heading.Element = [];

Heading.Element[1] = styled(BaseHeading)`
  font-size: 59px;
  font-weight: ${fonts.weight.bold};
`;

Heading.Element[2] = styled(BaseHeading)`
  font-size: 29px;
  font-weight: ${fonts.weight.regular};
  color: ${colors.base.orangeLighter};
`;

Heading.Element[3] = styled(BaseHeading)`
  font-size: 24px; /* TO-DO: tokenize */
  font-weight: ${fonts.weight.bold};
  font-weight: ${fonts.weight.regular};
  color: ${colors.base.gray};
`;

Heading.Element[4] = styled(BaseHeading)`
  font-size: 21.33px;
  font-weight: ${fonts.weight.regular};
  color: ${colors.base.gray};
`;
Heading.Element[5] = styled(BaseHeading)`
  font-size: 18.66px;
  font-weight: ${fonts.weight.regular};
  color: ${colors.base.gray};
`;
Heading.Element[6] = styled(BaseHeading)`
  font-size: 16px;
  font-weight: ${fonts.weight.regular};
  color: ${colors.base.gray};
`;

Heading.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
  children: PropTypes.node,
};

Heading.defaultProps = {
  size: 1,
  children: null,
};

export default Heading;
