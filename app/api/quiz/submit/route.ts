import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { title, contentSlug, answers, questions } = await request.json();

    // Calculate score
    let score = 0;
    answers.forEach((answer: number, index: number) => {
      if (answer === questions[index].correctAnswer) {
        score++;
      }
    });

    // Get or create session (anonymous for now)
    const sessionId = crypto.randomUUID();

    // Save to Supabase
    const supabase = await createClient();
    
    const { error } = await supabase.from('quiz_submissions').insert({
      quiz_title: title,
      content_slug: contentSlug,
      answers: answers,
      score: score,
      total_questions: questions.length,
      session_id: sessionId,
    });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save quiz submission' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      score,
      total: questions.length,
      percentage: Math.round((score / questions.length) * 100),
    });
  } catch (error) {
    console.error('Quiz API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
