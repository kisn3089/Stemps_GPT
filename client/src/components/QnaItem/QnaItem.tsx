import React from "react";
import { TQna } from "../../types/qna.type";
import * as Svg from "../../components/atoms/icon/icon";
import { Answer, AnswerBox, Container, Question, QuestionBox } from "./styles";

interface IQnaItem {
  qnaArr: TQna;
  isLoading: boolean;
}

const QanItem = ({ qnaArr, isLoading }: IQnaItem) => {
  return (
    <Container>
      <QuestionBox>
        <Svg.MeLogo />
        <Question>{qnaArr.question}</Question>
      </QuestionBox>
      <AnswerBox isLoading={isLoading}>
        <Svg.GptLogo />
        <Answer>{qnaArr.answer}</Answer>
      </AnswerBox>
    </Container>
  );
};

export default React.memo(QanItem);
