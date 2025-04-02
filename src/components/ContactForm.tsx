"use client";
import { useState, useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [canSubmit, setCanSubmit] = useState(false);

  // Temporisation avant d'autoriser la soumission du formulaire
  useEffect(() => {
    const timer = setTimeout(() => setCanSubmit(true), 2000); // Délai de 2 secondes
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      setStatus("Une erreur est survenue.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Votre nom"
        value={formData.name}
        onChange={handleChange}
        required
        className="border p-2 w-full rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Votre email"
        value={formData.email}
        onChange={handleChange}
        required
        className="border p-2 w-full rounded"
      />
      <textarea
        name="message"
        placeholder="Votre message"
        value={formData.message}
        onChange={handleChange}
        required
        className="border p-2 w-full rounded"
      />

      <button
        type="submit"
        disabled={!canSubmit}
        className={`px-4 py-2 rounded ${
          canSubmit ? "bg-blue-500 text-white" : "bg-gray-400 text-gray-700 cursor-not-allowed"
        }`}
      >
        Envoyer
      </button>

      {status && <p>{status}</p>}
    </form>
  );
}
