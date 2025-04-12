// app/[slug]/page.tsx
import { getAllSlugs, getMdxContent } from '@/lib/mdx'
import { Container } from '@/components/container'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function Page({ params }: Props) {
  const { content, frontmatter } = await getMdxContent(params.slug)

  return (
    <Container>
      <section className="mb-12">
        <h2 className="mb-4 text-5xl font-bold">{frontmatter.title}</h2>
        <article>{content}</article>
      </section>
    </Container>
  )
}
