// app/[slug]/page.tsx
import { getAllSlugs, getMdxContent } from '@/lib/mdx'
import { Container } from '@/components/container'
import { ReactNode } from 'react'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function Page({ params }: Props) {
  const { content, frontmatter }: { content: ReactNode; frontmatter: Record<string, unknown> } = await getMdxContent(params.slug)

  if (typeof frontmatter.title !== 'string') {
    throw new Error('Invalid frontmatter: title is missing or not a string')
  }

  return (
    <Container>
      <section className="mb-12">
        <h2 className="mb-4 text-5xl font-bold">{frontmatter.title}</h2>
        <article>{content}</article>
      </section>
    </Container>
  )
}
