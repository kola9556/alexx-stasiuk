import styled from 'styled-components';
import { Link } from 'gatsby';

const Button = styled(Link)`
  width: 12rem;
  height: 3.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  font-size: 1.8rem;
  color: white;
  background-color: ${({ theme }) => theme.navyText};
  border-radius: 2rem;
`;

export default Button;
