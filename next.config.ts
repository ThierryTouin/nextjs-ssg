import type { NextConfig } from "next";

//const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const basePath = '/nextjs-ssg';

const nextConfig: NextConfig = {
  /* config options here */
  //output: "export", // 🚀 Active le mode statique / Permet de générer un site statique
  //distDir: 'docs', // Change le dossier de sortie (au lieu de "out")
  images: {
    unoptimized: true, // ⚠️ Obligatoire si tu utilises next/image en mode statique
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: basePath,
  assetPrefix: basePath,
};

export default nextConfig;
