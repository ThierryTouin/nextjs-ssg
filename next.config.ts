import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /*
  output: "export", // 🚀 Active le mode statique / Permet de générer un site statique
  distDir: 'docs', // Change le dossier de sortie (au lieu de "out")
  */
  images: {
    unoptimized: true, // ⚠️ Obligatoire si tu utilises next/image en mode statique
  }
};

export default nextConfig;
