import styled from 'styled-components';

const RightWrapper = styled.div`
  display: none;
  @media (min-width: 700px) {
    background: ${({ theme }) => theme.pinkBackground};
    width: 40%;
    height: 100vh;
    display: flex;
    align-items: center;
  }
`;

export default RightWrapper;
