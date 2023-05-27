import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0px;
  padding: 0px;
  gap: 10px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 500;
  font-size: 18px;
  padding: 8px 16px;
  color: white;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.3s ease-in-out 0s;

  &:hover,
  &:focus {
    color: rgba(0, 0, 0, 0.6);
    background-color: rgba(255, 255, 255, 0.3);
    outline: none;
  }

  &.active {
    color: rgba(0, 0, 0, 0.6);
    background-color: rgba(255, 255, 255, 0.3);
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 6px 12px;
  }

  @media screen and (max-width: 400px) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;
