import styled from 'styled-components';

export const PersonalAccountWrapper = styled.section`
  max-width: 60%;
  margin: 0px auto;
  padding: 40px;

  @media screen and (max-width: 400px) {
    max-width: 80%;
  }
`;

export const PersonalAccountTitle = styled.h3`
  font-size: 40px;
  margin: 0px auto 60px;
  color: white;
  opacity: 0.7;
  text-align: center;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    margin: 0px auto 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
