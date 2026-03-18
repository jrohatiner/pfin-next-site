-- Function to generate unique 6-character session codes
CREATE OR REPLACE FUNCTION public.generate_session_code()
RETURNS TEXT
LANGUAGE plpgsql
AS $$
DECLARE
  chars TEXT := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; -- Excluding confusing chars like 0, O, 1, I
  result TEXT := '';
  i INTEGER;
BEGIN
  FOR i IN 1..6 LOOP
    result := result || substr(chars, floor(random() * length(chars) + 1)::integer, 1);
  END LOOP;
  RETURN result;
END;
$$;

-- Function to create a classroom with auto-generated session code
CREATE OR REPLACE FUNCTION public.create_classroom(
  p_name TEXT,
  p_description TEXT DEFAULT NULL
)
RETURNS public.classrooms
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_code TEXT;
  new_classroom public.classrooms;
BEGIN
  -- Generate unique session code
  LOOP
    new_code := generate_session_code();
    EXIT WHEN NOT EXISTS (SELECT 1 FROM public.classrooms WHERE session_code = new_code);
  END LOOP;

  -- Insert new classroom
  INSERT INTO public.classrooms (teacher_id, name, session_code, description)
  VALUES (auth.uid(), p_name, new_code, p_description)
  RETURNING * INTO new_classroom;

  RETURN new_classroom;
END;
$$;

-- Function to enroll student in classroom by session code
CREATE OR REPLACE FUNCTION public.enroll_by_session_code(p_session_code TEXT)
RETURNS public.enrollments
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  classroom_record public.classrooms;
  new_enrollment public.enrollments;
BEGIN
  -- Find classroom by session code
  SELECT * INTO classroom_record
  FROM public.classrooms
  WHERE session_code = UPPER(p_session_code)
  AND is_active = TRUE;

  IF classroom_record IS NULL THEN
    RAISE EXCEPTION 'Invalid or inactive session code';
  END IF;

  -- Check if user is a student
  IF NOT EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'student') THEN
    RAISE EXCEPTION 'Only students can enroll in classrooms';
  END IF;

  -- Create enrollment
  INSERT INTO public.enrollments (student_id, classroom_id)
  VALUES (auth.uid(), classroom_record.id)
  ON CONFLICT (student_id, classroom_id) DO NOTHING
  RETURNING * INTO new_enrollment;

  RETURN new_enrollment;
END;
$$;
