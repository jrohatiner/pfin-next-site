import type { MDXComponents } from "mdx/types";

// Custom components to style MDX content
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Style headings
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-4 text-foreground">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mb-3 mt-6 text-foreground">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-medium mb-2 mt-4 text-foreground">{children}</h3>
    ),
    // Style paragraphs
    p: ({ children }) => (
      <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>
    ),
    // Style lists
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="text-muted-foreground">{children}</li>
    ),
    // Style links
    a: ({ href, children }) => (
      <a href={href} className="text-primary hover:underline">
        {children}
      </a>
    ),
    // Style code
    code: ({ children }) => (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
        {children}
      </pre>
    ),
    // Style blockquotes
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-4">
        {children}
      </blockquote>
    ),
    // Style tables
    table: ({ children }) => (
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border-collapse border border-border">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-border bg-muted px-4 py-2 text-left font-semibold">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-border px-4 py-2">{children}</td>
    ),
    // Style horizontal rules
    hr: () => <hr className="my-8 border-border" />,
    // Allow custom components to be passed in
    ...components,
  };
}
