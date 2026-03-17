import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/components/mdx-components";
import remarkGfm from "remark-gfm";
import { PopQuizComponent } from "@/lib/quiz-parser.tsx";

interface MDXRendererProps {
  source: string;
  contentSlug?: string;
}

export function MDXRenderer({ source, contentSlug = "" }: MDXRendererProps) {
  const components = useMDXComponents({});
  
  // Check if content has Pop Quiz sections
  const hasQuiz = source.includes("### Pop Quiz");
  
  return (
    <div className="prose prose-lg max-w-none">
      {hasQuiz && contentSlug && (
        <PopQuizComponent markdown={source} contentSlug={contentSlug} />
      )}
      <MDXRemote 
        source={source} 
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </div>
  );
}
