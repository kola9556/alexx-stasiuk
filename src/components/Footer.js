import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  margin-top: 5rem;
  width: 100%;
  height: 5vh;
  background-color: ${({ theme }) => theme.blueDots};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FootersText = styled.p`
  font-size: 1.3rem;
  color: white;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FootersText>© 2020 Aleksandra Stasiuk. All rights reserved</FootersText>
    </FooterWrapper>
  );
};

export default Footer;
