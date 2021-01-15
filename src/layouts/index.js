import React from "react";
import styled, { ThemeProvider, css } from "styled-components";
import { theme } from "../assets/styles/theme";
import { media } from "../utils";
import GlobalStyle from "../assets/styles/globalStyle";
import Navigation from "../components/Navigation";
import Hamburger from "../components/Hamburger";
import Logo from "../components/Logo";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoWrapper = styled.div`
  margin: 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;

  ${({ desktop }) =>
    desktop &&
    css`
      ${media.tablet` display: none;`}
    `}
`;

const MainLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper>
          {children.props.path !== "/" ? (
            <LogoWrapper desktop>
              <Logo whereToGo="/" />
            </LogoWrapper>
          ) : null}

          <Hamburger />
          {children.props.path !== "/" ? <Navigation /> : null}
          {children}
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default MainLayout;
