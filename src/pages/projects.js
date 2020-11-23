import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import TopSection from '../components/TopSection';

const textContent = { heaing: 'Projects' };

const ProjectsPage = ({ data }) => {
  const projects = data.allFile.edges.filter((e) => e.node.name === 'projects');

  return (
    <>
      <TopSection
        transferFluid={projects[0].node.childImageSharp.fluid}
        text={textContent.heaing}
      />
    </>
  );
};

export const homeQuery = graphql`
  {
    allFile {
      edges {
        node {
          name
          childImageSharp {
            fluid(jpegQuality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`;

export default ProjectsPage;
