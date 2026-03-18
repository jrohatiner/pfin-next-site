#!/usr/bin/env python3
"""
Batch convert markdown files to TSX React components.
This script reads all .md files from content/lessons and content/videos
and generates corresponding .tsx component files.
"""

import os
import re
from pathlib import Path

def extract_title(content: str) -> str:
    """Extract title from markdown content (first ## heading)."""
    match = re.search(r'^##\s+(.+)$', content, re.MULTILINE)
    return match.group(1).strip() if match else "Untitled"

def slugify(filename: str) -> str:
    """Convert filename to slug."""
    # Remove leading numbers and .md extension
    slug = re.sub(r'^\d+-', '', filename)
    slug = re.sub(r'\.md$', '', slug)
    slug = slug.lower()
    slug = re.sub(r'[^a-z0-9]+', '-', slug)
    slug = re.sub(r'(^-|-$)', '', slug)
    return slug

def escape_jsx_string(s: str) -> str:
    """Escape string for use in JSX."""
    s = s.replace('\\', '\\\\')
    s = s.replace('{', '{{')
    s = s.replace('}', '}}')
    s = s.replace('`', '\\`')
    return s

def extract_quiz_questions(content: str):
    """Extract quiz questions from markdown content."""
    quiz_pattern = r'\*\*([^*]+\?)\*\*\s*\n((?:\|[^|]*\|[^|]*\|\n)*)'
    matches = re.findall(quiz_pattern, content)
    
    questions = []
    for question_text, options_text in matches:
        options = []
        for line in options_text.strip().split('\n'):
            if line.strip() and not re.match(r'^\|[\s:-]+\|[\s:-]+\|', line):
                cols = [c.strip() for c in line.split('|') if c.strip()]
                if len(cols) >= 2 and cols[0] == '':
                    options.append(cols[1])
                elif len(cols) == 1:
                    options.append(cols[0])
        
        if options:
            questions.append({
                'question': question_text.strip(),
                'options': options,
                'correctAnswer': 0  # Default to first option
            })
    
    return questions

def generate_component(md_file: str, component_type: str) -> str:
    """Generate a TSX component from a markdown file."""
    
    with open(md_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    title = extract_title(content)
    slug = slugify(os.path.basename(md_file))
    questions = extract_quiz_questions(content)
    
    # Remove quiz section from content
    content_without_quiz = re.sub(r'## Pop Quiz.*', '', content, flags=re.DOTALL).strip()
    
    # Extract main sections
    sections = []
    for match in re.finditer(r'^### (.+)$\n((?:[^\n]|\n(?!^###))*)', content_without_quiz, re.MULTILINE):
        section_title = match.group(1).strip()
        section_content = match.group(2).strip()
        sections.append((section_title, section_content))
    
    # Generate JSX for content
    content_jsx_lines = []
    for section_title, section_content in sections:
        content_jsx_lines.append(f'        <h2 className="text-2xl font-bold mt-6 mb-3">{escape_jsx_string(section_title)}</h2>')
        
        # Split content into paragraphs
        for para in section_content.split('\n\n'):
            para = para.strip()
            if para:
                escaped = escape_jsx_string(para)
                content_jsx_lines.append(f'        <p className="mb-4 leading-relaxed">{escaped}</p>')
    
    # Generate quiz section
    quiz_jsx = ""
    if questions:
        quiz_jsx = f"""
      <div className="mt-8">
        <Quiz 
          title="Pop Quiz" 
          questions={{{repr(questions)}}} 
          contentSlug="{slug}"
        />
      </div>"""
    
    component_code = f'''import {{ Quiz }} from "@/components/content/quiz";

export default function {title.replace(' ', '').replace('-', '')}Component() {{
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold mb-4">{escape_jsx_string(title)}</h1>
{chr(10).join(content_jsx_lines)}
{quiz_jsx}
    </div>
  );
}}
'''
    
    return component_code

def convert_all_files():
    """Convert all markdown files to TSX components."""
    
    base_dir = Path('/vercel/share/v0-project')
    content_dirs = [
        (base_dir / 'content' / 'lessons', base_dir / 'components' / 'lessons', 'lessons'),
        (base_dir / 'content' / 'videos', base_dir / 'components' / 'videos', 'videos'),
    ]
    
    components_created = {'lessons': [], 'videos': []}
    
    for content_dir, component_dir, comp_type in content_dirs:
        if not content_dir.exists():
            print(f"Content directory not found: {content_dir}")
            continue
        
        component_dir.mkdir(parents=True, exist_ok=True)
        md_files = sorted(content_dir.glob('*.md'))
        
        print(f"\nProcessing {comp_type}...")
        print(f"Found {len(md_files)} markdown files")
        
        for idx, md_file in enumerate(md_files, 1):
            try:
                filename = md_file.name
                slug = slugify(filename)
                component_filename = f"{slug}.tsx"
                component_path = component_dir / component_filename
                
                # Skip if already exists (for manually converted files)
                if component_path.exists():
                    print(f"  [{idx}/{len(md_files)}] ⏭️  {component_filename} (already exists)")
                    components_created[comp_type].append((slug, filename))
                    continue
                
                # Generate and write component
                component_code = generate_component(str(md_file), comp_type)
                with open(component_path, 'w', encoding='utf-8') as f:
                    f.write(component_code)
                
                print(f"  [{idx}/{len(md_files)}] ✅ {component_filename}")
                components_created[comp_type].append((slug, filename))
                
            except Exception as e:
                print(f"  [{idx}/{len(md_files)}] ❌ {filename}: {str(e)[:50]}")
    
    # Print summary
    print(f"\n{'='*60}")
    print(f"Conversion Summary:")
    print(f"Lessons: {len(components_created['lessons'])} components")
    print(f"Videos: {len(components_created['videos'])} components")
    print(f"Total: {len(components_created['lessons']) + len(components_created['videos'])} components")
    print(f"{'='*60}")

if __name__ == '__main__':
    convert_all_files()
