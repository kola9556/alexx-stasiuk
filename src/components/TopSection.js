import React from 'react';
import styled, { css } from 'styled-components';
import Hamburger from './Hamburger';
import Logo from './Logo';
import { SecHeading } from './StyledTexts';
import Navigation from './Navigation';
import LeftWrapper from './LeftWrapper';
import RightWrapper from './RightWrapper';
import Image from 'gatsby-image';

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const LogoWrapper = styled.div`
  margin: 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
`;

const PortraitImage = styled(Image)`
  margin-top: 6rem;
  width: 20rem;
  height: auto;
  filter: grayscale(30%);
  border-radius: 2rem;

  @media (min-width: 700px) {
    width: 47%;
  }
`;
const StyledSecHeading = styled(SecHeading)`
  margin-top: 3rem;
  padding: 1.5rem 0;
  background: ${({ theme }) => theme.smokePink};
  width: 75%;
  border-radius: 3rem;

  @media (min-width: 700px) {
    width: 50%;
    background: transparent;

    ${({ mobile }) =>
      mobile &&
      css`
        display: none;
      `}
  }
`;

const TopSection = ({ transferFluid, portraitFluid, text }) => {
  return (
    <>
      <MainWrapper>
        <LeftWrapper fluidTransfer={transferFluid}>
          <Hamburger />
          <LogoWrapper>
            <Logo whereToGo="/" />
          </LogoWrapper>
          <PortraitImage alt="Portfolio image of Aleksandra Stasiuk" fluid={portraitFluid} />
          <StyledSecHeading mobile>{text}</StyledSecHeading>
        </LeftWrapper>
        <RightWrapper>
          <Navigation />
          <StyledSecHeading>{text}</StyledSecHeading>
        </RightWrapper>
      </MainWrapper>
    </>
  );
};

export default TopSection;
