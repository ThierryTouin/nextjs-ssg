// lib/mdx-components.tsx
import { type useMDXComponents } from '@mdx-js/react'
import Card from '@/components/Card'

export const mdxComponents: ReturnType<typeof useMDXComponents> = {
  Card,
}