import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // 🚀 Active le mode statique
  images: {
    unoptimized: true, // ⚠️ Obligatoire si tu utilises next/image en mode statique
  }
};

export default nextConfig;
