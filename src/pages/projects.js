import React from 'react';
import { graphql } from 'gatsby';
import TopSection from '../components/TopSection';
import Project from '../components/Project';
import Navigation from '../components/Navigation';

const textContent = { heading: 'Projects' };

const ProjectsPage = ({ data }) => {
  const projectImageTop = data.allFile.edges.filter((e) => e.node.name === 'projects');
  const projectsArray = data.allDatoCmsProject.nodes;

  return (
    <>
      <Navigation />
      <TopSection
        transferFluid={projectImageTop[0].node.childImageSharp.fluid}
        text={textContent.heading}
      />
      {projectsArray.map((project) => (
        <Project
          key={project.id}
          title={project.projectTitle}
          projectImage={project.mainImage.url}
          projectImageAlt={project.mainImage.alt}
          keyItem={project.mainImage.filename}
          iconsArray={project.stackIcons}
          description={project.description}
          githubLink={project.githubLink}
          pageLink={project.pageLink}
        />
      ))}
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
    allDatoCmsProject {
      nodes {
        description
        githubLink
        id
        mainImage {
          alt
          url
          filename
        }
        pageLink
        projectTitle
        stackIcons {
          ... on DatoCmsIcon {
            id
            iconData {
              url
              filename
            }
          }
        }
      }
    }
  }
`;

export default ProjectsPage;
