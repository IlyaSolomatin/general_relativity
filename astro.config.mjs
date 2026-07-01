import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  // When we deploy to GitHub Pages we'll set `site` + `base` here.
  // Kept off for now so local dev uses clean root-relative links.
  markdown: {
    // Astro 7: extend the default remark/rehype pipeline via `processor`.
    // remark-math parses `$...$`; rehype-katex renders it at build time.
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
  integrations: [mdx()],
});
