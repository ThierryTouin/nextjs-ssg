import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import Link from "next/link";
import { Button } from "../../components/ui/button";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Comment optimiser votre site web",
      excerpt: "Découvrez les meilleures pratiques pour améliorer les performances de votre site web et offrir une meilleure expérience utilisateur.",
      date: "10 Mai 2025",
      author: "Jean Dupont",
    },
    {
      id: 2,
      title: "Les tendances du design web en 2025",
      excerpt: "Explorez les dernières tendances en matière de design web qui domineront l'année 2025 et comment les intégrer à vos projets.",
      date: "5 Mai 2025",
      author: "Marie Martin",
    },
    {
      id: 3,
      title: "Introduction à Next.js 14",
      excerpt: "Apprenez les bases de Next.js 14 et comment cette framework peut vous aider à construire des applications web modernes et performantes.",
      date: "28 Avril 2025",
      author: "Pierre Durand",
    },
    {
      id: 4,
      title: "L'importance de l'accessibilité web",
      excerpt: "Pourquoi l'accessibilité web est cruciale pour votre site et comment la mettre en œuvre efficacement pour atteindre un public plus large.",
      date: "20 Avril 2025",
      author: "Sophie Lefebvre",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>
                Publié le {post.date} par {post.author}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href={`/blog/${post.id}`}>Lire la suite</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}