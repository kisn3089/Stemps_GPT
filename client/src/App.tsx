import GptInfo from './components/GptInfo/GptInfo';
import QanItem from './components/QnaItem/QnaItem';
import Question from './components/Question/Question';
import useMiddleware from './hooks/useMiddleware';
import { MainContainer } from './styles/GlobalStyle';
import { TQna } from './types/qna.type';

function App() {
  const { inputRef, qnaArr, isScrollTop, isLoading, sendClick, questionEnter } =
    useMiddleware();

  return (
    <MainContainer>
      <Question
        inputRef={inputRef}
        isScrollTop={isScrollTop}
        isLoading={isLoading}
        sendClick={sendClick}
        questionEnter={questionEnter}
      />
      {qnaArr.length === 0 ? (
        <GptInfo />
      ) : (
        qnaArr.map((qna: TQna, i: number) => {
          return (
            <QanItem key={i} qnaArr={qna} isLoading={i === 0 && isLoading} />
          );
        })
      )}
    </MainContainer>
  );
}

export default App;
