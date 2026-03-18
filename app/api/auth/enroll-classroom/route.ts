import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { userId, sessionCode } = await request.json()

    if (!userId || !sessionCode) {
      return NextResponse.json(
        { error: 'Missing userId or sessionCode' },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    // Find classroom by session code
    const { data: classroom, error: classroomError } = await supabase
      .from('classrooms')
      .select('id')
      .eq('session_code', sessionCode)
      .single()

    if (classroomError || !classroom) {
      return NextResponse.json(
        { error: 'Invalid classroom session code' },
        { status: 404 }
      )
    }

    // Enroll student in classroom
    const { error: enrollError } = await supabase
      .from('enrollments')
      .insert({
        student_id: userId,
        classroom_id: classroom.id,
      })

    if (enrollError) {
      // Check if already enrolled
      if (enrollError.code === '23505') {
        return NextResponse.json(
          { error: 'You are already enrolled in this classroom' },
          { status: 400 }
        )
      }
      throw enrollError
    }

    return NextResponse.json(
      { success: true, classroomId: classroom.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Enroll classroom error:', error)
    return NextResponse.json(
      { error: 'Failed to enroll in classroom' },
      { status: 500 }
    )
  }
}
