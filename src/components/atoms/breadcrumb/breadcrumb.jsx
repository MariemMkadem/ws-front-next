import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors, spacing, misc } from 'tokens';

import Icon from '../icon';

const Link = props => <Link.Element {...props}>{props.children}</Link.Element>;
Link.Element = styled.a`
  color: ${colors.link.default};
  text-decoration: none;
  &:hover {
    color: ${colors.link.defaultHover};
  }
`;

const Separator = styled(Icon)`
  margin: 0 ${spacing.small};
`;

const LinkIcon = styled(Icon)`
  margin-right: ${spacing.xsmall};
`;

const Breadcrumb = props => <Breadcrumb.Element {...props} />;

Breadcrumb.Element = styled.div`
  line-height: ${misc.lineHeight};
  ul {
    list-style: none;
    padding: 0;
  }

  /* overrides for link */
  ${Link.Element} {
    color: ${colors.base.gray};
    font-size: 13px;
    &:hover {
      cursor: pointer;
      color: ${colors.base.gray};
      ${LinkIcon} path {
        fill: ${colors.base.gray};
      }
    }
  }

  /* last link should be inactive: */
  ${Link.Element}:last-child {
    color: ${colors.base.default};
    cursor: default;
  }

  /* sometimes there's just one link = first = last, let's override that */
  ${Link.Element}:first-child {
    color: ${colors.grayDarkest};
    cursor: pointer;
    &:hover {
      color: ${colors.base.default};
    }
  }

  /* fix alignment with text for all icons (including separator) */
  ${LinkIcon}, ${Separator} {
    position: relative;
    top: -2px;
  }

  ${Link.Element}:last-child ${Separator} {
    display: none;
  }
  ${LinkIcon} {
    top: -2px;
  }
  ${Separator} {
    top: -1px;
  }

  ${Link.Element}:last-child ${Separator} {
    display: none;
  }
`;

Breadcrumb.Link = props => (
  <Link {...props}>
    {props.icon && <LinkIcon name={props.icon} size={12} color={colors.base.orangeLighter} />}
    {props.children}
    <Separator name='chevron-right-fill' size={12} color={colors.base.orangeLighter} />
  </Link>
);

Breadcrumb.propTypes = {
  children: PropTypes.node,
};

Link.propTypes = {
  children: PropTypes.node,
};
Breadcrumb.Link.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.node,
};

export default Breadcrumb;
