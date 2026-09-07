// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  build: {
    inlineStylesheets: 'always'
  },
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://nanshine.github.io',
  base: '/',
  integrations: [
    sitemap({
      // Only list active pages in the sitemap (other sections are
      // disabled in src/config/pages.ts and would 404-redirect)
      filter: (page) => new URL(page).pathname === '/',
    }),
  ],
});