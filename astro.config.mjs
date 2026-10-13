// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Configurable production site URL placeholder (can be overridden by process.env.SITE_URL)
export const SITE_URL = process.env.SITE_URL || 'https://confluence-2026.vercel.app';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date('2026-03-01')
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});