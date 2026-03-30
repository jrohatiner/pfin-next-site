'use client'

import { useQuiz } from '../QuizContext'
import { ScreenTypes } from '../types'

interface ResultScreenProps {
  onComplete?: (score: number, total: number) => void
}

export default function ResultScreen({ onComplete }: ResultScreenProps) {
  const { quiz, result, setCurrentScreen, setResult } = useQuiz()

  const correctCount = result.filter((r) => r.isMatch).length
  const totalScore = correctCount * 10
  const percentage = Math.round((correctCount / quiz.totalQuestions) * 100)

  // Call onComplete callback if provided
  if (onComplete) {
    onComplete(correctCount, quiz.totalQuestions)
  }

  const handleRetry = () => {
    setResult([])
    setCurrentScreen(ScreenTypes.SplashScreen)
  }

  const getMessage = () => {
    if (percentage >= 80) return 'Excellent! You mastered this quiz!'
    if (percentage >= 60) return 'Great job! You did well!'
    if (percentage >= 40) return 'Good effort! Keep practicing!'
    return 'Keep learning! Try again!'
  }

  return (
    <div className="quiz-result">
      {/* Result Header */}
      <div className="quiz-result-header">
        <div className="quiz-result-grade">{percentage}%</div>
        <h2 className="quiz-result-title">Quiz Complete!</h2>
        <p className="quiz-result-message">{getMessage()}</p>
      </div>

      {/* Stats */}
      <div className="quiz-result-stats">
        <div className="quiz-stat quiz-stat-correct">
          <span className="quiz-stat-value">{correctCount}</span>
          <span className="quiz-stat-label">Correct</span>
        </div>
        <div className="quiz-stat quiz-stat-wrong">
          <span className="quiz-stat-value">{quiz.totalQuestions - correctCount}</span>
          <span className="quiz-stat-label">Incorrect</span>
        </div>
        <div className="quiz-stat quiz-stat-skipped">
          <span className="quiz-stat-value">{totalScore}</span>
          <span className="quiz-stat-label">Score</span>
        </div>
      </div>

      {/* Details */}
      <div className="quiz-result-details">
        <div className="quiz-result-detail">
          <span className="quiz-result-detail-label">Total Questions</span>
          <span className="quiz-result-detail-value">{quiz.totalQuestions}</span>
        </div>
        <div className="quiz-result-detail">
          <span className="quiz-result-detail-label">Correct Answers</span>
          <span className="quiz-result-detail-value">{correctCount}</span>
        </div>
        <div className="quiz-result-detail">
          <span className="quiz-result-detail-label">Quiz Level</span>
          <span className="quiz-result-detail-value">{quiz.level}</span>
        </div>
      </div>

      {/* Review */}
      <div className="quiz-result-review">
        <h3 className="quiz-review-title">Review Answers</h3>
        <div className="quiz-review-list">
          {result.map((item, idx) => {
            const question = quiz.questions[idx]
            return (
              <div
                key={idx}
                className={`quiz-review-item ${item.isMatch ? 'quiz-review-correct' : 'quiz-review-wrong'}`}
              >
                <div className="quiz-review-header">
                  <span className="quiz-review-number">Question {idx + 1}</span>
                  <span className={`quiz-review-badge ${item.isMatch ? 'quiz-badge-correct' : 'quiz-badge-wrong'}`}>
                    {item.isMatch ? 'Correct' : 'Incorrect'}
                  </span>
                </div>
                <p className="quiz-review-question">{question.question}</p>
                <div className="quiz-review-answers">
                  <p className="quiz-review-your-answer">
                    <strong>Your answer:</strong> {item.selectedAnswer.join(', ')}
                  </p>
                  {!item.isMatch && (
                    <p className="quiz-review-correct-answer">
                      <strong>Correct answer:</strong> {question.correctAnswers.join(', ')}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="quiz-result-actions">
        <button className="quiz-btn quiz-btn-primary" onClick={handleRetry}>
          Try Again
        </button>
        <button
          className="quiz-btn quiz-btn-outline"
          onClick={() => setCurrentScreen(ScreenTypes.SplashScreen)}
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}
