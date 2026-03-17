'use client';

import { useState } from 'react';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface PopQuizProps {
  title: string;
  questions: QuizQuestion[];
  contentSlug: string;
}

export function PopQuiz({ title, questions, contentSlug }: PopQuizProps) {
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    if (submitted) return;
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    if (answers.includes(-1)) {
      alert('Please answer all questions before submitting.');
      return;
    }
    
    setLoading(true);
    try {
      const response = await fetch('/api/quiz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          contentSlug,
          answers,
          questions,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Failed to submit quiz');
        setSubmitted(true); // Still show completion even if save fails
      }
    } catch (error) {
      console.error('Quiz submission error:', error);
      setSubmitted(true); // Still show completion even if save fails
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setAnswers(new Array(questions.length).fill(-1));
  };

  return (
    <div className="pop-quiz">
      <h3>{title}</h3>
      {submitted && (
        <div className="quiz-complete-banner">
          Quiz Completed! Review your answers below.
        </div>
      )}
      <div className="quiz-questions">
        {questions.map((q, qIdx) => (
          <div key={qIdx} className="quiz-question">
            <p className="question-text">
              {qIdx + 1}. {q.question}
            </p>
            <div className="quiz-options">
              {q.options.map((option, optIdx) => {
                const isSelected = answers[qIdx] === optIdx;
                let optionClassName = 'quiz-option';
                
                if (submitted && isSelected) {
                  optionClassName += ' quiz-option-selected';
                }
                
                return (
                  <label key={optIdx} className={optionClassName}>
                    <input
                      type="radio"
                      name={`quiz-question-${qIdx}`}
                      checked={isSelected}
                      onChange={() => handleAnswer(qIdx, optIdx)}
                      disabled={submitted}
                    />
                    <span>{option}</span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="quiz-actions">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={loading || answers.includes(-1)}
            className="quiz-submit"
          >
            {loading ? 'Submitting...' : 'Submit Quiz'}
          </button>
        ) : (
          <button onClick={handleReset} className="quiz-retry">
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}
