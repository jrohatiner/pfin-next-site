'use client'

import { useQuiz } from './QuizContext'
import { ScreenTypes } from './types'

export default function SplashScreen() {
  const { setCurrentScreen, quizDetails } = useQuiz()

  const handleStart = () => {
    setCurrentScreen(ScreenTypes.QuizDetailsScreen)
  }

  return (
    <div className="quiz-splash">
      <div className="quiz-splash-content">
        <div className="quiz-splash-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
        </div>
        <h1 className="quiz-splash-title">{quizDetails.selectedQuizTopic}</h1>
        <p className="quiz-splash-subtitle">Test your knowledge</p>
        <button onClick={handleStart} className="quiz-btn quiz-btn-primary">
          Start Quiz
        </button>
      </div>
    </div>
  )
}
