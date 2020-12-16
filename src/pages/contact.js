import React from "react";
import styled, { css } from "styled-components";
import { graphql } from "gatsby";
import { media } from "../utils";
import TopSection from "../components/TopSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const textContent = {
  heading: "Contact",
};

const MobileContactWrapper = styled.div`
  margin: 8rem 0;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.tablet`
    display: none;
  `}
`;

const ContactPage = ({ data }) => {
  const contactImageTop = data.allFile.edges.filter(
    (e) => e.node.name === "contact"
  );
  return (
    <>
      <TopSection
        transferFluid={contactImageTop[0].node.childImageSharp.fluid}
        text={textContent.heading}
        contact
      >
        <ContactForm />
      </TopSection>
      <MobileContactWrapper>
        <ContactForm />
      </MobileContactWrapper>
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

export default ContactPage;
