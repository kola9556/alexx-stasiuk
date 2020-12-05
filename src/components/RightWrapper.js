import styled from 'styled-components';
import { media } from '../utils';

const RightWrapper = styled.div`
  display: none;

  ${media.tablet`background: ${({ theme }) => theme.pinkBackground};
    width: 40%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;`}
`;

export default RightWrapper;
