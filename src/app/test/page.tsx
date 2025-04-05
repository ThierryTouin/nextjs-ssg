import { Metadata } from "next";

import { PortfolioList } from "@/components/portfolio";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Cathy Xxxxxx",
};

export default function Portfolio() {
  return (
    <Container>
      <section className="mb-12">
        <h2 className="mb-4 text-5xl font-bold">Test</h2>
        <h2>Titre 2</h2>
        <h3>Titre 3</h3>
        <p>
          Voici une page écrite en <strong>Markdown</strong>, que ma femme peut
          modifier facilement !
        </p>
        <p>Je m'appelle Cathy et je teste mon super site.</p>
        <ul>
          <li>puce1</li>
          <li>puce2</li>
        </ul>
        <p>Toto</p>
      </section>
    </Container>
  );
}
