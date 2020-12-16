import React, { useEffect, useState, useRef } from "react";
import { Link } from "gatsby";
import { media } from "../utils";
import styled from "styled-components";
import Logo from "./Logo";

const NavigationWrapper = styled.div`
  display: none;
  ${media.tablet`
    width: 100vw;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    transition: background-color 0.6s ease-out;
    z-index: 1000;
    `}
`;

const LogoWrapper = styled.div`
  margin: 0.2rem;
  position: fixed;
  top: 0;
  left: 0;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-grow: 0.4;
  justify-content: space-between;
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

const Navigation = () => {
  const [navigationBackground, setNavigationBackground] = useState(
    "transparent"
  );
  const navigationRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);

    navigationRef.current.style.height = "70px";
    navigationRef.current.style.background = navigationBackground;

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  });

  const updateScroll = () => {
    window.scrollY > window.innerHeight
      ? setNavigationBackground("rgba(255,255,255,0.8)")
      : setNavigationBackground("transparent");
  };

  return (
    <NavigationWrapper ref={navigationRef}>
      <LogoWrapper className="logo">
        <Logo whereToGo="/" />
      </LogoWrapper>
      <LinksWrapper>
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
      </LinksWrapper>
    </NavigationWrapper>
  );
};

export default Navigation;
