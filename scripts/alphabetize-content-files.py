#!/usr/bin/env python3
"""
Rename content files to alphabetize by title while keeping numeric prefixes.
The numeric prefix is reassigned based on alphabetical order of titles.
"""

import os
import sys

def alphabetize_directory(dir_path):
    """Alphabetize files in a directory by title, keeping numeric prefixes."""
    
    print(f"\n📂 Processing: {dir_path}")
    
    if not os.path.exists(dir_path):
        print(f"⚠️  Directory not found: {dir_path}")
        return
    
    # Get all markdown files
    files = [f for f in os.listdir(dir_path) if f.endswith('.md')]
    print(f"   Found {len(files)} files")
    
    if not files:
        print("   No files to process")
        return
    
    # Parse files: extract numeric prefix and title
    file_data = []
    for filename in files:
        # Extract prefix (e.g., "0001") and title (everything after the dash)
        parts = filename.split('-', 1)
        if len(parts) == 2:
            prefix, rest = parts
            title = rest.replace('.md', '')
            # Only process if prefix is numeric
            if prefix.isdigit():
                file_data.append({
                    'old_name': filename,
                    'prefix': prefix,
                    'title': title,
                    'full_title': f"{prefix}-{title}.md"
                })
            else:
                # File without numeric prefix, keep as is
                file_data.append({
                    'old_name': filename,
                    'prefix': None,
                    'title': filename.replace('.md', ''),
                    'full_title': filename
                })
        else:
            # No dash in filename
            file_data.append({
                'old_name': filename,
                'prefix': None,
                'title': filename.replace('.md', ''),
                'full_title': filename
            })
    
    # Sort by title (case-insensitive)
    file_data.sort(key=lambda x: x['title'].lower())
    
    # Assign new numeric prefixes
    for idx, file_info in enumerate(file_data, 1):
        new_prefix = str(idx).zfill(4)  # Pad to 4 digits
        file_info['new_prefix'] = new_prefix
        file_info['new_name'] = f"{new_prefix}-{file_info['title']}.md"
    
    # Perform renames
    renamed_count = 0
    for file_info in file_data:
        if file_info['old_name'] == file_info['new_name']:
            print(f"  ⏭️  {file_info['old_name']} (already in order)")
            continue
        
        old_path = os.path.join(dir_path, file_info['old_name'])
        new_path = os.path.join(dir_path, file_info['new_name'])
        
        try:
            os.rename(old_path, new_path)
            print(f"  ✅ {file_info['old_name']} → {file_info['new_name']}")
            renamed_count += 1
        except Exception as e:
            print(f"  ❌ Failed to rename {file_info['old_name']}: {e}")
    
    print(f"   Total renamed: {renamed_count}/{len(file_data)}")


def main():
    """Alphabetize files in content/lessons and content/videos directories."""
    
    # The script is likely run from /home/user, but files are in /vercel/share/v0-project
    # We need to find the actual project location by checking common paths
    base_path = None
    
    # Try standard locations first
    standard_paths = [
        '/vercel/share/v0-project',
        os.path.expanduser('~/pfin-next-site'),
        os.path.expanduser('~/v0-project'),
        '/root/pfin-next-site',
    ]
    
    for path in standard_paths:
        if os.path.isdir(path):
            lessons_dir = os.path.join(path, 'content', 'lessons')
            if os.path.isdir(lessons_dir):
                base_path = path
                break
    
    # If still not found, search from common root directories
    if not base_path:
        for search_root in ['/', '/vercel', '/root', os.path.expanduser('~')]:
            if not os.path.isdir(search_root):
                continue
            for root, dirs, files in os.walk(search_root, topdown=True):
                # Limit search depth to avoid scanning too many directories
                if root.count(os.sep) - search_root.count(os.sep) > 3:
                    dirs[:] = []
                    continue
                if 'content' in dirs:
                    lessons_path = os.path.join(root, 'content', 'lessons')
                    if os.path.isdir(lessons_path):
                        base_path = root
                        break
            if base_path:
                break
    
    if not base_path:
        print("❌ Could not find project root with content/lessons directory")
        print(f"Current dir: {os.getcwd()}")
        print(f"Tried: {standard_paths}")
        sys.exit(1)
    
    directories = [
        os.path.join(base_path, 'content', 'lessons'),
        os.path.join(base_path, 'content', 'videos')
    ]
    
    print("Alphabetizing content files by title...")
    print(f"Project root: {base_path}")
    
    for dir_path in directories:
        alphabetize_directory(dir_path)
    
    print("\n✅ All content files have been alphabetized by title!")


if __name__ == '__main__':
    main()

