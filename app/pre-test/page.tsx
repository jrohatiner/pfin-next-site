'use client'

import { createClient } from '@/lib/supabase/client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

const PRE_TEST_QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'What is the primary purpose of creating a budget?',
    options: [
      'To track and control your spending',
      'To become wealthy quickly',
      'To avoid paying taxes',
      'To impress your friends',
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: 'Which of the following is NOT a form of emergency fund?',
    options: [
      'High-yield savings account',
      'Money market account',
      'Stock investments',
      'Checking account',
    ],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: 'What does APR stand for?',
    options: [
      'Annual Payment Rate',
      'Annual Percentage Rate',
      'Annual Principal Rate',
      'Adjusted Payment Rate',
    ],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: 'Which credit score range is typically considered "good"?',
    options: ['300-400', '400-600', '600-750', '750-850'],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: 'What is diversification in investing?',
    options: [
      'Investing all your money in one stock',
      'Spreading investments across different assets',
      'Buying and selling stocks frequently',
      'Investing only in bonds',
    ],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: 'What is compound interest?',
    options: [
      'Interest paid on the principal only',
      'Interest paid on principal plus accumulated interest',
      'Interest that never changes',
      'Interest paid monthly instead of yearly',
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: 'Which of these is a tax-advantaged retirement account?',
    options: [
      'Checking account',
      '401(k) or IRA',
      'Savings account',
      'Credit card',
    ],
    correctAnswer: 1,
  },
  {
    id: 8,
    question: 'What does insurance primarily protect against?',
    options: [
      'Stock market losses',
      'Inflation',
      'Financial loss from unexpected events',
      'Paying taxes',
    ],
    correctAnswer: 2,
  },
  {
    id: 9,
    question: 'What is the 50/30/20 budgeting rule?',
    options: [
      '50% savings, 30% investments, 20% spending',
      '50% needs, 30% wants, 20% savings',
      '50% bills, 30% credit, 20% debt',
      'A rule that never changes',
    ],
    correctAnswer: 1,
  },
  {
    id: 10,
    question: 'Which factor has the MOST impact on your credit score?',
    options: [
      'Payment history',
      'Credit card brand',
      'Your income',
      'Your age',
    ],
    correctAnswer: 0,
  },
]

export default function PreTestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    checkIfAlreadyCompleted()
  }, [supabase])

  const checkIfAlreadyCompleted = async () => {
    const { data: sessionData } = await supabase.auth.getSession()
    if (!sessionData.session) {
      router.push('/auth/login')
      return
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('pre_test_completed')
      .eq('id', sessionData.session.user.id)
      .single()

    if (profile?.pre_test_completed) {
      router.push('/dashboard')
      return
    }

    setLoading(false)
  }

  const handleSelectAnswer = (optionIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = optionIndex
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < PRE_TEST_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = async () => {
    // Calculate score
    let correctCount = 0
    PRE_TEST_QUESTIONS.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correctCount++
      }
    })

    const finalScore = Math.round((correctCount / PRE_TEST_QUESTIONS.length) * 100)
    setScore(finalScore)
    setShowResults(true)

    // Save score to database
    const { data: sessionData } = await supabase.auth.getSession()
    if (sessionData.session) {
      await supabase
        .from('profiles')
        .update({
          pre_test_completed: true,
          pre_test_score: finalScore,
        })
        .eq('id', sessionData.session.user.id)
    }
  }

  const handleComplete = () => {
    router.push('/dashboard')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    )
  }

  if (showResults) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl">Test Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-center">
            <div className="text-6xl font-bold text-blue-600">{score}%</div>
            <div>
              <p className="text-lg text-gray-700 mb-2">
                You answered {Math.round((score / 100) * PRE_TEST_QUESTIONS.length)} out of {PRE_TEST_QUESTIONS.length} questions correctly.
              </p>
              {score >= 70 ? (
                <p className="text-green-600 font-medium">
                  Great job! You're ready to start learning.
                </p>
              ) : (
                <p className="text-yellow-600 font-medium">
                  Don't worry! This helps us understand your starting point. Let's learn together!
                </p>
              )}
            </div>
            <Button onClick={handleComplete} className="w-full">
              Continue to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const question = PRE_TEST_QUESTIONS[currentQuestion]
  const isAnswered = answers[currentQuestion] !== undefined

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Financial Literacy Pre-Test</CardTitle>
            <span className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {PRE_TEST_QUESTIONS.length}
            </span>
          </div>
          <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{
                width: `${((currentQuestion + 1) / PRE_TEST_QUESTIONS.length) * 100}%`,
              }}
            />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Question */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {question.question}
            </h2>
          </div>

          {/* Answer Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                className={`w-full p-4 text-left border-2 rounded-lg transition ${
                  answers[currentQuestion] === index
                    ? 'bg-blue-50 border-blue-500'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 ${
                      answers[currentQuestion] === index
                        ? 'bg-blue-500 border-blue-500'
                        : 'border-gray-300'
                    }`}
                  />
                  <span className="text-gray-700">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 justify-between pt-4">
            <Button
              onClick={handlePrevious}
              variant="outline"
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>

            {currentQuestion < PRE_TEST_QUESTIONS.length - 1 ? (
              <Button
                onClick={handleNext}
                disabled={!isAnswered}
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!isAnswered}
              >
                Submit Test
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
