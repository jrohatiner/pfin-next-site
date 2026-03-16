import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDir = path.join(process.cwd(), "content");
const lessonsDir = path.join(contentDir, "lessons");
const videosDir = path.join(contentDir, "videos");

export interface ContentItem {
  slug: string;
  title: string;
  contentHtml: string;
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

async function processMarkdown(content: string): Promise<string> {
  const result = await remark().use(html).process(content);
  return result.toString();
}

async function loadAllFromDir(dir: string): Promise<ContentItem[]> {
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

    const contentHtml = await processMarkdown(content);
    const slug = slugify(filename);

    items.push({ slug, title, contentHtml, filename });
  }

  // Sort alphabetically by title
  items.sort((a, b) => a.title.localeCompare(b.title));

  return items;
}

export async function getAllLessons(): Promise<ContentItem[]> {
  const items = await loadAllFromDir(lessonsDir);
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

export async function getAllVideos(): Promise<ContentItem[]> {
  const items = await loadAllFromDir(videosDir);
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

export async function getLessonBySlug(slug: string): Promise<ContentItem | null> {
  const lessons = await loadAllFromDir(lessonsDir);
  return lessons.find((l) => l.slug === slug) ?? null;
}

export async function getVideoBySlug(slug: string): Promise<ContentItem | null> {
  const videos = await loadAllFromDir(videosDir);
  return videos.find((v) => v.slug === slug) ?? null;
}
