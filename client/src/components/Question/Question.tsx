import React from 'react';
import Input from '../atoms/Input/Input';
import * as Svg from '../atoms/icon/icon';
import { QuestioContainer, UpArrowContainer } from './styles';

interface IQuestion {
  inputRef: React.RefObject<HTMLInputElement>;
  isScrollTop: boolean;
  isLoading: boolean;
  sendClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  questionEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Question = ({
  inputRef,
  isScrollTop,
  isLoading,
  sendClick,
  questionEnter,
}: IQuestion) => {
  const topHanlder = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // const temp = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   console.log('111111');

  //   if (e.key === 'Enter') {
  //     console.log('Enter');
  //   }
  // };

  return (
    <>
      <QuestioContainer id="quest">
        <Input
          ref={inputRef}
          type="text"
          width="100%"
          onKeyDown={questionEnter}
        />
        {isLoading ? (
          <Svg.Spinner style={{ width: '35px', cursor: 'not-allowed' }} />
        ) : (
          <Svg.Send onClick={sendClick} />
        )}
      </QuestioContainer>
      <UpArrowContainer>
        {isScrollTop && <Svg.UpArrow onClick={topHanlder} />}
      </UpArrowContainer>
    </>
  );
};

export default React.memo(Question);
