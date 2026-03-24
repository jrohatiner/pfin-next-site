'use client'

import { useQuiz } from './QuizContext'
import { ScreenTypes } from './types'

export default function QuizDetailsScreen() {
  const { setCurrentScreen, quizDetails, setTimer } = useQuiz()

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleStart = () => {
    setTimer(quizDetails.totalTime)
    setCurrentScreen(ScreenTypes.QuestionScreen)
  }

  return (
    <div className="quiz-details">
      <h2 className="quiz-details-title">Quiz Details</h2>
      
      <div className="quiz-details-grid">
        <div className="quiz-detail-card">
          <div className="quiz-detail-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </svg>
          </div>
          <div className="quiz-detail-info">
            <span className="quiz-detail-label">Questions</span>
            <span className="quiz-detail-value">{quizDetails.totalQuestions}</span>
          </div>
        </div>

        <div className="quiz-detail-card">
          <div className="quiz-detail-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div className="quiz-detail-info">
            <span className="quiz-detail-label">Time</span>
            <span className="quiz-detail-value">{formatTime(quizDetails.totalTime)}</span>
          </div>
        </div>

        <div className="quiz-detail-card">
          <div className="quiz-detail-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <div className="quiz-detail-info">
            <span className="quiz-detail-label">Total Score</span>
            <span className="quiz-detail-value">{quizDetails.totalScore}</span>
          </div>
        </div>
      </div>

      <div className="quiz-details-actions">
        <button onClick={handleStart} className="quiz-btn quiz-btn-primary quiz-btn-lg">
          Begin Quiz
        </button>
      </div>
    </div>
  )
}
