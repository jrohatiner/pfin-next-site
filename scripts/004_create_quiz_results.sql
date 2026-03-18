-- Create quiz_results table for tracking student quiz scores
CREATE TABLE IF NOT EXISTS public.quiz_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  lesson_slug TEXT NOT NULL,
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  answers JSONB, -- Store detailed answers for review
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(student_id, lesson_slug) -- One result per student per lesson
);

-- Enable Row Level Security
ALTER TABLE public.quiz_results ENABLE ROW LEVEL SECURITY;

-- Students can view their own quiz results
CREATE POLICY "students_select_own_results" ON public.quiz_results
  FOR SELECT USING (student_id = auth.uid());

-- Students can insert their own quiz results
CREATE POLICY "students_insert_own_results" ON public.quiz_results
  FOR INSERT WITH CHECK (student_id = auth.uid());

-- Students can update their own quiz results (retake quiz)
CREATE POLICY "students_update_own_results" ON public.quiz_results
  FOR UPDATE USING (student_id = auth.uid());

-- Teachers can view quiz results for students in their classrooms
CREATE POLICY "teachers_view_student_results" ON public.quiz_results
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.classrooms c
      JOIN public.enrollments e ON e.classroom_id = c.id
      WHERE c.teacher_id = auth.uid()
      AND e.student_id = quiz_results.student_id
    )
  );

-- Create indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_quiz_results_student_id ON public.quiz_results(student_id);
CREATE INDEX IF NOT EXISTS idx_quiz_results_lesson_slug ON public.quiz_results(lesson_slug);
