import React, { useEffect } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Paragraph, SecHeading } from '../components/StyledTexts';
import TopSection from '../components/TopSection';
import MainButton from '../components/MainButton';
import Hobbies from '../components/Hobbies';
import Footer from '../components/Footer';
import ClickArrow from '../components/ClickArrow';
import click from '../assets/images/click.svg';

const StyledParagraph = styled(Paragraph)`
  margin: 8rem 4rem;

  @media (min-width: 700px) {
    margin: 18rem 18% 12rem;
  }
`;

const StyledSecHeading = styled(SecHeading)`
  margin: 6rem 6rem 4rem;
  border-bottom: 1rem solid ${({ theme }) => theme.navyText};
`;

const ButtonsWrapper = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;

  @media (min-width: 700px) {
    width: 40vw;
    margin: 5rem 0 15rem;
  }
`;

const ContactMessage = styled(SecHeading)`
  margin: 7rem 2rem;
  font-size: 3.2rem;

  @media (min-width: 700px) {
    margin: 12rem 0 20rem;
    font-size: 4.2rem;
    width: 40vw;
  }
`;

const textContent = { heading: <>Hi, I'm Aleksandra Stasiuk!</> };

const AboutPage = ({ data }) => {
  // images
  const about = data.allFile.edges.filter((e) => e.node.name === 'about');
  const alex = data.allFile.edges.filter((e) => e.node.name === 'alex');

  useEffect(() => {
    window.scrollTo(0, 0);
    const horseIcon = document.querySelector('.horseWrapper');
    const horseIconHeight = horseIcon.getBoundingClientRect().height;
    const horseIconLeft = horseIcon.getBoundingClientRect().width;
    const click = document.querySelector('.click');
    click.style.top = horseIcon.getBoundingClientRect().top - horseIconHeight - 15 + 'px';
    click.style.left = horseIcon.getBoundingClientRect().left - horseIconLeft - 10 + 'px';
  });

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
        <MainButton whereToGo="/projects">projects</MainButton>
        <MainButton whereToGo="/stack">stack</MainButton>
      </ButtonsWrapper>
      <StyledSecHeading>My hobbies</StyledSecHeading>
      <ClickArrow className="click" src={click} />
      <Hobbies />
      <ContactMessage>
        If you find me interesting, let's make a{' '}
        <MainButton whereToGo="/contact" aboutPageContact="true">
          contact
        </MainButton>{' '}
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
