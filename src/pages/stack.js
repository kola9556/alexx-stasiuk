import React from "react";
import styled, { css } from "styled-components";
import { graphql } from "gatsby";
import { media } from "../utils";
import { SecHeading } from "../components/StyledTexts";
import Tool from "../components/Tool";
import Footer from "../components/Footer";
import TopSection from "../components/TopSection";

const textContent = {
  heading: "Stack",
  secHeadings: [
    "Technologies, tools & concepts I use",
    "Next I would love to learn",
  ],
};

const StyledSecHeading = styled(SecHeading)`
  margin: 10rem 3rem 0rem;

  ${media.tablet`
    margin: 30rem 0 5rem;
  `}
`;

const TechToolWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;

  ${media.tablet`
    flex-direction: row;
  justify-content: space-between;
  `}
`;

const IconsWrapper = styled.div`
  display: flex;
  margin: 3rem 0;
  width: 85vw;
  justify-content: center;
  flex-wrap: wrap;

  ${media.tablet`
   width: 60%;

   ${({ bottom }) =>
     bottom &&
     css`
       margin-bottom: 25rem;
     `}
  `}
`;

const Icon = styled.img`
  width: 15vw;
  margin: 1rem;

  ${media.tablet`
    width: 7vw;
  `}

  ${({ bigger }) =>
    bigger &&
    css`
      width: 25vw;
      ${media.tablet`
    width: 11vw;
  `}
    `}
`;

const ToolsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 85vw;
  padding: 1.5rem 0;
  border-radius: 1rem;
  background: ${({ theme }) => theme.blueDots};

  ${media.tablet`
    width: 30%;
    padding: 3rem 1rem;
  `}
`;

const StackPage = ({ data }) => {
  const stackImageTop = data.allFile.edges.filter(
    (e) => e.node.name === "stack"
  );

  const knownTechs = [];
  const knownTools = [];
  const toLearnTechs = [];

  data.allDatoCmsStack.nodes[0].known.map((item) =>
    item.techicon ? knownTechs.push(item) : null
  );

  data.allDatoCmsStack.nodes[0].known.map((item) =>
    item.toolname ? knownTools.push(item) : null
  );

  data.allDatoCmsStack.nodes[0].tolearn.map((item) => toLearnTechs.push(item));

  return (
    <>
      <TopSection
        transferFluid={stackImageTop[0].node.childImageSharp.fluid}
        text={textContent.heading}
      />
      <StyledSecHeading underline>
        {textContent.secHeadings[0]}
      </StyledSecHeading>
      <TechToolWrapper>
        <IconsWrapper>
          {knownTechs.map((tech) =>
            tech.techicon.title === "Dato CMS" ? (
              <Icon
                src={tech.techicon.url}
                alt={tech.techicon.alt}
                key={tech.id}
                bigger
              />
            ) : (
              <Icon
                src={tech.techicon.url}
                alt={tech.techicon.alt}
                key={tech.id}
              />
            )
          )}
        </IconsWrapper>
        <ToolsWrapper>
          {knownTools.map((tool) => (
            <Tool key={tool.id}>{tool.toolname}</Tool>
          ))}
        </ToolsWrapper>
      </TechToolWrapper>
      <StyledSecHeading underline>
        {textContent.secHeadings[1]}
      </StyledSecHeading>
      <IconsWrapper bottom>
        {toLearnTechs.map((tech) => (
          <Icon key={tech.id} src={tech.techicon.url} bigger />
        ))}
      </IconsWrapper>
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
    allDatoCmsStack {
      nodes {
        known {
          ... on DatoCmsTechnology {
            id
            techicon {
              url
              alt
              title
            }
          }
          ... on DatoCmsTool {
            id
            toolname
          }
        }
        tolearn {
          id
          techicon {
            url
            alt
            title
          }
        }
      }
    }
  }
`;

export default StackPage;
