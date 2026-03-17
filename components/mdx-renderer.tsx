import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/components/mdx-components";
import remarkGfm from "remark-gfm";
import { parsePopQuiz } from "@/lib/quiz-parser";
import { PopQuiz } from "@/components/pop-quiz";

interface MDXRendererProps {
  source: string;
  contentSlug?: string;
}

export function MDXRenderer({ source, contentSlug = "" }: MDXRendererProps) {
  const components = useMDXComponents({});
  
  // Check if content has Pop Quiz sections and parse them
  const hasQuiz = source.toLowerCase().includes("pop quiz");
  const quizData = hasQuiz ? parsePopQuiz(source) : null;
  
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
