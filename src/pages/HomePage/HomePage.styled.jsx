import styled from 'styled-components';

export const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 970px;
  margin: 80px auto;
  padding: 15px;
  text-align: center;
  gap: 40px;
  opacity: 0.7;
`;

export const HomeTitle = styled.h1`
  font-size: 68px;
  margin: 0;
  padding: 0;
  color: white;

  @media screen and (max-width: 1024px) {
    font-size: 48px;
  }

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media screen and (max-width: 400px) {
    font-size: 30px;
  }
`;

export const HomeSecondTitle = styled.h2`
  font-size: 36px;
  margin: 0;
  padding: 0;
  color: white;

  @media screen and (max-width: 1024px) {
    font-size: 28px;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 400px) {
    font-size: 18px;
  }
`;
