import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavWrapper = styled.div`
  height: 2rem;
  background-color: pink;
`;

const Navigationbar = () => {
  return (
    <>
      <NavWrapper>
        <Link to="/about">about me</Link>
      </NavWrapper>
    </>
  );
};

export default Navigationbar;
