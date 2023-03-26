import styled, { css, keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  0% {
    fill: #fff
  }
  100% {
    fill: #000
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const QuestionBox = styled.div`
  width: 100%;
  background-color: #222;
  border-bottom: 1px solid #111;
  box-shadow: 0 3px 3px -3px #111;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  z-index: 1;
  svg {
    fill: #d9d9e3;
    width: 50px;
    height: 50px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 10px;
    min-height: 70px;
    svg {
      width: 35px;
      height: 35px;
    }
  }
`;

export const Question = styled.div`
  width: 70%;
  padding: 2rem;
  font-size: 22px;
  line-height: 1.6;
  letter-spacing: 1.2px;
  @media screen and (max-width: 800px) {
    width: 90%;
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 1.4;
    padding: 1rem;
  }
`;

export const AnswerBox = styled.div<{ isLoading: boolean }>`
  width: 100%;
  background-color: #444;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  svg {
    width: 30px;
    height: 30px;
    fill: #fff;
    animation: ${(props) =>
      props.isLoading
        ? css`
            ${loadingAnimation} 0.8s ease-in-out infinite alternate
          `
        : ''};
  }
  @media screen and (max-width: 800px) {
    padding: 0 10px;
    min-height: 70px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Answer = styled.div`
  width: 70%;
  padding: 2rem;
  height: auto;
  font-size: 22px;
  line-height: 1.6;
  letter-spacing: 1.2px;
  @media screen and (max-width: 800px) {
    width: 90%;
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 1.4;
    padding: 1rem;
  }
`;
