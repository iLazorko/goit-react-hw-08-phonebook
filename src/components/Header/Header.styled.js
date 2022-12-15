import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
  padding: 10px;
`;

export const Link = styled(NavLink)`
  cursor: pointer;
  padding: 7px;
  width: 100px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #240a95;
  text-transform: uppercase;
  font-weight: 500;
  color: #ffffff;
  border-radius: 5px;
  border-color: transparent;
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    background-color: #2d0fb2f7;
    box-shadow: 2px 1px 3px 1px rgb(26 0 27 / 48%);
  }

  &.active {
    background: #7a7ad3;
    color: #b2208b;
    font-weight: 700;
  }
`;
