import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';
import { media } from '../utils';

const NavigationbarWrapper = styled.div`
  display: none;

  ${media.tablet` display: flex;
    align-items: center;
    justify-content: space-around;
    background: transparent;
    position: absolute;
    top: 1rem;
    width: 60rem;
    transform: rotate(-90deg);
    right: calc(-32rem + 40%);
    bottom: 0rem;`}
`;

const NavigationHome = () => {
  return (
    <NavigationbarWrapper>
      <NavLink to="/about" activeClassName="active">
        about me
      </NavLink>
      <NavLink to="/projects" activeClassName="active">
        projects
      </NavLink>
      <NavLink to="/stack" activeClassName="active">
        stack
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        contact
      </NavLink>
    </NavigationbarWrapper>
  );
};

export default NavigationHome;
