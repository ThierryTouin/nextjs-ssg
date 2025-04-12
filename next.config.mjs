// next.config.mjs
import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: [
      "@mantine/core",
      "@mantine/dates",
      "@mantine/hooks",
      "@mantine/notifications",
      "clsx",
      "dayjs",
      "framer-motion",
      "mini-svg-data-uri",
      "nextjs-toploader",
      "sharp",
      "tailwind-merge"
    ],
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'], // Ajoute .mdx ici
}

export default withMDX(nextConfig)
