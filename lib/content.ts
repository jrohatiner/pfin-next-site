import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");
const lessonsDir = path.join(contentDir, "lessons");
const videosDir = path.join(contentDir, "videos");

export interface ContentItem {
  slug: string;
  title: string;
  content: string; // Raw content (markdown or HTML)
  filename: string;
  isHtml: boolean; // True if content is HTML, false if markdown
}

function slugify(filename: string): string {
  return filename
    .replace(/^\d+-/, "") // Remove leading numbers and dash
    .replace(/\.(md|html)$/, "") // Remove .md or .html extension
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with dashes
    .replace(/(^-|-$)/g, ""); // Remove leading/trailing dashes
}

function loadAllFromDir(dir: string): ContentItem[] {
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md") || f.endsWith(".html"));
  const items: ContentItem[] = [];
  const slugsSeen = new Set<string>();

  for (const filename of files) {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const isHtml = filename.endsWith(".html");
    const slug = slugify(filename);

    // If we've already seen this slug, prefer HTML over MD
    if (slugsSeen.has(slug)) {
      if (isHtml) {
        // Replace the existing MD entry with HTML
        const existingIndex = items.findIndex((i) => i.slug === slug);
        if (existingIndex !== -1) {
          items.splice(existingIndex, 1);
        }
      } else {
        // Skip this MD file since we already have an entry (possibly HTML)
        continue;
      }
    }
    slugsSeen.add(slug);

    let content: string;
    let title: string;

    if (isHtml) {
      content = fileContent;
      // Extract title from <h1>, <h2>, or <title> tag
      const titleMatch = fileContent.match(/<h[12][^>]*>([^<]+)<\/h[12]>|<title>([^<]+)<\/title>/i);
      title = titleMatch ? (titleMatch[1] || titleMatch[2]).trim() : filename.replace(/\.html$/, "");
    } else {
      const { content: mdContent } = matter(fileContent);
      content = mdContent;
      // Extract title from first ## heading
      const titleMatch = mdContent.match(/^##\s+(.+)$/m);
      title = titleMatch ? titleMatch[1].trim() : filename.replace(/\.md$/, "");
    }

    items.push({ slug, title, content, filename, isHtml });
  }

  // Sort alphabetically by title
  items.sort((a, b) => a.title.localeCompare(b.title));

  return items;
}

export function getAllLessons(): ContentItem[] {
  const items = loadAllFromDir(lessonsDir);
  // Remove duplicates by keeping only the first occurrence of each title
  const seenTitles = new Set<string>();
  return items.filter((item) => {
    if (seenTitles.has(item.title)) {
      return false;
    }
    seenTitles.add(item.title);
    return true;
  });
}

export function getAllVideos(): ContentItem[] {
  const items = loadAllFromDir(videosDir);
  // Remove duplicates by keeping only the first occurrence of each title
  const seenTitles = new Set<string>();
  return items.filter((item) => {
    if (seenTitles.has(item.title)) {
      return false;
    }
    seenTitles.add(item.title);
    return true;
  });
}

export function getLessonBySlug(slug: string): ContentItem | null {
  const lessons = loadAllFromDir(lessonsDir);
  return lessons.find((l) => l.slug === slug) ?? null;
}

export function getVideoBySlug(slug: string): ContentItem | null {
  const videos = loadAllFromDir(videosDir);
  return videos.find((v) => v.slug === slug) ?? null;
}

export interface ContentNavInfo {
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
}

export function getLessonNavigation(slug: string): ContentNavInfo {
  const lessons = getAllLessons();
  const index = lessons.findIndex((l) => l.slug === slug);
  
  return {
    prev: index > 0 ? { slug: lessons[index - 1].slug, title: lessons[index - 1].title } : null,
    next: index < lessons.length - 1 ? { slug: lessons[index + 1].slug, title: lessons[index + 1].title } : null,
  };
}

export function getVideoNavigation(slug: string): ContentNavInfo {
  const videos = getAllVideos();
  const index = videos.findIndex((v) => v.slug === slug);
  
  return {
    prev: index > 0 ? { slug: videos[index - 1].slug, title: videos[index - 1].title } : null,
    next: index < videos.length - 1 ? { slug: videos[index + 1].slug, title: videos[index + 1].title } : null,
  };
}
