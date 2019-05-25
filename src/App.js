import React from 'react';
import styled from 'styled-components';
import { ButtonBase } from '@material-ui/core';

import './App.css';

export const StyledButton = styled((props) => (
  <ButtonBase {...props} />
))`
  && {
    background-color: red;

    ${props => props.disabled && `
      background-color: grey;
    `}
  }
`;

export const StyledNav = styled(({ active, component, ...rest }) => (
  <StyledButton component={component} {...rest} />
))``;

StyledNav.defaultProps = {
  component: 'a',
};


function App() {
  return (
    <div className="App">
      <p>
        <StyledButton>
          styled-button
        </StyledButton>
      </p>
      <p>
        <StyledNav active>
          styled nav active
        </StyledNav>
      </p>
      <p>
        <StyledNav disabled>
          styled nav disabled
        </StyledNav>
      </p>
      <p>
        <StyledNav component="button">
          styled nav button
        </StyledNav>
      </p>
      <p>
        <StyledNav component="button" disabled>
          styled nav button disabled
        </StyledNav>
      </p>
    </div>
  );
}

export default App;
