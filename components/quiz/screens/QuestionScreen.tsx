'use client'

import { useState } from 'react'
import { useQuiz } from '../QuizContext'
import { ScreenTypes, Result } from '../types'

export default function QuestionScreen() {
  const { quiz, setCurrentScreen, timer, result, setResult } = useQuiz()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([])

  const question = quiz.questions[currentQuestion]
  const isMultipleAnswer = question.type === 'MAQs'

  const handleAnswer = (choice: string) => {
    if (isMultipleAnswer) {
      setSelectedAnswers((prev) =>
        prev.includes(choice) ? prev.filter((a) => a !== choice) : [...prev, choice]
      )
    } else {
      setSelectedAnswers([choice])
    }
  }

  const handleNext = () => {
    // Save result
    const isCorrect =
      selectedAnswers.length === question.correctAnswers.length &&
      selectedAnswers.every((a) => question.correctAnswers.includes(a))

    const newResult: Result = {
      selectedAnswer: selectedAnswers,
      isMatch: isCorrect,
    }

    setResult([...result, newResult])

    if (currentQuestion + 1 < quiz.totalQuestions) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswers([])
    } else {
      setCurrentScreen(ScreenTypes.ResultScreen)
    }
  }

  const progressPercent = ((currentQuestion + 1) / quiz.totalQuestions) * 100

  return (
    <div className="quiz-question-screen">
      {/* Header */}
      <div className="quiz-header">
        <div className="quiz-progress-info">
          <span className="quiz-progress-text">
            Question {currentQuestion + 1} of {quiz.totalQuestions}
          </span>
          <span className={`quiz-timer ${timer < 10 ? 'quiz-timer-warning' : ''}`}>
            {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}
          </span>
        </div>
        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="quiz-question-content">
        {question.image && (
          <div className="quiz-question-image">
            <img src={question.image} alt="Question visual" />
          </div>
        )}

        {question.code && (
          <pre className="quiz-code-block">
            <code>{question.code}</code>
          </pre>
        )}

        <h3 className="quiz-question-text">{question.question}</h3>

        {/* Choices */}
        <div className="quiz-choices">
          {question.choices.map((choice, idx) => (
            <button
              key={idx}
              className={`quiz-choice ${selectedAnswers.includes(choice) ? 'quiz-choice-selected' : ''}`}
              onClick={() => handleAnswer(choice)}
            >
              <div className={`quiz-choice-indicator ${isMultipleAnswer ? 'quiz-choice-checkbox' : 'quiz-choice-radio'}`}>
                {selectedAnswers.includes(choice) && (isMultipleAnswer ? '✓' : '•')}
              </div>
              <span className="quiz-choice-text">{choice}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="quiz-actions">
        <button
          className="quiz-btn quiz-btn-outline"
          onClick={() => {
            if (currentQuestion > 0) {
              setCurrentQuestion(currentQuestion - 1)
              setSelectedAnswers([])
              // Remove last result
              setResult(result.slice(0, -1))
            }
          }}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>
        <button
          className="quiz-btn quiz-btn-primary"
          onClick={handleNext}
          disabled={selectedAnswers.length === 0}
        >
          {currentQuestion + 1 === quiz.totalQuestions ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  )
}
