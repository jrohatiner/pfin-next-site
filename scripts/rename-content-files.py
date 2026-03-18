#!/usr/bin/env python3

import os
import re
from pathlib import Path

project_root = Path('/vercel/share/v0-project')
content_dirs = [
    project_root / 'content' / 'lessons',
    project_root / 'content' / 'videos'
]

def remove_number_prefix(filename):
    """Remove leading numbers and dash from filename"""
    return re.sub(r'^\d+-', '', filename)

def process_directory(dir_path):
    print(f'\n📂 Processing: {dir_path}')
    
    if not dir_path.exists():
        print(f'⚠️  Directory not found: {dir_path}')
        return
    
    files = [f for f in dir_path.iterdir() if f.is_file() and f.suffix == '.md']
    print(f'   Found {len(files)} files')
    
    # Create mapping of old -> new names
    file_map = []
    for old_file in files:
        new_name = remove_number_prefix(old_file.name)
        file_map.append((old_file, old_file.parent / new_name))
    
    # Sort by new name
    file_map.sort(key=lambda x: x[1].name.lower())
    
    # Rename files
    renamed = 0
    for old_path, new_path in file_map:
        if old_path == new_path:
            print(f'  ⏭️  {old_path.name} (no change)')
            continue
        
        try:
            old_path.rename(new_path)
            print(f'  ✅ {old_path.name} → {new_path.name}')
            renamed += 1
        except Exception as e:
            print(f'  ❌ Failed: {e}')
    
    print(f'   Renamed: {renamed}/{len(file_map)}')

for dir_path in content_dirs:
    process_directory(dir_path)

print('\n✅ All content files have been reorganized alphabetically!')
