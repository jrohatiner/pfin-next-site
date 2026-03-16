"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/data/types";

interface QuizProps {
  questions: QuizQuestion[];
}

export function Quiz({ questions }: QuizProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionIndex: number, optionIndex: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) {
      alert("Please answer all questions before submitting.");
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const score = submitted
    ? questions.filter((q, i) => answers[i] === q.correctIndex).length
    : 0;

  return (
    <div className="my-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
      <h3 className="mb-4 text-xl font-semibold">Pop Quiz</h3>
      {questions.map((q, qIndex) => (
        <div key={qIndex} className="mb-6">
          <p className="mb-2 font-medium">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, oIndex) => {
              const isSelected = answers[qIndex] === oIndex;
              const isCorrect = q.correctIndex === oIndex;
              let optionClass =
                "flex items-center gap-2 rounded border p-2 cursor-pointer transition-colors";

              if (submitted) {
                if (isCorrect) {
                  optionClass += " bg-green-100 border-green-500";
                } else if (isSelected && !isCorrect) {
                  optionClass += " bg-red-100 border-red-500";
                } else {
                  optionClass += " bg-white border-gray-200";
                }
              } else {
                optionClass += isSelected
                  ? " bg-blue-100 border-blue-500"
                  : " bg-white border-gray-200 hover:bg-gray-100";
              }

              return (
                <label key={oIndex} className={optionClass}>
                  <input
                    type="radio"
                    name={`question-${qIndex}`}
                    checked={isSelected}
                    onChange={() => handleSelect(qIndex, oIndex)}
                    disabled={submitted}
                    className="h-4 w-4"
                  />
                  <span>{option}</span>
                </label>
              );
            })}
          </div>
        </div>
      ))}
      <div className="flex items-center gap-4">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Submit
          </button>
        ) : (
          <>
            <p className="font-medium">
              Score: {score} / {questions.length}
            </p>
            <button
              onClick={handleReset}
              className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
            >
              Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}
