import React from "react";
import Media from "react-media";
import styled, { css } from "styled-components";
import { media } from "../utils";
import { SecHeading, Paragraph } from "./StyledTexts";
import StackButton from "./StackButton";

const ProjectWrapper = styled.div`
  width: 75vw;
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.tablet`
      margin: 28rem 0 0;
    
  `}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.tablet`
    flex-direction: row;
    justify-content: space-between;

    svg{
      height: 60vh;
    }
  `}
`;

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;

  ${media.tablet`
    width: 50%;
  `}
`;

const ProjectTitile = styled(SecHeading)`
  ${media.tablet`margin-bottom: 3rem;`}
`;

const StackIconsWrapper = styled.div`
  width: 100%;
  margin: 1rem 0 0;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
`;

const Icon = styled.img`
  width: 10vw;

  ${media.tablet`
    width: 5vw;
    margin: 0 1rem;
  `}

  ${({ dato }) =>
    dato &&
    css`
      width: 20vw;

      ${media.tablet`
        width: 10vw;
      `}
    `}
`;

const ButtonsWrapper = styled.div`
  padding-top: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const MarginedParagraph = styled(Paragraph)`
  margin-left: 1rem;
`;
const CenteredParagraph = styled(Paragraph)`
  text-align: center;
`;

const Project = ({
  title,
  projectImage,
  iconsArray,
  description,
  githubLink,
  pageLink,
  keyItem,
  projectImageAlt,
}) => {
  return (
    <ProjectWrapper>
      <ProjectTitile>{title}</ProjectTitile>
      <ContentWrapper>
        <svg
          width="100%"
          height="200"
          viewBox="0 0 624 608"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M594.788 43.0482H29.2203C13.0754 43.0482 0 55.7781 0 71.5124V438.647C0 454.38 13.0754 467.117 29.2203 467.117H241.743V498.878H163.468L125.996 564.952H498.007L460.539 498.878H382.257V467.117H594.788C610.903 467.117 624 454.378 624 438.647V71.5124C624 55.7781 610.903 43.0482 594.788 43.0482ZM565.547 410.185H58.4319V99.9732H565.547V410.185Z"
            fill="#B77E8C"
          />
          <rect
            x="59"
            y="96"
            width="505"
            height="317"
            fill={`url(#${keyItem}patt)`}
          />
          <defs>
            <pattern
              id={`${keyItem}patt`}
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                href={`#${keyItem}image`}
                transform="translate(0 -0.0496196) scale(0.000875657 0.00139497)"
              />
            </pattern>
            <image
              id={`${keyItem}image`}
              href={projectImage}
              alt={projectImageAlt}
            />
          </defs>
        </svg>
        <InfoWrapper>
          <Media
            queries={{
              desktop: "(min-width: 700px)",
            }}
          >
            {(matches) =>
              matches.desktop ? (
                <>
                  <StackIconsWrapper>
                    {iconsArray.map((icon) =>
                      icon.iconData.filename === "datocms.svg" ? (
                        <Icon key={icon.id} src={icon.iconData.url} dato />
                      ) : (
                        <Icon key={icon.id} src={icon.iconData.url} />
                      )
                    )}
                  </StackIconsWrapper>
                  <MarginedParagraph>{description}</MarginedParagraph>
                </>
              ) : (
                <>
                  <CenteredParagraph>{description}</CenteredParagraph>
                  <StackIconsWrapper>
                    {iconsArray.map((icon) =>
                      icon.iconData.filename === "datocms.svg" ? (
                        <Icon key={icon.id} src={icon.iconData.url} dato />
                      ) : (
                        <Icon key={icon.id} src={icon.iconData.url} />
                      )
                    )}
                  </StackIconsWrapper>
                </>
              )
            }
          </Media>
          <ButtonsWrapper>
            <StackButton href={githubLink} target="_blank">
              github
            </StackButton>
            <StackButton href={pageLink} target="_blank">
              page
            </StackButton>
          </ButtonsWrapper>
        </InfoWrapper>
      </ContentWrapper>
    </ProjectWrapper>
  );
};

export default Project;
