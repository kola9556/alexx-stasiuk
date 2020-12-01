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

export const SecHeading = styled.h1`
  margin: 0;
  font-size: 4.2rem;
  text-align: center;
  color: ${({ theme }) => theme.navyText};
  letter-spacing: 0.4rem;

  @media (min-width: 700px) {
    font-size: 6.2rem;
  }
`;

export const UpperSecondHeading = styled.h2`
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

export const Paragraph = styled.p`
  line-height: 2.2rem;
  text-indent: 5rem;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.navyText};

  ::first-letter {
    font-size: 3.5rem;
    font-weight: 600;
  }

  @media (min-width: 700px) {
    font-size: 2.5rem;
    line-height: 3.5rem;
    text-indent: 7rem;

    ::first-letter {
      font-size: 5.5rem;
      font-weight: 600;
    }
  }
`;
