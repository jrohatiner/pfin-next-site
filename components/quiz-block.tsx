'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

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

export default function QuizBlock({ lessonId, questions, title = 'Lesson Quiz' }: QuizBlockProps) {
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
    if (currentQuestion < questions.length - 1) {
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
    questions.forEach((q, idx) => {
      if (answers[idx] === q.correctAnswer) {
        correctCount++
      }
    })
    const percentage = Math.round((correctCount / questions.length) * 100)
    setScore(percentage)
    setShowResults(true)

    // Save result to database
    setLoading(true)
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (user) {
      const { error } = await supabase.from('quiz_results').insert({
        student_id: user.id,
        lesson_id: lessonId,
        score: correctCount,
        total_questions: questions.length,
      })

      if (error) {
        console.error('Error saving quiz result:', error)
      }
    }
    setLoading(false)
  }

  const handleRetry = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
    setScore(0)
  }

  if (showResults) {
    const correctCount = answers.filter((a, idx) => a === questions[idx]?.correctAnswer).length

    return (
      <div className="rounded-lg border border-slate-200 bg-gradient-to-br from-blue-50 to-slate-50 p-8 shadow-sm">
        <div className="text-center">
          <div className="mb-4 text-5xl font-bold text-blue-600">{score}%</div>
          <h3 className="mb-2 text-2xl font-bold text-slate-900">Quiz Complete!</h3>
          <p className="mb-6 text-slate-600">
            {score >= 80
              ? 'Excellent work! You have a strong understanding of this material.'
              : score >= 60
                ? 'Good effort! Review the material and try again if you like.'
                : 'Keep learning! Try reviewing the lesson before taking the quiz again.'}
          </p>

          <div className="mb-6 rounded-lg bg-white p-4 text-left">
            <p className="text-sm font-medium text-slate-700">Results:</p>
            <p className="mt-2 text-sm text-slate-600">
              Correct Answers: {correctCount} / {questions.length}
            </p>
          </div>

          <button
            onClick={handleRetry}
            className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const selectedAnswer = answers[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
          <span className="text-sm font-medium text-slate-600">
            Question {currentQuestion + 1} of {questions.length}
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
        <h4 className="mb-6 text-lg font-semibold text-slate-900">
          {question.question}
        </h4>

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

        {currentQuestion === questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === undefined || loading}
            className="flex-1 rounded-lg bg-green-600 px-4 py-2 font-semibold text-white transition hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit Quiz'}
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
  )
}
