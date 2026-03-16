import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");
const lessonsDir = path.join(contentDir, "lessons");
const videosDir = path.join(contentDir, "videos");

export interface ContentItem {
  slug: string;
  title: string;
  content: string; // Raw markdown content for MDX
  filename: string;
}

function slugify(filename: string): string {
  return filename
    .replace(/^\d+-/, "") // Remove leading numbers and dash
    .replace(/\.md$/, "") // Remove .md extension
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with dashes
    .replace(/(^-|-$)/g, ""); // Remove leading/trailing dashes
}

function loadAllFromDir(dir: string): ContentItem[] {
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  const items: ContentItem[] = [];

  for (const filename of files) {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content } = matter(fileContent);

    // Extract title from first ## heading
    const titleMatch = content.match(/^##\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1].trim() : filename.replace(/\.md$/, "");

    const slug = slugify(filename);

    items.push({ slug, title, content, filename });
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
