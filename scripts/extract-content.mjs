import fs from 'fs';
import path from 'path';

// Helper to create slug from title
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Helper to create component ID from title
function toComponentId(text) {
  return slugify(text);
}

// Extract title from markdown content (first h2 heading)
function extractTitle(content) {
  const match = content.match(/^##\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

// Extract YouTube ID if present
function extractYoutubeId(content) {
  const match = content.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : undefined;
}

// Process lessons
const lessonsDir = path.join(process.cwd(), 'content/lessons');
const lessonFiles = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.md'));

const seenLessonTitles = new Set();
const lessons = [];

for (const file of lessonFiles.sort()) {
  const content = fs.readFileSync(path.join(lessonsDir, file), 'utf-8');
  const title = extractTitle(content);
  
  if (title && !seenLessonTitles.has(title) && title !== 'Blank') {
    seenLessonTitles.add(title);
    lessons.push({
      id: toComponentId(title),
      slug: slugify(title),
      title: title,
    });
  }
}

// Process videos
const videosDir = path.join(process.cwd(), 'content/videos');
const videoFiles = fs.readdirSync(videosDir).filter(f => f.endsWith('.md'));

const seenVideoTitles = new Set();
const videos = [];

for (const file of videoFiles.sort()) {
  const content = fs.readFileSync(path.join(videosDir, file), 'utf-8');
  const title = extractTitle(content);
  
  if (title && !seenVideoTitles.has(title)) {
    seenVideoTitles.add(title);
    const youtubeId = extractYoutubeId(content);
    videos.push({
      id: toComponentId(title),
      slug: slugify(title),
      title: title,
      ...(youtubeId && { youtubeId }),
    });
  }
}

// Generate lessons.ts
const lessonsTs = `import type { LessonMeta } from "./types";

export const lessons: LessonMeta[] = ${JSON.stringify(lessons, null, 2).replace(/"([^"]+)":/g, '$1:')};
`;

// Generate videos.ts
const videosTs = `import type { VideoMeta } from "./types";

export const videos: VideoMeta[] = ${JSON.stringify(videos, null, 2).replace(/"([^"]+)":/g, '$1:')};
`;

fs.writeFileSync(path.join(process.cwd(), 'data/lessons.ts'), lessonsTs);
fs.writeFileSync(path.join(process.cwd(), 'data/videos.ts'), videosTs);

console.log(`Generated ${lessons.length} lessons and ${videos.length} videos`);
