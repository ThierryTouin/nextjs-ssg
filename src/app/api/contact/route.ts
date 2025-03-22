// app/api/contact/route.ts
import { NextResponse } from "next/server";

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const { name, email, message }: ContactRequest = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
    }

    console.log("Nouveau message reçu :", { name, email, message });

    // Ici, tu peux ajouter l'intégration avec un service d'envoi d'email

    return NextResponse.json({ success: "Message envoyé avec succès !" });
  } catch (error) {
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}