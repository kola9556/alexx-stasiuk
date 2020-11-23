import styled from 'styled-components';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  font-size: 2.8rem;
  text-decoration: none;
  color: ${(theme) => theme.navyPurple};
  letter-spacing: 0.3rem;

  :visited {
    color: ${(theme) => theme.navyPurple};
  }

  &.active {
    font-weight: 800;
  }
`;
export default NavLink;
