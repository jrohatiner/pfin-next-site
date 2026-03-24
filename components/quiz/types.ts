// Quiz Types - Based on Xeven Quiz App Template

export enum ScreenTypes {
  SplashScreen = 'SplashScreen',
  QuizDetailsScreen = 'QuizDetailsScreen', 
  QuestionScreen = 'QuestionScreen',
  ResultScreen = 'ResultScreen',
}

export type QuestionType = 'MCQs' | 'MAQs' | 'boolean'

export interface Question {
  question: string
  type: QuestionType
  choices: string[]
  correctAnswers: string[]
  score: number
  code?: string
  image?: string
}

export interface Quiz {
  topic: string
  level: string
  totalQuestions: number
  totalScore: number
  totalTime: number // in seconds
  questions: Question[]
}

export interface Result {
  selectedAnswer: string[]
  isMatch: boolean
}

export interface QuizContextTypes {
  currentScreen: ScreenTypes
  setCurrentScreen: (screen: ScreenTypes) => void
  quiz: Quiz
  result: Result[]
  setResult: (result: Result[]) => void
  timer: number
  setTimer: (timer: number) => void
  endTime: number
  setEndTime: (endTime: number) => void
  quizDetails: {
    totalQuestions: number
    totalScore: number
    totalTime: number
    selectedQuizTopic: string
  }
}

// Utility function to convert simple question format to Xeven format
export function convertToXevenFormat(
  simpleQuestions: {
    id: string | number
    question: string
    options: string[]
    correctAnswer: number
  }[],
  topic: string = 'Quiz',
  level: string = 'Intermediate',
  timePerQuestion: number = 30
): Quiz {
  const questions: Question[] = simpleQuestions.map((q) => ({
    question: q.question,
    type: 'MCQs' as QuestionType,
    choices: q.options,
    correctAnswers: [q.options[q.correctAnswer]],
    score: 10,
  }))

  return {
    topic,
    level,
    totalQuestions: questions.length,
    totalScore: questions.length * 10,
    totalTime: questions.length * timePerQuestion,
    questions,
  }
}
