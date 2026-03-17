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
    const rowPattern = /^\|[^|]*\|\s*([^|]+?)\s*\|/gm;
    let rowMatch;
    while ((rowMatch = rowPattern.exec(section)) !== null) {
      const text = rowMatch[1].trim();
      if (text && !/^-+$/.test(text)) {
        options.push(text);
      }
    }

    if (options.length > 0) {
      questions.push({ question, options, correctAnswer: options.length - 1 });
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
