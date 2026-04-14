#!/usr/bin/env node

/**
 * build-blog.js
 * ─────────────
 * Scans the blog/ directory for .md files, reads their frontmatter,
 * and writes blog/index.json — which blog.html uses to render the list.
 *
 * Usage:
 *   node build-blog.js
 *
 * Run this every time you add or edit a blog post.
 */

const fs   = require('fs');
const path = require('path');

const BLOG_DIR  = path.join(__dirname, 'blog');
const OUT_FILE  = path.join(BLOG_DIR, 'index.json');

// ── Frontmatter parser ─────────────────────────────────────────────────────
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { meta: {}, body: content };

  const raw  = match[1];
  const body = content.slice(match[0].length).trim();
  const meta = {};

  for (const line of raw.split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key   = line.slice(0, colonIdx).trim();
    let   value = line.slice(colonIdx + 1).trim();

    // Parse arrays like: [Go, Systems, Internships]
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map(s => s.trim());
    }

    meta[key] = value;
  }

  return { meta, body };
}

// ── Main ───────────────────────────────────────────────────────────────────
const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));

const posts = files.map(file => {
  const slug    = file.replace(/\.md$/, '');
  const content = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
  const { meta } = parseFrontmatter(content);

  return {
    slug,
    title:   meta.title   || slug,
    date:    meta.date    || '',
    tags:    Array.isArray(meta.tags) ? meta.tags : (meta.tags ? [meta.tags] : []),
    summary: meta.summary || '',
  };
});

// Sort newest first
posts.sort((a, b) => (b.date > a.date ? 1 : -1));

fs.writeFileSync(OUT_FILE, JSON.stringify(posts, null, 2));

console.log(`✅  Built blog index with ${posts.length} post(s):`);
posts.forEach(p => console.log(`    • [${p.date}] ${p.title}`));
console.log(`\n    Written to: ${OUT_FILE}`);
