// /lib/markdown.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDir = path.join(process.cwd(), 'src/content');

export async function getMarkdownContent(slug: string) {
  const fullPath = path.join(contentDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    metadata: data,
    contentHtml,
  };
}

export function getAllSlugs(): string[] {
  try {
    return fs.readdirSync(contentDir)
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace(/\.md$/, ''));
  } catch (err) {
    console.error(`Erreur getAllSlugs: ${err}`);
    return [];
  }
}