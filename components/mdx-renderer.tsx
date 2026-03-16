import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/components/mdx-components";

interface MDXRendererProps {
  source: string;
}

export function MDXRenderer({ source }: MDXRendererProps) {
  const components = useMDXComponents({});
  
  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
