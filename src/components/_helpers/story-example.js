import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from 'tokens';

const Title = styled.div`
  position: absolute;
  font-family: 'Roboto Mono';
  font-size: 12px;
  color: rgb(168, 168, 168);
  top: 1.5em;
  left: 2em;
`;

const Wrapper = styled.div`
  padding: 4.5rem 3rem 3rem 3rem;
  position: relative;
  border: 1px solid rgb(236, 236, 236);
  margin-bottom: 1rem;
  border-radius: 3px;

  &.align-center {
    flex: 1;
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
  }

  background: ${props => (props.background === 'dark' ? colors.base.default : colors.base.white)};
  color: ${props => (props.background === 'dark' ? colors.base.white : colors.base.default)};
`;

const Example = props => (
  <Wrapper className={props.align === 'center' ? 'align-center' : null} {...props}>
    <Title>{props.title}</Title>
    {props.children}
  </Wrapper>
);

Example.propTypes = {
  title: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.element,
};
export default Example;
