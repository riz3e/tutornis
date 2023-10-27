'use client'
import React, { useState } from 'react';

type QuestionType = {
  question: string;
  options: string[];
};

const questions: QuestionType[] = [
  { question: "1. Мне хотелось бы в своей профессиональной деятельности", options: ["A. общаться с самыми разными людьми;", "B. снимать фильмы, писать книги, рисовать, выступать на сцене и т.д.", "C. заниматься расчетами; вести документацию."] },
  { question: "2. В книге или кинофильме меня больше всего привлекает", options: ["A. возможность следить за ходом мыслей автора;", "B. художественная форма, мастерство писателя или режиссера;", "C. сюжет, действия героев."] },
  // ...add more questions here
];

const RadioButtonTest: React.FC = () => {
  const [answers, setAnswers] = useState<string[]>([]);

  const handleOptionChange = (questionIndex: number, option: string) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = option;
    setAnswers(newAnswers);
  };

  return (
    <div>
      {questions.map((question, qIndex) => (
        <div key={qIndex}>
          <p>{question.question}</p>
          {question.options.map((option, oIndex) => (
            <div key={oIndex}>
              <label>
                <input
                  type="radio"
                  value={option}
                  checked={answers[qIndex] === option}
                  onChange={() => handleOptionChange(qIndex, option)}
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RadioButtonTest;
