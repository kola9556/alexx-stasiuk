import React, { useState } from "react";
import { media } from "../utils";
import styled from "styled-components";
import Dropdown from "./Dropdown";

const NavWrapper = styled.div`
  z-index: 1000;
  ${media.tablet`display: none;`}
`;

const HamburgerWrapper = styled.button`
  position: absolute;
  top: 1rem;
  right: 0.5rem;
  background-color: transparent;
  border: none;
  text-decoration: none;
  outline: none;
  transition: 1s;

  :after {
    .one {
      background-color: pink;
    }
  }
`;

const Dot = styled.div`
  width: 2rem;
  height: 2rem;
  margin: 0 0.3rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.blueDots};
  display: inline-block;

  // After click, menu displayed
  :first-child {
    &.changed {
      transition: background-color 0.25s;
      background-color: ${({ theme }) => theme.smokePink};
    }
  }

  :nth-child(2) {
    &.changed {
      transition: background-color 0.25s;
      transition-delay: 0.25s;
      background-color: ${({ theme }) => theme.smokePink};
    }
  }

  :last-child {
    &.changed {
      transition: background-color 0.25s;
      transition-delay: 0.5s;
      background-color: ${({ theme }) => theme.smokePink};
    }
  }

  //After clicked, menu hides
  :first-child {
    transition: background-color 0.25s;
    transition-delay: 0.5s;
    background-color: ${({ theme }) => theme.blueDots};
  }

  :nth-child(2) {
    transition: background-color 0.25s;
    transition-delay: 0.25s;
    background-color: ${({ theme }) => theme.blueDots};
  }

  :last-child {
    transition: background-color 0.25s;
    background-color: ${({ theme }) => theme.blueDots};
  }
`;

const Hamburger = () => {
  const [clicked, setClick] = useState(false);

  const handleButtonClick = () => {
    clicked ? setClick(false) : setClick(true);
  };

  return (
    <>
      <NavWrapper>
        <HamburgerWrapper className="hamburger" onClick={handleButtonClick}>
          <Dot className={clicked ? "changed" : "Dot"} />
          <Dot className={clicked ? "changed" : "Dot"} />
          <Dot className={clicked ? "changed" : "Dot"} />
        </HamburgerWrapper>
        <Dropdown isVisible={clicked} />
      </NavWrapper>
    </>
  );
};

export default Hamburger;
