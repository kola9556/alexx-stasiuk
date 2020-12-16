import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { media } from "../utils";

const ButtonFrame = styled.div`
  display: inline-block;
  margin: 0;
  padding: 0;
  width: 12rem;
  height: 3.8rem;
  border: 0.2rem solid ${({ theme }) => theme.navyText};
  border-radius: 0.7rem;

  ${media.tablet`width: 20rem;
    height: 5rem;`}
`;

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

  ${({ down }) =>
    down &&
    css`
      transform: translate(10px, 10px);
    `}

  :hover {
    transform: translate(0, 0);
  }

  :active {
    background-color: ${({ theme }) => theme.pinkBackground};
    color: ${({ theme }) => theme.navyText};
    border: 3px solid ${({ theme }) => theme.navyText};
  }

  ${media.tablet` font-size: 3rem;`}
`;

const MainButton = ({ children, whereToGo, down, handleOnClick }) => {
  return (
    <>
      <ButtonFrame onClick={handleOnClick}>
        <Button down={down} to={whereToGo}>
          {children}
        </Button>
      </ButtonFrame>
    </>
  );
};

export default MainButton;
