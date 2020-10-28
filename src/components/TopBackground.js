import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = ({ fluidTransfer, className, children }) => {
  console.log(fluidTransfer);
  return (
    <BackgroundImage
      fluid={fluidTransfer}
      backgroundColor={({ theme }) => theme.pinkBackground}
      Tag="section"
      className={className}
    >
      {children}
    </BackgroundImage>
  );
};

const TopBackground = styled(BackgroundSection)`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  background-position: 50% 50%;
  background-size: cover;
  background-attachment: fixed;
`;

export default TopBackground;
