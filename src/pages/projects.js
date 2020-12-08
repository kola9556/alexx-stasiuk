import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { media } from "../utils";
import TopSection from "../components/TopSection";
import Project from "../components/Project";
import { SecHeading } from "../components/StyledTexts";
import MainButton from "../components/MainButton";
import Footer from "../components/Footer";

const textContent = { heading: "Projects" };

const LetsCheck = styled(SecHeading)`
  margin: 3rem;

  ${media.tablet`
    margin: 35rem 0;  
  `}
`;

const ProjectsPage = ({ data }) => {
  const projectImageTop = data.allFile.edges.filter(
    (e) => e.node.name === "projects"
  );
  const projectsArray = data.allDatoCmsProject.nodes;

  return (
    <>
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
      <LetsCheck>
        Let's check my tech <br />
        <MainButton whereToGo="/stack" down="true">
          stack
        </MainButton>{" "}
        !{" "}
      </LetsCheck>
      <Footer />
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
