// /app/[slug]/page.tsx
import { getAllSlugs, getMarkdownContent } from '@/lib/markdown';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function MarkdownPage({ params }: Props) {
  const { contentHtml, metadata } = await getMarkdownContent(params.slug);

  return (
    <main className="prose mx-auto p-4">
      <h1>{metadata.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}
