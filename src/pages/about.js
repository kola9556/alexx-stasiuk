import React, { useEffect } from "react";
import styled from "styled-components";
import { media } from "../utils";
import { graphql } from "gatsby";
import { Paragraph, SecHeading } from "../components/StyledTexts";
import TopSection from "../components/TopSection";
import MainButton from "../components/MainButton";
import Hobbies from "../components/Hobbies";
import Footer from "../components/Footer";
import ClickArrow from "../components/ClickArrow";
import click from "../assets/images/click.svg";

const StyledParagraph = styled(Paragraph)`
  margin: 8rem 4rem;

  ::first-letter {
    font-size: 3.5rem;
    font-weight: 600;
  }

  ${media.tablet` 
    margin: 35rem 18% 28rem;

    ::first-letter {
      font-size: 5.5rem;
      font-weight: 600;
    }
`}
`;

const ButtonsWrapper = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;

  ${media.tablet` width: 40vw;
    margin: 5rem 0 35rem;
`}
`;

const ContactMessage = styled(SecHeading)`
  margin: 7rem 2rem;

  ${media.tablet` 
     margin: 38rem 0 30rem;
    font-size: 4.2rem;
    width: 40vw;
`}
`;

const textContent = { heading: <>Hi, I'm Aleksandra Stasiuk!</> };

const AboutPage = ({ data }) => {
  // images
  const aboutImageTop = data.allFile.edges.filter(
    (e) => e.node.name === "about"
  );
  const portraitImage = data.allFile.edges.filter(
    (e) => e.node.name === "alex"
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    const horseIcon = document.querySelector(".horseWrapper");
    const horseIconHeight = horseIcon.getBoundingClientRect().height;
    const horseIconLeft = horseIcon.getBoundingClientRect().width;
    const click = document.querySelector(".click");
    click.style.top =
      horseIcon.getBoundingClientRect().top - horseIconHeight - 15 + "px";
    click.style.left =
      horseIcon.getBoundingClientRect().left - horseIconLeft - 10 + "px";
  });

  return (
    <>
      <TopSection
        transferFluid={aboutImageTop[0].node.childImageSharp.fluid}
        portraitFluid={portraitImage[0].node.childImageSharp.fluid}
        text={textContent.heading}
      />
      <StyledParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor
        eros neque, et interdum est consequat vel. Morbi tincidunt congue
        sollicitudin. Ut lacinia dui tellus, a venenatis sem venenatis sed.
        Vivamus enim sem, tincidunt eu venenatis quis, suscipit vel felis. Morbi
        eget velit ex. Integer id auctor mi, vitae dictum felis. Suspendisse a
        varius eros. Morbi porta convallis est, id feugiat lacus euismod in.
        Duis vel aliquam metus. Donec dictum purus sapien, quis interdum sapien
        dapibus egestas. Integer cursus ornare efficitur. Praesent neque ipsum,
        viverra at semper sed, venenatis at tortor. Proin imperdiet lorem
        tortor, ac interdum tortor consectetur in. Vivamus non bibendum magna.
        Nullam ornare dapibus arcu, non cursus magna aliquam quis. Donec iaculis
        euismod ultrices. Fusce eu condimentum eros. Morbi porta turpis sit amet
        ornare fermentum. Aenean in velit eu erat congue auctor vel nec est. Sed
        dictum turpis a metus auctor posuere. Sed non ultricies lectus, vel
        luctus tortor. In et enim eget elit dapibus aliquet. Fusce enim tortor,
        eleifend sed odio vitae, commodo pharetra justo. Maecenas ut tortor eget
        mi finibus vestibulum eu non ante. Nullam elementum orci sed feugiat
        hendrerit. Fusce maximus neque at tempus venenatis.
      </StyledParagraph>
      <SecHeading underline>Let's check!</SecHeading>
      <ButtonsWrapper>
        <MainButton whereToGo="/projects">projects</MainButton>
        <MainButton whereToGo="/stack">stack</MainButton>
      </ButtonsWrapper>
      <SecHeading underline>My hobbies</SecHeading>
      <ClickArrow className="click" src={click} />
      <Hobbies />
      <ContactMessage>
        If you find me interesting, let's make a{" "}
        <MainButton whereToGo="/contact" down="true">
          contact
        </MainButton>{" "}
        !
      </ContactMessage>

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
  }
`;

export default AboutPage;
