'use client'

import { useQuiz } from './QuizContext'
import { ScreenTypes } from './types'

interface ResultScreenProps {
  onComplete?: (score: number, totalQuestions: number) => void
}

export default function ResultScreen({ onComplete }: ResultScreenProps) {
  const { quiz, result, endTime, setCurrentScreen, setResult, setTimer } = useQuiz()

  const correctAnswers = result.filter((r) => r.isMatch).length
  const wrongAnswers = result.filter((r) => !r.isMatch && r.selectedAnswer.length > 0).length
  const skippedAnswers = result.filter((r) => r.selectedAnswer.length === 0).length
  const totalScore = correctAnswers * 10
  const percentage = Math.round((correctAnswers / quiz.questions.length) * 100)

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}m ${secs}s`
  }

  const getGrade = () => {
    if (percentage >= 90) return { grade: 'A+', message: 'Outstanding!' }
    if (percentage >= 80) return { grade: 'A', message: 'Excellent work!' }
    if (percentage >= 70) return { grade: 'B', message: 'Good job!' }
    if (percentage >= 60) return { grade: 'C', message: 'Keep practicing!' }
    return { grade: 'D', message: 'Review the material and try again.' }
  }

  const { grade, message } = getGrade()

  const handleRetry = () => {
    setResult([])
    setTimer(quiz.totalTime)
    setCurrentScreen(ScreenTypes.QuizDetailsScreen)
  }

  const handleFinish = () => {
    if (onComplete) {
      onComplete(correctAnswers, quiz.questions.length)
    }
  }

  return (
    <div className="quiz-result">
      <div className="quiz-result-header">
        <div className="quiz-result-grade">{grade}</div>
        <h2 className="quiz-result-title">Quiz Complete!</h2>
        <p className="quiz-result-message">{message}</p>
      </div>

      <div className="quiz-result-score">
        <div className="quiz-score-circle">
          <svg viewBox="0 0 36 36" className="quiz-score-svg">
            <path
              className="quiz-score-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="quiz-score-fill"
              strokeDasharray={`${percentage}, 100`}
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="quiz-score-text">
            <span className="quiz-score-percent">{percentage}%</span>
          </div>
        </div>
      </div>

      <div className="quiz-result-stats">
        <div className="quiz-stat quiz-stat-correct">
          <span className="quiz-stat-value">{correctAnswers}</span>
          <span className="quiz-stat-label">Correct</span>
        </div>
        <div className="quiz-stat quiz-stat-wrong">
          <span className="quiz-stat-value">{wrongAnswers}</span>
          <span className="quiz-stat-label">Wrong</span>
        </div>
        <div className="quiz-stat quiz-stat-skipped">
          <span className="quiz-stat-value">{skippedAnswers}</span>
          <span className="quiz-stat-label">Skipped</span>
        </div>
      </div>

      <div className="quiz-result-details">
        <div className="quiz-result-detail">
          <span className="quiz-result-detail-label">Total Score</span>
          <span className="quiz-result-detail-value">{totalScore} / {quiz.totalScore}</span>
        </div>
        <div className="quiz-result-detail">
          <span className="quiz-result-detail-label">Time Taken</span>
          <span className="quiz-result-detail-value">{formatTime(endTime)}</span>
        </div>
      </div>

      {/* Answer Review */}
      <div className="quiz-result-review">
        <h3 className="quiz-review-title">Review Answers</h3>
        <div className="quiz-review-list">
          {quiz.questions.map((question, index) => {
            const userResult = result[index]
            const isCorrect = userResult?.isMatch
            const wasSkipped = userResult?.selectedAnswer.length === 0

            return (
              <div
                key={index}
                className={`quiz-review-item ${
                  isCorrect ? 'quiz-review-correct' : wasSkipped ? 'quiz-review-skipped' : 'quiz-review-wrong'
                }`}
              >
                <div className="quiz-review-header">
                  <span className="quiz-review-number">Q{index + 1}</span>
                  <span className={`quiz-review-badge ${
                    isCorrect ? 'quiz-badge-correct' : wasSkipped ? 'quiz-badge-skipped' : 'quiz-badge-wrong'
                  }`}>
                    {isCorrect ? 'Correct' : wasSkipped ? 'Skipped' : 'Wrong'}
                  </span>
                </div>
                <p className="quiz-review-question">{question.question}</p>
                <div className="quiz-review-answers">
                  {!wasSkipped && (
                    <p className="quiz-review-your-answer">
                      Your answer: {userResult?.selectedAnswer.join(', ')}
                    </p>
                  )}
                  {!isCorrect && (
                    <p className="quiz-review-correct-answer">
                      Correct: {question.correctAnswers.join(', ')}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="quiz-result-actions">
        <button onClick={handleRetry} className="quiz-btn quiz-btn-outline">
          Retry Quiz
        </button>
        <button onClick={handleFinish} className="quiz-btn quiz-btn-primary">
          Save & Continue
        </button>
      </div>
    </div>
  )
}
