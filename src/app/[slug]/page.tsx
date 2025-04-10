import { getAllSlugs, getMarkdownContent } from '@/lib/markdown'
import { htmlToReactComponents } from '@/lib/html-to-react'
import { Container } from '@/components/container'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function MarkdownPage({ params }: Props) {
  const { contentHtml, metadata } = await getMarkdownContent(params.slug)
  const content = htmlToReactComponents(contentHtml)

  return (
    <Container>
      <section className="mb-12">
        <h2 className="mb-4 text-5xl font-bold">{metadata.title}</h2>
        <article>{content}</article>
      </section>
    </Container>
  )
}