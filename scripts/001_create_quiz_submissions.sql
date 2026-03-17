-- Create quiz_submissions table to store user quiz answers
CREATE TABLE IF NOT EXISTS public.quiz_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_slug TEXT NOT NULL,
  quiz_question TEXT NOT NULL,
  selected_answer TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL,
  session_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster lookups by session and page
CREATE INDEX IF NOT EXISTS idx_quiz_submissions_session ON public.quiz_submissions(session_id);
CREATE INDEX IF NOT EXISTS idx_quiz_submissions_page ON public.quiz_submissions(page_slug);

-- Enable Row Level Security
ALTER TABLE public.quiz_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert quiz submissions (anonymous submissions allowed)
CREATE POLICY "Allow anonymous inserts" ON public.quiz_submissions
  FOR INSERT
  WITH CHECK (true);

-- Allow anyone to read quiz submissions by session_id
CREATE POLICY "Allow read by session" ON public.quiz_submissions
  FOR SELECT
  USING (true);
