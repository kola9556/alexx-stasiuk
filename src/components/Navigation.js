import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';

const NavigationbarWrapper = styled.div`
  display: none;
  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50rem;
    background: transparent;
    transform: rotate(-90deg);
    position: relative;
    right: calc(25rem - 2rem);
  }
`;

const Navigation = () => {
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

export default Navigation;
