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
  const [score, setScore] = useState<number | null>(null);

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
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
        const data = await response.json();
        setScore(data.score);
        setSubmitted(true);
      } else {
        alert('Failed to submit quiz');
      }
    } catch (error) {
      console.error('Quiz submission error:', error);
      alert('Error submitting quiz');
    } finally {
      setLoading(false);
    }
  };

  if (submitted && score !== null) {
    return (
      <div className="quiz-result">
        <h3>Quiz Complete!</h3>
        <p>Your Score: {score} / {questions.length}</p>
        <p>{Math.round((score / questions.length) * 100)}%</p>
        <button onClick={() => { setSubmitted(false); setScore(null); setAnswers(new Array(questions.length).fill(-1)); }}>
          Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="pop-quiz">
      <h3>{title}</h3>
      <div className="quiz-questions">
        {questions.map((q, qIdx) => (
          <div key={qIdx} className="quiz-question">
            <p className="question-text">{q.question}</p>
            <div className="quiz-options">
              {q.options.map((option, optIdx) => (
                <label key={optIdx} className="quiz-option">
                  <input
                    type="checkbox"
                    checked={answers[qIdx] === optIdx}
                    onChange={() => handleAnswer(qIdx, optIdx)}
                    disabled={submitted}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={loading || answers.includes(-1)}
        className="quiz-submit"
      >
        {loading ? 'Submitting...' : 'Submit Quiz'}
      </button>
    </div>
  );
}
