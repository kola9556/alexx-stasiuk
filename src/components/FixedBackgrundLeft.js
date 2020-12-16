import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { media } from "../utils";

const FixedBackgroundSection = ({ fluidTransfer, className, children }) => {
  return (
    <BackgroundImage
      fluid={fluidTransfer}
      backgroundColor="rgba(240, 232, 232, 1)"
      Tag="section"
      className={className}
    >
      {children}
    </BackgroundImage>
  );
};

const FizedBackgroundLeft = styled(FixedBackgroundSection)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-position: 50% 50%;
  background-size: cover;
  background-attachment: fixed;

  ${media.tablet`width: 60%;`}
`;

export default FizedBackgroundLeft;
