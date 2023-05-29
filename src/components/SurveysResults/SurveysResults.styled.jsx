import styled from 'styled-components';

export const TableWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80%;
  margin: 50px auto;
  padding: 50px;
`;

export const TABLE = styled.table`
  text-indent: 20px;
  font-size: 20px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    text-indent: 0;
  }

  @media screen and (max-width: 480px) {
    font-weight: 400;
  }
`;

export const TH = styled.th`
  font-size: 20px;
  padding: 0 20px;
  color: white;
  opacity: 0.7;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding: 0;
  }
`;

export const TD = styled.td`
  padding: 0 20px;
  color: white;
  opacity: 0.7;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
