'use client'

import { createClient } from '@/lib/supabase/client'
import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
}

interface QuizBlockProps {
  lessonSlug: string
  questions: QuizQuestion[]
  title?: string
}

export default function QuizBlock({
  lessonSlug,
  questions,
  title = 'Lesson Quiz',
}: QuizBlockProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    loadExistingScore()
  }, [lessonSlug, supabase])

  const loadExistingScore = async () => {
    const { data: sessionData } = await supabase.auth.getSession()
    if (!sessionData.session) {
      setLoading(false)
      return
    }

    const { data } = await supabase
      .from('quiz_results')
      .select('score, answers')
      .eq('student_id', sessionData.session.user.id)
      .eq('lesson_slug', lessonSlug)
      .single()

    if (data) {
      setScore(data.score)
      setAnswers(data.answers || [])
      setShowResults(true)
      setSaved(true)
    }

    setLoading(false)
  }

  const handleSelectAnswer = (optionIndex: number) => {
    if (showResults) return // Prevent changes after submission

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
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correctCount++
      }
    })

    const finalScore = Math.round((correctCount / questions.length) * 100)
    setScore(finalScore)
    setShowResults(true)

    // Save to database
    const { data: sessionData } = await supabase.auth.getSession()
    if (sessionData.session) {
      const { error } = await supabase.from('quiz_results').upsert({
        student_id: sessionData.session.user.id,
        lesson_slug: lessonSlug,
        score: finalScore,
        answers,
      })

      if (!error) {
        setSaved(true)
      }
    }
  }

  if (loading) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p>Loading quiz...</p>
        </CardContent>
      </Card>
    )
  }

  if (showResults) {
    const correctCount = answers.filter(
      (answer, index) => answer === questions[index]?.correctAnswer
    ).length

    return (
      <Card className={saved ? 'border-green-200 bg-green-50' : ''}>
        <CardHeader>
          <CardTitle>{title} - Results</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">{score}%</div>
            <p className="text-gray-700">
              You answered {correctCount} out of {questions.length} questions correctly.
            </p>
          </div>

          {saved && (
            <div className="p-4 bg-green-100 border border-green-300 rounded-lg">
              <p className="text-green-800">
                Your score has been saved and will appear on your teacher's dashboard.
              </p>
            </div>
          )}

          {/* Show review of answers */}
          <div className="space-y-4 mt-6">
            <h3 className="font-semibold text-gray-900">Review Your Answers</h3>
            {questions.map((question, index) => {
              const isCorrect = answers[index] === question.correctAnswer
              return (
                <div
                  key={question.id}
                  className={`p-4 border rounded-lg ${
                    isCorrect
                      ? 'bg-green-50 border-green-200'
                      : 'bg-red-50 border-red-200'
                  }`}
                >
                  <p className="font-medium text-gray-900 mb-2">
                    {index + 1}. {question.question}
                  </p>
                  <p
                    className={`text-sm ${
                      isCorrect ? 'text-green-700' : 'text-red-700'
                    }`}
                  >
                    {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Your answer: {question.options[answers[index]]}
                  </p>
                  {!isCorrect && (
                    <p className="text-sm text-gray-600">
                      Correct answer: {question.options[question.correctAnswer]}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    )
  }

  const question = questions[currentQuestion]
  const isAnswered = answers[currentQuestion] !== undefined

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{title}</CardTitle>
          <span className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Question */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {question.question}
          </h3>
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

          {currentQuestion < questions.length - 1 ? (
            <Button onClick={handleNext} disabled={!isAnswered}>
              Next
            </Button>
          ) : (
            <Button onClick={handleSubmit} disabled={!isAnswered}>
              Submit Quiz
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
