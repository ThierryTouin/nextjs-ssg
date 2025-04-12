// lib/mdx.ts
import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import { mdxComponents } from './mdx-components'

const contentDir = path.join(process.cwd(), 'src/content')

export async function getMdxContent(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf8')

  const { content, frontmatter } = await compileMDX({
    source,
    components: mdxComponents,
    options: { parseFrontmatter: true },
  })

  return { content, frontmatter }
}

export function getAllSlugs(): string[] {
  try {
    return fs.readdirSync(contentDir)
      .filter(file => file.endsWith('.mdx'))
      .map(file => file.replace(/\.mdx$/, ''));
  } catch (err) {
    console.error(`Erreur getAllSlugs: ${err}`);
    return [];
  }
}




