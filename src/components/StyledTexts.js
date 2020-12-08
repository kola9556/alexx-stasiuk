import styled, { css } from "styled-components";
import { media } from "../utils";

export const Heading = styled.h1`
  margin: 0;
  font-size: 5rem;
  text-align: center;
  color: ${({ theme }) => theme.navyText};
  letter-spacing: 0.4rem;

  ${media.tablet` font-size: 9.2rem;`}

  ${({ index }) =>
    index &&
    css`
      font-size: 6.2rem;
    `}
`;

export const SecHeading = styled.h1`
  margin: 0;
  font-size: 2.6rem;
  text-align: center;
  color: ${({ theme }) => theme.navyText};
  letter-spacing: 0.4rem;

  ${media.tablet` font-size: 6.2rem;`}
`;

export const UpperSecondHeading = styled.h2`
  text-transform: uppercase;
  font-size: 2.2rem;
  text-align: center;
  color: ${({ theme }) => theme.navyText};
  letter-spacing: 0.3rem;

  ${media.tablet`
    font-size: 3.2rem;
    margin: 0;`}
`;

export const Paragraph = styled.p`
  line-height: 2.2rem;
  text-indent: 5rem;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.navyText};

  ${media.tablet` font-size: 2.5rem;
    line-height: 3.5rem;
    text-indent: 7rem;`}
`;
