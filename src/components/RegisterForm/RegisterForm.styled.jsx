import styled from 'styled-components';
import muiStyled from '@emotion/styled';
import { Button } from '@mui/material';

export const Container = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 54%;
  left: 50%;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 250px;
  max-height: 400px;
  padding: 45px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    margin: -10px;
  }

  @media screen and (max-width: 768px) {
    width: 225px;
    padding: 35px;
  }

  @media screen and (max-width: 400px) {
    width: 200px;
    padding: 25px;
  }
`;

export const FormTitle = styled.h4`
  font-weight: 500;
  color: #fff;
  opacity: 0.7;
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 60px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 400px) {
    margin-bottom: 30px;
  }
`;

export const Input = styled.input`
  font-weight: 500;
  font-size: 16px;
  padding: 15px;
  margin-bottom: 35px;
  color: #fff;
  background: transparent;
  backdrop-filter: blur(5px);
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
    outline: none;
  }

  &::placeholder {
    font-weight: 400;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }
`;

export const ModifiedButton = muiStyled(Button)`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.15;
  text-transform: none;
  width: 200px;
  max-height: 49.2px;
  margin: 0 auto;
  padding: 15px;
  color: #fff;
  background: transparent;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    width: 150px;
  }
`;

const Drop = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 10px 10px 60px -8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
`;

export const DropFirst = styled(Drop)`
  height: 80px;
  width: 80px;
  top: -30px;
  left: -20px;

  @media screen and (min-width: 768px) {
    z-index: -1;
  }
`;

export const DropSecond = styled(Drop)`
  height: 80px;
  width: 80px;
  bottom: -40px;
  right: -20px;
`;

export const DropThird = styled(Drop)`
  height: 100px;
  width: 100px;
  bottom: 140px;
  right: -30px;
  z-index: -1;
`;

export const DropForth = styled(Drop)`
  height: 120px;
  width: 120px;
  top: -50px;
  right: -50px;

  @media screen and (max-width: 768px) {
    height: 100px;
    width: 100px;
    right: -30px;
    z-index: -1;
  }
`;

export const DropFifth = styled(Drop)`
  height: 60px;
  width: 60px;
  bottom: 70px;
  left: -30px;
  z-index: -1;
`;
