import styled from 'styled-components';

const TriangleBackground = styled.div`
  position: absolute;
  z-index: 100;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-left: 75vw solid transparent;
  border-bottom: 95vh solid ${({ theme }) => theme.pinkBackground};
`;

export default TriangleBackground;
