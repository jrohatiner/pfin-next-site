'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { ScreenTypes, Quiz, Result, QuizContextTypes } from './types'

const initialState: QuizContextTypes = {
  currentScreen: ScreenTypes.SplashScreen,
  setCurrentScreen: () => {},
  quiz: {
    topic: '',
    level: '',
    totalQuestions: 0,
    totalScore: 0,
    totalTime: 0,
    questions: [],
  },
  result: [],
  setResult: () => {},
  timer: 0,
  setTimer: () => {},
  endTime: 0,
  setEndTime: () => {},
  quizDetails: {
    totalQuestions: 0,
    totalScore: 0,
    totalTime: 0,
    selectedQuizTopic: '',
  },
}

export const QuizContext = createContext<QuizContextTypes>(initialState)

export const useQuiz = () => useContext(QuizContext)

interface QuizProviderProps {
  children: ReactNode
  quiz: Quiz
}

export function QuizProvider({ children, quiz }: QuizProviderProps) {
  const [currentScreen, setCurrentScreen] = useState<ScreenTypes>(ScreenTypes.SplashScreen)
  const [result, setResult] = useState<Result[]>([])
  const [timer, setTimer] = useState<number>(quiz.totalTime)
  const [endTime, setEndTime] = useState<number>(0)

  const quizDetails = {
    totalQuestions: quiz.totalQuestions,
    totalScore: quiz.totalScore,
    totalTime: quiz.totalTime,
    selectedQuizTopic: quiz.topic,
  }

  // Timer effect
  useEffect(() => {
    if (currentScreen === ScreenTypes.QuestionScreen && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval)
            setCurrentScreen(ScreenTypes.ResultScreen)
            return 0
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [currentScreen, timer])

  // Reset timer when starting quiz
  useEffect(() => {
    if (currentScreen === ScreenTypes.QuestionScreen && timer === 0) {
      setTimer(quiz.totalTime)
    }
  }, [currentScreen, quiz.totalTime, timer])

  const value: QuizContextTypes = {
    currentScreen,
    setCurrentScreen,
    quiz,
    result,
    setResult,
    timer,
    setTimer,
    endTime,
    setEndTime,
    quizDetails,
  }

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}
