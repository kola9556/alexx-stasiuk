import React from 'react';
import BackgroundImage from 'gatsby-background-image';

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

export default FixedBackgroundSection;
