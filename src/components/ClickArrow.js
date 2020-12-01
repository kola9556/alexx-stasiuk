import styled from 'styled-components';

const ClickArrow = styled.img`
  width: 12rem;
  height: 10.5rem;
  position: absolute;
  animation-name: move;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  transform: translate(-20px, -20px);

  @keyframes move {
    0% {
      transform: translate(-20px, -20px);
    }
    50% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-20px, -20px);
    }
  }
`;

export default ClickArrow;
