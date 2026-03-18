#!/usr/bin/env node

import { readdirSync, renameSync, statSync } from 'fs';
import { join } from 'path';

const projectRoot = '/vercel/share/v0-project';
const contentDirs = [
  join(projectRoot, 'content', 'lessons'),
  join(projectRoot, 'content', 'videos')
];

function removeNumberPrefix(filename) {
  return filename.replace(/^\d+-/, '');
}

function processDirectory(dir) {
  console.log(`\n📂 Processing: ${dir}`);
  
  try {
    const files = readdirSync(dir);
    console.log(`   Found ${files.length} entries`);
    
    const fileMap = files
      .filter(file => {
        try {
          return statSync(join(dir, file)).isFile();
        } catch {
          return false;
        }
      })
      .map(oldName => ({
        oldName,
        newName: removeNumberPrefix(oldName)
      }))
      .sort((a, b) => a.newName.localeCompare(b.newName));

    console.log(`   Found ${fileMap.length} files`);

    let renamed = 0;
    for (const { oldName, newName } of fileMap) {
      if (oldName === newName) continue;
      
      const oldPath = join(dir, oldName);
      const newPath = join(dir, newName);
      
      try {
        renameSync(oldPath, newPath);
        console.log(`  ✅ ${oldName} → ${newName}`);
        renamed++;
      } catch (error) {
        console.error(`  ❌ Failed: ${error.message}`);
      }
    }
    
    console.log(`   Renamed: ${renamed}/${fileMap.length}`);
  } catch (error) {
    console.error(`⚠️  Error: ${error.message}`);
  }
}

for (const dir of contentDirs) {
  processDirectory(dir);
}

console.log('\n✅ Done!');
