'use client'

import { createClient } from '@/lib/supabase/client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

interface Classroom {
  id: string
  name: string
  session_code: string
  description: string
  is_active: boolean
  created_at: string
}

interface StudentWithProgress {
  id: string
  email: string
  first_name: string
  last_name: string
  pre_test_completed: boolean
  pre_test_score?: number
}

export default function TeacherDashboard() {
  const [classrooms, setClassrooms] = useState<Classroom[]>([])
  const [selectedClassroom, setSelectedClassroom] = useState<string | null>(null)
  const [students, setStudents] = useState<StudentWithProgress[]>([])
  const [newClassName, setNewClassName] = useState('')
  const [showNewClassForm, setShowNewClassForm] = useState(false)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    loadClassrooms()
  }, [supabase])

  const loadClassrooms = async () => {
    const { data: sessionData } = await supabase.auth.getSession()
    if (!sessionData.session) return

    const { data } = await supabase
      .from('classrooms')
      .select('*')
      .eq('teacher_id', sessionData.session.user.id)
      .order('created_at', { ascending: false })

    setClassrooms(data || [])
    setLoading(false)

    // Load students for first classroom
    if (data && data.length > 0) {
      loadStudents(data[0].id)
      setSelectedClassroom(data[0].id)
    }
  }

  const loadStudents = async (classroomId: string) => {
    const { data: enrollments } = await supabase
      .from('enrollments')
      .select('student_id, profiles(id, email, first_name, last_name, pre_test_completed, pre_test_score)')
      .eq('classroom_id', classroomId)

    if (enrollments) {
      const studentList = enrollments
        .map((e: any) => e.profiles)
        .filter(Boolean)

      setStudents(studentList)
    }
  }

  const createClassroom = async () => {
    if (!newClassName.trim()) return

    const { data: sessionData } = await supabase.auth.getSession()
    if (!sessionData.session) return

    // Generate session code
    const sessionCode = Math.random().toString(36).substring(2, 8).toUpperCase()

    const { data, error } = await supabase
      .from('classrooms')
      .insert({
        teacher_id: sessionData.session.user.id,
        name: newClassName,
        session_code: sessionCode,
        is_active: true,
      })
      .select()

    if (!error && data) {
      setClassrooms([data[0], ...classrooms])
      setNewClassName('')
      setShowNewClassForm(false)
    }
  }

  const copySessionCode = (code: string) => {
    navigator.clipboard.writeText(code)
    alert(`Session code ${code} copied to clipboard!`)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Classroom Management
        </h1>
        <p className="text-gray-600">
          Create and manage your classrooms, and monitor student progress.
        </p>
      </div>

      {/* Create New Classroom */}
      <Card>
        <CardHeader>
          <CardTitle>Create New Classroom</CardTitle>
        </CardHeader>
        <CardContent>
          {!showNewClassForm ? (
            <Button onClick={() => setShowNewClassForm(true)}>
              + New Classroom
            </Button>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Classroom Name
                </label>
                <input
                  type="text"
                  value={newClassName}
                  onChange={(e) => setNewClassName(e.target.value)}
                  placeholder="e.g., Finance 101 - Period 2"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={createClassroom}>Create</Button>
                <Button
                  onClick={() => setShowNewClassForm(false)}
                  variant="outline"
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Classrooms List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Classrooms */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Your Classrooms ({classrooms.length})
          </h2>
          <div className="space-y-2">
            {classrooms.map((classroom) => (
              <button
                key={classroom.id}
                onClick={() => {
                  setSelectedClassroom(classroom.id)
                  loadStudents(classroom.id)
                }}
                className={`w-full text-left p-3 rounded-lg border transition ${
                  selectedClassroom === classroom.id
                    ? 'bg-blue-50 border-blue-300'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="font-medium text-gray-900">{classroom.name}</div>
                <div className="text-xs text-gray-500">
                  Code: {classroom.session_code}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Selected Classroom Details */}
        {selectedClassroom && classrooms.length > 0 && (
          <div className="md:col-span-2 space-y-6">
            {(() => {
              const classroom = classrooms.find((c) => c.id === selectedClassroom)
              return classroom ? (
                <>
                  {/* Session Code Card */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Session Code</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-2">
                            Share this code with students to let them join this classroom:
                          </p>
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={classroom.session_code}
                              readOnly
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                            />
                            <Button
                              onClick={() => copySessionCode(classroom.session_code)}
                            >
                              Copy
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Students Section */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Enrolled Students ({students.length})</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {students.length > 0 ? (
                        <div className="space-y-3">
                          {students.map((student) => (
                            <div
                              key={student.id}
                              className="p-3 border border-gray-200 rounded-lg"
                            >
                              <div className="font-medium text-gray-900">
                                {student.first_name} {student.last_name}
                              </div>
                              <div className="text-sm text-gray-600">
                                {student.email}
                              </div>
                              <div className="text-xs text-gray-500 mt-2">
                                {student.pre_test_completed ? (
                                  <span className="text-green-600">
                                    ✓ Pre-test completed ({student.pre_test_score}%)
                                  </span>
                                ) : (
                                  <span className="text-yellow-600">
                                    Pre-test pending
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-600">
                          No students enrolled yet. Share the session code to get started.
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </>
              ) : null
            })()}
          </div>
        )}
      </div>
    </div>
  )
}
