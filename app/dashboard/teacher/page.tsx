import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

async function getTeacherData(userId: string) {
  const supabase = await createClient()

  // Get teacher's classrooms
  const { data: classrooms } = await supabase
    .from('classrooms')
    .select('*')
    .eq('teacher_id', userId)

  if (!classrooms || classrooms.length === 0) {
    return {
      profile: null,
      classrooms: [],
      enrollments: [],
      totalStudents: 0,
    }
  }

  // Get all enrollments for teacher's classrooms
  const classroomIds = classrooms.map((c) => c.id)
  const { data: enrollments } = await supabase
    .from('enrollments')
    .select('student_id, classroom_id, profiles(id, email)')
    .in('classroom_id', classroomIds)

  return {
    classrooms,
    enrollments: enrollments || [],
    totalStudents: enrollments?.length || 0,
  }
}

export default async function TeacherDashboard() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  // Verify teacher role
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  if (profile?.role !== 'teacher') {
    redirect('/auth/login')
  }

  const { classrooms, enrollments, totalStudents } = await getTeacherData(user.id)

  const handleCreateClassroom = async (formData: FormData) => {
    'use server'
    const supabase = await createClient()
    const className = formData.get('className') as string

    if (!className) return

    const { error } = await supabase.from('classrooms').insert({
      teacher_id: user.id,
      name: className,
    })

    if (error) {
      console.error('Failed to create classroom:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Teacher Dashboard</h1>
            <p className="text-slate-600">{user.email}</p>
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
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-600">Total Classrooms</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">
              {classrooms.length}
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-600">Total Students</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">
              {totalStudents}
            </p>
          </div>
        </div>

        {/* Create Classroom Form */}
        <div className="mb-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Create New Classroom</h2>
          <form action={handleCreateClassroom} className="flex gap-4">
            <input
              type="text"
              name="className"
              placeholder="Classroom name (e.g., Finance 101)"
              required
              className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            />
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700"
            >
              Create
            </button>
          </form>
        </div>

        {/* Classrooms Section */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Your Classrooms</h2>
          {classrooms.length === 0 ? (
            <div className="rounded-lg border-2 border-dashed border-slate-300 bg-white p-8 text-center">
              <p className="text-slate-600">
                You haven't created any classrooms yet.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {classrooms.map((classroom) => {
                const classroomEnrollments = enrollments.filter(
                  (e) => e.classroom_id === classroom.id
                )

                return (
                  <div
                    key={classroom.id}
                    className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">
                          {classroom.name}
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">
                          Session Code:{' '}
                          <span className="font-mono font-bold text-slate-900">
                            {classroom.session_code}
                          </span>
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          {classroomEnrollments.length} student
                          {classroomEnrollments.length !== 1 ? 's' : ''} enrolled
                        </p>
                      </div>
                      <Link
                        href={`/dashboard/teacher/classroom/${classroom.id}`}
                        className="rounded-lg bg-blue-100 px-4 py-2 font-semibold text-blue-600 hover:bg-blue-200"
                      >
                        View Details
                      </Link>
                    </div>

                    {/* Students List */}
                    {classroomEnrollments.length > 0 && (
                      <div className="mt-4 border-t border-slate-200 pt-4">
                        <p className="mb-2 text-sm font-medium text-slate-600">Students:</p>
                        <div className="space-y-1">
                          {classroomEnrollments.slice(0, 3).map((enrollment) => (
                            <p
                              key={enrollment.student_id}
                              className="text-sm text-slate-600"
                            >
                              • {enrollment.profiles?.email}
                            </p>
                          ))}
                          {classroomEnrollments.length > 3 && (
                            <p className="text-sm text-slate-500">
                              +{classroomEnrollments.length - 3} more
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
