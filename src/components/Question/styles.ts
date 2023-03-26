import styled from 'styled-components';

export const QuestioContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 40px;
  margin: 50px 0 50px 0;
  display: flex;
  justify-content: center;
  svg {
    transition: 0.3s ease;
    position: absolute;
    top: 50%;
    right: 60px;
    transform: translateY(-50%);
    fill: #fff;
    width: 23px;
    cursor: pointer;
    &:hover {
      fill: #58a8ff;
    }
  }
  @media screen and (max-width: 800px) {
    margin: 20px 0 20px 0;
    padding: 0 20px;
    svg {
      right: 40px;
    }
  }
`;

export const UpArrowContainer = styled.div`
  svg {
    position: fixed;
    z-index: 100;
    width: 30px;
    fill: #fff;
    stroke: #fff;
    bottom: 40px;
    right: 40px;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
      fill: #58a8ff;
      stroke: #58a8ff;
    }
  }
`;
