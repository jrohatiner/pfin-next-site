// This file re-exports the new PopQuiz component for backward compatibility
// The new quiz system is based on the Xeven Quiz App Template

import PopQuiz from './quiz/PopQuiz'

interface QuizQuestion {
  id: string | number
  question: string
  options: string[]
  correctAnswer: number
}

interface QuizBlockProps {
  lessonId: string
  questions: QuizQuestion[]
  title?: string
}

// QuizBlock now uses the new PopQuiz component with full Xeven Quiz UI
export default function QuizBlock({ lessonId, questions, title = 'Lesson Quiz' }: QuizBlockProps) {
  return (
    <PopQuiz
      lessonId={lessonId}
      questions={questions}
      title={title}
      timePerQuestion={30}
    />
  )
}
