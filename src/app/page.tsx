import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <section className="py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Bienvenue sur Mon Site
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Découvrez nos services et apprenez-en plus sur notre entreprise.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild>
                <Link href="/services">Nos Services</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contactez-nous</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}