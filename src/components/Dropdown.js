import React from 'react';
import styled from 'styled-components';
import Button from './MainButton';

const DropdownWrapper = styled.div`
  width: 60vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: transparent;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 0 3rem;
  position: fixed;
  right: 0;
  top: 6vh;
  z-index: 100;
  transform: translate(${({ isVisible }) => (isVisible ? '0, -3' : '0, -56vh')});
  transition: transform 0.75s ease-in-out;
`;

const Dropdown = ({ isVisible }) => {
  return (
    <>
      <DropdownWrapper isVisible={isVisible}>
        <Button path="/about">about me</Button>
        <Button path="/projects">projects</Button>
        <Button path="/stack">stack</Button>
        <Button path="/contact">contact</Button>
      </DropdownWrapper>
    </>
  );
};

export default Dropdown;
