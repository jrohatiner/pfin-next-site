'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

const PRE_TEST_QUESTIONS = [
  {
    id: 1,
    question: 'What is a budget?',
    options: [
      'A plan for how you will spend money',
      'A type of bank account',
      'A credit card',
      'A loan from a bank',
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: 'Which of the following is a fixed expense?',
    options: ['Dining out', 'Rent', 'Entertainment', 'Shopping'],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: 'What is compound interest?',
    options: [
      'Interest charged on your debt',
      'Interest earned on interest',
      'A type of savings account',
      'A fee charged by banks',
    ],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: 'A credit score is used to determine:',
    options: [
      'Your income level',
      'Your creditworthiness and interest rates',
      'How much you spend annually',
      'Your employment history',
    ],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: 'What is diversification in investing?',
    options: [
      'Putting all money in one stock',
      'Spreading investments across different assets',
      'Buying bonds only',
      'Saving money in a bank',
    ],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: 'Which is an asset?',
    options: [
      'A car loan',
      'Credit card debt',
      'A house you own',
      'A utility bill',
    ],
    correctAnswer: 2,
  },
  {
    id: 7,
    question: 'What does APR stand for?',
    options: [
      'Annual Percentage Rate',
      'Annual Payment Rate',
      'Average Percentage Rate',
      'Annual Principal Rate',
    ],
    correctAnswer: 0,
  },
  {
    id: 8,
    question: 'Emergency funds should ideally cover:',
    options: [
      '1 month of expenses',
      '3-6 months of expenses',
      '1 year of expenses',
      '2 weeks of expenses',
    ],
    correctAnswer: 1,
  },
  {
    id: 9,
    question: 'What is inflation?',
    options: [
      'A decrease in prices',
      'An increase in the money supply',
      'An increase in the general price level of goods',
      'A type of investment',
    ],
    correctAnswer: 2,
  },
  {
    id: 10,
    question: 'A 401(k) is primarily used for:',
    options: [
      'Emergency savings',
      'College education',
      'Retirement savings',
      'Short-term investments',
    ],
    correctAnswer: 2,
  },
]

export default function PreTestPage() {
  const router = useRouter()
  const supabase = createClient()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [loading, setLoading] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerSelect = (optionIndex: number) => {
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
    PRE_TEST_QUESTIONS.forEach((q, idx) => {
      if (answers[idx] === q.correctAnswer) {
        correctCount++
      }
    })
    const percentage = Math.round((correctCount / PRE_TEST_QUESTIONS.length) * 100)
    setScore(percentage)
    setShowResults(true)

    // Save result to database
    setLoading(true)
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (user) {
      // Update profile with pre-test completion
      const { error } = await supabase
        .from('profiles')
        .update({
          pre_test_completed: true,
          pre_test_score: percentage,
        })
        .eq('id', user.id)

      if (error) {
        console.error('Error saving pre-test result:', error)
      }
    }
    setLoading(false)
  }

  const handleContinue = () => {
    router.push('/dashboard/student')
  }

  if (showResults) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
        <div className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-8 shadow-lg">
          <div className="text-center">
            <div className="mb-4 text-5xl font-bold text-slate-900">{score}%</div>
            <h2 className="mb-2 text-2xl font-bold text-slate-900">
              Pre-Test Complete!
            </h2>
            <p className="mb-6 text-slate-600">
              {score >= 70
                ? 'Great job! You have solid financial knowledge.'
                : 'Good start! Keep learning to improve your financial literacy.'}
            </p>

            <div className="mb-6 rounded-lg bg-slate-50 p-4 text-left">
              <p className="text-sm font-medium text-slate-700">Results Breakdown:</p>
              <p className="mt-2 text-sm text-slate-600">
                Correct Answers: {answers.filter((a, idx) => a === PRE_TEST_QUESTIONS[idx]?.correctAnswer).length} / {PRE_TEST_QUESTIONS.length}
              </p>
            </div>

            <button
              onClick={handleContinue}
              disabled={loading}
              className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Continue to Dashboard'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  const question = PRE_TEST_QUESTIONS[currentQuestion]
  const selectedAnswer = answers[currentQuestion]
  const progress = ((currentQuestion + 1) / PRE_TEST_QUESTIONS.length) * 100

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-8">
      <div className="w-full max-w-2xl rounded-lg border border-slate-200 bg-white p-8 shadow-lg">
        {/* Header */}
        <div className="mb-6">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900">Financial Literacy Pre-Test</h1>
            <span className="text-sm font-medium text-slate-600">
              Question {currentQuestion + 1} of {PRE_TEST_QUESTIONS.length}
            </span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="mb-6 text-lg font-semibold text-slate-900">
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswerSelect(idx)}
                className={`w-full rounded-lg border-2 p-4 text-left font-medium transition ${
                  selectedAnswer === idx
                    ? 'border-blue-500 bg-blue-50 text-blue-900'
                    : 'border-slate-300 bg-white text-slate-900 hover:border-slate-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                      selectedAnswer === idx
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-slate-300'
                    }`}
                  >
                    {selectedAnswer === idx && (
                      <div className="h-2 w-2 rounded-full bg-white" />
                    )}
                  </div>
                  {option}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex-1 rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-900 transition hover:bg-slate-50 disabled:opacity-50"
          >
            Previous
          </button>

          {currentQuestion === PRE_TEST_QUESTIONS.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === undefined || loading}
              className="flex-1 rounded-lg bg-green-600 px-4 py-2 font-semibold text-white transition hover:bg-green-700 disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Submit Test'}
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={selectedAnswer === undefined}
              className="flex-1 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
