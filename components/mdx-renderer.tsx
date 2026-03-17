import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/components/mdx-components";
import remarkGfm from "remark-gfm";
import { PopQuiz } from "@/components/pop-quiz";
import type { QuizQuestion } from "@/components/pop-quiz";

interface MDXRendererProps {
  source: string;
  contentSlug?: string;
}

function parsePopQuiz(markdown: string): { title: string; questions: QuizQuestion[] } | null {
  // Match "## Pop Quiz" or "> ## Pop Quiz" blockquote variants
  const idx = markdown.search(/(?:^>?\s*)?##\s*Pop Quiz/im);
  if (idx === -1) return null;

  const quizContent = markdown.slice(idx);
  const questions: QuizQuestion[] = [];

  // Find all bold questions: **Question text?**
  const questionPattern = /\*\*([^*]+)\*\*/g;
  let match;
  const questionMatches: { question: string; index: number }[] = [];
  while ((match = questionPattern.exec(quizContent)) !== null) {
    questionMatches.push({ question: match[1].trim(), index: match.index });
  }

  for (let i = 0; i < questionMatches.length; i++) {
    const { question, index } = questionMatches[i];
    const nextIndex = questionMatches[i + 1]?.index ?? quizContent.length;
    const section = quizContent.slice(index, nextIndex);

    // Extract options from table rows: |  | Option text |
    const options: string[] = [];
    // Match table rows with content in the second column
    const lines = section.split('\n');
    for (const line of lines) {
      // Skip header separator rows like | --- | --- |
      if (/^\|[\s-]+\|[\s-]+\|/.test(line)) continue;
      // Skip empty header rows like |  |  |
      if (/^\|\s*\|\s*\|$/.test(line)) continue;
      
      // Match rows with content: |  | Option text |
      const rowMatch = line.match(/^\|\s*\|\s*([^|]+?)\s*\|$/);
      if (rowMatch) {
        const text = rowMatch[1].trim();
        if (text && text.length > 0) {
          options.push(text);
        }
      }
    }

    if (options.length > 0) {
      // For now, we don't know the correct answer from markdown, so default to 0
      // The quiz will work as a practice quiz where users can see their selections
      questions.push({ question, options, correctAnswer: 0 });
    }
  }

  return questions.length > 0 ? { title: "Pop Quiz", questions } : null;
}

export function MDXRenderer({ source, contentSlug = "" }: MDXRendererProps) {
  const components = useMDXComponents({});
  const quizData = parsePopQuiz(source);

  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
      {quizData && contentSlug && (
        <PopQuiz
          title={quizData.title}
          questions={quizData.questions}
          contentSlug={contentSlug}
        />
      )}
    </div>
  );
}
