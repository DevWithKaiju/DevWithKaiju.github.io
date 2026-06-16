import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://devwithkaiju.github.io',
  integrations: [sitemap()],
  output: 'static',
});
