'use client'

import { useQuiz } from '../QuizContext'
import { ScreenTypes } from '../types'

export default function SplashScreen() {
  const { setCurrentScreen } = useQuiz()

  return (
    <div className="quiz-splash">
      <div className="quiz-splash-content">
        <div className="quiz-splash-icon">📚</div>
        <h1 className="quiz-splash-title">Ready to Test Your Knowledge?</h1>
        <p className="quiz-splash-subtitle">Challenge yourself with this quiz and see how much you've learned!</p>
        <button
          className="quiz-btn quiz-btn-primary quiz-btn-lg"
          onClick={() => setCurrentScreen(ScreenTypes.QuizDetailsScreen)}
        >
          Start Quiz
        </button>
      </div>
    </div>
  )
}
