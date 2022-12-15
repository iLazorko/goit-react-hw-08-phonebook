import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = styled.header`
  background-color: #161919;
`;

const Nav = styled.nav`
  display: flex;
  gap: 40px;
  justify-content: center;
`;

const LinkStyled = styled(NavLink)`
  font-size: 26px;
  font-weight: 700;
  text-decoration: none;
  background-color: transparent;
  color: #067c11;
  display: block;
  transform: scale(1);
  transition: transform 300ms ease, color 300ms ease;

  &.active {
    color: #59ff1b;
    transform: scale(1.1);
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export { Header, Nav, LinkStyled };
