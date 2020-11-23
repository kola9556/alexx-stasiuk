import styled from 'styled-components';
import FixedBackgroundSection from './FixedBackground';

const LeftWrapper = styled(FixedBackgroundSection)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-position: 50% 50%;
  background-size: cover;
  background-attachment: fixed;

  @media (min-width: 700px) {
    width: 60%;
  }
`;

export default LeftWrapper;
