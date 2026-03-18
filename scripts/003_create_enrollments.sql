-- Create enrollments table for student-classroom relationships
CREATE TABLE IF NOT EXISTS public.enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  classroom_id UUID NOT NULL REFERENCES public.classrooms(id) ON DELETE CASCADE,
  enrolled_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(student_id, classroom_id)
);

-- Enable Row Level Security
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;

-- Students can view their own enrollments
CREATE POLICY "students_select_own_enrollments" ON public.enrollments
  FOR SELECT USING (student_id = auth.uid());

-- Students can insert their own enrollments
CREATE POLICY "students_insert_own_enrollments" ON public.enrollments
  FOR INSERT WITH CHECK (student_id = auth.uid());

-- Students can delete their own enrollments (leave classroom)
CREATE POLICY "students_delete_own_enrollments" ON public.enrollments
  FOR DELETE USING (student_id = auth.uid());

-- Teachers can view enrollments for their classrooms
CREATE POLICY "teachers_view_classroom_enrollments" ON public.enrollments
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.classrooms c
      WHERE c.id = enrollments.classroom_id
      AND c.teacher_id = auth.uid()
    )
  );

-- Teachers can delete enrollments from their classrooms (remove students)
CREATE POLICY "teachers_delete_classroom_enrollments" ON public.enrollments
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM public.classrooms c
      WHERE c.id = enrollments.classroom_id
      AND c.teacher_id = auth.uid()
    )
  );

-- Create indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_enrollments_student_id ON public.enrollments(student_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_classroom_id ON public.enrollments(classroom_id);
