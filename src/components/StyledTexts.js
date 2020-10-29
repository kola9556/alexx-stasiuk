import styled from 'styled-components';

export const Heading = styled.h1`
  margin: 0;
  font-size: 6.2rem;
  text-align: center;
  color: ${({ theme }) => theme.navyText};
  letter-spacing: 0.4rem;

  @media (min-width: 700px) {
    font-size: 9.2rem;
  }
`;

export const UpperSeecondHeading = styled.h2`
  text-transform: uppercase;
  font-size: 2.2rem;
  text-align: center;
  color: ${({ theme }) => theme.navyText};
  letter-spacing: 0.3rem;

  @media (min-width: 700px) {
    font-size: 3.2rem;
    margin: 0;
  }
`;
