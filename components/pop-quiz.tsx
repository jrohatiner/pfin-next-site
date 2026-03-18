'use client';

import { useState, useEffect } from 'react';

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

interface QuizResult {
  score: number;
  total: number;
  percentage: number;
}

function CheckIcon() {
  return (
    <svg
      className="quiz-modal-icon quiz-modal-icon-correct"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="10" fill="#22c55e" />
      <path
        d="M5.5 10.5l3 3 6-6"
        stroke="#fff"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      className="quiz-modal-icon quiz-modal-icon-wrong"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="10" fill="#ef4444" />
      <path
        d="M6.5 6.5l7 7M13.5 6.5l-7 7"
        stroke="#fff"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PopQuiz({ title, questions, contentSlug }: PopQuizProps) {
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showModal]);

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

      const data = await response.json();

      const quizResult: QuizResult = {
        score: data.score ?? 0,
        total: data.total ?? questions.length,
        percentage: data.percentage ?? Math.round((data.score / questions.length) * 100),
      };

      setResult(quizResult);
      setSubmitted(true);
      setShowModal(true);
    } catch (error) {
      console.error('Quiz submission error:', error);
      // Calculate locally if API fails
      let localScore = 0;
      answers.forEach((answer, index) => {
        if (answer === questions[index].correctAnswer) localScore++;
      });
      setResult({
        score: localScore,
        total: questions.length,
        percentage: Math.round((localScore / questions.length) * 100),
      });
      setSubmitted(true);
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setResult(null);
    setShowModal(false);
    setAnswers(new Array(questions.length).fill(-1));
  };

  const passed = result ? result.percentage >= 66 : false;

  return (
    <>
      <div className="pop-quiz">
        <h3>{title}</h3>

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
            <button onClick={() => setShowModal(true)} className="quiz-submit">
              View Results
            </button>
          )}
          {submitted && (
            <button onClick={handleReset} className="quiz-retry">
              Try Again
            </button>
          )}
        </div>
      </div>

      {/* Results Modal */}
      {showModal && result && (
        <div
          className="quiz-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quiz-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowModal(false);
          }}
        >
          <div className="quiz-modal">
            {/* Header */}
            <div className={`quiz-modal-header ${passed ? 'quiz-modal-header-pass' : 'quiz-modal-header-fail'}`}>
              <div className="quiz-modal-score-circle">
                <span className="quiz-modal-score-pct">{result.percentage}%</span>
                <span className="quiz-modal-score-label">Score</span>
              </div>
              <div className="quiz-modal-verdict">
                <h2 id="quiz-modal-title" className="quiz-modal-title">
                  {passed ? 'Congratulations, You Passed!' : 'Not Quite — Keep Trying!'}
                </h2>
                <p className="quiz-modal-subtitle">
                  You answered {result.score} out of {result.total} questions correctly.
                  {passed
                    ? ' Great work!'
                    : ' A score of 66% or higher is required to pass.'}
                </p>
              </div>
            </div>

            {/* Question Breakdown */}
            <div className="quiz-modal-body">
              <h3 className="quiz-modal-breakdown-title">Answer Review</h3>
              <div className="quiz-modal-questions">
                {questions.map((q, qIdx) => {
                  const userAnswer = answers[qIdx];
                  const isCorrect = userAnswer === q.correctAnswer;

                  return (
                    <div
                      key={qIdx}
                      className={`quiz-modal-question ${isCorrect ? 'quiz-modal-question-correct' : 'quiz-modal-question-wrong'}`}
                    >
                      <div className="quiz-modal-question-header">
                        {isCorrect ? <CheckIcon /> : <XIcon />}
                        <span className="quiz-modal-question-text">
                          {qIdx + 1}. {q.question}
                        </span>
                      </div>
                      <div className="quiz-modal-answers">
                        {q.options.map((option, optIdx) => {
                          const isUserPick = userAnswer === optIdx;
                          const isCorrectAnswer = q.correctAnswer === optIdx;

                          let cls = 'quiz-modal-answer';
                          if (isCorrectAnswer) cls += ' quiz-modal-answer-correct';
                          else if (isUserPick && !isCorrectAnswer) cls += ' quiz-modal-answer-wrong';

                          return (
                            <div key={optIdx} className={cls}>
                              <span className="quiz-modal-answer-dot" />
                              <span>{option}</span>
                              {isCorrectAnswer && (
                                <span className="quiz-modal-answer-tag quiz-modal-answer-tag-correct">
                                  Correct
                                </span>
                              )}
                              {isUserPick && !isCorrectAnswer && (
                                <span className="quiz-modal-answer-tag quiz-modal-answer-tag-wrong">
                                  Your answer
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="quiz-modal-footer">
              <button onClick={handleReset} className="quiz-retry">
                Try Again
              </button>
              <button onClick={() => setShowModal(false)} className="quiz-modal-close">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
