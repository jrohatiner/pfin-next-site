'use client'

import { createClient } from '@/lib/supabase/client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface StudentData {
  role: string
  pre_test_completed: boolean
  pre_test_score?: number
}

interface Enrollment {
  classroom_id: string
  classrooms: {
    id: string
    name: string
    teacher_id: string
  }
}

export default function StudentDashboard() {
  const [studentData, setStudentData] = useState<StudentData | null>(null)
  const [classrooms, setClassrooms] = useState<Enrollment[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const loadDashboard = async () => {
      const { data: sessionData } = await supabase.auth.getSession()
      if (!sessionData.session) return

      // Get student profile
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', sessionData.session.user.id)
        .single()

      setStudentData(profile)

      // Get enrolled classrooms
      const { data: enrollments } = await supabase
        .from('enrollments')
        .select('classroom_id, classrooms(id, name, teacher_id)')
        .eq('student_id', sessionData.session.user.id)

      setClassrooms(enrollments || [])
      setLoading(false)
    }

    loadDashboard()
  }, [supabase])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <p>Loading dashboard...</p>
      </div>
    )
  }

  if (!studentData) {
    return (
      <div className="text-center py-12">
        <p>Unable to load student data.</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome to Your Dashboard
        </h1>
        <p className="text-gray-600">
          Complete your financial literacy journey with interactive lessons and quizzes.
        </p>
      </div>

      {/* Pre-Test Status */}
      {!studentData.pre_test_completed && (
        <Card className="border-yellow-200 bg-yellow-50">
          <CardHeader>
            <CardTitle>Financial Literacy Pre-Test</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Before you can access lessons, you must complete the Financial Literacy Pre-Test. This helps us understand your current knowledge level.
            </p>
            <Link
              href="/pre-test"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
            >
              Take Pre-Test
            </Link>
          </CardContent>
        </Card>
      )}

      {studentData.pre_test_completed && (
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle>Pre-Test Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Your pre-test score: <span className="font-bold">{studentData.pre_test_score}%</span>
            </p>
          </CardContent>
        </Card>
      )}

      {/* Enrolled Classrooms */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">My Classrooms</h2>
        {classrooms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {classrooms.map((enrollment) => (
              <Card key={enrollment.classroom_id}>
                <CardHeader>
                  <CardTitle>{enrollment.classrooms.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    You are enrolled in this classroom. Access lessons and complete assignments below.
                  </p>
                  {studentData.pre_test_completed ? (
                    <div className="space-y-2">
                      <Link
                        href="/lessons"
                        className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                      >
                        View Lessons
                      </Link>
                      <Link
                        href="/videos"
                        className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                      >
                        View Videos
                      </Link>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">
                      Complete the pre-test to access lessons and videos.
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">
                You are not enrolled in any classrooms yet. Ask your teacher for a session code to join.
              </p>
              <Link
                href="/auth/sign-up"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Join a classroom
              </Link>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Learning Resources */}
      {studentData.pre_test_completed && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Interactive Lessons</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Learn personal finance concepts through structured lessons with quizzes.
                </p>
                <Link
                  href="/lessons"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Explore Lessons →
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Educational Videos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Watch short videos explaining key financial concepts and strategies.
                </p>
                <Link
                  href="/videos"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Watch Videos →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}
