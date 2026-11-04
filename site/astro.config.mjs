import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';
import { base } from './src/lib/manifest.mjs';
import { sourceHeadings } from './src/lib/content.mjs';
import { buildCatalog, readPublicSources } from './src/lib/content.mjs';
import { fileURLToPath } from 'node:url';

const content = buildCatalog(await readPublicSources(fileURLToPath(new URL('../', import.meta.url))));
const documentation = [...content.docs.values()].filter(doc => doc.route.startsWith('docs/')).map(doc => ({ label: doc.title, slug: doc.route }));

export default defineConfig({
  site: 'https://rrubioca.github.io',
  base,
  output: 'static',
  trailingSlash: 'always',
  integrations: [starlight({
    title: 'Paris BSC',
    locales: { root: { label: 'English', lang: 'en' } },
    sidebar: [
      { label: 'Catalog', slug: 'catalog' },
      { label: 'Documentation', items: documentation },
      { label: 'Contributing', slug: 'contributing' },
      { label: 'Security', slug: 'security' }
    ]
  })],
  markdown: { processor: unified({ smartypants: false, remarkPlugins: [sourceHeadings] }) }
});
