import React from 'react';
import styled from 'styled-components';
import { element, arrayOf } from 'prop-types';
import { colors, fonts } from 'tokens';

const ParagraphMain = styled.span`
  font-weight: ${fonts.weight.bold};
  font-size: 21.33px;
`;

const StyledParagraph = styled.p`
  margin: 1em 0;
  color: ${colors.base.gray};
  line-height: 33.33px;
  letter-spacing: 0;
  font-size: 14px;
  font-weight: ${fonts.weight.normal};
  a {
    color: ${colors.base.gray};
    margin: 0 2px 0 0;
  }
  a:visited {
    color: ${colors.base.default};
  }
  a:hover {
    color: ${colors.base.default};
    opacity: 0.8;
  }
`;

class Paragraph extends React.Component {
  static ParagraphMain = ParagraphMain;

  render() {
    return <StyledParagraph {...this.props}>{this.props.children}</StyledParagraph>;
  }
}

Paragraph.propTypes = {
  children: arrayOf(element),
};

Paragraph.defaultProps = {};

export default Paragraph;
