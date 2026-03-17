import { promises as fs } from "fs";
import path from "path";

/**
 * Reads markdown file from the content directory
 * Returns the raw content without parsing
 */
export async function readContentFile(type: "lessons" | "videos", id: string): Promise<string | null> {
  try {
    const contentDir = path.join(process.cwd(), "content", type);
    
    // Find the file that matches this ID
    // Files are named like: 0001-Title-Here.md
    const files = await fs.readdir(contentDir);
    const file = files.find((f) => f.startsWith(id.padStart(4, "0")));
    
    if (!file) return null;
    
    const filePath = path.join(contentDir, file);
    const content = await fs.readFile(filePath, "utf-8");
    return content;
  } catch (error) {
    console.error(`Failed to read content file for ${type}/${id}:`, error);
    return null;
  }
}

/**
 * Simple markdown to HTML converter
 * Handles basic markdown syntax without external libraries
 */
export function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.*?)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.*?)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.*?)$/gm, "<h1>$1</h1>");

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/__(.+?)__/g, "<strong>$1</strong>");

  // Italic
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");
  html = html.replace(/_(.+?)_/g, "<em>$1</em>");

  // Code blocks
  html = html.replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>");

  // Inline code
  html = html.replace(/`(.*?)`/g, "<code>$1</code>");

  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  // Lists
  html = html.replace(/^\* (.*?)$/gm, "<li>$1</li>");
  html = html.replace(/(<li>[\s\S]*<\/li>)/, "<ul>$1</ul>");

  // Paragraphs
  html = html.replace(/\n\n/g, "</p><p>");
  html = `<p>${html}</p>`;

  return html;
}
