'use client'

import { useQuiz } from '../QuizContext'
import { ScreenTypes } from '../types'

export default function QuizDetailsScreen() {
  const { quiz, setCurrentScreen, quizDetails } = useQuiz()

  return (
    <div className="quiz-details">
      <h2 className="quiz-details-title">{quiz.topic}</h2>
      
      <div className="quiz-details-grid">
        <div className="quiz-detail-card">
          <div className="quiz-detail-icon">❓</div>
          <div className="quiz-detail-info">
            <span className="quiz-detail-label">Questions</span>
            <span className="quiz-detail-value">{quizDetails.totalQuestions}</span>
          </div>
        </div>
        
        <div className="quiz-detail-card">
          <div className="quiz-detail-icon">⭐</div>
          <div className="quiz-detail-info">
            <span className="quiz-detail-label">Total Score</span>
            <span className="quiz-detail-value">{quizDetails.totalScore}</span>
          </div>
        </div>
        
        <div className="quiz-detail-card">
          <div className="quiz-detail-icon">⏱️</div>
          <div className="quiz-detail-info">
            <span className="quiz-detail-label">Time</span>
            <span className="quiz-detail-value">{Math.ceil(quizDetails.totalTime / 60)}m</span>
          </div>
        </div>
        
        <div className="quiz-detail-card">
          <div className="quiz-detail-icon">📊</div>
          <div className="quiz-detail-info">
            <span className="quiz-detail-label">Level</span>
            <span className="quiz-detail-value">{quiz.level}</span>
          </div>
        </div>
      </div>
      
      <div className="quiz-details-actions">
        <button
          className="quiz-btn quiz-btn-primary quiz-btn-lg"
          onClick={() => setCurrentScreen(ScreenTypes.QuestionScreen)}
        >
          Begin
        </button>
      </div>
    </div>
  )
}
