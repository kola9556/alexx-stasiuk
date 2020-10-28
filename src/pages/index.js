import React from 'react';
import styled from 'styled-components';
import hero from '../assets/images/hero.jpg';

const TopWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${({ image }) => image});
  background-position: 50% 50%;
  background-size: 100%;
  background-attachment: fixed;
`;

const Triangle = styled.div`
  position: absolute;
  bottom:0;
  right:0;
  width: 0;
	height: 0;
  border-left: 75vw solid transparent;
	border-bottom: 95vh solid ${({ theme }) => theme.pinkBackground};
}
`;

const IndexPage = () => (
  <TopWrapper image={hero}>
    <Triangle />
  </TopWrapper>
);

export default IndexPage;
