import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import TopBackground from '../components/TopBackground';
import TriangleBackground from '../components/TriangleBackground';

const IndexPage = ({ data }) => (
  <>
    <TopBackground fluidTransfer={data.file.childImageSharp.fluid}>
      <TriangleBackground />
    </TopBackground>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor eros neque, et interdum
      est consequat vel. Morbi tincidunt congue sollicitudin. Ut lacinia dui tellus, a venenatis sem
      venenatis sed. Vivamus enim sem, tincidunt eu venenatis quis, suscipit vel felis. Morbi eget
      velit ex. Integer id auctor mi, vitae dictum felis. Suspendisse a varius eros. Morbi porta
      convallis est, id feugiat lacus euismod in. Duis vel aliquam metus. Donec dictum purus sapien,
      quis interdum sapien dapibus egestas. Integer cursus ornare efficitur. Praesent neque ipsum,
      viverra at semper sed, venenatis at tortor. Proin imperdiet lorem tortor, ac interdum tortor
      consectetur in. Vivamus non bibendum magna. Nullam ornare dapibus arcu, non cursus magna
      aliquam quis. Donec iaculis euismod ultrices. Fusce eu condimentum eros. Morbi porta turpis
      sit amet ornare fermentum. Aenean in velit eu erat congue auctor vel nec est. Sed dictum
      turpis a metus auctor posuere. Sed non ultricies lectus, vel luctus tortor. In et enim eget
      elit dapibus aliquet. Fusce enim tortor, eleifend sed odio vitae, commodo pharetra justo.
      Maecenas ut tortor eget mi finibus vestibulum eu non ante. Nullam elementum orci sed feugiat
      hendrerit. Fusce maximus neque at tempus venenatis.
    </p>
  </>
);

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
