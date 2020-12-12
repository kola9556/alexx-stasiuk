import React from "react";
import styled from "styled-components";
import { media } from "../utils";

const StyledParagraph = styled.p`
  margin: 0 0.3rem;
  font-size: 1.8rem;
  color: white};

  span {
    color: ${({ theme }) => theme.smokePink};
    font-weight: 800;
  }

  ${media.tablet` font-size: 2.5rem;`}
`;

const Tool = ({ children }) => {
  return (
    <StyledParagraph>
      <span>&lt; </span>
      {children}
      <span> /&gt;</span>
    </StyledParagraph>
  );
};

export default Tool;
