import { useCallback, useEffect, useRef, useState } from 'react';
import { TQna } from '../types/qna.type';

const useMiddleware = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [qnaArr, setQnaArr] = useState<TQna[]>([]);
  const [isScrollTop, setIsScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 질문 Request 후 Response를 Set
  const generateResponse = async (newQuestion: string) => {
    setIsLoading(true);
    setQnaArr([{ question: newQuestion, answer: '' }, ...qnaArr]);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    const requestOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.REACT_APP_API_KEY,
      },
      body: JSON.stringify({
        prompt: newQuestion,
        temperature: 0,
        max_tokens: 2048,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: ['/'],
      }),
    };
    await fetch(
      'https://api.openai.com/v1/engines/text-davinci-003/completions',
      requestOption
    )
      .then((res) => res.json())
      .then((res) => {
        const answer = res.choices[0].text;

        if (answer) {
          setQnaArr([
            {
              question: newQuestion,
              answer: answer,
            },
            ...qnaArr,
          ]);
          setIsLoading(false);
        }
      });
  };

  // Scroll 이벤트
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrollTop]);

  // Scroll이 Top인지 아닌지 체크 후 Set로직
  const handleScroll = () => {
    if (window.scrollY > 160 && !isScrollTop) {
      setIsScrollTop(true);
    } else if (window.scrollY <= 160 && isScrollTop) {
      setIsScrollTop(false);
    }
  };

  // Input Submit 버튼
  const sendClick = useCallback(() => {
    if (inputRef.current && inputRef.current?.value.trim() !== '') {
      generateResponse(inputRef.current?.value);
    }
  }, [qnaArr]);

  const questionEnter = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (
        e.key === 'Enter' &&
        inputRef.current &&
        inputRef.current?.value.trim() !== ''
      )
        generateResponse(inputRef.current?.value);
    },
    [qnaArr]
  );

  return { qnaArr, inputRef, isScrollTop, isLoading, sendClick, questionEnter };
};

export default useMiddleware;
