import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://auroracore.vercel.app',
  integrations: [tailwind()],
});
