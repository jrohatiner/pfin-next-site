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

    // Extract options from table rows. The markdown table format is:
    //   |  | Option text |
    //   | --- | --- |
    // Column 1 is always empty (just whitespace), column 2 has the option text.
    const options: string[] = [];
    const lines = section.split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed.startsWith('|')) continue;
      // Skip separator rows like | --- | --- |
      if (/^\|[\s:-]+\|[\s:-]+\|?/.test(trimmed)) continue;
      // Split on '|' and filter empty segments from leading/trailing pipes
      const cols = trimmed.split('|').map(c => c.trim()).filter((_, i, arr) => i > 0 && i < arr.length - 1);
      // We expect exactly 2 columns: first empty, second has option text
      if (cols.length === 2 && cols[0] === '' && cols[1].length > 0) {
        options.push(cols[1]);
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

// Strip the "## Pop Quiz" section and everything after it from the markdown
// so it is never rendered as raw prose by MDXRemote.
function stripPopQuiz(markdown: string): string {
  const idx = markdown.search(/(?:^|\n)(?:>?\s*)?##\s*Pop Quiz/im);
  if (idx === -1) return markdown;
  return markdown.slice(0, idx).trimEnd();
}

export function MDXRenderer({ source, contentSlug = "" }: MDXRendererProps) {
  const components = useMDXComponents({});
  const quizData = parsePopQuiz(source);
  const cleanSource = stripPopQuiz(source);

  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote
        source={cleanSource}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
      {quizData && (
        <PopQuiz
          title={quizData.title}
          questions={quizData.questions}
          contentSlug={contentSlug}
        />
      )}
    </div>
  );
}
