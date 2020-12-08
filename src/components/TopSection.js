import React from "react";
import styled, { css } from "styled-components";
import { media } from "../utils";
import Navigation from "../components/Navigation";
import Hamburger from "./Hamburger";
import { Heading } from "./StyledTexts";
import LeftWrapper from "./LeftWrapper";
import RightWrapper from "./RightWrapper";
import Image from "gatsby-image";

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const PortraitImage = styled(Image)`
  margin-top: 6rem;
  width: 20rem;
  height: auto;
  filter: grayscale(30%);
  border-radius: 2rem;

  ${media.tablet` width: 47%;`}
`;
const StyledSecHeading = styled(Heading)`
  margin-top: 3rem;
  padding: 1.5rem 0;
  background: ${({ theme }) => theme.smokePink};
  width: 75%;
  border-radius: 3rem;

  ${media.tablet`  width: 50%;
    background: transparent;

    ${({ mobile }) =>
      mobile &&
      css`
        display: none;
      `}`}
`;

const TopSection = ({ transferFluid, portraitFluid, text }) => {
  return (
    <>
      <MainWrapper>
        <Navigation />
        <LeftWrapper fluidTransfer={transferFluid}>
          <Hamburger />
          {portraitFluid ? (
            <PortraitImage
              alt="Portfolio image of Aleksandra Stasiuk"
              fluid={portraitFluid}
            />
          ) : null}
          <StyledSecHeading mobile>{text}</StyledSecHeading>
        </LeftWrapper>
        <RightWrapper>
          <StyledSecHeading>{text}</StyledSecHeading>
        </RightWrapper>
      </MainWrapper>
    </>
  );
};

export default TopSection;
