import React from 'react';
import styled from 'styled-components';
import renderer from 'react-test-renderer';

import { ButtonBase } from '@material-ui/core';

const StyledButton = styled((props) => (
  <ButtonBase {...props} />
))`
  && {
    background-color: red;
  }
`;

const StyledNav = styled(({ active, component, ...rest }) => (
  <StyledButton component={component} {...rest} />
))``;

StyledNav.defaultProps = {
  component: 'a',
};

it('renders active without crashing', () => {
  const tree = renderer.create(<StyledNav active>NavItem</StyledNav>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders disabled without crashing', () => {
  const tree = renderer.create(<StyledNav disabled>NavItem</StyledNav>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders as button without crashing', () => {
  const tree = renderer.create(<StyledNav component="button">NavItem</StyledNav>).toJSON();
  expect(tree).toMatchSnapshot();
});

