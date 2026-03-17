export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

// Parse Pop Quiz markdown format into structured data
export function parsePopQuiz(markdown: string): { title: string; questions: QuizQuestion[] } | null {
  // Find the Pop Quiz section (can be > ## Pop Quiz or ## Pop Quiz)
  const quizMatch = markdown.match(/(?:>?\s*)?##?\s*Pop Quiz([\s\S]*?)(?=\n---|\n##[^#]|$)/i);
  if (!quizMatch) return null;

  const quizContent = quizMatch[1];
  const title = "Pop Quiz";
  const questions: QuizQuestion[] = [];

  // Split by bold question markers (**Question text?**)
  const questionPattern = /\*\*([^*]+\??)\*\*/g;
  let match;
  const questionMatches: { question: string; index: number }[] = [];

  while ((match = questionPattern.exec(quizContent)) !== null) {
    questionMatches.push({ question: match[1].trim(), index: match.index });
  }

  for (let i = 0; i < questionMatches.length; i++) {
    const { question, index } = questionMatches[i];
    const nextIndex = questionMatches[i + 1]?.index || quizContent.length;
    const sectionContent = quizContent.slice(index, nextIndex);

    // Extract options from the table rows
    // Table format: |  | Option text |
    const tableRowPattern = /\|\s*\|\s*([^|\n]+)\s*\|/g;
    const options: string[] = [];
    let rowMatch;

    while ((rowMatch = tableRowPattern.exec(sectionContent)) !== null) {
      const optionText = rowMatch[1].trim();
      // Skip header separator rows (like | --- | --- |)
      if (optionText && !optionText.match(/^-+$/) && optionText.length > 1) {
        options.push(optionText);
      }
    }

    if (question && options.length > 0) {
      // Default correctAnswer to last option (usually "All of the above" pattern)
      questions.push({ question, options, correctAnswer: options.length - 1 });
    }
  }

  return questions.length > 0 ? { title, questions } : null;
}
