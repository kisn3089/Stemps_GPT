import React from 'react';
import Input from '../atoms/Input/Input';
import * as Svg from '../atoms/icon/icon';
import { QuestioContainer, UpArrowContainer } from './styles';

interface IQuestion {
  inputRef: React.RefObject<HTMLInputElement>;
  isScrollTop: boolean;
  isLoading: boolean;
  sendClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Question = ({
  inputRef,
  isScrollTop,
  isLoading,
  sendClick,
}: IQuestion) => {
  const topHanlder = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <QuestioContainer id="quest">
        <Input ref={inputRef} type="text" width="100%" />
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
