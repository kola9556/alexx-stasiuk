import React from "react";
import styled, { css } from "styled-components";
import { media } from "../utils";
import { Heading } from "./StyledTexts";
import FixedBackgroundLeft from "./FixedBackgrundLeft";
import Image from "gatsby-image";

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  ${({ contact }) =>
    contact &&
    css`
      ${media.tablet`
      height: 95vh;
    `}
    `}
`;

const PortraitImage = styled(Image)`
  margin-top: 6rem;
  width: 20rem;
  height: auto;
  filter: grayscale(30%);
  border-radius: 2rem;

  ${media.tablet` width: 47%;`}
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

const TopSection = ({
  transferFluid,
  portraitFluid,
  text,
  children,
  contact,
}) => {
  return (
    <>
      <MainWrapper contact={contact}>
        <FixedBackgroundLeft fluidTransfer={transferFluid}>
          {portraitFluid ? (
            <PortraitImage
              alt="Portfolio image of Aleksandra Stasiuk"
              fluid={portraitFluid}
            />
          ) : null}
          <StyledSecHeading mobile>{text}</StyledSecHeading>
        </FixedBackgroundLeft>
        <RightWrapper>
          <StyledSecHeading>{text}</StyledSecHeading>
          {children}
        </RightWrapper>
      </MainWrapper>
    </>
  );
};

export default TopSection;
