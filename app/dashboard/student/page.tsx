import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

async function getStudentData(userId: string) {
  const supabase = await createClient()

  // Get student profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()

  // Get enrollments with classroom info
  const { data: enrollments } = await supabase
    .from('enrollments')
    .select('classroom_id, classrooms(id, name, teacher_id)')
    .eq('student_id', userId)

  // Get quiz results
  const { data: quizResults } = await supabase
    .from('quiz_results')
    .select('lesson_id, score, total_questions')
    .eq('student_id', userId)
    .order('created_at', { ascending: false })

  return {
    profile,
    enrollments: enrollments || [],
    quizResults: quizResults || [],
  }
}

export default async function StudentDashboard() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  const { profile, enrollments, quizResults } = await getStudentData(user.id)

  if (profile?.role !== 'student') {
    redirect('/auth/login')
  }

  // Calculate average quiz score
  const avgScore =
    quizResults.length > 0
      ? (
          quizResults.reduce((sum, q) => sum + (q.score / q.total_questions) * 100, 0) /
          quizResults.length
        ).toFixed(1)
      : 'N/A'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Welcome back!</h1>
            <p className="text-slate-600">
              {user.email}
            </p>
          </div>
          <form
            action={async () => {
              'use server'
              const supabase = await createClient()
              await supabase.auth.signOut()
              redirect('/auth/login')
            }}
          >
            <button
              type="submit"
              className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
            >
              Sign Out
            </button>
          </form>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-600">Classrooms</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">
              {enrollments.length}
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-600">Quizzes Completed</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">
              {quizResults.length}
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-600">Average Score</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">
              {avgScore}%
            </p>
          </div>
        </div>

        {/* Classrooms Section */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Your Classrooms</h2>
          {enrollments.length === 0 ? (
            <div className="rounded-lg border-2 border-dashed border-slate-300 bg-white p-8 text-center">
              <p className="text-slate-600">
                You haven't joined any classrooms yet.
              </p>
              <Link
                href="/auth/sign-up"
                className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
              >
                Join a Classroom
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {enrollments.map((enrollment) => (
                <div
                  key={enrollment.classroom_id}
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-slate-900">
                    {enrollment.classrooms?.name || 'Classroom'}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Quiz Score: {avgScore}%
                  </p>
                  <Link
                    href="/lessons"
                    className="mt-4 inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600 hover:bg-blue-200"
                  >
                    View Lessons
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Quiz Results */}
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Recent Quiz Results</h2>
          {quizResults.length === 0 ? (
            <p className="text-slate-600">No quiz results yet.</p>
          ) : (
            <div className="space-y-4">
              {quizResults.slice(0, 5).map((result, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-slate-200 pb-4 last:border-b-0">
                  <div>
                    <p className="font-medium text-slate-900">Lesson {result.lesson_id}</p>
                    <p className="text-sm text-slate-600">
                      {result.score}/{result.total_questions} questions correct
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-slate-900">
                      {Math.round((result.score / result.total_questions) * 100)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
