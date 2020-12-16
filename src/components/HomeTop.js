import React from "react";
import styled, { css } from "styled-components";
import { media } from "../utils";
import Logo from "./Logo";
import { Heading, UpperSecondHeading } from "./StyledTexts";
import NavigationHome from "./NavigationHome";
import FixedBackgroundLeft from "./FixedBackgrundLeft";

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
      ${media.tablet` display: none;`}
    `}
`;

const RightWrapper = styled.div`
  display: none;

  ${media.tablet`background: ${({ theme }) => theme.pinkBackground};
    width: 40%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;`}
`;

const textContent = {
  phone: (
    <>
      Hi,
      <br /> I'm Alex!
    </>
  ),
  desktop: "Hi, I'm Alex!",
  secondHeading: "Frontend developer",
};

const HomeTop = ({ transferFluid }) => {
  return (
    <>
      <MainWrapper>
        <FixedBackgroundLeft fluidTransfer={transferFluid}>
          <LogoWrapper desktop>
            <Logo whereToGo="/" />
          </LogoWrapper>
          <Heading index>
            {window.screen.width < 700
              ? textContent.phone
              : textContent.desktop}
          </Heading>
          <UpperSecondHeading>{textContent.secondHeading}</UpperSecondHeading>
        </FixedBackgroundLeft>
        <RightWrapper home>
          <NavigationHome />
          <LogoWrapper>
            <Logo whereToGo="/" />
          </LogoWrapper>
        </RightWrapper>
      </MainWrapper>
    </>
  );
};

export default HomeTop;
