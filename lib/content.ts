import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { ComponentType } from "react";

const contentDir = path.join(process.cwd(), "content");
const lessonsDir = path.join(contentDir, "lessons");
const videosDir = path.join(contentDir, "videos");

export interface ContentItem {
  slug: string;
  title: string;
  content: string;
  filename: string;
  isHtml: boolean;
  isTsx?: boolean;
  Component?: ComponentType;
}

// Registry of manually created TSX components - maps slug to component import
// Add new hand-converted components here for better performance
export const tsxComponentRegistry: Record<"lessons" | "videos", Record<string, { title: string; getComponent: () => Promise<{ default: ComponentType }> }>> = {
  lessons: {
    "credit-cards-terms-fees": {
      title: "Credit Cards: Terms and Fees",
      getComponent: () => import("@/components/lessons/credit-cards-terms-fees"),
    },
    "build-wealth-not-debt": {
      title: "A Strategy to Build Wealth, Not Debt",
      getComponent: () => import("@/components/lessons/build-wealth-not-debt"),
    },
  },
  videos: {
    "magic-of-compound-interest": {
      title: "The Magic of Compound Interest",
      getComponent: () => import("@/components/videos/magic-of-compound-interest"),
    },
    "what-is-money": {
      title: "What is Money?",
      getComponent: () => import("@/components/videos/what-is-money"),
    },
    "can-you-afford-buy-house": {
      title: "Can You Afford To Buy That House?",
      getComponent: () => import("@/components/videos/can-you-afford-buy-house"),
    },
  },
};

function slugify(filename: string): string {
  return filename
    .replace(/^\d+-/, "")
    .replace(/\.(md|html)$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
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

    if (slugsSeen.has(slug)) {
      if (isHtml) {
        const existingIndex = items.findIndex((i) => i.slug === slug);
        if (existingIndex !== -1) {
          items.splice(existingIndex, 1);
        }
      } else {
        continue;
      }
    }
    slugsSeen.add(slug);

    let content: string;
    let title: string;

    if (isHtml) {
      content = fileContent;
      const titleMatch = fileContent.match(/<h[12][^>]*>([^<]+)<\/h[12]>|<title>([^<]+)<\/title>/i);
      title = titleMatch ? (titleMatch[1] || titleMatch[2]).trim() : filename.replace(/\.html$/, "");
    } else {
      const { content: mdContent } = matter(fileContent);
      content = mdContent;
      const titleMatch = mdContent.match(/^##\s+(.+)$/m);
      title = titleMatch ? titleMatch[1].trim() : filename.replace(/\.md$/, "");
    }

    items.push({ slug, title, content, filename, isHtml });
  }

  items.sort((a, b) => {
    const fileA = a.filename.toLowerCase();
    const fileB = b.filename.toLowerCase();
    return fileA.localeCompare(fileB, undefined, { numeric: true });
  });

  return items;
}

export function getAllLessons(): ContentItem[] {
  const items = loadAllFromDir(lessonsDir);
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
