import styled from 'styled-components';

const StackButton = styled.a`
  padding: 0.3rem 0;
  width: 10rem;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${({ theme }) => theme.navyText};
  border: 0.3rem solid ${({ theme }) => theme.navyText};
  border-radius: 2rem;
  outline: none;
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.navyText};
    background-color: white;
  }
`;

export default StackButton;
