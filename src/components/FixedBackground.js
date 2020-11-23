import React from 'react';
import BackgroundImage from 'gatsby-background-image';

const FixedBackgroundSection = ({ fluidTransfer, className, children }) => {
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

export default FixedBackgroundSection;
