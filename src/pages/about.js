import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Paragraph, SecHeading } from '../components/StyledTexts';
import TopSection from '../components/TopSection';
import MainButton from '../components/MainButton';

const StyledParagraph = styled(Paragraph)`
  margin: 8rem 4rem;
`;

const StyledSecHeading = styled(SecHeading)`
  margin: 6rem;
  border-bottom: 1rem solid ${({ theme }) => theme.navyText};
`;

const ButtonsWrapper = styled.div`
  margin: 6rem 6rem 10rem;
  display: flex;
  justify-content: space-between;
`;

const textContent = { heading: <>Hi, I'm Aleksandra Stasiuk!</> };

const AboutPage = ({ data }) => {
  // images
  const about = data.allFile.edges.filter((e) => e.node.name === 'about');
  const alex = data.allFile.edges.filter((e) => e.node.name === 'alex');
  return (
    <>
      <TopSection
        transferFluid={about[0].node.childImageSharp.fluid}
        portraitFluid={alex[0].node.childImageSharp.fluid}
        text={textContent.heading}
      />
      <StyledParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor eros neque, et
        interdum est consequat vel. Morbi tincidunt congue sollicitudin. Ut lacinia dui tellus, a
        venenatis sem venenatis sed. Vivamus enim sem, tincidunt eu venenatis quis, suscipit vel
        felis. Morbi eget velit ex. Integer id auctor mi, vitae dictum felis. Suspendisse a varius
        eros. Morbi porta convallis est, id feugiat lacus euismod in. Duis vel aliquam metus. Donec
        dictum purus sapien, quis interdum sapien dapibus egestas. Integer cursus ornare efficitur.
        Praesent neque ipsum, viverra at semper sed, venenatis at tortor. Proin imperdiet lorem
        tortor, ac interdum tortor consectetur in. Vivamus non bibendum magna. Nullam ornare dapibus
        arcu, non cursus magna aliquam quis. Donec iaculis euismod ultrices. Fusce eu condimentum
        eros. Morbi porta turpis sit amet ornare fermentum. Aenean in velit eu erat congue auctor
        vel nec est. Sed dictum turpis a metus auctor posuere. Sed non ultricies lectus, vel luctus
        tortor. In et enim eget elit dapibus aliquet. Fusce enim tortor, eleifend sed odio vitae,
        commodo pharetra justo. Maecenas ut tortor eget mi finibus vestibulum eu non ante. Nullam
        elementum orci sed feugiat hendrerit. Fusce maximus neque at tempus venenatis.
      </StyledParagraph>
      <StyledSecHeading>Let's check!</StyledSecHeading>
      <ButtonsWrapper>
        <MainButton path="/projects">projects</MainButton>
        <MainButton path="/stack">stack</MainButton>
      </ButtonsWrapper>
      <StyledSecHeading>My hobbies</StyledSecHeading>

      <StyledParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor eros neque, et
        interdum est consequat vel. Morbi tincidunt congue sollicitudin. Ut lacinia dui tellus, a
        venenatis sem venenatis sed. Vivamus enim sem, tincidunt eu venenatis quis, suscipit vel
        felis. Morbi eget velit ex. Integer id auctor mi, vitae dictum felis. Suspendisse a varius
        eros. Morbi porta convallis est, id feugiat lacus euismod in. Duis vel aliquam metus. Donec
        dictum purus sapien, quis interdum sapien dapibus egestas. Integer cursus ornare efficitur.
        Praesent neque ipsum, viverra at semper sed, venenatis at tortor. Proin imperdiet lorem
        tortor, ac interdum tortor consectetur in. Vivamus non bibendum magna. Nullam ornare dapibus
        arcu, non cursus magna aliquam quis. Donec iaculis euismod ultrices. Fusce eu condimentum
        eros. Morbi porta turpis sit amet ornare fermentum. Aenean in velit eu erat congue auctor
        vel nec est. Sed dictum turpis a metus auctor posuere. Sed non ultricies lectus, vel luctus
        tortor. In et enim eget elit dapibus aliquet. Fusce enim tortor, eleifend sed odio vitae,
        commodo pharetra justo. Maecenas ut tortor eget mi finibus vestibulum eu non ante. Nullam
        elementum orci sed feugiat hendrerit. Fusce maximus neque at tempus venenatis.
      </StyledParagraph>
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

export default AboutPage;
