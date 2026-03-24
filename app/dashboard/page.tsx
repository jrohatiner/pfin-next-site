'use client'

import { createClient } from '@/lib/supabase/client'
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

export default function StudentDashboard(): JSX.Element {
  const [studentData, setStudentData] = useState<StudentData | null>(null)
  const [classrooms, setClassrooms] = useState<Enrollment[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const loadDashboard = async (): Promise<void> => {
      const { data: sessionData } = await supabase.auth.getSession()
      if (!sessionData.session) return

      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', sessionData.session.user.id)
        .single()

      setStudentData(profile)

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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '16rem' }}>
        <p>Loading dashboard...</p>
      </div>
    )
  }

  if (!studentData) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 0' }}>
        <p>Unable to load student data.</p>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Welcome Section */}
      <div>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1a1a2e', marginBottom: '0.5rem' }}>
          Welcome to Your Dashboard
        </h1>
        <p style={{ color: '#666' }}>
          Complete your financial literacy journey with interactive lessons and quizzes.
        </p>
      </div>

      {/* Pre-Test Status */}
      {!studentData.pre_test_completed && (
        <div style={{ border: '1px solid #fef08a', background: '#fefce8', borderRadius: '8px', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Financial Literacy Pre-Test</h2>
          <p style={{ color: '#555', marginBottom: '1rem' }}>
            Before you can access lessons, you must complete the Financial Literacy Pre-Test. This helps us understand your current knowledge level.
          </p>
          <Link
            href="/pre-test"
            style={{ display: 'inline-block', background: '#0b57d0', color: '#fff', padding: '0.5rem 1.5rem', borderRadius: '8px', textDecoration: 'none' }}
          >
            Take Pre-Test
          </Link>
        </div>
      )}

      {studentData.pre_test_completed && (
        <div style={{ border: '1px solid #bbf7d0', background: '#f0fdf4', borderRadius: '8px', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Pre-Test Completed</h2>
          <p style={{ color: '#555' }}>
            Your pre-test score: <span style={{ fontWeight: 'bold' }}>{studentData.pre_test_score}%</span>
          </p>
        </div>
      )}

      {/* Enrolled Classrooms */}
      <div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a1a2e', marginBottom: '1rem' }}>My Classrooms</h2>
        {classrooms.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {classrooms.map((enrollment) => (
              <div key={enrollment.classroom_id} style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1.5rem', background: '#fff' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{enrollment.classrooms.name}</h3>
                <p style={{ color: '#666', marginBottom: '1rem' }}>
                  You are enrolled in this classroom. Access lessons and complete assignments below.
                </p>
                {studentData.pre_test_completed ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <Link
                      href="/lessons"
                      style={{ display: 'block', textAlign: 'center', background: '#0b57d0', color: '#fff', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none' }}
                    >
                      View Lessons
                    </Link>
                    <Link
                      href="/videos"
                      style={{ display: 'block', textAlign: 'center', background: '#0b57d0', color: '#fff', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none' }}
                    >
                      View Videos
                    </Link>
                  </div>
                ) : (
                  <p style={{ fontSize: '0.875rem', color: '#888' }}>
                    Complete the pre-test to access lessons and videos.
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1.5rem', background: '#fff' }}>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              You are not enrolled in any classrooms yet. Ask your teacher for a session code to join.
            </p>
            <Link href="/auth/sign-up" style={{ color: '#0b57d0', textDecoration: 'underline' }}>
              Join a classroom
            </Link>
          </div>
        )}
      </div>

      {/* Learning Resources */}
      {studentData.pre_test_completed && (
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a1a2e', marginBottom: '1rem' }}>Learning Resources</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1.5rem', background: '#fff' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Interactive Lessons</h3>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                Learn personal finance concepts through structured lessons with quizzes.
              </p>
              <Link href="/lessons" style={{ color: '#0b57d0', textDecoration: 'underline' }}>
                Explore Lessons →
              </Link>
            </div>
            <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1.5rem', background: '#fff' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Educational Videos</h3>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                Watch short videos explaining key financial concepts and strategies.
              </p>
              <Link href="/videos" style={{ color: '#0b57d0', textDecoration: 'underline' }}>
                Watch Videos →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
