import React from "react";
import styled, { css } from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  height: 5vh;
  background-color: ${({ theme }) => theme.blueDots};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
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
