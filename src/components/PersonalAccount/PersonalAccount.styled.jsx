import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapp = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.h3`
  font-size: 20px;
  margin: 0px auto 60px;
  color: white;
  opacity: 0.7;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin: 0px auto 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const BtnsWrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 150px;
  height: 80px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    row-gap: 50px;
  }

  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;

export const DisBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.15;
  text-transform: none;
  text-decoration: none;
  width: 200px;
  max-height: 49.2px;
  margin: 0;
  padding: 20px 15px;
  color: #fff;
  background: transparent;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transform: scale(1.3);
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    width: 150px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.15;
  text-transform: none;
  text-decoration: none;
  width: 200px;
  max-height: 49.2px;
  margin: 0;
  padding: 20px 15px;
  color: #fff;
  background: transparent;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transform: scale(1.3);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    width: 150px;
  }
`;
