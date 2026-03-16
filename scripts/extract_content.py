import os
import re
from pathlib import Path

def slugify(text):
    """Convert text to a slug"""
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[-\s]+', '-', text)
    return text.strip('-')

def extract_first_heading(filepath):
    """Extract the first ## heading from a markdown file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            for line in f:
                if line.startswith('## '):
                    return line[3:].strip()
    except:
        pass
    return None

# Process lessons
lessons_dir = Path('/vercel/share/v0-project/content/lessons')
lessons_data = []

for md_file in sorted(lessons_dir.glob('*.md')):
    title = extract_first_heading(md_file)
    if title:
        slug = slugify(title)
        filename = md_file.stem
        # Skip if we already have this slug (handle duplicates)
        if not any(l['slug'] == slug for l in lessons_data):
            lessons_data.append({
                'id': filename,
                'title': title,
                'slug': slug,
            })
            print(f"Lesson: {title}")

# Process videos
videos_dir = Path('/vercel/share/v0-project/content/videos')
videos_data = []

for md_file in sorted(videos_dir.glob('*.md')):
    title = extract_first_heading(md_file)
    if title:
        slug = slugify(title)
        filename = md_file.stem
        # Skip if we already have this slug (handle duplicates)
        if not any(v['slug'] == slug for v in videos_data):
            videos_data.append({
                'id': filename,
                'title': title,
                'slug': slug,
            })
            print(f"Video: {title}")

# Write lessons.ts
lessons_content = 'import { ContentItem } from "./types";\n\nexport const lessons: ContentItem[] = [\n'
for lesson in lessons_data:
    title_escaped = lesson['title'].replace('"', '\\"')
    lessons_content += f'  {{\n    id: "{lesson["id"]}",\n    title: "{title_escaped}",\n    slug: "{lesson["slug"]}",\n    type: "lesson",\n  }},\n'
lessons_content += '];\n'

with open('/vercel/share/v0-project/data/lessons.ts', 'w') as f:
    f.write(lessons_content)
print(f"\nGenerated lessons.ts with {len(lessons_data)} lessons")

# Write videos.ts
videos_content = 'import { ContentItem } from "./types";\n\nexport const videos: ContentItem[] = [\n'
for video in videos_data:
    title_escaped = video['title'].replace('"', '\\"')
    videos_content += f'  {{\n    id: "{video["id"]}",\n    title: "{title_escaped}",\n    slug: "{video["slug"]}",\n    type: "video",\n  }},\n'
videos_content += '];\n'

with open('/vercel/share/v0-project/data/videos.ts', 'w') as f:
    f.write(videos_content)
print(f"Generated videos.ts with {len(videos_data)} videos")
