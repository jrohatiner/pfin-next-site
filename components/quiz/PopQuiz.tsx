'use client'

import { QuizProvider, useQuiz } from './QuizContext'
import { ScreenTypes, Quiz, convertToXevenFormat } from './types'
import SplashScreen from './SplashScreen'
import QuizDetailsScreen from './QuizDetailsScreen'
import QuestionScreen from './QuestionScreen'
import ResultScreen from './ResultScreen'
import { createClient } from '@/lib/supabase/client'

interface SimpleQuestion {
  id: string | number
  question: string
  options: string[]
  correctAnswer: number
}

interface PopQuizProps {
  lessonId: string
  questions: SimpleQuestion[]
  title?: string
  timePerQuestion?: number
}

function QuizScreens({ lessonId, onComplete }: { lessonId: string; onComplete: (score: number, total: number) => void }) {
  const { currentScreen } = useQuiz()

  switch (currentScreen) {
    case ScreenTypes.SplashScreen:
      return <SplashScreen />
    case ScreenTypes.QuizDetailsScreen:
      return <QuizDetailsScreen />
    case ScreenTypes.QuestionScreen:
      return <QuestionScreen />
    case ScreenTypes.ResultScreen:
      return <ResultScreen onComplete={onComplete} />
    default:
      return <SplashScreen />
  }
}

export default function PopQuiz({
  lessonId,
  questions,
  title = 'Lesson Quiz',
  timePerQuestion = 30,
}: PopQuizProps) {
  const supabase = createClient()

  // Convert simple question format to Xeven format
  const quiz: Quiz = convertToXevenFormat(questions, title, 'Intermediate', timePerQuestion)

  const handleComplete = async (correctAnswers: number, totalQuestions: number) => {
    // Save score to Supabase
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (user) {
      const { error } = await supabase.from('quiz_results').insert({
        student_id: user.id,
        lesson_id: lessonId,
        score: correctAnswers,
        total_questions: totalQuestions,
      })

      if (error) {
        console.error('Error saving quiz result:', error)
      }
    }
  }

  return (
    <div className="pop-quiz-container">
      <QuizProvider quiz={quiz}>
        <QuizScreens lessonId={lessonId} onComplete={handleComplete} />
      </QuizProvider>
    </div>
  )
}

// Re-export types for convenience
export { type SimpleQuestion }
export { convertToXevenFormat } from './types'
