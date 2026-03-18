-- Create classrooms table for teacher-created classes
CREATE TABLE IF NOT EXISTS public.classrooms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  session_code TEXT NOT NULL UNIQUE,
  description TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.classrooms ENABLE ROW LEVEL SECURITY;

-- Teachers can view their own classrooms
CREATE POLICY "teachers_select_own_classrooms" ON public.classrooms
  FOR SELECT USING (teacher_id = auth.uid());

-- Teachers can insert their own classrooms
CREATE POLICY "teachers_insert_own_classrooms" ON public.classrooms
  FOR INSERT WITH CHECK (teacher_id = auth.uid());

-- Teachers can update their own classrooms
CREATE POLICY "teachers_update_own_classrooms" ON public.classrooms
  FOR UPDATE USING (teacher_id = auth.uid());

-- Teachers can delete their own classrooms
CREATE POLICY "teachers_delete_own_classrooms" ON public.classrooms
  FOR DELETE USING (teacher_id = auth.uid());

-- Students can view classrooms they're enrolled in
CREATE POLICY "students_view_enrolled_classrooms" ON public.classrooms
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.enrollments e
      WHERE e.classroom_id = classrooms.id
      AND e.student_id = auth.uid()
    )
  );

-- Anyone can look up classroom by session code (for enrollment)
CREATE POLICY "anyone_lookup_by_session_code" ON public.classrooms
  FOR SELECT USING (is_active = TRUE);

-- Create indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_classrooms_teacher_id ON public.classrooms(teacher_id);
CREATE INDEX IF NOT EXISTS idx_classrooms_session_code ON public.classrooms(session_code);
