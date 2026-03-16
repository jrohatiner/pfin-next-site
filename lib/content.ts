import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type ContentItem = {
  slug: string;
  title: string;
  contentHtml: string;
  filename: string;
};

const lessonsDir = path.join(process.cwd(), "content", "lessons");
const videosDir = path.join(process.cwd(), "content", "videos");

function cleanTitleFromFilename(filename: string) {
  return filename
    .replace(/\.md$/i, "")
    .replace(/^\d+-/, "")
    .trim();
}

function slugify(input: string) {
  return input
    .replace(/\.md$/i, "")
    .replace(/^\d+-/, "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

async function parseMarkdownFile(filePath: string): Promise<ContentItem> {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);

  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(content);

  const contentHtml = processedContent.toString();
  const filename = path.basename(filePath);

  const title =
    typeof data.title === "string" && data.title.trim()
      ? data.title.trim()
      : cleanTitleFromFilename(filename);

  return {
    slug: slugify(filename),
    title,
    contentHtml,
    filename,
  };
}

async function loadAllFromDir(dir: string): Promise<ContentItem[]> {
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const items = await Promise.all(
    files.map((file) => parseMarkdownFile(path.join(dir, file)))
  );

  return items.sort((a, b) => a.title.localeCompare(b.title));
}

export async function getAllLessons(): Promise<ContentItem[]> {
  return loadAllFromDir(lessonsDir);
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
  const items = await getAllLessons();
  return items.find((item) => item.slug === slug) ?? null;
}

export async function getVideoBySlug(slug: string): Promise<ContentItem | null> {
  const items = await getAllVideos();
  return items.find((item) => item.slug === slug) ?? null;
}
