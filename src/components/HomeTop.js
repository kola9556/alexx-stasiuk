import React from 'react';
import styled, { css } from 'styled-components';
import Hamburger from './Hamburger';
import Logo from './Logo';
import { Heading, UpperSecondHeading } from './StyledTexts';
import Navigation from './Navigation';
import LeftWrapper from './LeftWrapper';
import RightWrapper from './RightWrapper';

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const LogoWrapper = styled.div`
  margin: 0.5rem;
  position: absolute;
  bottom: 0;
  right: 0;

  ${({ desktop }) =>
    desktop &&
    css`
      @media (min-width: 700px) {
        display: none;
      }
    `}
`;

const textContent = {
  phone: (
    <>
      Hi,
      <br /> I'm Alex!
    </>
  ),
  desktop: "Hi, I'm Alex!",
  secondHeading: 'Frontend developer',
};

const HomeTop = ({ transferFluid }) => {
  return (
    <>
      <MainWrapper>
        <LeftWrapper fluidTransfer={transferFluid}>
          <Hamburger />
          <LogoWrapper desktop>
            <Logo whereToGo="/" />
          </LogoWrapper>
          <Heading>{window.screen.width < 700 ? textContent.phone : textContent.desktop}</Heading>
          <UpperSecondHeading>{textContent.secondHeading}</UpperSecondHeading>
        </LeftWrapper>
        <RightWrapper>
          <Navigation />
          <LogoWrapper>
            <Logo whereToGo="/" />
          </LogoWrapper>
        </RightWrapper>
      </MainWrapper>
    </>
  );
};

export default HomeTop;
