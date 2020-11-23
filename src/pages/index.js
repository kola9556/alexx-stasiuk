import React from 'react';
import { graphql } from 'gatsby';
import HomeTop from '../components/HomeTop';

const IndexPage = ({ data }) => {
  return (
    <>
      <HomeTop transferFluid={data.file.childImageSharp.fluid} />
    </>
  );
};

export const homeQuery = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(jpegQuality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export default IndexPage;
