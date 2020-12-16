import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { media } from "../utils";

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

const NavLink = styled(Link)`
  font-size: 2.8rem;
  text-decoration: none;
  color: ${(theme) => theme.navyPurple};
  letter-spacing: 0.3rem;

  ${media.tablet`font-size: 2.4rem;`}

  :visited {
    color: ${(theme) => theme.navyPurple};
  }

  &.active {
    font-weight: 800;
  }
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
