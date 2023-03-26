import styled from 'styled-components';

export const InfoContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: calc(100vh - 250px);
  svg {
    width: 400px;
    height: 400px;
    fill: #3ab98a;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: calc(100vh - 300px);
  }
`;

export const SpanContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 20px;
  .strong_font {
    font-size: 50px;
  }
`;

export const TextSpan = styled.span`
  font-size: 30px;
  font-weight: 700;
`;
