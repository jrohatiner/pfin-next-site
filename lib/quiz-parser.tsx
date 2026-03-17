import { PopQuiz } from '@/components/pop-quiz';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

// Parse Pop Quiz markdown format into structured data
export function parsePopQuiz(markdown: string): { title: string; questions: QuizQuestion[] } | null {
  const quizMatch = markdown.match(/^###\s+Pop Quiz([\s\S]*?)(?=\n###|$)/m);
  if (!quizMatch) return null;

  const quizContent = quizMatch[1];
  const title = 'Pop Quiz';
  const questions: QuizQuestion[] = [];

  // Split by question markers (numbered questions like "1.", "2.", etc.)
  const questionBlocks = quizContent.split(/\n\d+\.\s+/).slice(1);

  for (const block of questionBlocks) {
    const lines = block.trim().split('\n');
    const question = lines[0];

    // Extract options and find correct answer
    const options: string[] = [];
    let correctAnswer = 0;
    let optionIndex = 0;

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      // Match options like "A) option" or "- option" or just "option"
      const optionMatch = line.match(/^[A-Za-z\-\*]\)\s*(.+?)(\*\*)?$/) || 
                          line.match(/^[\-\*]\s+(.+?)(\*\*)?$/) ||
                          line.match(/^(.+?)(\*\*)?$/);

      if (optionMatch && optionMatch[1]) {
        const optionText = optionMatch[1].replace(/\*\*/g, '').trim();
        if (optionText) {
          options.push(optionText);
          
          // Check if this is marked as correct (with ** or other marker)
          if (line.includes('**') || line.includes('✓')) {
            correctAnswer = optionIndex;
          }
          optionIndex++;
        }
      }

      // Stop at next section
      if (line.startsWith('###') || line.startsWith('##')) break;
    }

    if (question && options.length > 0) {
      questions.push({ question, options, correctAnswer });
    }
  }

  return questions.length > 0 ? { title, questions } : null;
}

export function PopQuizComponent({ markdown, contentSlug }: { markdown: string; contentSlug: string }) {
  const quiz = parsePopQuiz(markdown);
  if (!quiz) return null;

  return <PopQuiz title={quiz.title} questions={quiz.questions} contentSlug={contentSlug} />;
}
