import { useCallback, useEffect, useRef, useState } from "react";
import { TQna } from "../types/qna.type";

const useMiddleware = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [qnaArr, setQnaArr] = useState<TQna[]>([]);
  const [isScrollTop, setIsScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 질문 Request 후 Response를 Set
  const generateResponse = async (newQuestion: string) => {
    setIsLoading(true);
    setQnaArr([{ question: newQuestion, answer: "" }, ...qnaArr]);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    const requestOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newQuestion }),
    };
    await fetch("http://localhost:8080/", requestOption)
      .then((res) => res.json())
      .then((data) => {
        const { message } = data;
        try {
          setQnaArr([
            {
              question: newQuestion,
              answer: message,
            },
            ...qnaArr,
          ]);
          setIsLoading(false);
        } catch (err) {
          setQnaArr([
            {
              question: newQuestion,
              answer:
                "에러가 발생했습니다. 좀 더 구체적인 질문으로 물어봐 주세요!",
            },
            ...qnaArr,
          ]);
          console.log(err);
        }
      });
  };

  // Scroll 이벤트
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
    if (inputRef.current && inputRef.current?.value.trim() !== "") {
      generateResponse(inputRef.current?.value);
    }
  }, [qnaArr]);

  const questionEnter = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (
        e.key === "Enter" &&
        inputRef.current &&
        inputRef.current?.value.trim() !== ""
      )
        generateResponse(inputRef.current?.value);
    },
    [qnaArr]
  );

  return { qnaArr, inputRef, isScrollTop, isLoading, sendClick, questionEnter };
};

export default useMiddleware;
