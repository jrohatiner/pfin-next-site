'use client'

import { useState } from 'react'
import { useQuiz } from './QuizContext'
import { ScreenTypes, Question, Result } from './types'

export default function QuestionScreen() {
  const { quiz, result, setResult, timer, setCurrentScreen, setEndTime } = useQuiz()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([])

  const currentQuestion: Question = quiz.questions[currentIndex]
  const isLastQuestion = currentIndex === quiz.questions.length - 1

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleSelectAnswer = (answer: string) => {
    if (currentQuestion.type === 'MCQs' || currentQuestion.type === 'boolean') {
      setSelectedAnswers([answer])
    } else {
      // MAQs - multiple answers allowed
      setSelectedAnswers((prev) =>
        prev.includes(answer) ? prev.filter((a) => a !== answer) : [...prev, answer]
      )
    }
  }

  const handleNext = () => {
    // Check if answer is correct
    const isMatch =
      selectedAnswers.length === currentQuestion.correctAnswers.length &&
      selectedAnswers.every((a) => currentQuestion.correctAnswers.includes(a))

    const newResult: Result = {
      selectedAnswer: selectedAnswers,
      isMatch,
    }

    setResult([...result, newResult])
    setSelectedAnswers([])

    if (isLastQuestion) {
      setEndTime(quiz.totalTime - timer)
      setCurrentScreen(ScreenTypes.ResultScreen)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handleSkip = () => {
    const newResult: Result = {
      selectedAnswer: [],
      isMatch: false,
    }
    setResult([...result, newResult])
    setSelectedAnswers([])

    if (isLastQuestion) {
      setEndTime(quiz.totalTime - timer)
      setCurrentScreen(ScreenTypes.ResultScreen)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const progress = ((currentIndex + 1) / quiz.questions.length) * 100

  return (
    <div className="quiz-question-screen">
      {/* Header */}
      <div className="quiz-header">
        <div className="quiz-progress-info">
          <span className="quiz-progress-text">
            Question {currentIndex + 1} of {quiz.questions.length}
          </span>
          <span className={`quiz-timer ${timer <= 30 ? 'quiz-timer-warning' : ''}`}>
            {formatTime(timer)}
          </span>
        </div>
        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Question */}
      <div className="quiz-question-content">
        <h2 className="quiz-question-text">{currentQuestion.question}</h2>

        {currentQuestion.code && (
          <pre className="quiz-code-block">
            <code>{currentQuestion.code}</code>
          </pre>
        )}

        {currentQuestion.image && (
          <div className="quiz-question-image">
            <img src={currentQuestion.image} alt="Question illustration" />
          </div>
        )}

        {/* Answer Choices */}
        <div className="quiz-choices">
          {currentQuestion.choices.map((choice, index) => {
            const isSelected = selectedAnswers.includes(choice)
            const choiceType = currentQuestion.type === 'MAQs' ? 'checkbox' : 'radio'

            return (
              <button
                key={index}
                onClick={() => handleSelectAnswer(choice)}
                className={`quiz-choice ${isSelected ? 'quiz-choice-selected' : ''}`}
              >
                <span className={`quiz-choice-indicator quiz-choice-${choiceType}`}>
                  {isSelected && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </span>
                <span className="quiz-choice-text">{choice}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="quiz-actions">
        <button onClick={handleSkip} className="quiz-btn quiz-btn-outline">
          Skip
        </button>
        <button
          onClick={handleNext}
          disabled={selectedAnswers.length === 0}
          className="quiz-btn quiz-btn-primary"
        >
          {isLastQuestion ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  )
}
