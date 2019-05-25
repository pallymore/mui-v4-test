import React from 'react';
import renderer from 'react-test-renderer';

import { ButtonBase } from '@material-ui/core';

import { StyledNav, StyledButton } from './App.js';

it('renders ButtonBase without crashing', () => {
  const tree = renderer.create(<ButtonBase>ButtonBase</ButtonBase>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders disabled ButtonBase without crashing', () => {
  const tree = renderer.create(<ButtonBase disabled>ButtonBase</ButtonBase>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders StyledButton without crashing', () => {
  const tree = renderer.create(<StyledButton>styled btn</StyledButton>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders StyledButton without crashing', () => {
  const tree = renderer.create(<StyledButton>styled btn</StyledButton>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders disabled StyledButton without crashing', () => {
  const tree = renderer.create(<StyledButton disabled>styled btn</StyledButton>).toJSON();
  expect(tree).toMatchSnapshot();
});

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

