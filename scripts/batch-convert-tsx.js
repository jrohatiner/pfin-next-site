#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');

const contentDir = path.join(projectRoot, 'content');
const lessonsContentDir = path.join(contentDir, 'lessons');
const videosContentDir = path.join(contentDir, 'videos');

const componentsDir = path.join(projectRoot, 'components');
const lessonsComponentDir = path.join(componentsDir, 'lessons');
const videosComponentDir = path.join(componentsDir, 'videos');

// Ensure component directories exist
if (!fs.existsSync(lessonsComponentDir)) {
  fs.mkdirSync(lessonsComponentDir, { recursive: true });
}
if (!fs.existsSync(videosComponentDir)) {
  fs.mkdirSync(videosComponentDir, { recursive: true });
}

function extractTitle(filename) {
  // Remove numeric prefix and .md extension: "0001-Title Here.md" -> "Title Here"
  return filename.replace(/^\d+-/, '').replace(/\.md$/, '');
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function extractQuizzes(content) {
  const quizzes = [];
  const quizPattern = /##\s*Pop Quiz([\s\S]*?)(?=##\s|\Z)/g;
  let match;

  while ((match = quizPattern.exec(content)) !== null) {
    const quizContent = match[1];
    const questions = [];
    
    const questionPattern = /\*\*([^*]+)\*\*/g;
    let qMatch;
    const questionMatches = [];
    while ((qMatch = questionPattern.exec(quizContent)) !== null) {
      questionMatches.push({ question: qMatch[1].trim(), index: qMatch.index });
    }

    for (let i = 0; i < questionMatches.length; i++) {
      const { question, index } = questionMatches[i];
      const nextIndex = questionMatches[i + 1]?.index ?? quizContent.length;
      const section = quizContent.slice(index, nextIndex);

      const options = [];
      const lines = section.split('\n');
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith('|')) continue;
        if (/^\|[\s:-]+\|[\s:-]+\|?/.test(trimmed)) continue;
        
        const cols = trimmed.split('|').map(c => c.trim()).filter((_, i, arr) => i > 0 && i < arr.length - 1);
        if (cols.length === 2 && cols[0] === '' && cols[1].length > 0) {
          options.push(cols[1]);
        }
      }

      if (options.length > 0) {
        questions.push({ question, options, correctAnswer: 0 });
      }
    }

    if (questions.length > 0) {
      quizzes.push(questions);
    }
  }

  return quizzes;
}

function generateTsxComponent(title, content, slug, quizzes) {
  // Strip Pop Quiz section from content
  const cleanContent = content.replace(/##\s*Pop Quiz[\s\S]*?(?=##\s|\Z)/g, '').trim();
  
  // Basic markdown to JSX conversion
  let jsxContent = cleanContent
    .split('\n')
    .map(line => {
      // Headers
      if (line.match(/^###\s/)) {
        return `<h3 className="text-xl font-bold mt-6 mb-3">${line.replace(/^###\s/, '').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</h3>`;
      }
      if (line.match(/^##\s/)) {
        return `<h2 className="text-2xl font-bold mt-8 mb-4">${line.replace(/^##\s/, '').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</h2>`;
      }
      if (line.match(/^#\s/)) {
        return `<h1 className="text-3xl font-bold mb-4">${line.replace(/^#\s/, '').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</h1>`;
      }
      // Bold
      line = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      // Italic
      line = line.replace(/\*(.+?)\*/g, '<em>$1</em>');
      // Inline code
      line = line.replace(/`(.+?)`/g, '<code className="bg-gray-100 px-2 py-1 rounded">$1</code>');
      
      if (line.trim().length > 0 && !line.startsWith('<')) {
        return `<p className="my-3 leading-relaxed">${line}</p>`;
      }
      return line;
    })
    .join('\n');

  const quizImports = quizzes.length > 0 ? `import { PopQuiz } from '@/components/pop-quiz';\n` : '';
  
  const quizComponents = quizzes.map((q, idx) => {
    return `        <PopQuiz 
          title="Pop Quiz"
          questions={quiz${idx}}
          contentSlug="${slug}"
        />`;
  }).join('\n');

  const quizData = quizzes.map((q, idx) => {
    return `const quiz${idx} = ${JSON.stringify(q)};`;
  }).join('\n\n');

  return `'use client';

${quizImports}
export default function ${title.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}() {
  ${quizData}

  return (
    <article className="prose prose-lg max-w-none">
      ${jsxContent}
      ${quizComponents}
    </article>
  );
}
`;
}

function convertFile(inputPath, outputDir, type) {
  try {
    const filename = path.basename(inputPath);
    const title = extractTitle(filename);
    const slug = slugify(title);
    const content = fs.readFileSync(inputPath, 'utf-8');
    const quizzes = extractQuizzes(content);
    
    const tsxContent = generateTsxComponent(title, content, slug, quizzes);
    const outputPath = path.join(outputDir, `${slug}.tsx`);
    
    fs.writeFileSync(outputPath, tsxContent);
    return { success: true, filename, slug, outputPath };
  } catch (error) {
    return { success: false, filename: path.basename(inputPath), error: error.message };
  }
}

function processDirectory(contentDirPath, componentDirPath, type) {
  console.log(`\n📂 Processing ${type}...`);
  
  if (!fs.existsSync(contentDirPath)) {
    console.error(`❌ Content directory not found: ${contentDirPath}`);
    return 0;
  }

  const files = fs.readdirSync(contentDirPath).filter(f => f.endsWith('.md'));
  console.log(`   Found ${files.length} markdown files`);

  let converted = 0;
  for (const file of files) {
    const inputPath = path.join(contentDirPath, file);
    const result = convertFile(inputPath, componentDirPath, type);
    
    if (result.success) {
      console.log(`   ✅ ${result.filename} → ${path.basename(result.outputPath)}`);
      converted++;
    } else {
      console.error(`   ❌ ${result.filename}: ${result.error}`);
    }
  }

  return converted;
}

console.log('🚀 Starting batch conversion of markdown to TSX...');
console.log(`Project root: ${projectRoot}`);

const lessonsConverted = processDirectory(lessonsContentDir, lessonsComponentDir, 'Lessons');
const videosConverted = processDirectory(videosContentDir, videosComponentDir, 'Videos');

console.log(`\n${'='.repeat(60)}`);
console.log(`Conversion Summary:`);
console.log(`Lessons: ${lessonsConverted} components`);
console.log(`Videos: ${videosConverted} components`);
console.log(`Total: ${lessonsConverted + videosConverted} components`);
console.log(`${'='.repeat(60)}\n`);

if (lessonsConverted + videosConverted > 0) {
  console.log('✅ Conversion complete! Update lib/content.ts to register new components.');
}
