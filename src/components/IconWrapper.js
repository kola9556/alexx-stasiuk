import styled from 'styled-components';

const IconWrapper = styled.div`
  width: 20%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 90%;
    height: 90%;
    transition: transform 1s;
    transition-timing-function: ease-in-out;
  }
  :hover {
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export default IconWrapper;
