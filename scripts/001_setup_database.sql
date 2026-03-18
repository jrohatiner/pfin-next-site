-- Comprehensive database schema setup for student/teacher platform

-- 1. Create profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  role TEXT NOT NULL CHECK (role IN ('student', 'teacher')) DEFAULT 'student',
  pre_test_completed BOOLEAN DEFAULT FALSE,
  pre_test_score INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create classrooms table
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

-- 3. Create enrollments table
CREATE TABLE IF NOT EXISTS public.enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  classroom_id UUID NOT NULL REFERENCES public.classrooms(id) ON DELETE CASCADE,
  enrolled_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(student_id, classroom_id)
);

-- 4. Create quiz_results table
CREATE TABLE IF NOT EXISTS public.quiz_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  lesson_slug TEXT NOT NULL,
  score INTEGER NOT NULL CHECK (score >= 0 AND score <= 100),
  answers JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(student_id, lesson_slug)
);

-- Enable Row Level Security on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.classrooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_results ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY IF NOT EXISTS "profiles_select_own" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY IF NOT EXISTS "profiles_insert_own" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY IF NOT EXISTS "profiles_update_own" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY IF NOT EXISTS "teachers_view_enrolled_students" ON public.profiles
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.classrooms c
      JOIN public.enrollments e ON e.classroom_id = c.id
      WHERE c.teacher_id = auth.uid()
      AND e.student_id = profiles.id
    )
  );

-- RLS Policies for classrooms
CREATE POLICY IF NOT EXISTS "teachers_select_own_classrooms" ON public.classrooms
  FOR SELECT USING (teacher_id = auth.uid());

CREATE POLICY IF NOT EXISTS "teachers_insert_own_classrooms" ON public.classrooms
  FOR INSERT WITH CHECK (teacher_id = auth.uid());

CREATE POLICY IF NOT EXISTS "teachers_update_own_classrooms" ON public.classrooms
  FOR UPDATE USING (teacher_id = auth.uid());

CREATE POLICY IF NOT EXISTS "teachers_delete_own_classrooms" ON public.classrooms
  FOR DELETE USING (teacher_id = auth.uid());

CREATE POLICY IF NOT EXISTS "students_view_enrolled_classrooms" ON public.classrooms
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.enrollments e
      WHERE e.classroom_id = classrooms.id
      AND e.student_id = auth.uid()
    )
  );

CREATE POLICY IF NOT EXISTS "anyone_lookup_by_session_code" ON public.classrooms
  FOR SELECT USING (is_active = TRUE);

-- RLS Policies for enrollments
CREATE POLICY IF NOT EXISTS "enrollments_select_own_or_teacher" ON public.enrollments
  FOR SELECT USING (
    student_id = auth.uid() OR
    EXISTS (
      SELECT 1 FROM public.classrooms c
      WHERE c.id = enrollments.classroom_id
      AND c.teacher_id = auth.uid()
    )
  );

CREATE POLICY IF NOT EXISTS "students_insert_own_enrollments" ON public.enrollments
  FOR INSERT WITH CHECK (student_id = auth.uid());

-- RLS Policies for quiz_results
CREATE POLICY IF NOT EXISTS "quiz_results_select_own_or_teacher" ON public.quiz_results
  FOR SELECT USING (
    student_id = auth.uid() OR
    EXISTS (
      SELECT 1 FROM public.classrooms c
      JOIN public.enrollments e ON e.classroom_id = c.id
      WHERE c.teacher_id = auth.uid()
      AND e.student_id = quiz_results.student_id
    )
  );

CREATE POLICY IF NOT EXISTS "students_insert_own_quiz_results" ON public.quiz_results
  FOR INSERT WITH CHECK (student_id = auth.uid());

CREATE POLICY IF NOT EXISTS "students_update_own_quiz_results" ON public.quiz_results
  FOR UPDATE USING (student_id = auth.uid());

-- Create indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role);
CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles(email);
CREATE INDEX IF NOT EXISTS idx_classrooms_teacher_id ON public.classrooms(teacher_id);
CREATE INDEX IF NOT EXISTS idx_classrooms_session_code ON public.classrooms(session_code);
CREATE INDEX IF NOT EXISTS idx_enrollments_student_id ON public.enrollments(student_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_classroom_id ON public.enrollments(classroom_id);
CREATE INDEX IF NOT EXISTS idx_quiz_results_student_id ON public.quiz_results(student_id);
CREATE INDEX IF NOT EXISTS idx_quiz_results_lesson_slug ON public.quiz_results(lesson_slug);

-- Create function to generate unique session codes
CREATE OR REPLACE FUNCTION generate_session_code()
RETURNS TEXT AS $$
DECLARE
  code TEXT;
  code_exists BOOLEAN;
BEGIN
  LOOP
    code := UPPER(SUBSTRING(MD5(RANDOM()::TEXT), 1, 6));
    SELECT EXISTS(SELECT 1 FROM public.classrooms WHERE session_code = code) INTO code_exists;
    IF NOT code_exists THEN
      RETURN code;
    END IF;
  END LOOP;
END;
$$ LANGUAGE plpgsql;

-- Function to enroll student by session code
CREATE OR REPLACE FUNCTION enroll_student_by_code(p_session_code TEXT)
RETURNS UUID AS $$
DECLARE
  v_classroom_id UUID;
  v_enrollment_id UUID;
BEGIN
  -- Get classroom by session code
  SELECT id INTO v_classroom_id
  FROM public.classrooms
  WHERE session_code = p_session_code AND is_active = TRUE;
  
  IF v_classroom_id IS NULL THEN
    RAISE EXCEPTION 'Invalid session code';
  END IF;
  
  -- Create enrollment
  INSERT INTO public.enrollments (student_id, classroom_id)
  VALUES (auth.uid(), v_classroom_id)
  ON CONFLICT DO NOTHING
  RETURNING id INTO v_enrollment_id;
  
  RETURN v_enrollment_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to auto-create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, first_name, last_name, role)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data ->> 'first_name', NULL),
    COALESCE(new.raw_user_meta_data ->> 'last_name', NULL),
    COALESCE(new.raw_user_meta_data ->> 'role', 'student')
  )
  ON CONFLICT (id) DO NOTHING;
  
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();
