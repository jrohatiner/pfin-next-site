#!/usr/bin/env python3
import os
import re
from pathlib import Path

def extract_title_from_md(filepath):
    """Extract the title (first h2 heading) from a markdown file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            # Look for the first ## heading
            match = re.search(r'^## (.+?)$', content, re.MULTILINE)
            if match:
                return match.group(1).strip()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
    return None

def slugify(text):
    """Convert text to a slug"""
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[-\s]+', '-', text)
    return text.strip('-')

def main():
    project_root = Path(__file__).parent.parent
    
    # Extract lessons
    lessons_dir = project_root / 'content' / 'lessons'
    lessons = []
    
    if lessons_dir.exists():
        for md_file in sorted(lessons_dir.glob('*.md')):
            title = extract_title_from_md(md_file)
            if title:
                slug = slugify(title)
                # Get the filename without extension for the component name
                filename = md_file.stem
                lessons.append({
                    'id': filename,
                    'title': title,
                    'slug': slug,
                    'filename': filename
                })
                print(f"Lesson: {title} -> {slug}")
    
    # Remove duplicates by keeping first occurrence
    seen_slugs = set()
    unique_lessons = []
    for lesson in lessons:
        if lesson['slug'] not in seen_slugs:
            unique_lessons.append(lesson)
            seen_slugs.add(lesson['slug'])
    
    lessons = unique_lessons
    
    # Extract videos
    videos_dir = project_root / 'content' / 'videos'
    videos = []
    
    if videos_dir.exists():
        for md_file in sorted(videos_dir.glob('*.md')):
            title = extract_title_from_md(md_file)
            if title:
                slug = slugify(title)
                filename = md_file.stem
                videos.append({
                    'id': filename,
                    'title': title,
                    'slug': slug,
                    'filename': filename
                })
                print(f"Video: {title} -> {slug}")
    
    # Remove duplicates by keeping first occurrence
    seen_slugs = set()
    unique_videos = []
    for video in videos:
        if video['slug'] not in seen_slugs:
            unique_videos.append(video)
            seen_slugs.add(video['slug'])
    
    videos = unique_videos
    
    # Generate lessons.ts
    lessons_ts = 'import { ContentItem } from "./types";\n\n'
    lessons_ts += 'export const lessons: ContentItem[] = [\n'
    for lesson in lessons:
        lessons_ts += f'  {{\n'
        lessons_ts += f'    id: "{lesson["id"]}",\n'
        lessons_ts += f'    title: "{lesson["title"].replace(chr(34), chr(92) + chr(34))}",\n'
        lessons_ts += f'    slug: "{lesson["slug"]}",\n'
        lessons_ts += f'    type: "lesson",\n'
        lessons_ts += f'  }},\n'
    lessons_ts += '];\n'
    
    lessons_file = project_root / 'data' / 'lessons.ts'
    lessons_file.write_text(lessons_ts)
    print(f"\nGenerated {lessons_file} with {len(lessons)} unique lessons")
    
    # Generate videos.ts
    videos_ts = 'import { ContentItem } from "./types";\n\n'
    videos_ts += 'export const videos: ContentItem[] = [\n'
    for video in videos:
        videos_ts += f'  {{\n'
        videos_ts += f'    id: "{video["id"]}",\n'
        videos_ts += f'    title: "{video["title"].replace(chr(34), chr(92) + chr(34))}",\n'
        videos_ts += f'    slug: "{video["slug"]}",\n'
        videos_ts += f'    type: "video",\n'
        videos_ts += f'  }},\n'
    videos_ts += '];\n'
    
    videos_file = project_root / 'data' / 'videos.ts'
    videos_file.write_text(videos_ts)
    print(f"Generated {videos_file} with {len(videos)} unique videos")

if __name__ == '__main__':
    main()
