import fs from 'fs';
import path from 'path';

const contentDirs = [
  '/vercel/share/v0-project/content/lessons',
  '/vercel/share/v0-project/content/videos'
];

function removeNumberPrefix(filename) {
  // Remove leading numbers and dash: "0001-" or "0110-" becomes ""
  return filename.replace(/^\d+-/, '');
}

function processDirectory(dir) {
  console.log(`\n📂 Processing: ${dir}`);
  
  const files = fs.readdirSync(dir);
  
  // Filter out non-files and create mapping of old -> new names
  const fileMap = files
    .filter(file => {
      const fullPath = path.join(dir, file);
      return fs.statSync(fullPath).isFile();
    })
    .map(file => ({
      oldName: file,
      newName: removeNumberPrefix(file)
    }))
    .sort((a, b) => a.newName.localeCompare(b.newName));

  // Rename files
  let renamed = 0;
  for (const { oldName, newName } of fileMap) {
    if (oldName === newName) {
      console.log(`  ⏭️  ${oldName} (no change needed)`);
      continue;
    }
    
    const oldPath = path.join(dir, oldName);
    const newPath = path.join(dir, newName);
    
    try {
      fs.renameSync(oldPath, newPath);
      console.log(`  ✅ ${oldName} → ${newName}`);
      renamed++;
    } catch (error) {
      console.error(`  ❌ Failed to rename ${oldName}: ${error.message}`);
    }
  }
  
  console.log(`   Total renamed: ${renamed}/${fileMap.length}`);
}

// Process both directories
for (const dir of contentDirs) {
  if (fs.existsSync(dir)) {
    processDirectory(dir);
  } else {
    console.error(`⚠️  Directory not found: ${dir}`);
  }
}

console.log('\n✅ All content files have been reorganized alphabetically!');
