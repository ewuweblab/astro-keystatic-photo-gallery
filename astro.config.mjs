// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import node from '@astrojs/node';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],

  // Pages are prerendered by default; the adapter serves the Keystatic
  // admin UI (/keystatic) and its API (/api/keystatic) on demand.
  adapter: node({
    mode: 'standalone',
  }),
});
