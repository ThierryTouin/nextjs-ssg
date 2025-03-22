import { Metadata } from "next";

import { Container } from "@/components/container";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacts",
  description: "Contacts for Cathy Xxxxxx",
};

export default function Contacts() {
  return (
    <Container>
      <section className="mb-12">
        <h2 className="mb-4 text-5xl font-bold">Contacts</h2>
        <p>
          Contacts for Cathy Xxxxxx
        </p>
        <h1 className="text-3xl font-bold mb-6">Contactez-nous</h1>
        <ContactForm />
      </section>

    </Container>
  );
}


