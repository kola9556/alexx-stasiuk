import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Button = styled(Link)`
  margin: 0;
  padding: 0;
  width: 102%;
  height: 110%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  font-size: 1.8rem;
  color: white;
  background-color: ${({ theme }) => theme.navyText};
  border-radius: 0.7rem;
  position: relative;
  bottom: 2px;
  right: 1px;
  transform: translate(-10px, -10px);
  transition: transform 0.5s;

  :hover {
    transform: translate(0, 0);
  }

  :active {
    background-color: ${({ theme }) => theme.pinkBackground};
    color: ${({ theme }) => theme.navyText};
    border: 3px solid ${({ theme }) => theme.navyText};
  }
`;

const ButtonFrame = styled.div`
  margin: 0;
  padding: 0;
  width: 12rem;
  height: 3.8rem;
  border: 0.2rem solid ${({ theme }) => theme.navyText};
  border-radius: 0.7rem;
`;

const MainButton = ({ children, path }) => {
  return (
    <>
      <ButtonFrame>
        <Button to={path}>{children}</Button>
      </ButtonFrame>
    </>
  );
};

export default MainButton;
